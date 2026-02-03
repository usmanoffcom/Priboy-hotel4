import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Car, Baby, PartyPopper, Waves, Sparkles, UtensilsCrossed } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { services } from "@/lib/services-data"
import { spaServices } from "@/lib/spa-data"

export const metadata: Metadata = {
  title: "Услуги отеля — Гранд Отель & SPA Прибой в Лазаревском",
  description: "Услуги Гранд Отель & SPA Прибой: SPA-комплекс, бассейн, ресторан, трансфер, детская анимация, банкеты и мероприятия.",
  keywords: "услуги отеля, SPA, бассейн, ресторан, трансфер, детская анимация, банкеты, Лазаревское",
  alternates: {
    canonical: "https://priboy-spa.ru/uslugi",
  },
  openGraph: {
    title: "Услуги отеля — Гранд Отель & SPA Прибой",
    description: "Услуги Гранд Отель & SPA Прибой: SPA-комплекс, бассейн, ресторан, трансфер, детская анимация.",
    url: "https://priboy-spa.ru/uslugi",
    type: "website",
  },
}

const serviceIcons: Record<string, React.ElementType> = {
  "transfer": Car,
  "detskaya-animatsiya": Baby,
  "bankety": PartyPopper,
  "basseyn": Waves,
}

const mainCategories = [
  {
    title: "SPA-комплекс",
    description: "Хаммам, русская баня, финская сауна, соляная комната, травяная баня",
    href: "/spa",
    icon: Sparkles,
    count: spaServices.length,
    image: "/spa.jpg"
  },
  {
    title: "Ресторан 23 Avenue",
    description: "Свежие морепродукты, кавказские блюда, домашняя кухня",
    href: "/restaurant",
    icon: UtensilsCrossed,
    image: "/avenue.jpg"
  }
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Гранд Отель & SPA Прибой</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              Услуги отеля
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Всё для комфортного отдыха: SPA-комплекс, бассейн, ресторан, 
              детская анимация и многое другое
            </p>
          </div>
        </section>

        {/* Main Categories */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground">Основные услуги</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="group relative overflow-hidden border border-border hover:border-terracotta transition-all"
                >
                  {category.image && (
                    <div className="relative h-56">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/20 transition-colors">
                        <category.icon className="h-5 w-5 text-terracotta" />
                      </div>
                      <h3 className="text-xl font-medium text-foreground group-hover:text-terracotta transition-colors">
                        {category.title}
                        {category.count && (
                          <span className="text-sm text-muted-foreground ml-2">({category.count} услуг)</span>
                        )}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">Дополнительные услуги</h2>
              <p className="text-muted-foreground">Всё, что сделает ваш отдых ещё комфортнее</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const IconComponent = serviceIcons[service.slug] || Waves
                return (
                  <Link
                    key={service.slug}
                    href={`/uslugi/${service.slug}`}
                    className="group bg-white border border-border hover:border-terracotta transition-all overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="h-5 w-5 text-terracotta flex-shrink-0" />
                        <h3 className="text-lg font-medium text-foreground group-hover:text-terracotta transition-colors">
                          {service.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {service.shortDescription}
                      </p>
                      {service.price && (
                        <p className="text-sm text-terracotta font-medium">{service.price}</p>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* SPA Services */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Оздоровление</p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">SPA-комплекс</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Разнообразные бани и сауны для полноценного отдыха и оздоровления
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaServices.map((spa) => (
                <Link
                  key={spa.slug}
                  href={`/spa/${spa.slug}`}
                  className="group border border-border hover:border-terracotta transition-all overflow-hidden bg-cream"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={spa.image}
                      alt={spa.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-terracotta transition-colors">
                      {spa.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{spa.shortDescription}</p>
                    {spa.temperature && (
                      <p className="text-xs text-terracotta mt-2">Температура: {spa.temperature}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
                <Link href="/spa">Все SPA-услуги</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Забронируйте номер и получите доступ ко всем услугам
            </h2>
            <p className="text-white/80 mb-8">
              Гости отеля пользуются бассейном и зонами отдыха бесплатно. 
              SPA-комплекс и дополнительные услуги оплачиваются отдельно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
                <Link href="/booking">Забронировать номер</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-none px-8">
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

