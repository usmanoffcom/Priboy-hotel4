#!/usr/bin/env node
/* eslint-disable */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");

const MIN_SIZE_BYTES = 150 * 1024;
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 82;

const EXCLUDE_DIRS = new Set([
  ".git",
  "node_modules",
  "favicons",
]);

const SKIP_FILENAMES = new Set([
  "favicon.ico",
]);

function isImage(name) {
  const lower = name.toLowerCase();
  return (
    lower.endsWith(".jpg") ||
    lower.endsWith(".jpeg") ||
    lower.endsWith(".png")
  );
}

function fmtKB(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

async function processFile(file) {
  const stat = fs.statSync(file);
  if (stat.size < MIN_SIZE_BYTES) return null;

  const base = path.basename(file).toLowerCase();
  if (SKIP_FILENAMES.has(base)) return null;
  if (base.startsWith("favicon")) return null;
  if (base.startsWith("apple-icon") || base.startsWith("apple-touch")) return null;

  const ext = path.extname(file).toLowerCase();
  try {
    const image = sharp(file, { failOn: "none" });
    const meta = await image.metadata();
    if (!meta.width || !meta.height) return null;

    const targetWidth = Math.min(meta.width, MAX_WIDTH);
    let pipeline = sharp(file, { failOn: "none" }).rotate();
    if (meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: targetWidth, withoutEnlargement: true });
    }

    let outBuffer;
    if (ext === ".png") {
      const hasAlpha = meta.hasAlpha === true;
      if (hasAlpha) {
        outBuffer = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true }).toBuffer();
      } else {
        // конвертируем непрозрачные PNG в JPG — существенно меньше
        const jpgPath = file.replace(/\.png$/i, ".jpg");
        const buf = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
        if (buf.length < stat.size) {
          fs.writeFileSync(jpgPath, buf);
          if (jpgPath !== file) fs.unlinkSync(file);
          return { file, newFile: jpgPath, before: stat.size, after: buf.length, converted: "png->jpg" };
        }
        return null;
      }
    } else {
      outBuffer = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
    }

    if (outBuffer.length < stat.size) {
      fs.writeFileSync(file, outBuffer);
      return { file, newFile: file, before: stat.size, after: outBuffer.length };
    }
    return null;
  } catch (err) {
    console.warn("  !", path.relative(ROOT, file), "-", err.message);
    return null;
  }
}

async function walk(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (EXCLUDE_DIRS.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      results.push(...(await walk(full)));
    } else if (e.isFile() && isImage(e.name)) {
      results.push(full);
    }
  }
  return results;
}

(async () => {
  console.log("Optimizing images in", PUBLIC_DIR);
  const files = await walk(PUBLIC_DIR);
  console.log(`Scanned ${files.length} images, threshold ${MIN_SIZE_BYTES / 1024} KB`);

  let totalBefore = 0;
  let totalAfter = 0;
  let optimized = 0;

  const concurrency = 4;
  let idx = 0;
  async function worker() {
    while (idx < files.length) {
      const i = idx++;
      const file = files[i];
      const res = await processFile(file);
      if (res) {
        optimized++;
        totalBefore += res.before;
        totalAfter += res.after;
        const rel = path.relative(ROOT, res.newFile || res.file);
        const saved = ((res.before - res.after) / res.before) * 100;
        console.log(
          `  ${String(i + 1).padStart(3)}/${files.length}  ${rel} ${fmtKB(res.before)} -> ${fmtKB(res.after)}  (-${saved.toFixed(1)}%)${res.converted ? " [" + res.converted + "]" : ""}`
        );
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  console.log("\nDone.");
  console.log(`Optimized ${optimized} files.`);
  if (totalBefore > 0) {
    const savedMB = ((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2);
    console.log(`Saved ~${savedMB} MB (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}% of affected files).`);
  }
})();
