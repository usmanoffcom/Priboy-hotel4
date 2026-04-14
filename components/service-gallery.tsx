"use client"

import Image from "next/image"
import { ClickableImage } from "@/components/image-modal"

interface ServiceGalleryProps {
  gallery: string[]
  serviceName: string
}

export function ServiceGallery({ gallery, serviceName }: ServiceGalleryProps) {
  if (!gallery || gallery.length <= 1) return null

  return (
    <>
      <h3 className="text-xl font-medium text-foreground mb-4">Фото и видео</h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {gallery.map((item, index) => (
          <div key={index} className="preview-grid-card aspect-[4/3]">
            {item.endsWith('.mp4') ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              >
                <source src={item} type="video/mp4" />
              </video>
            ) : (
              <ClickableImage
                src={item}
                alt={`${serviceName} — фото ${index + 1} в отеле Гранд Прибой Лазаревское`}
                gallery={gallery.filter(g => !g.endsWith('.mp4'))}
                index={gallery.filter(g => !g.endsWith('.mp4')).indexOf(item)}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
        ))}
      </div>
    </>
  )
}
