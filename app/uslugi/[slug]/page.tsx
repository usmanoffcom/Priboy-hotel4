import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, Banknote, ChevronLeft, Check, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { services, getServiceBySlug } from "@/lib/services-data"
import { ServiceGallery } from "@/components/service-gallery"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    return {
      title: "Услуга не найдена",
    }
  }

  return {
    title: `${service.name} — услуги отеля Гранд Отель & SPA Прибой`,
    description: service.shortDescription,
    keywords: `${service.name}, услуги отеля, Лазаревское, Гранд Отель Прибой`,
    alternates: {
      canonical: `https://priboy-spa.ru/uslugi/${slug}`,
    },
    openGraph: {
      title: `${service.name} — услуги отеля Гранд Отель & SPA Прибой`,
      description: service.shortDescription,
      url: `https://priboy-spa.ru/uslugi/${slug}`,
      type: "article",
      images: [{ url: service.image, width: 1200, height: 630, alt: service.name }],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  // Get related services (exclude current)
  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link 
              href="/uslugi" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Все услуги
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </section>

        {/* Quick Info */}
        {(service.price || service.workingHours) && (
          <section className="py-6 bg-terracotta text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center">
                {service.workingHours && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{service.workingHours}</span>
                  </div>
                )}
                {service.price && (
                  <div className="flex items-center gap-2">
                    <Banknote className="h-5 w-5" />
                    <span>{service.price}</span>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-medium text-foreground mb-6">Описание</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                {/* Features */}
                <h3 className="text-xl font-medium text-foreground mb-4">Что включено</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-terracotta flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Gallery */}
                <ServiceGallery gallery={service.gallery} serviceName={service.name} />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Booking Card */}
                  <div className="bg-cream p-6 border border-border">
                    <h3 className="text-xl font-medium text-foreground mb-4">
                      Заказать услугу
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Позвоните нам или закажите при бронировании номера
                    </p>
                    <div className="space-y-3">
                      <Button asChild className="w-full bg-terracotta hover:bg-terracotta-light text-white rounded-none">
                        <a href="tel:+79883443333" className="flex items-center justify-center gap-2">
                          <Phone className="h-4 w-4" />
                          +7 (988) 344-33-33
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full border-terracotta text-terracotta hover:bg-terracotta/10 rounded-none">
                        <Link href="/booking">Забронировать номер</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Contact Card */}
                  <div className="bg-foreground p-6">
                    <h3 className="text-lg font-medium text-white mb-4">
                      Есть вопросы?
                    </h3>
                    <p className="text-sm text-white/80 mb-4">
                      Мы ответим на все ваши вопросы об услугах отеля
                    </p>
                    <Button asChild variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white/10 rounded-none">
                      <Link href="/contacts">Связаться с нами</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 md:py-20 bg-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-light text-foreground mb-8 text-center">
                Другие услуги
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/uslugi/${item.slug}`}
                    className="group border border-border hover:border-terracotta transition-all overflow-hidden bg-white"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
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
                  <Link href="/uslugi">Все услуги</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}

