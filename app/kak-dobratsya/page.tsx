import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plane, Train, Car, Bus, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { howToGetData } from "@/lib/lazarevskoe-data"

export const metadata: Metadata = {
  title: "Как добраться до Лазаревского — маршруты | Гранд Отель & SPA Прибой",
  description: "Как добраться до Лазаревского из Москвы, Санкт-Петербурга и других городов. Самолет, поезд, автомобиль.",
  keywords: "как добраться до Лазаревского, аэропорт Сочи, поезд Лазаревское, маршрут",
  alternates: {
    canonical: "https://priboy-spa.ru/kak-dobratsya",
  },
  openGraph: {
    title: "Как добраться до Лазаревского — маршруты",
    description: "Как добраться до Лазаревского из Москвы, Санкт-Петербурга и других городов.",
    url: "https://priboy-spa.ru/kak-dobratsya",
    type: "website",
  },
}

export default function HowToGetPage() {
  const { fromMoscow, fromSaintPetersburg, fromSochi } = howToGetData

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Путешествие</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Как добраться до Лазаревского
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Удобные маршруты из крупных городов России на самолете, поезде или автомобиле
            </p>
          </div>
        </section>

        {/* From Moscow */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Москва → Лазаревское</p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">Из Москвы</h2>
            </div>

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
          </div>
        </section>

        {/* From Saint Petersburg */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Санкт-Петербург → Лазаревское</p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">Из Санкт-Петербурга</h2>
            </div>

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
          </div>
        </section>

        {/* From Sochi Airport */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Аэропорт/вокзал Сочи → Лазаревское</p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">Из Сочи</h2>
            </div>

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
          </div>
        </section>


        {/* Map Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Расположение отеля</h2>
              <p className="text-muted-foreground">
                Гранд Отель & SPA Прибой находится в поселке Лазаревское, Сочи
              </p>
            </div>
            <div className="bg-white p-4 border border-border">
              <div className="aspect-video bg-cream flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-terracotta mx-auto mb-4" />
                  <p className="text-foreground font-medium mb-2">Краснодарский край, Сочи, пос. Лазаревское</p>
                  <p className="text-muted-foreground text-sm">Координаты: 43.9045° N, 39.3281° E</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

