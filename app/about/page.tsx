import "./about.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, Award, Users, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Об отеле | Гранд Отель & SPA Прибой — Лазаревское",
  description: "Гранд Отель & SPA Прибой — уютный уголок роскоши на побережье Черного моря в сердце Лазаревского. История отеля, команда, ценности и философия гостеприимства.",
  alternates: {
    canonical: "https://priboy-spa.ru/about",
  },
  openGraph: {
    title: "Об отеле | Гранд Отель & SPA Прибой",
    description: "Гранд Отель & SPA Прибой — уютный уголок роскоши на побережье Черного моря в сердце Лазаревского. История, команда, философия гостеприимства.",
    url: "https://priboy-spa.ru/about",
    type: "website",
    images: [{ url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg", width: 1200, height: 630, alt: "Гранд Отель & SPA Прибой — Лазаревское" }],
  },
}

const stats = [
  { icon: Calendar, value: "10+", label: "лет работы" },
  { icon: Users, value: "50 000+", label: "довольных гостей" },
  { icon: Star, value: "4.8", label: "средняя оценка" },
  { icon: Award, value: "SPA", label: "собственный комплекс" },
]

const milestones = [
  { year: "2014", event: "Открытие отеля с 50 номерами" },
  { year: "2016", event: "Расширение до 120 номеров, открытие SPA" },
  { year: "2018", event: "Реновация номерного фонда" },
  { year: "2020", event: "Открытие нового банного комплекса" },
  { year: "2023", event: "Реновация всех номеров и ресторана" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 flex items-center justify-center bg-cover bg-center about-hero-bg"
        >
          <div className="absolute inset-0 gradient-page-hero" />
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <p className="glass-pill inline-flex text-sm tracking-[0.2em] uppercase mb-4 text-gold">С 2014 года</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 drop-shadow-md">Об отеле</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Гранд Отель & SPA Прибой — это уютный уголок роскоши на побережье Черного моря в сердце Лазаревского
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-gradient-to-r from-terracotta to-forest/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-xl p-4">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                  <p className="text-3xl md:text-4xl font-light mb-1">{stat.value}</p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Наша история</p>
                <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                  Традиции
                  <br />
                  гостеприимства
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Гранд Отель & SPA «Прибой» был основан в 2014 году с целью создать на черноморском побережье отель
                    европейского уровня, который бы сочетал комфорт современного курорта с теплотой южного
                    гостеприимства.
                  </p>
                  <p>
                    За годы работы мы выросли из небольшого семейного отеля в полноценный курортный комплекс с развитой
                    инфраструктурой: SPA-центром, двумя бассейнами, ресторанами и собственным пляжем.
                  </p>
                  <p>
                    Сегодня «Прибой» — это 120 комфортабельных номеров, команда из 150 профессионалов и тысячи
                    благодарных гостей, которые возвращаются к нам год за годом.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="preview-grid-card cursor-default h-48">
                  <Image src="/hotel-lobby-interior.jpg" alt="Лобби отеля" fill sizes="50vw" className="object-cover" loading="lazy" />
                </div>
                <div className="preview-grid-card cursor-default h-48 mt-8">
                  <Image src="/hotel-pool-guests.jpg" alt="Бассейн" fill sizes="50vw" className="object-cover" loading="lazy" />
                </div>
                <div className="preview-grid-card cursor-default h-48">
                  <Image src="/hotel-staff-service.jpg" alt="Персонал" fill sizes="50vw" className="object-cover" loading="lazy" />
                </div>
                <div className="preview-grid-card cursor-default h-48 mt-8">
                  <Image src="/hotel-room-detail.jpg" alt="Номер" fill sizes="50vw" className="object-cover" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Этапы развития</p>
              <h2 className="text-4xl font-light text-foreground">Наш путь</h2>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-light text-terracotta">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-terracotta rounded-full mt-2" />
                  <div className="flex-1 pb-8 border-l-0">
                    <p className="text-lg text-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-cream-dark">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-96 overflow-hidden">
                <Image src="/hotel-team-photo.jpg" alt="Команда отеля" fill sizes="100vw" className="object-cover" loading="lazy" />
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Наша команда</p>
                <h2 className="text-4xl font-light text-foreground mb-6">Люди, которые создают уют</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Наша команда — это 150 профессионалов своего дела: от администраторов ресепшн до шеф-поваров и
                  массажистов. Многие работают с нами с самого открытия отеля.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Мы гордимся нашим коллективом и постоянно инвестируем в обучение и развитие персонала, чтобы каждый
                  гость чувствовал себя особенным.
                </p>
                <blockquote className="border-l-4 border-terracotta pl-6 italic text-foreground">
                  "Наша миссия — создавать эмоции, которые хочется повторить. Каждый гость для нас — это возможность
                  подарить незабываемый отдых."
                  <footer className="mt-2 text-sm text-muted-foreground not-italic">— Команда отеля «Прибой»</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Философия</p>
              <h2 className="text-4xl font-light text-foreground">Наши ценности</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="text-5xl font-light text-terracotta mb-4">01</div>
                <h3 className="text-xl font-medium text-foreground mb-4">Гостеприимство</h3>
                <p className="text-muted-foreground">
                  Мы принимаем каждого гостя как дорогого друга, уделяя внимание мельчайшим деталям и индивидуальным
                  пожеланиям.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="text-5xl font-light text-terracotta mb-4">02</div>
                <h3 className="text-xl font-medium text-foreground mb-4">Качество</h3>
                <p className="text-muted-foreground">
                  Мы не идём на компромиссы: от выбора постельного белья до меню ресторана — всё должно быть на высшем
                  уровне.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="text-5xl font-light text-terracotta mb-4">03</div>
                <h3 className="text-xl font-medium text-foreground mb-4">Забота</h3>
                <p className="text-muted-foreground">
                  Мы заботимся о комфорте гостей, о благополучии сотрудников и об окружающей среде нашего прекрасного
                  побережья.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Станьте частью нашей истории</h2>
            <p className="text-white/80 mb-8">Забронируйте номер и откройте для себя гостеприимство «Прибоя»</p>
            <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white px-10">
              <Link href="/booking">Забронировать</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
