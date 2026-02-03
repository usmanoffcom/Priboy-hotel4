import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Banknote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { attractions } from "@/lib/lazarevskoe-data"

export const metadata: Metadata = {
  title: "Достопримечательности Лазаревского — что посмотреть | Гранд Отель & SPA Прибой",
  description: "Лучшие достопримечательности Лазаревского: аквапарки, водопады, дольмены, музеи, дельфинарий. Экскурсии и развлечения на курорте.",
  keywords: "достопримечательности Лазаревского, что посмотреть в Лазаревском, экскурсии, водопады, аквапарки, дольмены",
  alternates: {
    canonical: "https://priboy-spa.ru/lazarevskoe/dostoprimechatelnosti",
  },
  openGraph: {
    title: "Достопримечательности Лазаревского — что посмотреть",
    description: "Лучшие достопримечательности Лазаревского: аквапарки, водопады, дольмены, музеи.",
    url: "https://priboy-spa.ru/lazarevskoe/dostoprimechatelnosti",
    type: "website",
  },
}

const categories = [
  { name: "Все", value: "all" },
  { name: "Природа", value: "nature" },
  { name: "Развлечения", value: "entertainment" },
  { name: "Музеи", value: "museums" },
]

export default function AttractionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Лазаревское</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Достопримечательности
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Водопады, древние дольмены, аквапарки и множество других интересных мест 
              ждут вас в Лазаревском и его окрестностях
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="py-4 bg-cream border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-terracotta transition-colors">Главная</Link>
              <span>/</span>
              <Link href="/lazarevskoe" className="hover:text-terracotta transition-colors">Лазаревское</Link>
              <span>/</span>
              <span className="text-foreground">Достопримечательности</span>
            </nav>
          </div>
        </section>

        {/* Attractions Grid */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction) => (
                <Link
                  key={attraction.slug}
                  href={`/lazarevskoe/dostoprimechatelnosti/${attraction.slug}`}
                  className="group border border-border hover:border-terracotta transition-all overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={attraction.image}
                      alt={attraction.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-medium text-foreground mb-2 group-hover:text-terracotta transition-colors">
                      {attraction.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {attraction.shortDescription}
                    </p>
                    <div className="space-y-2 text-sm">
                      {attraction.distance && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-terracotta" />
                          <span>{attraction.distance}</span>
                        </div>
                      )}
                      {attraction.workingHours && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4 text-terracotta" />
                          <span>{attraction.workingHours}</span>
                        </div>
                      )}
                      {attraction.price && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Banknote className="h-4 w-4 text-terracotta" />
                          <span>{attraction.price}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Остановитесь в Гранд Отель & SPA Прибой
            </h2>
            <p className="text-muted-foreground mb-8">
              Идеальная база для исследования достопримечательностей Лазаревского. 
              Мы поможем организовать экскурсии и трансферы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
                <Link href="/booking">Забронировать номер</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10 rounded-none px-8">
                <Link href="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

