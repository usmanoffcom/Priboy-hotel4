import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Banknote, Users, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { attractions, getAttractionBySlug } from "@/lib/lazarevskoe-data"

export async function generateStaticParams() {
  return attractions.map((attraction) => ({
    slug: attraction.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const attraction = getAttractionBySlug(slug)
  
  if (!attraction) {
    return {
      title: "Достопримечательность не найдена",
    }
  }

  return {
    title: `${attraction.name} — достопримечательность Лазаревского`,
    description: attraction.shortDescription,
    keywords: `${attraction.name}, Лазаревское, достопримечательности, экскурсии, отдых`,
    alternates: {
      canonical: `https://priboy-spa.ru/lazarevskoe/dostoprimechatelnosti/${slug}`,
    },
    openGraph: {
      title: `${attraction.name} — достопримечательность Лазаревского`,
      description: attraction.shortDescription,
      url: `https://priboy-spa.ru/lazarevskoe/dostoprimechatelnosti/${slug}`,
      type: "article",
      images: [{ url: attraction.image, width: 1200, height: 630, alt: attraction.name }],
    },
  }
}

export default async function AttractionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const attraction = getAttractionBySlug(slug)

  if (!attraction) {
    notFound()
  }

  // Get related attractions (exclude current)
  const relatedAttractions = attractions
    .filter((a) => a.slug !== slug)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src={attraction.image}
              alt={attraction.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/lazarevskoe/dostoprimechatelnosti" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Все достопримечательности
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              {attraction.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {attraction.shortDescription}
            </p>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-6 bg-terracotta text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center">
              {attraction.distance && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <span>{attraction.distance}</span>
                </div>
              )}
              {attraction.workingHours && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{attraction.workingHours}</span>
                </div>
              )}
              {attraction.price && (
                <div className="flex items-center gap-2">
                  <Banknote className="h-5 w-5" />
                  <span>{attraction.price}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-medium text-foreground mb-6">Описание</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {attraction.fullDescription}
                </p>

                {/* Features */}
                <h3 className="text-xl font-medium text-foreground mb-4">Особенности</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {attraction.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Address */}
                {attraction.address && (
                  <div className="bg-cream p-6 border border-border mb-8">
                    <h3 className="text-lg font-medium text-foreground mb-2">Адрес</h3>
                    <p className="text-muted-foreground">{attraction.address}</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Booking Card */}
                  <div className="bg-cream p-6 border border-border">
                    <h3 className="text-xl font-medium text-foreground mb-4">
                      Остановитесь рядом
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Гранд Отель & SPA Прибой — идеальная база для посещения достопримечательностей Лазаревского
                    </p>
                    <Button asChild className="w-full bg-terracotta hover:bg-terracotta-light text-white rounded-none">
                      <Link href="/booking">Забронировать номер</Link>
                    </Button>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-foreground p-6">
                    <h3 className="text-lg font-medium text-white mb-4">
                      Нужна помощь с экскурсией?
                    </h3>
                    <p className="text-sm text-white/80 mb-4">
                      Мы поможем организовать посещение и трансфер
                    </p>
                    <Button asChild variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white/10 rounded-none">
                      <a href="tel:+79883443333">+7 (988) 344-33-33</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Attractions */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">
              Другие достопримечательности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedAttractions.map((item) => (
                <Link
                  key={item.slug}
                  href={`/lazarevskoe/dostoprimechatelnosti/${item.slug}`}
                  className="group border border-border hover:border-terracotta transition-all overflow-hidden bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {item.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10 rounded-none px-8">
                <Link href="/lazarevskoe/dostoprimechatelnosti">Все достопримечательности</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

