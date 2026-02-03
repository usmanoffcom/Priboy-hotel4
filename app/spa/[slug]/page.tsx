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
        {/* Hero */}
        <section
          className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('${service.image}')`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 text-gold">SPA-комплекс</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3">{service.name}</h1>
            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">{service.shortDescription}</p>
          </div>
        </section>

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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/spa"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-terracotta transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад к SPA-комплексу
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

                  <Button asChild className="w-full bg-terracotta hover:bg-terracotta-light text-white rounded-none">
                    <Link href="/booking">Забронировать номер</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

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
