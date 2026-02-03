import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Car, Plane, Train } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакты | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Контакты отеля Прибой в Лазаревском. Адрес: ул. Калараша, 131. Телефон: +7 (988) 344-33-33. Email: booking@priboy-spa.ru. Как добраться до отеля.",
  alternates: {
    canonical: "https://priboy-spa.ru/contacts",
  },
  openGraph: {
    title: "Контакты | Гранд Отель & SPA Прибой",
    description: "Свяжитесь с нами для бронирования номера в Лазаревском. Телефон, email, адрес и карта проезда.",
    url: "https://priboy-spa.ru/contacts",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Контакты Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-3">Связь с нами</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">Контакты</h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Мы всегда рады помочь вам с бронированием и ответить на вопросы
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Details */}
              <div>
                <h2 className="text-3xl font-light text-foreground mb-8">Свяжитесь с нами</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Телефон</h3>
                      <a href="tel:+79883443333" className="text-lg text-terracotta hover:underline block">
                        +7 (988) 344-33-33
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Круглосуточно</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Email</h3>
                      <a href="mailto:booking@priboy-spa.ru" className="text-lg text-terracotta hover:underline block">
                        booking@priboy-spa.ru
                      </a>
                      <a
                        href="mailto:booking@priboy-spa.ru"
                        className="text-muted-foreground hover:text-terracotta block"
                      >
                        booking@priboy-spa.ru (бронирование)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Адрес</h3>
                      <p className="text-foreground">Краснодарский край, г. Сочи</p>
                      <p className="text-foreground">пос. Лазаревское</p>
                      <p className="text-foreground font-medium">ул. Калараша, 131</p>
                      <p className="text-sm text-muted-foreground mt-2">Пляж в 5 минутах ходьбы от отеля</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Режим работы</h3>
                      <p className="text-foreground">Ресепшн: круглосуточно</p>
                      <p className="text-muted-foreground">Заезд с 14:00, выезд до 12:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Button asChild className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
                    <Link href="/booking">Забронировать номер</Link>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white border border-border overflow-hidden rounded-sm">
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=39.339238%2C43.912423&z=15&pt=39.339238%2C43.912423&l=map"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title="Расположение отеля Прибой"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-white border-t border-border">
                  <a
                    href="https://yandex.ru/maps/org/grand_otel_i_spa_priboy/244585145973/?ll=39.339238%2C43.912423&utm_source=share&z=14.65"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-terracotta-light transition-colors"
                  >
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>Открыть в Яндекс.Картах и построить маршрут</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Get */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Расположение</p>
              <h2 className="text-4xl font-light text-foreground">Как добраться</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-cream border border-border">
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
                  <Plane className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Самолётом</h3>
                <p className="text-muted-foreground mb-4">
                  Ближайший аэропорт — Сочи (Адлер). Расстояние до отеля около 90 км.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Время в пути на авто: ~1,5 часа</li>
                  <li>• Электричка до Лазаревского: ~2 часа</li>
                </ul>
              </div>

              <div className="p-8 bg-cream border border-border">
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
                  <Train className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">Поездом</h3>
                <p className="text-muted-foreground mb-4">
                  Ж/д станция Лазаревская находится в 10 минутах езды от отеля.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Прямые поезда из Москвы</li>
                  <li>• Электрички из Сочи и Туапсе</li>
                </ul>
              </div>

              <div className="p-8 bg-cream border border-border">
                <div className="w-14 h-14 bg-terracotta/10 rounded-full flex items-center justify-center mb-6">
                  <Car className="h-6 w-6 text-terracotta" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">На автомобиле</h3>
                <p className="text-muted-foreground mb-4">
                  Отель расположен в центре Лазаревского, на ул. Калараша, 131.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Бесплатная подземная парковка</li>
                  <li>• Удобный подъезд</li>
                  <li>• GPS координаты: 43.9124°N, 39.3392°E</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
