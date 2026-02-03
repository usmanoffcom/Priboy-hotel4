import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Отмена бронирования | Гранд Отель & SPA Прибой — Условия отмены",
  description: "Условия отмены и изменения бронирования в Гранд Отель & SPA Прибой. Возврат 50% при отмене более 10 дней. Залог не возвратный при отмене менее 10 дней.",
  alternates: {
    canonical: "https://priboy-spa.ru/otmena-bronirovaniya",
  },
  openGraph: {
    title: "Отмена бронирования | Гранд Отель & SPA Прибой",
    description: "Условия отмены и изменения бронирования в Гранд Отель & SPA Прибой. Возврат 50% при отмене более 10 дней. Залог не возвратный при отмене менее 10 дней.",
    url: "https://priboy-spa.ru/otmena-bronirovaniya",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Условия отмены бронирования в Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function CancellationPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Информация</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Отмена бронирования
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Условия отмены и изменения бронирования в Гранд Отель & SPA Прибой
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-8">Условия отмены бронирования</h2>

              <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
                <p>
                  Мы понимаем, что планы могут измениться. Поэтому мы предлагаем гибкие условия отмены бронирования для вашего удобства.
                </p>

                <div className="bg-cream p-6 sm:p-8 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Условия отмены бронирования</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>В случае отмены бронирования менее 10 дней залог не возвратный</li>
                    <li>Более 10 дней от суммы возвращается 50 %</li>
                  </ul>
                </div>

                <div className="bg-cream-dark p-6 sm:p-8 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Изменение бронирования</h3>
                  <p className="mb-4">
                    Вы можете изменить даты заезда или категорию номера при наличии свободных мест:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Изменение дат заезда — бесплатно при уведомлении за 7 дней</li>
                    <li>Изменение категории номера — возможна доплата или возврат разницы</li>
                    <li>Все изменения должны быть согласованы с администрацией отеля</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Как отменить бронирование</h3>
                  <p>
                    Для отмены или изменения бронирования свяжитесь с нами одним из способов:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>По телефону: <a href="tel:+79883443333" className="text-terracotta hover:underline font-medium">+7 (988) 344-33-33</a></li>
                    <li>По email: <a href="mailto:booking@priboy-spa.ru" className="text-terracotta hover:underline font-medium">booking@priboy-spa.ru</a></li>
                    <li>Через форму обратной связи на сайте</li>
                  </ul>
                </div>

                <div className="bg-terracotta/10 p-6 border-l-4 border-terracotta">
                  <p className="font-medium text-foreground">
                    <strong>Важно:</strong> При отмене бронирования обязательно укажите номер бронирования и ваши контактные данные для быстрой обработки запроса.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8 py-6 text-base font-medium">
                <Link href="/booking">Забронировать номер</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

