import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RoomCard } from "@/components/room-card"
import { RoomAmenities } from "@/components/room-amenities"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { rooms } from "@/lib/rooms-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Номера и цены | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Выберите идеальный номер в отеле Прибой в Лазаревском. Стандартные, делюкс и люкс номера с современными удобствами. Цены от завтраков и полный пансион.",
  alternates: {
    canonical: "https://priboy-spa.ru/rooms",
  },
  openGraph: {
    title: "Номера и цены | Гранд Отель & SPA Прибой",
    description: "Выберите идеальный номер в отеле Прибой в Лазаревском. Все номера оснащены современными удобствами.",
    url: "https://priboy-spa.ru/rooms",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Номера в Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function RoomsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-3">Размещение</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">Номера и цены</h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Выберите идеальный номер для вашего отдыха. Все номера оснащены современными удобствами и индивидуальным
              климат-контролем.
            </p>
          </div>
        </section>

        {/* Price Info */}
        <section className="py-6 bg-cream-dark border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-terracotta rounded-full" />
                <span className="text-foreground">
                  <strong>Только завтраки</strong> — завтрак включен
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-forest rounded-full" />
                <span className="text-foreground">
                  <strong>Полный пансион</strong> — 3-разовое питание + SPA
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gold rounded-full" />
                <span className="text-foreground">
                  <strong>Дети до 3 лет</strong> — бесплатно! С предоставлением места!
                </span>
              </div>
              <Button asChild variant="outline" size="sm" className="rounded-none bg-transparent text-sm">
                <Link href="/prices">Подробный прайс</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Rooms Grid - 4 columns for 4 room types */}
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <RoomAmenities />

        {/* CTA */}
        <section className="py-16 bg-foreground text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-white mb-4">Готовы забронировать?</h2>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              Выберите даты и забронируйте номер онлайн с гарантией лучшей цены
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8"
              >
                <Link href="/booking">Забронировать</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground rounded-none px-8 bg-transparent"
              >
                <Link href="/prices">Смотреть цены</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
