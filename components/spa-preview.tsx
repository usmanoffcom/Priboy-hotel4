"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useImageModal } from "@/components/image-modal"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"

export function SpaPreview() {
  const { openModal } = useImageModal()

  const images = [
    "/spa/001.jpg",
    "/spa/002.jpg",
    "https://framerusercontent.com/images/9D1V0cknVILSFKgxaj1k69Vmqrg.jpg",
    "/spa/telegram-cloud-photo-size-2-5258339795367740863-y.jpg",
  ]

  return (
    <Section soft className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div
                className="preview-grid-card group/img h-48 sm:h-56 md:h-64"
                onClick={() => openModal(images, 0)}
              >
                <Image
                  src={images[0]}
                  alt="SPA бассейн"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500" />
              </div>
              <div
                className="preview-grid-card group/img h-64 sm:h-72 md:h-80"
                onClick={() => openModal(images, 1)}
              >
                <Image
                  src={images[1]}
                  alt="Русская баня"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div
                className="preview-grid-card group/img h-64 sm:h-72 md:h-80"
                onClick={() => openModal(images, 2)}
              >
                <Image
                  src={images[2]}
                  alt="Массажный кабинет"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500" />
              </div>
              <div
                className="preview-grid-card group/img h-48 sm:h-56 md:h-64"
                onClick={() => openModal(images, 3)}
              >
                <Image
                  src={images[3]}
                  alt="Зона отдыха"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500" />
              </div>
            </div>
          </div>

          {/* Content */}
        <div className="lg:pl-12">
          <SectionHeader
            eyebrow="Релакс"
            title="SPA-комплекс"
            description="Погрузитесь в мир абсолютного расслабления. Наш SPA-комплекс включает 5 видов бань и зоны отдыха для полноценного восстановления."
            className="mb-8"
          />

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

          <Button asChild variant="brand" className="px-8 py-6 text-base font-medium">
            <Link href="/spa">Подробнее о SPA</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
