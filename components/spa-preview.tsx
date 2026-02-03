"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useImageModal } from "@/components/image-modal"

export function SpaPreview() {
  const { openModal } = useImageModal()

  const images = [
    "/spa/001.jpg",
    "/spa/002.jpg",
    "https://framerusercontent.com/images/9D1V0cknVILSFKgxaj1k69Vmqrg.jpg",
    "/spa/telegram-cloud-photo-size-2-5258339795367740863-y.jpg",
  ]

  return (
    <section className="py-24 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden cursor-pointer"
                onClick={() => openModal(images, 0)}
              >
                <Image
                  src={images[0]}
                  alt="SPA бассейн"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div
                className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden cursor-pointer"
                onClick={() => openModal(images, 1)}
              >
                <Image
                  src={images[1]}
                  alt="Русская баня"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
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
                  alt="Массажный кабинет"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              <div
                className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden cursor-pointer"
                onClick={() => openModal(images, 3)}
              >
                <Image
                  src={images[3]}
                  alt="Зона отдыха"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-12">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-4 font-medium">
              Релакс
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              SPA-комплекс
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Погрузитесь в мир абсолютного расслабления. Наш SPA-комплекс включает 5 видов бань и зоны отдыха 
              для полноценного восстановления.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Русская баня",
                "Хаммам",
                "Финская сауна",
                "Соляная комната",
                "Травяная баня",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                  <span className="text-foreground text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8 py-6 text-base font-medium">
              <Link href="/spa">Подробнее о SPA</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
