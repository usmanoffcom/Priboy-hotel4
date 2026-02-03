import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { MapPin, Star, Phone, Waves, Dumbbell, Utensils, Car, Users, Sparkles, Check, ArrowRight, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Отели в Лазаревское — Лучшие гостиницы для отдыха на море 2026",
  description: "Лазаревский отель для семейного отдыха. Выбирайте лучшие отели в Лазаревское: Гранд Отель Прибой с SPA и Гостиница Прибой. Бронируйте напрямую!",
  keywords: "отели в лазаревское, лазаревский отель, гостиницы лазаревское, отель лазаревское, отдых в лазаревском, отели сочи лазаревское",
  alternates: {
    canonical: "https://priboy-spa.ru/oteli-lazarevskoe",
  },
  openGraph: {
    title: "Отели в Лазаревское — Лучшие гостиницы 2026",
    description: "Лазаревский отель для семейного отдыха. SPA-комплексы, бассейны, рестораны. Бронируйте напрямую!",
    url: "https://priboy-spa.ru/oteli-lazarevskoe",
    type: "website",
    locale: "ru_RU",
  },
}

const hotels = [
  {
    name: "Гранд Отель и СПА «Прибой»",
    description: "Премиальный лазаревский отель с собственным SPA-комплексом, 5 видами бань, 2 бассейнами и рестораном. Идеальный выбор для комфортного отдыха на Черноморском побережье.",
    image: "/Fasad/IMG_3719.jpg",
    url: "/",
    features: ["2 бассейна", "SPA с 5 банями", "Ресторан", "Подземная парковка"],
    priceFrom: "7 100 ₽",
    rating: "4.8",
    reviews: "3800+",
    isMain: true,
  },
  {
    name: "Гостиница Прибой",
    description: "Уютный отель в центре Лазаревского с комфортными номерами и домашней атмосферой. Прямо у моря. Идеально для семейного отдыха.",
    image: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
    url: "https://priboy1.ru",
    features: ["Центр города", "до моря 0 минут", "Завтраки", "Парковка"],
    priceFrom: "3 500 ₽",
    rating: "4.6",
    reviews: "420+",
    isMain: false,
  },
]

export default function OteliLazarevskoe() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Fullscreen with strong visual */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/Fasad/IMG_3719.jpg"
              alt="Отели в Лазаревское"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-terracotta/90 text-white px-4 py-2 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Сеть отелей в Лазаревском
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Лучшие отели
                <span className="block text-terracotta">в Лазаревское</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
                От премиального SPA-отеля до уютных гостиниц. Бронируйте напрямую — лучшие цены гарантированы.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-14 h-16 text-base font-semibold group">
                  <Link href="/booking">
                    Забронировать
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-foreground rounded-none px-14 h-16 text-base font-semibold bg-white/10 backdrop-blur-sm">
                  <a href="tel:+79883443333">
                    <Phone className="w-5 h-5 mr-3" />
                    +7 (988) 344-33-33
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">3</div>
                  <div className="text-white/70 text-sm">Отеля</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">3500+</div>
                  <div className="text-white/70 text-sm">Гостей в год</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">5.0</div>
                  <div className="text-white/70 text-sm">Средний рейтинг</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Hotel - Featured Card */}
        <section className="py-0 bg-foreground">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-[400px] lg:h-[600px]">
                <Image
                  src="/Fasad/IMG_3719.jpg"
                  alt="Гранд Отель и СПА Прибой — лучший лазаревский отель"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-6 left-6 bg-terracotta text-white px-6 py-3 text-sm font-bold uppercase tracking-wider">
                  ★ Рекомендуем
                </div>
              </div>
              
              {/* Content Side */}
              <div className="bg-foreground text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 bg-yellow-500/20 px-3 py-1.5">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-yellow-400">4.8</span>
                  </div>
                  <span className="text-white/60 text-sm">3800+ отзывов</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Гранд Отель и СПА
                  <span className="text-terracotta"> «Прибой»</span>
                </h2>
                
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Премиальный лазаревский отель с собственным SPA-комплексом, 5 видами бань, 
                  2 бассейнами и рестораном. Идеальный выбор для комфортного отдыха.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {["2 бассейна", "SPA с 5 банями", "Ресторан", "Подземная парковка"].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-terracotta/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-terracotta" />
                      </div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <span className="text-white/60 text-sm">от</span>
                    <span className="text-4xl font-bold text-terracotta mx-2">7 100 ₽</span>
                    <span className="text-white/60 text-sm">/ ночь</span>
                  </div>
                  <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-10 py-6 text-base font-semibold w-full sm:w-auto">
                    <Link href="/booking">Забронировать номер</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Hotels */}
        <section className="py-20 sm:py-28 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-4 font-semibold">
                Другие варианты
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Ещё отели в Лазаревское
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hotels.filter(h => !h.isMain).map((hotel) => (
                <div
                  key={hotel.name}
                  className="bg-white group hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={hotel.image}
                      alt={`${hotel.name} — лазаревский отель`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-white/95 px-3 py-1.5">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-bold text-sm">{hotel.rating}</span>
                      </div>
                      <span className="text-white/90 text-sm">{hotel.reviews} отзывов</span>
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 text-terracotta" />
                      Лазаревское
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-terracotta transition-colors">
                      {hotel.name}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                      {hotel.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {hotel.features.map((feature) => (
                        <span key={feature} className="bg-cream text-foreground text-xs px-3 py-1.5 font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-5 border-t border-border">
                      <div>
                        <span className="text-sm text-muted-foreground">от </span>
                        <span className="text-2xl font-bold text-foreground">{hotel.priceFrom}</span>
                        <span className="text-sm text-muted-foreground"> / ночь</span>
                      </div>
                      <Button
                        asChild
                        className="bg-foreground hover:bg-foreground/90 text-white rounded-none px-6 py-5 group/btn"
                      >
                        <Link href={hotel.url} target="_blank">
                          Подробнее
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Modern Grid */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-4 font-semibold">
                  Преимущества
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Почему бронируют
                  <span className="text-terracotta"> у нас</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Мы не просто сдаём номера — мы создаём условия для идеального отдыха на Черноморском побережье.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Прямое бронирование", desc: "Лучшие цены без посредников и скрытых комиссий" },
                    { title: "Гарантия качества", desc: "Все отели регулярно проверяются на соответствие стандартам" },
                    { title: "Удобное расположение", desc: "Пешая доступность до моря и достопримечательностей" },
                    { title: "Поддержка 24/7", desc: "Помощь на каждом этапе — от бронирования до выезда" },
                  ].map((item, index) => (
                    <div key={item.title} className="flex gap-5">
                      <div className="w-12 h-12 bg-terracotta text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/lobby.png"
                        alt="Интерьер отеля"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/spa/002.jpg"
                        alt="SPA комплекс"
                        fill
                        className="object-cover"
                        quality={85}
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src="/reception.png"
                        alt="Ресепшн"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/fasad2.png"
                        alt="Фасад отеля"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/10 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Text Block - Styled */}
        <section className="py-16 sm:py-20 bg-cream-dark">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 sm:p-12 border-l-4 border-terracotta">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Отели в Лазаревское — ваш идеальный отдых
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Лазаревское — один из самых популярных курортов Большого Сочи, который привлекает туристов своими 
                  чистыми пляжами, мягким климатом и развитой инфраструктурой. <strong className="text-foreground">Отели в Лазаревское</strong> предлагают 
                  размещение на любой вкус: от бюджетных гостиниц до премиальных SPA-отелей.
                </p>
                <p>
                  Выбирая <strong className="text-foreground">лазаревский отель</strong> из нашей коллекции, вы получаете гарантию качественного 
                  сервиса, комфортные условия проживания и удобное расположение рядом с морем.
                </p>
                <p>
                  Бронируйте напрямую и получайте лучшие цены. Мы предлагаем специальные условия для семей с детьми, 
                  раннего бронирования и длительного проживания.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Bold Design */}
        <section className="relative py-24 sm:py-32">
          <div className="absolute inset-0">
            <Image
              src="/slides/3.png"
              alt="Забронировать отель в Лазаревском"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/90" />
          </div>
          
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Готовы к отдыху
              <span className="text-terracotta"> на море?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Забронируйте лучший лазаревский отель прямо сейчас. Мы гарантируем лучшие цены и качественный сервис.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-12 h-16 text-lg font-semibold">
                <Link href="/booking">Забронировать онлайн</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-foreground rounded-none px-12 h-16 text-lg font-semibold bg-transparent">
                <a href="tel:+79883443333">
                  <Phone className="w-5 h-5 mr-2" />
                  Позвонить
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
