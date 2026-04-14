import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plane, Train, Car, Bus, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { howToGetData } from "@/lib/lazarevskoe-data"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"

export const metadata: Metadata = {
  title: "Как добраться до Лазаревского — маршруты | Гранд Отель & SPA Прибой",
  description: "Как добраться до Лазаревского из Москвы, Санкт-Петербурга и других городов. Самолет, поезд, автомобиль.",
  keywords: "как добраться до Лазаревского, аэропорт Сочи, поезд Лазаревское, маршрут",
  alternates: {
    canonical: "https://priboy-spa.ru/kak-dobratsya",
  },
  openGraph: {
    title: "Как добраться до Лазаревского — маршруты",
    description: "Как добраться до Лазаревского из Москвы, Санкт-Петербурга и других городов. Самолёт, поезд, автомобиль, трансфер.",
    url: "https://priboy-spa.ru/kak-dobratsya",
    type: "website",
    images: [{ url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg", width: 1200, height: 630, alt: "Лазаревское — как добраться" }],
  },
}

export default function HowToGetPage() {
  const { fromMoscow, fromSaintPetersburg, fromSochi } = howToGetData

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Путешествие"
          title="Как добраться до Лазаревского"
          description="Удобные маршруты из крупных городов России на самолете, поезде или автомобиле"
        />

        {/* From Moscow */}
        <Section className="py-16 md:py-20 bg-white">
          <SectionHeader eyebrow="Москва → Лазаревское" title="Из Москвы" centered className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plane */}
              <div className="bg-cream p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Plane className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Самолет</h3>
                    <p className="text-sm text-terracotta">{fromMoscow.plane.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{fromMoscow.plane.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                    <span>Аэропорт: {fromMoscow.plane.airport}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Car className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                    <span>Трансфер: {fromMoscow.plane.transfer}</span>
                  </li>
                </ul>
              </div>

              {/* Train */}
              <div className="bg-cream p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Train className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Поезд</h3>
                    <p className="text-sm text-terracotta">{fromMoscow.train.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{fromMoscow.train.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                    <span>Станция: {fromMoscow.train.station}</span>
                  </li>
                </ul>
              </div>

              {/* Car */}
              <div className="bg-cream p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Car className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Автомобиль</h3>
                    <p className="text-sm text-terracotta">{fromMoscow.car.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{fromMoscow.car.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                    <span>Расстояние: {fromMoscow.car.distance}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Car className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                    <span>Маршрут: {fromMoscow.car.route}</span>
                  </li>
                </ul>
              </div>
            </div>
        </Section>

        {/* From Saint Petersburg */}
        <Section muted className="py-16 md:py-20">
          <SectionHeader eyebrow="Санкт-Петербург → Лазаревское" title="Из Санкт-Петербурга" centered className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Plane */}
              <div className="bg-white p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Plane className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Самолет</h3>
                    <p className="text-sm text-terracotta">{fromSaintPetersburg.plane.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{fromSaintPetersburg.plane.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                    <span>Аэропорт: {fromSaintPetersburg.plane.airport}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Car className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                    <span>Трансфер: {fromSaintPetersburg.plane.transfer}</span>
                  </li>
                </ul>
              </div>

              {/* Train */}
              <div className="bg-white p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Train className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Поезд</h3>
                    <p className="text-sm text-terracotta">{fromSaintPetersburg.train.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{fromSaintPetersburg.train.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                    <span>Станция: {fromSaintPetersburg.train.station}</span>
                  </li>
                </ul>
              </div>
            </div>
        </Section>

        {/* From Sochi Airport */}
        <Section className="py-16 md:py-20 bg-white">
          <SectionHeader
            eyebrow="Аэропорт/вокзал Сочи → Лазаревское"
            title="Из Сочи"
            centered
            className="mb-12"
          />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Bus */}
              <div className="bg-cream p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Bus className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Автобус</h3>
                    <p className="text-sm text-terracotta">{fromSochi.bus.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{fromSochi.bus.description}</p>
              </div>

              {/* Train */}
              <div className="bg-cream p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Train className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Электричка</h3>
                    <p className="text-sm text-terracotta">{fromSochi.elektrichka.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{fromSochi.elektrichka.description}</p>
              </div>

              {/* Taxi */}
              <div className="bg-cream p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                    <Car className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Такси</h3>
                    <p className="text-sm text-terracotta">{fromSochi.taxi.duration}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">{fromSochi.taxi.description}</p>
                <p className="text-terracotta font-medium">{fromSochi.taxi.price}</p>
              </div>
            </div>
        </Section>


        {/* Map Section */}
        <Section muted className="py-16 md:py-20">
          <SectionHeader
            title="Расположение отеля"
            description="Гранд Отель & SPA Прибой находится в поселке Лазаревское, Сочи"
            centered
            className="mb-12"
          />
            <div className="bg-white p-4 border border-border">
              <div className="aspect-video bg-cream flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-terracotta mx-auto mb-4" />
                  <p className="text-foreground font-medium mb-2">Краснодарский край, Сочи, пос. Лазаревское</p>
                  <p className="text-muted-foreground text-sm">Координаты: 43.9045° N, 39.3281° E</p>
                </div>
              </div>
            </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

