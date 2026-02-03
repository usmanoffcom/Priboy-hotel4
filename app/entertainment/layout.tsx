import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Аква-комплекс Прибой | Гранд Отель & SPA Прибой — Развлечения",
  description: "Аква-комплекс Прибой в Лазаревском. Современный развлекательный центр с бассейнами, водными горками, детскими зонами и зонами отдыха. Идеальное место для активного отдыха.",
  alternates: {
    canonical: "https://priboy-spa.ru/entertainment",
  },
  openGraph: {
    title: "Аква-комплекс Прибой | Гранд Отель & SPA Прибой",
    description: "Аква-комплекс Прибой в Лазаревском. Современный развлекательный центр с бассейнами, водными горками, детскими зонами и зонами отдыха. Идеальное место для активного отдыха.",
    url: "https://priboy-spa.ru/entertainment",
    images: [
      {
        url: "https://priboy-spa.ru/imgi_38_P1363925_1.jpg",
        width: 1200,
        height: 630,
        alt: "Аква-комплекс Прибой в Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function EntertainmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

