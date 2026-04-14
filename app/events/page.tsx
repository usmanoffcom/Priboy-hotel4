import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "События и анонсы | Гранд Отель & SPA Прибой — Лазаревское",
  description: "События и мероприятия в отеле Прибой в Лазаревском. Тематические вечера, концерты, детские программы, семейные праздники. Организация корпоративных мероприятий и свадеб.",
  alternates: {
    canonical: "https://priboy-spa.ru/events",
  },
  openGraph: {
    title: "События и анонсы | Гранд Отель & SPA Прибой",
    description: "События и мероприятия в отеле Прибой в Лазаревском. Тематические вечера, концерты, детские программы. Корпоративы и свадьбы.",
    url: "https://priboy-spa.ru/events",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "События и анонсы в Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">События</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
              События и анонсы
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              В нашем комплексе периодически проходят различные мероприятия и события, связанные с отелем в Лазаревском. У нас лучшие программы на побережье.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Гранд Отель & SPA Прибой регулярно организует разнообразные мероприятия и события для наших гостей. От тематических вечеров и концертов до специальных программ для детей и семейных праздников — у нас всегда есть что-то интересное.
              </p>
            </div>

            {/* Events Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-cream p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <Calendar className="h-8 w-8 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Регулярные мероприятия</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Тематические вечера и концерты</li>
                      <li>• Детские развлекательные программы</li>
                      <li>• Семейные праздники и конкурсы</li>
                      <li>• Кулинарные мастер-классы</li>
                      <li>• Спортивные мероприятия</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-cream-dark p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <Users className="h-8 w-8 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Специальные программы</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Новогодние и праздничные программы</li>
                      <li>• Сезонные фестивали</li>
                      <li>• Корпоративные мероприятия</li>
                      <li>• Свадебные торжества</li>
                      <li>• Юбилейные празднования</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Stay Updated */}
            <div className="bg-terracotta/10 p-8 sm:p-10 border-l-4 border-terracotta mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Как узнать о предстоящих событиях?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Чтобы не пропустить интересные мероприятия, следите за нашими обновлениями:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Проверяйте наш сайт и социальные сети</li>
                  <li>Уточняйте у администрации отеля при бронировании</li>
                  <li>Спрашивайте на ресепшене о текущих мероприятиях</li>
                  <li>Подписывайтесь на наши новостные рассылки</li>
                </ul>
              </div>
            </div>

            {/* Contact for Events */}
            <div className="bg-cream-dark p-8 sm:p-10 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Организация мероприятий
              </h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Хотите организовать мероприятие в нашем отеле? Мы поможем вам провести незабываемое событие с учетом всех ваших пожеланий.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-terracotta mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Место проведения</h3>
                  <p className="text-sm text-muted-foreground">
                    Ресторан, терраса, конференц-зал, открытые площадки
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-terracotta mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Вместимость</h3>
                  <p className="text-sm text-muted-foreground">
                    От небольших встреч до крупных мероприятий
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-terracotta mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Организация</h3>
                  <p className="text-sm text-muted-foreground">
                    Полное сопровождение и помощь в организации
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  Свяжитесь с нами для обсуждения деталей:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:+79883443333"
                    className="text-terracotta hover:text-terracotta-light font-medium text-lg"
                  >
                    +7 (988) 344-33-33
                  </a>
                  <span className="text-muted-foreground">или</span>
                  <a
                    href="mailto:booking@priboy-spa.ru"
                    className="text-terracotta hover:text-terracotta-light font-medium"
                  >
                    booking@priboy-spa.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-foreground text-white text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Станьте частью наших событий
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Забронируйте номер и присоединяйтесь к нашим мероприятиям
            </p>
            <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white px-10 py-6 text-base font-medium">
              <Link href="/booking">Забронировать номер</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

