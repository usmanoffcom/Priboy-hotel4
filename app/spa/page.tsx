"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, Users, Thermometer, ArrowRight, Info } from "lucide-react"
import Link from "next/link"
import { spaServices, spaInfo } from "@/lib/spa-data"
import { ImageModal } from "@/components/image-modal"

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
        {/* Hero */}
        <section
          className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/3j6TVAfQruYEBYhWh9WlhjppzAA.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 text-gold">Wellness & Relax</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">SPA Комплекс в Прибой со своим бассейном</h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Собственный SPA комплекс с бассейном в Лазаревском большого Сочи
            </p>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-6 bg-terracotta text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span>{spaInfo.closedDay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{spaInfo.schedule}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Saunas Grid with Links */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-3">Банный комплекс</p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground">Наши SPA услуги</h2>
            </div>

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
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                  className="w-full h-52 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                >
                <img
                  src="https://framerusercontent.com/images/9D1V0cknVILSFKgxaj1k69Vmqrg.jpg"
                  alt="SPA комплекс"
                    className="w-full h-full object-cover"
                />
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
                  className="w-full h-52 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity mt-8"
                >
                <img
                  src="/spa/telegram-cloud-photo-size-2-5258339795367740863-y.jpg"
                  alt="Бассейн"
                    className="w-full h-full object-cover"
                />
                </button>
              </div>
            </div>
          </div>
        </section>

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
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/yuPh18wvEqOXpEI8WPezjKeSjzM.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Подарите себе релакс</h2>
            <p className="text-base text-white/80 mb-6">
              Забронируйте номер и получите бесплатный доступ к SPA-комплексу на весь период проживания
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-10"
              >
                <Link href="/booking">Забронировать</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white rounded-none px-10 hover:bg-white hover:text-foreground"
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
