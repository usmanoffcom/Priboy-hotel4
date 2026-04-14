import Link from "next/link"
import { Button } from "@/components/ui/button"
import "./cta-section.css"

export function CtaSection() {
  return (
    <section className="relative py-32 bg-cover bg-center bg-fixed cta-section-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-foreground/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl border border-white/10 p-8 sm:p-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 drop-shadow-md">
            Забронируйте ваш
            <br />
            <span className="font-semibold">идеальный отдых</span>
          </h2>
          <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            Откройте для себя новый уровень комфорта на побережье Черного моря. Специальные предложения для раннего
            бронирования.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="xl"
              variant="brand"
            >
              <Link href="/booking">Забронировать</Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="inverse"
            >
              <a href="tel:+79883443333">Позвонить нам</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
