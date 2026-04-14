import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Maximize, Bed } from "lucide-react"
import type { Room } from "@/lib/rooms-data"

export function RoomCard({ room }: { room: Room }) {
  return (
    <div className="site-card overflow-hidden group flex flex-col">
      {/* Image */}
      <Link href={`/rooms/${room.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={room.images[0] || "/placeholder.svg"}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-lg shadow-sm rounded-md px-2.5 py-1 text-xs font-medium">
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
        <div className="flex gap-3 mb-4 p-3 bg-cream-dark/60 rounded-lg mt-auto">
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
            variant="brand-outline"
            size="sm"
            className="flex-1 text-xs bg-transparent"
          >
            <Link href={`/rooms/${room.slug}`}>Подробнее</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="brand"
            className="flex-1 text-xs"
          >
            <Link href="/booking">Забронировать</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
