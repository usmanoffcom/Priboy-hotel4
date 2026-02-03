import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Страница не найдена — Гранд Отель & SPA Прибой",
  description: "Запрашиваемая страница не найдена. Вернитесь на главную страницу Гранд Отель & SPA Прибой.",
}

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center bg-cream">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Ошибка 404</p>
          <h1 className="text-5xl md:text-7xl font-light text-foreground mb-6">
            Страница не найдена
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена. 
            Вернитесь на главную страницу или воспользуйтесь навигацией.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
              <Link href="/">На главную</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10 rounded-none px-8">
              <Link href="/rooms">Номера</Link>
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Возможно, вы искали:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/booking" className="text-terracotta hover:underline">Бронирование</Link>
              <span className="text-border">•</span>
              <Link href="/spa" className="text-terracotta hover:underline">SPA-комплекс</Link>
              <span className="text-border">•</span>
              <Link href="/restaurant" className="text-terracotta hover:underline">Ресторан</Link>
              <span className="text-border">•</span>
              <Link href="/contacts" className="text-terracotta hover:underline">Контакты</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
