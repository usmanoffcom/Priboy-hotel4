import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { rooms } from "@/lib/rooms-data"

export function RoomsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-3">Размещение</p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground">Наши номера</h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-white bg-transparent"
          >
            <Link href="/rooms" className="flex items-center gap-2">
              Все номера <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <Link key={room.id} href={`/rooms/${room.slug}`} className="group block">
              <div className="relative overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={room.images[0] || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium">
                  {room.size}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-medium text-foreground group-hover:text-terracotta transition-colors">
                  {room.shortName}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {room.size} • {room.capacity} гостей
                </p>
                <div className="flex gap-3 pt-1">
                  <span className="text-sm font-semibold text-terracotta">{room.priceBreakfast}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
