import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Maximize, Bed } from "lucide-react"
import type { Room } from "@/lib/rooms-data"

export function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white border border-border overflow-hidden group flex flex-col">
      {/* Image */}
      <Link href={`/rooms/${room.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={room.images[0] || "/placeholder.svg"}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-medium">
          {room.size}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <Link href={`/rooms/${room.slug}`}>
          <h3 className="text-base font-medium text-foreground mb-2 hover:text-terracotta transition-colors">
            {room.name}
          </h3>
        </Link>

        {/* Quick Info */}
        <div className="flex flex-wrap gap-3 mb-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{room.capacity}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5" />
            <span>{room.size}</span>
          </div>
        </div>

        {/* Beds */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
          <Bed className="h-3.5 w-3.5 flex-shrink-0" />
          <span className="line-clamp-1">{room.beds}</span>
        </div>

        {/* Prices */}
        <div className="flex gap-3 mb-4 p-3 bg-cream-dark mt-auto">
          <div className="flex-1">
            <p className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wide">Завтраки</p>
            <p className="text-sm font-semibold text-terracotta">{room.priceBreakfast}</p>
          </div>
          <div className="flex-1 border-l border-border pl-3">
            <p className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wide">Пансион</p>
            <p className="text-sm font-semibold text-forest">{room.priceFull}</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 rounded-none text-xs border-foreground text-foreground hover:bg-foreground hover:text-white bg-transparent"
          >
            <Link href={`/rooms/${room.slug}`}>Подробнее</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="flex-1 bg-terracotta hover:bg-terracotta-light text-white rounded-none text-xs"
          >
            <Link href="/booking">Забронировать</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
