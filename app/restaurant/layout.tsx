import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ресторан Avenue 23 | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Ресторан Avenue 23 в отеле Прибой в Лазаревском. Завтраки, обеды, ужины. Меню ресторана, цены, фото блюд. Бронирование столиков.",
  alternates: {
    canonical: "https://priboy-spa.ru/restaurant",
  },
  openGraph: {
    title: "Ресторан Avenue 23 | Гранд Отель & SPA Прибой",
    description: "Ресторан Avenue 23 в отеле Прибой в Лазаревском. Завтраки, обеды, ужины.",
    url: "https://priboy-spa.ru/restaurant",
    images: [
      {
        url: "https://framerusercontent.com/images/avenue.jpg",
        width: 1200,
        height: 630,
        alt: "Ресторан Avenue 23 в Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

