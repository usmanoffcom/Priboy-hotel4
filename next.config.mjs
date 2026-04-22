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
    qualities: [60, 70, 75, 82, 85],
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
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'date-fns',
      'recharts',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
    ],
  },
  async rewrites() {
    return [{ source: '/feeds/rooms.yml', destination: '/feeds/rooms' }]
  },
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
