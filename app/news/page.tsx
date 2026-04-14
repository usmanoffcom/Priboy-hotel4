import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsList } from "@/components/news-list"
import { getRecentNews } from "@/lib/news-data"
import type { Metadata } from "next"
import { PageHero } from "@/components/ui/page-hero"

export const metadata: Metadata = {
  title: "Новости отеля | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Актуальные новости и события отеля Гранд Прибой в Лазаревском. Специальные предложения, обновления, мероприятия и важная информация для гостей.",
  alternates: {
    canonical: "https://priboy-spa.ru/news",
  },
  openGraph: {
    title: "Новости отеля | Гранд Отель & SPA Прибой",
    description: "Актуальные новости и события отеля Гранд Прибой в Лазаревском. Специальные предложения, обновления и мероприятия для гостей.",
    url: "https://priboy-spa.ru/news",
    type: "website",
    images: [{ url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg", width: 1200, height: 630, alt: "Новости Гранд Отель & SPA Прибой" }],
  },
}

export default function NewsPage() {
  const news = getRecentNews(20)

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Актуальная информация"
          title="Новости отеля"
          description="Следите за актуальными новостями, специальными предложениями и событиями отеля Гранд Прибой"
          className="bg-cover bg-center"
          backgroundImage="https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg"
        />

        {/* News List */}
        <NewsList news={news} />
      </main>
      <Footer />
    </>
  )
}
