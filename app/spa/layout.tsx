import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SPA Комплекс | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Собственный SPA комплекс с бассейном в Лазаревском большого Сочи. Русская баня, финская сауна, турецкий хамам, травяная баня, соляная комната. Бассейн с подогревом.",
  alternates: {
    canonical: "https://priboy-spa.ru/spa",
  },
  openGraph: {
    title: "SPA Комплекс | Гранд Отель & SPA Прибой",
    description: "Собственный SPA комплекс с бассейном в Лазаревском большого Сочи. Русская баня, финская сауна, турецкий хамам, травяная баня, соляная комната.",
    url: "https://priboy-spa.ru/spa",
    images: [
      {
        url: "https://priboy-spa.ru/spa/001.jpg",
        width: 1200,
        height: 630,
        alt: "SPA Комплекс Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function SpaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

