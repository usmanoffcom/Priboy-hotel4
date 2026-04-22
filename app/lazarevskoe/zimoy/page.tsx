import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Snowflake, Thermometer, Waves, Mountain, Check, Calendar, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { lazarevskoeSeasonsData } from "@/lib/lazarevskoe-data"

export const metadata: Metadata = {
  title: "Лазаревское зимой — отдых в низкий сезон | Гранд Отель & SPA Прибой",
  description: "Зимний отдых в Лазаревском: SPA, экскурсии, поездки в Красную Поляну. Погода, цены, преимущества отдыха зимой.",
  keywords: "Лазаревское зимой, зимний отдых, SPA, Красная Поляна, новый год, низкий сезон",
  alternates: {
    canonical: "https://priboy-spa.ru/lazarevskoe/zimoy",
  },
  openGraph: {
    title: "Лазаревское зимой — отдых в низкий сезон",
    description: "Зимний отдых в Лазаревском: SPA, экскурсии, поездки в Красную Поляну. Погода, цены, преимущества отдыха зимой.",
    url: "https://priboy-spa.ru/lazarevskoe/zimoy",
    type: "website",
    images: [{ url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg", width: 1200, height: 630, alt: "Лазаревское зимой" }],
  },
}

export default function WinterPage() {
  const { winter } = lazarevskoeSeasonsData

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/spa.jpg"
              alt="Лазаревское зимой"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">{winter.months}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 max-w-3xl">
              {winter.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              {winter.description}
            </p>
            <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white px-8">
              <Link href="/booking">Забронировать на зиму</Link>
            </Button>
          </div>
        </section>

        {/* Weather Info */}
        <section className="py-8 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white text-center">
              <div className="flex items-center gap-3">
                <Thermometer className="h-8 w-8" />
                <div className="text-left">
                  <p className="text-sm opacity-80">Воздух</p>
                  <p className="text-2xl font-light">{winter.temperature.air}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Waves className="h-8 w-8" />
                <div className="text-left">
                  <p className="text-sm opacity-80">Вода</p>
                  <p className="text-2xl font-light">{winter.temperature.water}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8" />
                <div className="text-left">
                  <p className="text-sm opacity-80">Сезон</p>
                  <p className="text-2xl font-light">{winter.months}</p>
                </div>
              </div>
            </div>
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
              <span className="text-foreground">Зимой</span>
            </nav>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Преимущества зимнего отдыха</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Зимой в Лазаревском особая атмосфера: тишина, мягкий климат и доступные цены
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {winter.highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-cream border border-border">
                  <Snowflake className="h-6 w-6 text-terracotta flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Чем заняться</p>
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                  Зимние активности
                </h2>
                <ul className="space-y-4 mb-8">
                  {winter.activities.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 p-4 bg-white border border-border">
                      <Check className="h-5 w-5 text-terracotta flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-80 lg:h-[500px]">
                <Image
                  src="/zimnie-aktivnosti.jpg"
                  alt="Зимний отдых в Лазаревском"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Krasnaya Polyana */}
        <section className="py-16 md:py-20 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96 order-2 lg:order-1">
                <Image
                  src="/krasnaya-polyana.jpg"
                  alt="Красная Поляна"
                  fill
                  className="object-cover object-left-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">90 минут от отеля</p>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                  Горнолыжная Красная Поляна
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Совмещайте морской отдых и горные лыжи! Красная Поляна находится всего в 90 минутах 
                  езды от Лазаревского. Современные подъемники, трассы различной сложности, 
                  панорамные рестораны.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Курорт Роза Хутор",
                    "Газпром Лаура и Альпика",
                    "Красная Поляна (бывший Горки Город)",
                    "Трансфер можно заказать в отеле"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <Mountain className="h-5 w-5 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SPA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Оздоровление</p>
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                  SPA-комплекс отеля
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Зима — идеальное время для оздоровительных процедур. В нашем SPA-комплексе есть всё 
                  для полноценного релакса: хаммам, русская баня, финская сауна, соляная комната и 
                  травяная баня.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Хаммам — турецкая баня",
                    "Русская баня с вениками",
                    "Финская сауна",
                    "Соляная комната",
                    "Травяная баня"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <Sparkles className="h-5 w-5 text-terracotta flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-terracotta hover:bg-terracotta-light text-white px-8">
                  <Link href="/spa">Подробнее о SPA</Link>
                </Button>
              </div>
              <div className="relative h-80 lg:h-[500px]">
                <Image
                  src="/spa.jpg"
                  alt="SPA-комплекс"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Советы для зимнего отдыха</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {winter.tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white border border-border">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-terracotta text-white flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-terracotta">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Зимний отдых со скидкой
            </h2>
            <p className="text-white/90 mb-8">
              В зимний сезон действуют специальные цены на проживание. 
              Забронируйте номер и наслаждайтесь спокойным отдыхом у моря.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-terracotta hover:bg-white/90 px-8">
                <Link href="/booking">Забронировать</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8">
                <Link href="/prices">Смотреть цены</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Other Season */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-light text-foreground mb-4">Планируете летний отдых?</h3>
            <p className="text-muted-foreground mb-6">
              Узнайте о преимуществах отдыха в Лазаревском в летний период
            </p>
            <Button asChild variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10 px-8">
              <Link href="/lazarevskoe/letom">Лазаревское летом</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

