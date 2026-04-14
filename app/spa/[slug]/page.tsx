"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Thermometer, Droplets, Users, Clock, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { spaServices, getSpaServiceBySlug } from "@/lib/spa-data"
import { ImageModal } from "@/components/image-modal"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { TextLink } from "@/components/ui/text-link"

export default function SpaServicePage() {
  const params = useParams()
  const slug = params?.slug as string
  const service = getSpaServiceBySlug(slug)

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const handleImageClick = (images: string[], index: number) => {
    setSelectedImages(images)
    setSelectedImageIndex(index)
  }

  const handleCloseModal = () => {
    setSelectedImageIndex(null)
    setSelectedImages([])
  }

  if (!service) {
    return null
  }

  const otherServices = spaServices.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="SPA-комплекс"
          title={service.name}
          description={service.shortDescription}
          className="bg-cover bg-center pb-10 sm:pb-14"
          backgroundImage={service.image}
        />

        {/* Quick Stats */}
        <section className="py-4 bg-terracotta text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm">
              {service.temperature && (
                <div className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4" />
                  <span>{service.temperature}</span>
                </div>
              )}
              {service.humidity && (
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4" />
                  <span>Влажность {service.humidity}</span>
                </div>
              )}
              {service.capacity && (
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{service.capacity}</span>
                </div>
              )}
              {service.duration && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="py-4 bg-cream border-b border-border">
          <div className="site-container">
            <TextLink href="/spa" className="text-sm text-muted-foreground">
              <ArrowLeft className="h-4 w-4" />
              Назад к SPA-комплексу
            </TextLink>
          </div>
        </section>

        {/* Content */}
        <Section muted className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">О процедуре</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8">{service.fullDescription}</p>

                <h3 className="text-xl font-medium text-foreground mb-4">Преимущества</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-terracotta flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Gallery */}
                {service.gallery.length > 0 && (
                  <>
                    <h3 className="text-xl font-medium text-foreground mb-4">Галерея</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {service.gallery.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => handleImageClick(service.gallery, index)}
                          className="w-full h-40 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${service.name} - фото ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 border border-border sticky top-24">
                  <h3 className="text-lg font-medium text-foreground mb-4">Информация</h3>

                  <div className="space-y-4 mb-6">
                    {service.temperature && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Температура</span>
                        <span className="text-foreground font-medium">{service.temperature}</span>
                      </div>
                    )}
                    {service.humidity && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Влажность</span>
                        <span className="text-foreground font-medium">{service.humidity}</span>
                      </div>
                    )}
                    {service.capacity && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Вместимость</span>
                        <span className="text-foreground font-medium">{service.capacity}</span>
                      </div>
                    )}
                    {service.duration && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Длительность</span>
                        <span className="text-foreground font-medium">{service.duration}</span>
                      </div>
                    )}
                    {service.price && (
                      <div className="flex justify-between text-sm pt-3 border-t border-border">
                        <span className="text-muted-foreground">Стоимость</span>
                        <span className="text-terracotta font-semibold">{service.price}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">
                    * В зимний период посещение бань включено в стоимость проживания. В летний период — в зависимости от тарифа.
                  </p>

                  <Button asChild variant="brand" className="w-full">
                    <Link href="/booking">Забронировать номер</Link>
                  </Button>
                </div>
              </div>
            </div>
        </Section>

        {/* Other Services */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-light text-foreground mb-8 text-center">Другие услуги SPA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/spa/${item.slug}`}
                  className="group block bg-cream border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {selectedImageIndex !== null && (
        <ImageModal
          images={selectedImages}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex !== null}
          onClose={handleCloseModal}
          alt={service.name}
        />
      )}
    </>
  )
}
