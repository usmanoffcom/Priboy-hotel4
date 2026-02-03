/** @type {import('next').NextConfig} */
// CDN отключён: с selcdn.net приходят 404 и нет CORS — статика с priboy-spa.ru
const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || ''

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  ...(CDN_URL ? { assetPrefix: CDN_URL } : {}),
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 год
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'mc.yandex.ru',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Заголовки кеширования + CORS для CDN (шрифты/статику запрашивает браузер с priboy-spa.ru с selcdn.net)
  async headers() {
    const oneYear = 'public, max-age=31536000, immutable'
    const oneWeek = 'public, max-age=604800' // 7 дней
    const cors = { key: 'Access-Control-Allow-Origin', value: 'https://priboy-spa.ru' }
    return [
      { source: '/_next/static/:path*', headers: [cors, { key: 'Cache-Control', value: oneYear }] },
      {
        source: '/:path*.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|eot)',
        headers: [cors, { key: 'Cache-Control', value: oneYear }],
      },
      {
        source: '/:path*.(css|js)',
        headers: [cors, { key: 'Cache-Control', value: oneYear }],
      },
      {
        source: '/:path*.(pdf|zip)',
        headers: [cors, { key: 'Cache-Control', value: oneWeek }],
      },
      { source: '/static/:path*', headers: [cors, { key: 'Cache-Control', value: oneWeek }] },
    ]
  },
}

export default nextConfig
