import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Waves, Umbrella, Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { beaches } from "@/lib/lazarevskoe-data"

export const metadata: Metadata = {
  title: "Пляжи Лазаревского — галечные и песчаные пляжи | Гранд Отель & SPA Прибой",
  description: "Лучшие пляжи Лазаревского: центральный пляж, дикие пляжи, пляжи для детей. Галечные и песчаные пляжи курорта.",
  keywords: "пляжи Лазаревского, центральный пляж, галечный пляж, песчаный пляж, море Лазаревское",
  alternates: {
    canonical: "https://priboy-spa.ru/lazarevskoe/plyazhi",
  },
  openGraph: {
    title: "Пляжи Лазаревского — галечные и песчаные пляжи",
    description: "Лучшие пляжи Лазаревского: центральный пляж, дикие пляжи, пляжи для детей.",
    url: "https://priboy-spa.ru/lazarevskoe/plyazhi",
    type: "website",
  },
}

const beachTypes = [
  {
    type: "Галечные пляжи",
    description: "Большинство пляжей Лазаревского — галечные. Галька различного размера, от мелкой до крупной."
  },
  {
    type: "Песчаные участки",
    description: "Некоторые пляжи имеют песчаные участки, особенно у воды. Подходят для отдыха с детьми."
  },
  {
    type: "Дикие пляжи",
    description: "Уединенные места с минимальной инфраструктурой для любителей нетронутой природы."
  }
]

export default function BeachesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/pool.JPG"
              alt="Пляжи Лазаревского"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Лазаревское</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Пляжи Лазаревского
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              7 километров чистых галечных пляжей с пологим входом в море. 
              Купальный сезон длится с мая по октябрь.
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
              <span className="text-foreground">Пляжи</span>
            </nav>
          </div>
        </section>

        {/* Beach Types */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {beachTypes.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-cream border border-border">
                  <Waves className="h-8 w-8 text-terracotta flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">{item.type}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beaches List */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Популярные пляжи</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Выберите пляж по своим предпочтениям — от благоустроенных с развитой инфраструктурой 
                до уединенных диких мест
              </p>
            </div>

            <div className="space-y-8">
              {beaches.map((beach, index) => (
                <div 
                  key={beach.slug} 
                  className="bg-white border border-border overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={beach.image}
                        alt={beach.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-terracotta text-white text-xs px-3 py-1 uppercase tracking-wider">
                          {beach.type}
                        </span>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-6 lg:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-medium text-foreground mb-2">{beach.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-terracotta" />
                            <span>{beach.distance}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{beach.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                            <Waves className="h-4 w-4 text-terracotta" />
                            Особенности
                          </h4>
                          <ul className="space-y-2">
                            {beach.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-terracotta flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                            <Umbrella className="h-4 w-4 text-terracotta" />
                            Инфраструктура
                          </h4>
                          <ul className="space-y-2">
                            {beach.infrastructure.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="h-4 w-4 text-terracotta flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Советы отдыхающим</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Обувь для пляжа", desc: "Рекомендуем специальную обувь для галечных пляжей" },
                { title: "Солнцезащита", desc: "Используйте крем SPF 30-50, особенно в июле-августе" },
                { title: "Лучшее время", desc: "До 11:00 и после 16:00 — меньше людей и мягче солнце" },
                { title: "Вода", desc: "Берите с собой достаточно питьевой воды" },
              ].map((tip, index) => (
                <div key={index} className="bg-cream p-6 border border-border text-center">
                  <h3 className="text-lg font-medium text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Отдых у моря в Гранд Отель & SPA Прибой
            </h2>
            <p className="text-white/80 mb-8">
              Бесплатный трансфер до пляжа и обратно для гостей отеля. 
              Собственный открытый бассейн.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
                <Link href="/booking">Забронировать номер</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8">
                <Link href="/rooms">Смотреть номера</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

