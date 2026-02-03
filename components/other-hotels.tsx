import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const hotels = [
  {
    name: "Гостиница Прибой",
    description: "Уютный отель в центре Лазаревского с комфортными номерами и домашней атмосферой. Идеально для семейного отдыха на Черноморском побережье.",
    image: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
    url: "https://priboy1.ru",
    features: ["Центр Лазаревского", "до моря 0 минут", "Семейные номера"],
  },
]

export function OtherHotels() {
  return (
    <section className="py-20 sm:py-24 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-terracotta mb-4 font-medium">
            Сеть отелей
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
            Другие наши отели в Лазаревском
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Выберите идеальный лазаревский отель для вашего отдыха. Мы предлагаем размещение на любой вкус и бюджет.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hotels.map((hotel) => (
            <Link
              key={hotel.name}
              href={hotel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-border hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={`${hotel.name} — отель в Лазаревском`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {hotel.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-white/90 text-foreground text-xs px-3 py-1 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-terracotta transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {hotel.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-terracotta/10 group-hover:bg-terracotta transition-colors flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-terracotta group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Все отели в Лазаревском находятся в пешей доступности от моря и основных достопримечательностей
          </p>
        </div>
      </div>
    </section>
  )
}
