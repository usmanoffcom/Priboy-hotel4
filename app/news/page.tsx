import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsList } from "@/components/news-list"
import { getRecentNews } from "@/lib/news-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Новости отеля | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Актуальные новости и события отеля Гранд Прибой в Лазаревском. Специальные предложения, обновления, мероприятия и важная информация для гостей.",
  alternates: {
    canonical: "https://priboy-spa.ru/news",
  },
  openGraph: {
    title: "Новости отеля | Гранд Отель & SPA Прибой",
    description: "Актуальные новости и события отеля Гранд Прибой в Лазаревском.",
    url: "https://priboy-spa.ru/news",
    type: "website",
  },
}

export default function NewsPage() {
  const news = getRecentNews(20)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-3">Актуальная информация</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">Новости отеля</h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Следите за актуальными новостями, специальными предложениями и событиями отеля Гранд Прибой
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <NewsList news={news} />
      </main>
      <Footer />
    </>
  )
}
