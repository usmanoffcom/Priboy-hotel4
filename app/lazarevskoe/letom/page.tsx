import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Sun, Thermometer, Waves, Palmtree, Check, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { lazarevskoeSeasonsData } from "@/lib/lazarevskoe-data"

export const metadata: Metadata = {
  title: "Лазаревское летом — отдых в высокий сезон | Гранд Отель & SPA Прибой",
  description: "Летний отдых в Лазаревском: пляжи, аквапарки, экскурсии, морские прогулки. Погода, температура воды, развлечения.",
  keywords: "Лазаревское летом, летний отдых, пляжный сезон, купание, аквапарки, экскурсии",
  alternates: {
    canonical: "https://priboy-spa.ru/lazarevskoe/letom",
  },
  openGraph: {
    title: "Лазаревское летом — отдых в высокий сезон",
    description: "Летний отдых в Лазаревском: пляжи, аквапарки, экскурсии, морские прогулки.",
    url: "https://priboy-spa.ru/lazarevskoe/letom",
    type: "website",
  },
}

export default function SummerPage() {
  const { summer } = lazarevskoeSeasonsData

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/pool.JPG"
              alt="Лазаревское летом"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">{summer.months}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 max-w-3xl">
              {summer.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
              {summer.description}
            </p>
            <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
              <Link href="/booking">Забронировать на лето</Link>
            </Button>
          </div>
        </section>

        {/* Weather Info */}
        <section className="py-8 bg-terracotta">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-white text-center">
              <div className="flex items-center gap-3">
                <Sun className="h-8 w-8" />
                <div className="text-left">
                  <p className="text-sm opacity-80">Воздух</p>
                  <p className="text-2xl font-light">{summer.temperature.air}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Waves className="h-8 w-8" />
                <div className="text-left">
                  <p className="text-sm opacity-80">Вода</p>
                  <p className="text-2xl font-light">{summer.temperature.water}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8" />
                <div className="text-left">
                  <p className="text-sm opacity-80">Сезон</p>
                  <p className="text-2xl font-light">{summer.months}</p>
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
              <span className="text-foreground">Летом</span>
            </nav>
          </div>
        </section>

        {/* Highlights & Activities */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Highlights */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sun className="h-8 w-8 text-terracotta" />
                  <h2 className="text-2xl font-medium text-foreground">Что особенного летом</h2>
                </div>
                <ul className="space-y-4">
                  {summer.highlights.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 p-4 bg-cream border border-border">
                      <Check className="h-5 w-5 text-terracotta flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Palmtree className="h-8 w-8 text-terracotta" />
                  <h2 className="text-2xl font-medium text-foreground">Активности и развлечения</h2>
                </div>
                <ul className="space-y-4">
                  {summer.activities.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 p-4 bg-cream border border-border">
                      <Check className="h-5 w-5 text-terracotta flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Советы для летнего отдыха</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {summer.tips.map((tip, index) => (
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

        {/* Summer Attractions */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Куда сходить летом</h2>
              <p className="text-muted-foreground">Лучшие места для посещения в теплый сезон</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Аквапарки",
                  desc: "Наутилус и Морская звезда — водные горки и бассейны для всей семьи",
                  href: "/lazarevskoe/dostoprimechatelnosti/akvapark-nautilus"
                },
                {
                  title: "33 водопада",
                  desc: "Самое полноводное время — водопады особенно красивы в начале лета",
                  href: "/lazarevskoe/dostoprimechatelnosti/33-vodopada"
                },
                {
                  title: "Пляжи",
                  desc: "7 км чистых галечных пляжей с развитой инфраструктурой",
                  href: "/lazarevskoe/plyazhi"
                }
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group p-8 bg-cream border border-border hover:border-terracotta transition-colors"
                >
                  <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-terracotta transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Hotel CTA */}
        <section className="py-16 md:py-20 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/lobby.png"
                  alt="Гранд Отель & SPA Прибой летом"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Летний отдых</p>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                  Гранд Отель & SPA Прибой
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Летом в нашем отеле особенно хорошо: открытый бассейн, 
                  бесплатный трансфер до пляжа, детская анимация и разнообразная 
                  развлекательная программа.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Открытый бассейн",
                    "Бесплатный трансфер до пляжа",
                    "Детская анимация",
                    "Вечерние программы",
                    "Ресторан с летней верандой"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <Check className="h-5 w-5 text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
                    <Link href="/booking">Забронировать</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8">
                    <Link href="/rooms">Смотреть номера</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Season */}
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-light text-foreground mb-4">Планируете зимний отдых?</h3>
            <p className="text-muted-foreground mb-6">
              Узнайте о преимуществах отдыха в Лазаревском в зимний период
            </p>
            <Button asChild variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10 rounded-none px-8">
              <Link href="/lazarevskoe/zimoy">Лазаревское зимой</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

