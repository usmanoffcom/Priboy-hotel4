import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { rooms } from "@/lib/rooms-data"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"

export function RoomsPreview() {
  return (
    <Section className="py-20 bg-white">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
        <SectionHeader eyebrow="Размещение" title="Наши номера" className="space-y-3" />
        <Button asChild variant="brand-outline" className="bg-transparent">
          <Link href="/rooms" className="flex items-center gap-2">
            Все номера <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rooms.map((room) => (
          <Link key={room.id} href={`/rooms/${room.slug}`} className="group block">
            <div className="site-card overflow-hidden bg-white">
              <div className="relative overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={room.images[0] || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-lg shadow-sm rounded-md px-2.5 py-1 text-xs font-medium">
                  {room.size}
                </div>
              </div>
              <div className="space-y-1 p-5 pt-0">
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
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
