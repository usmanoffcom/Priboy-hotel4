import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Лазаревское | Гранд Отель & SPA Прибой",
    default: "Лазаревское — курорт на Черном море | Гранд Отель & SPA Прибой",
  },
}

export default function LazarevskoeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

