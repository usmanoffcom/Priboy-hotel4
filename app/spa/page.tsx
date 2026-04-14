"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, Users, Thermometer, ArrowRight, Info } from "lucide-react"
import Link from "next/link"
import { spaServices, spaInfo } from "@/lib/spa-data"
import { ImageModal } from "@/components/image-modal"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import "./spa.css"

export default function SpaPage() {
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
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Wellness & Relax"
          title="SPA Комплекс в Прибой со своим бассейном"
          description="Собственный SPA комплекс с бассейном в Лазаревском большого Сочи"
          className="bg-cover bg-center"
          backgroundImage="https://framerusercontent.com/images/3j6TVAfQruYEBYhWh9WlhjppzAA.jpg"
        />

        {/* Quick Info */}
        <section className="py-6 bg-gradient-to-r from-terracotta to-forest/80 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm">
              <div className="flex items-center gap-2 glass-pill">
                <Info className="h-4 w-4" />
                <span>{spaInfo.closedDay}</span>
              </div>
              <div className="flex items-center gap-2 glass-pill">
                <Clock className="h-4 w-4" />
                <span>{spaInfo.schedule}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Saunas Grid with Links */}
        <Section className="py-16 md:py-20 bg-white">
          <SectionHeader eyebrow="Банный комплекс" title="Наши SPA услуги" centered className="mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spaServices.map((service) => (
                <div
                  key={service.slug}
                  className="group block bg-white border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => handleImageClick([service.image, ...service.gallery], 0)}
                    className="relative h-56 w-full overflow-hidden cursor-pointer"
                  >
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                  <Link href={`/spa/${service.slug}`}>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-terracotta transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{service.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        {service.temperature && (
                          <span className="flex items-center gap-1">
                            <Thermometer className="h-3 w-3" />
                            {service.temperature}
                          </span>
                        )}
                        {service.capacity && (
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {service.capacity}
                          </span>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-sm text-terracotta group-hover:underline">
                        Подробнее
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
                </div>
              ))}
            </div>
        </Section>

        {/* Info Section */}
        <Section className="py-16 md:py-20 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-3">Информация для гостей</p>
                <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                  СПА-комплекс в Лазаревском с бассейном и банным комплексом
                </h2>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Гранд Отель & SPA «Прибой» — это отель со своим бассейном, расположенный в Лазаревском районе
                    Большого Сочи. Наш SPA-комплекс предлагает гостям разнообразные услуги для полноценного отдыха и
                    оздоровления.
                  </p>
                  <p>
                    <strong>Бассейн с подогревом</strong> — на территории отеля находится большой крытый бассейн с
                    подогревом, обеспечивающий комфортное купание независимо от времени года. Температура воды
                    поддерживается на уровне 28–30 градусов, что создает идеальные условия для отдыха.
                  </p>
                  <p>
                    <strong>Русская баня и финская сауна</strong> — для любителей традиционных парных у нас есть русская
                    баня и финская сауна. Русская баня способствует укреплению здоровья и повышению иммунитета, а
                    финская сауна помогает снять напряжение и улучшить общее самочувствие.
                  </p>
                  <p>
                    <strong>Турецкий хамам и травяная баня</strong> — поклонники восточных традиций оценят наш турецкий
                    хамам, известный своими мягкими паровыми процедурами, которые очищают кожу и расслабляют мышцы.
                    Травяная баня с использованием натуральных травяных сборов обеспечивает глубокое расслабление и
                    восстановление сил.
                  </p>
                  <p>
                    <strong>Соляная комната</strong> — для укрепления иммунитета и улучшения состояния дыхательной
                    системы предлагаем посещение соляной комнаты. Микроклимат, насыщенный ионами соли, оказывает
                    благотворное влияние на здоровье и общее самочувствие.
                  </p>
                  <p>
                    Приглашаем вас посетить наш SPA-комплекс в Лазаревском и насладиться разнообразием процедур для
                    отдыха и оздоровления.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() =>
                    handleImageClick(
                      [
                        "https://framerusercontent.com/images/9D1V0cknVILSFKgxaj1k69Vmqrg.jpg",
                        "/spa/telegram-cloud-photo-size-2-5258339795367740863-y.jpg",
                      ],
                      0
                    )
                  }
                  className="preview-grid-card group/img h-52"
                >
                <img
                  src="https://framerusercontent.com/images/9D1V0cknVILSFKgxaj1k69Vmqrg.jpg"
                  alt="SPA комплекс"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <span className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" aria-hidden />
                </button>
                <button
                  onClick={() =>
                    handleImageClick(
                      [
                        "https://framerusercontent.com/images/9D1V0cknVILSFKgxaj1k69Vmqrg.jpg",
                        "/spa/telegram-cloud-photo-size-2-5258339795367740863-y.jpg",
                      ],
                      1
                    )
                  }
                  className="preview-grid-card group/img h-52 mt-8"
                >
                <img
                  src="/spa/telegram-cloud-photo-size-2-5258339795367740863-y.jpg"
                  alt="Бассейн"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <span className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" aria-hidden />
                </button>
              </div>
            </div>
        </Section>

        {/* Schedule Notice */}
        <section className="py-12 bg-cream-dark">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-8 border border-border">
              <h3 className="text-xl font-medium text-foreground mb-4">Режим работы SPA-комплекса</h3>
              <p className="text-muted-foreground mb-2">{spaInfo.closedDay}</p>
              <p className="text-muted-foreground mb-2">{spaInfo.schedule}</p>
              <p className="text-muted-foreground mb-4">{spaInfo.technicalHour}</p>
              <p className="text-sm text-muted-foreground">{spaInfo.includes}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 bg-cover bg-center spa-cta-bg">
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Подарите себе релакс</h2>
            <p className="text-base text-white/80 mb-6">
              Забронируйте номер и получите бесплатный доступ к SPA-комплексу на весь период проживания
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="xl"
                variant="brand"
                className="px-10"
              >
                <Link href="/booking">Забронировать</Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="inverse"
                className="bg-transparent px-10"
              >
                <Link href="/contacts">Контакты</Link>
              </Button>
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
          alt="SPA комплекс"
        />
      )}
    </>
  )
}
