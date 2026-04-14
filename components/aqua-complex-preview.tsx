"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useImageModal } from "@/components/image-modal"

export function AquaComplexPreview() {
  const { openModal } = useImageModal()

  const images = [
    "/imgi_38_P1363925_1.jpg",
    "/imgi_41_P1363557.jpg",
    "/imgi_42_P1363565.jpg",
    "/imgi_75_P1363992_1.jpg",
  ]

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - слева */}
          <div className="lg:pr-12 order-2 lg:order-1">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-4 font-medium">
              Для вашего комфорта
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Аква-комплекс
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Аква-комплекс «Прибой» — современный центр водных развлечений в Лазаревском с бассейнами, водными горками, детскими зонами и территорией для отдыха. Идеальное место для активного семейного досуга.
            </p>

            <div className="bg-terracotta/10 border border-terracotta/30 p-4 mb-8 rounded-sm">
              <p className="text-terracotta font-semibold text-base">
                🎉 Для гостей отеля — скидка 50% на посещение аква-комплекса!
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "Открытый бассейн с подогревом",
                "Водные горки и аттракционы",
                "Безопасная детская зона",
                "Шезлонги и зоны отдыха",
                "Кафе и бар у воды",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                  <span className="text-foreground text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="bg-terracotta hover:bg-terracotta-light text-white px-8 py-6 text-base font-medium">
              <Link href="/entertainment">Подробнее об аква-комплексе</Link>
            </Button>
          </div>

          {/* Image Grid - справа */}
          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="space-y-4">
              <div
                className="preview-grid-card group/img h-48 sm:h-56 md:h-64"
                onClick={() => openModal(images, 0)}
              >
                <Image
                  src={images[0]}
                  alt="Аква-комплекс бассейн"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
              <div
                className="preview-grid-card group/img h-64 sm:h-72 md:h-80"
                onClick={() => openModal(images, 1)}
              >
                <Image
                  src={images[1]}
                  alt="Аква-комплекс зона отдыха"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div
                className="preview-grid-card group/img h-64 sm:h-72 md:h-80"
                onClick={() => openModal(images, 2)}
              >
                <Image
                  src={images[2]}
                  alt="Аква-комплекс водные горки"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
              <div
                className="preview-grid-card group/img h-48 sm:h-56 md:h-64"
                onClick={() => openModal(images, 3)}
              >
                <Image
                  src={images[3]}
                  alt="Аква-комплекс развлечения"
                  fill
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
