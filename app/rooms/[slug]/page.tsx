import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { rooms, getRoomBySlug } from "@/lib/rooms-data"
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Users,
  Maximize,
  Bed,
  Eye,
  Tv,
  Wind,
  Coffee,
  Bath,
  Wifi,
  Car,
  UtensilsCrossed,
  Waves,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { RoomGallery } from "@/components/room-gallery"
import { Section } from "@/components/ui/section"
import { TextLink } from "@/components/ui/text-link"

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const room = getRoomBySlug(slug)

  if (!room) {
    return {
      title: "Номер не найден",
    }
  }

  const baseUrl = "https://priboy-spa.ru"
  const url = `${baseUrl}/rooms/${slug}`

  return {
    title: `${room.name} | Гранд Отель & SPA Прибой — Лазаревское`,
    description: room.description || `Забронировать ${room.name} в Гранд Отель & SPA Прибой в Лазаревском. ${room.size}, вместимость до ${room.capacity} человек.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${room.name} | Гранд Отель & SPA Прибой`,
      description: room.description || `Забронировать ${room.name} в Гранд Отель & SPA Прибой`,
      url: url,
      images: room.images && room.images.length > 0 ? [
        {
          url: room.images[0],
          width: 1200,
          height: 630,
          alt: room.name,
        },
      ] : undefined,
      type: "website",
    },
  }
}

const amenityIcons: Record<string, React.ReactNode> = {
  Кондиционер: <Wind className="h-5 w-5" />,
  Телевизор: <Tv className="h-5 w-5" />,
  "Чайная станция": <Coffee className="h-5 w-5" />,
  "Халат и тапочки": <Bath className="h-5 w-5" />,
  "Три халата": <Bath className="h-5 w-5" />,
  "Wi-Fi": <Wifi className="h-5 w-5" />,
  Балкон: <Eye className="h-5 w-5" />,
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const room = getRoomBySlug(slug)

  if (!room) {
    notFound()
  }

  const currentIndex = rooms.findIndex((r) => r.slug === slug)
  const prevRoom = currentIndex > 0 ? rooms[currentIndex - 1] : null
  const nextRoom = currentIndex < rooms.length - 1 ? rooms[currentIndex + 1] : null

  return (
    <>
      <Header />
      <main>
        {/* Room Header with Breadcrumb and Gallery */}
        <Section muted className="pb-6" containerClassName="pt-6">
            {/* Breadcrumb */}
            <nav
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-muted-foreground mb-2 min-w-0"
              aria-label="Хлебные крошки"
            >
              <TextLink href="/" className="text-muted-foreground hover:text-foreground shrink-0">
                Главная
              </TextLink>
              <span className="shrink-0" aria-hidden>/</span>
              <TextLink href="/rooms" className="text-muted-foreground hover:text-foreground shrink-0">
                Номера
              </TextLink>
              <span className="shrink-0" aria-hidden>/</span>
              <span className="text-foreground min-w-0 truncate max-w-full" title={room.name}>
                {room.name}
              </span>
            </nav>
            
            {/* Title and Info */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-1 mb-3">
              <h1 className="text-xl md:text-2xl font-light text-foreground">{room.name}</h1>
              <div className="flex items-center gap-4 sm:gap-5 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Maximize className="h-4 w-4" />
                  <span>{room.size}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  <span>{room.capacity} гостей</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="h-4 w-4" />
                  <span>{room.view}</span>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <RoomGallery images={room.images} name={room.name} />
        </Section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Description */}
                <div>
                  <h2 className="text-xl font-medium text-foreground mb-4">Детали номера</h2>
                  <p className="text-muted-foreground leading-relaxed">{room.fullDescription}</p>
                </div>

                {/* Room Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-cream text-center">
                    <Bed className="h-6 w-6 mx-auto mb-2 text-terracotta" />
                    <p className="text-xs text-muted-foreground mb-1">Спальные места</p>
                    <p className="text-sm font-medium">{room.beds}</p>
                  </div>
                  <div className="p-4 bg-cream text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-terracotta" />
                    <p className="text-xs text-muted-foreground mb-1">Вместимость</p>
                    <p className="text-sm font-medium">{room.capacity}</p>
                  </div>
                  <div className="p-4 bg-cream text-center">
                    <Maximize className="h-6 w-6 mx-auto mb-2 text-terracotta" />
                    <p className="text-xs text-muted-foreground mb-1">Площадь</p>
                    <p className="text-sm font-medium">{room.size}</p>
                  </div>
                  <div className="p-4 bg-cream text-center">
                    <Eye className="h-6 w-6 mx-auto mb-2 text-terracotta" />
                    <p className="text-xs text-muted-foreground mb-1">Вид</p>
                    <p className="text-sm font-medium">{room.view}</p>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-xl font-medium text-foreground mb-4">Удобства в номере</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-cream">
                        <div className="text-terracotta">
                          {amenityIcons[amenity] || <Sparkles className="h-5 w-5" />}
                        </div>
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included Services */}
                <div>
                  <h2 className="text-xl font-medium text-foreground mb-4">Включено в проживание</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex gap-4 p-4 border border-border">
                      <Waves className="h-6 w-6 text-terracotta flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-sm mb-1">Бассейны</h3>
                        <p className="text-xs text-muted-foreground">
                          Один взрослый и два детских бассейна, мини-аквапарк. Лежаки и полотенца у бассейна бесплатно.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 border border-border">
                      <Car className="h-6 w-6 text-terracotta flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-sm mb-1">Трансфер и парковка</h3>
                        <p className="text-xs text-muted-foreground">
                          Трансфер до набережной и обратно, одно парковочное место на территории отеля бесплатно.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 border border-border">
                      <UtensilsCrossed className="h-6 w-6 text-terracotta flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-sm mb-1">Ресторан</h3>
                        <p className="text-xs text-muted-foreground">
                          Рестораны с меню, детская и взрослая анимация, шоу-программы у террасы, детская игровая
                          комната.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 border border-border">
                      <Sparkles className="h-6 w-6 text-terracotta flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-sm mb-1">SPA (полный пансион)</h3>
                        <p className="text-xs text-muted-foreground">
                          Крытый бассейн с подогревом, 5 видов парных: русская баня, финская, хаммам, соляная комната,
                          арома-сауна.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-foreground text-white p-6">
                  <h3 className="text-lg font-medium mb-6">Забронировать номер</h3>

                  {/* Prices */}
                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white/70">Только завтраки</span>
                        <span className="text-xl font-semibold text-gold">{room.priceBreakfast}</span>
                      </div>
                      <p className="text-xs text-white/50">за номер / сутки</p>
                    </div>
                    <div className="p-4 bg-terracotta">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-white/90">Полный пансион</span>
                        <span className="text-xl font-semibold">{room.priceFull}</span>
                      </div>
                      <p className="text-xs text-white/70">за номер / сутки (с 01.06 по 20.09)</p>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    variant="default"
                    className="w-full mb-4 bg-gold hover:bg-gold/90 text-foreground"
                  >
                    <Link href="/booking">Забронировать онлайн</Link>
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="inverse"
                      size="sm"
                      className="flex-1 bg-transparent text-xs"
                    >
                      <Link href="/prices">Сезонные цены</Link>
                    </Button>
                    <Button
                      asChild
                      variant="inverse"
                      size="sm"
                      className="flex-1 bg-transparent text-xs"
                    >
                      <Link href="/contacts">Связаться</Link>
                    </Button>
                  </div>

                  {/* Tax Notice */}
                  <p className="text-[10px] text-white/50 mt-4 leading-relaxed">
                    * С 1 января 2025 года на территории РФ действует туристический налог в соответствии с изменениями в
                    Налоговом кодексе РФ (глава 33.1) – Входит в стоимость проживания
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Other Rooms */}
        <section className="py-12 bg-cream border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {prevRoom ? (
                <Link
                  href={`/rooms/${prevRoom.slug}`}
                  className="flex items-center gap-3 group hover:text-terracotta transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Предыдущий</p>
                    <p className="font-medium">{prevRoom.name}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              <Button asChild variant="brand-outline" className="bg-transparent">
                <Link href="/rooms">Все номера</Link>
              </Button>

              {nextRoom ? (
                <Link
                  href={`/rooms/${nextRoom.slug}`}
                  className="flex items-center gap-3 group hover:text-terracotta transition-colors text-right"
                >
                  <div>
                    <p className="text-xs text-muted-foreground">Следующий</p>
                    <p className="font-medium">{nextRoom.name}</p>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
