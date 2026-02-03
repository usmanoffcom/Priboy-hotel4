"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useImageModal } from "@/components/image-modal"

export function AnimationPreview() {
  const { openModal } = useImageModal()

  const images = [
    "/animations/telegram-cloud-photo-size-2-5409057872894693404-y.jpg",
    "/animations/telegram-cloud-photo-size-2-5463332940818800667-y.jpg",
    "/animations/telegram-cloud-photo-size-2-5463332940818800668-y.jpg",
  ]

  return (
    <section className="py-24 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid - слева */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden cursor-pointer"
                onClick={() => openModal(images, 0)}
              >
                <Image
                  src={images[0]}
                  alt="Детская анимация — яркие костюмы"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div
                className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden cursor-pointer"
                onClick={() => openModal(images, 1)}
              >
                <Image
                  src={images[1]}
                  alt="Аниматоры для детей"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div
                className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden cursor-pointer"
                onClick={() => openModal(images, 2)}
              >
                <Image
                  src={images[2]}
                  alt="Детские развлечения"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div
                className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden cursor-pointer"
                onClick={() => openModal(images, 2)}
              >
                <Image
                  src={images[2]}
                  alt="Детские развлечения в отеле"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Content - справа */}
          <div className="lg:pl-12">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-4 font-medium">
              Для маленьких гостей
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Детская анимация
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              В летний сезон наших маленьких гостей ждёт яркая и насыщенная программа! 
              Профессиональные аниматоры в красочных костюмах любимых персонажей создают 
              незабываемую атмосферу праздника каждый день. Весёлые конкурсы, увлекательные 
              игры и творческие мастер-классы — дети проводят время с удовольствием, 
              а родители могут спокойно отдохнуть.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Профессиональные аниматоры в ярких костюмах",
                "Ежедневные развлекательные программы",
                "Творческие мастер-классы",
                "Весёлые конкурсы и игры",
                "Программы для детей всех возрастов",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                  <span className="text-foreground text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8 py-6 text-base font-medium">
              <Link href="/uslugi/detskaya-animatsiya">Подробнее об анимации</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
