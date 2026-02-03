import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('/luxury-hotel-terrace-sunset-sea-view--romantic-atm.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
          Забронируйте ваш
          <br />
          <span className="font-semibold">идеальный отдых</span>
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Откройте для себя новый уровень комфорта на побережье Черного моря. Специальные предложения для раннего
          бронирования.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-10 py-6 text-base"
          >
            <Link href="/booking">Забронировать</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground rounded-none px-10 py-6 text-base bg-transparent"
          >
            <a href="tel:+79883443333">Позвонить нам</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
