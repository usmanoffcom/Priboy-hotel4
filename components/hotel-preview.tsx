"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ClickableImage } from "@/components/image-modal"

const hotelGallery = [
  "/reception.png",
  "/lobby.png",
  "/fasad.png",
  "/fasad2.png",
]

export function HotelPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - слева */}
          <div className="lg:pr-12 order-2 lg:order-1">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-4 font-medium">
              Лазаревский отель
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Гранд Отель и SPA Прибой
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Один из лучших отелей в Лазаревское для семейного отдыха и комфортного отпуска. Наш лазаревский отель расположен в живописном курортном поселке (Большой Сочи) и сочетает в себе современную инфраструктуру, высокий уровень сервиса и уникальные возможности для оздоровления.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Комфортабельные номера от 28 м² с балконами",
                "2 открытых бассейна с подогревом",
                "Собственный SPA-комплекс с 5 видами бань",
                "Ресторан с террасой и шведским столом",
                "Подземная охраняемая парковка",
                "Детская анимация в летний период",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                  <span className="text-foreground text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="bg-terracotta hover:bg-terracotta-light text-white px-8 py-6 text-base font-medium">
              <Link href="/o-komplekse">Подробнее об отеле</Link>
            </Button>
          </div>

          {/* Image Grid - справа */}
          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="preview-grid-card group/img h-48 sm:h-56 md:h-64">
                <ClickableImage
                  src="/reception.png"
                  alt="Ресепшн Гранд Отель SPA Прибой — стойка регистрации в Лазаревском"
                  gallery={hotelGallery}
                  index={0}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  hoverOpacity={false}
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
              <div className="preview-grid-card group/img h-64 sm:h-72 md:h-80">
                <ClickableImage
                  src="/lobby.png"
                  alt="Лобби Гранд Отель SPA Прибой — интерьер отеля в Лазаревском"
                  gallery={hotelGallery}
                  index={1}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  hoverOpacity={false}
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="preview-grid-card group/img h-64 sm:h-72 md:h-80">
                <ClickableImage
                  src="/fasad.png"
                  alt="Фасад Гранд Отель SPA Прибой — вид на отель в Лазаревском"
                  gallery={hotelGallery}
                  index={2}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  hoverOpacity={false}
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>
              <div className="preview-grid-card group/img h-48 sm:h-56 md:h-64">
                <ClickableImage
                  src="/fasad2.png"
                  alt="Гранд Отель SPA Прибой — фасад здания в центре Лазаревского"
                  gallery={hotelGallery}
                  index={3}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  hoverOpacity={false}
                  className="object-cover group-hover/img:scale-105 transition-transform duration-500"
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

