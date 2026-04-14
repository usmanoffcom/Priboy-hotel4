import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Car, Baby, PartyPopper, Waves, Sparkles, UtensilsCrossed } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { services } from "@/lib/services-data"
import { spaServices } from "@/lib/spa-data"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"

export const metadata: Metadata = {
  title: "Услуги отеля — Гранд Отель & SPA Прибой в Лазаревском",
  description: "Услуги Гранд Отель & SPA Прибой: SPA-комплекс, бассейн, ресторан, трансфер, детская анимация, банкеты и мероприятия.",
  keywords: "услуги отеля, SPA, бассейн, ресторан, трансфер, детская анимация, банкеты, Лазаревское",
  alternates: {
    canonical: "https://priboy-spa.ru/uslugi",
  },
  openGraph: {
    title: "Услуги отеля — Гранд Отель & SPA Прибой",
    description: "Услуги Гранд Отель & SPA Прибой: SPA-комплекс, бассейн, ресторан, трансфер до пляжа, детская анимация, банкеты. Лазаревское.",
    url: "https://priboy-spa.ru/uslugi",
    type: "website",
    images: [{ url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg", width: 1200, height: 630, alt: "Услуги отеля Прибой — Лазаревское" }],
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
        <PageHero
          eyebrow="Гранд Отель & SPA Прибой"
          title="Услуги отеля"
          description="Всё для комфортного отдыха: SPA-комплекс, бассейн, ресторан, детская анимация и многое другое"
        />

        {/* Main Categories */}
        <Section className="py-16 md:py-20 bg-white">
          <SectionHeader title="Основные услуги" centered className="mb-12" />
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
        </Section>

        {/* Services Grid */}
        <Section muted className="py-16 md:py-20">
          <SectionHeader
            title="Дополнительные услуги"
            description="Всё, что сделает ваш отдых ещё комфортнее"
            centered
            className="mb-12"
          />
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
        </Section>

        {/* SPA Services */}
        <Section className="py-16 md:py-20 bg-white">
          <SectionHeader
            eyebrow="Оздоровление"
            title="SPA-комплекс"
            description="Разнообразные бани и сауны для полноценного отдыха и оздоровления"
            centered
            className="mb-12"
          />
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
              <Button asChild variant="brand" className="px-8">
                <Link href="/spa">Все SPA-услуги</Link>
              </Button>
            </div>
        </Section>

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
              <Button asChild size="xl" variant="brand" className="px-8">
                <Link href="/booking">Забронировать номер</Link>
              </Button>
              <Button asChild size="xl" variant="inverse" className="px-8 bg-transparent">
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

