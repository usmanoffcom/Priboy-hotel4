"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Waves, Users, Coffee, Sun, UtensilsCrossed } from "lucide-react"
import { ImageModal } from "@/components/image-modal"
import { AquaPromoModal } from "@/components/aqua-promo-modal"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"

const aquaImages = [
  "/imgi_38_P1363925_1.jpg",
  "/imgi_41_P1363557.jpg",
  "/imgi_42_P1363565.jpg",
  "/imgi_75_P1363992_1.jpg",
]

const specialties = [
  {
    name: "Черноморская барабулька",
    description: "Свежая рыба, зажаренная на гриле с лимоном и травами",
    price: "от 850 ₽",
    image: "/menu/dishes/barabulya.jpg",
  },
  {
    name: "Шашлык из каре баранины",
    description: "Маринованное мясо на углях с соусом наршараб",
    price: "от 1 200 ₽",
    image: "/menu/dishes/shashlyk_iz_kare_baraniny.jpg",
  },
  {
    name: "Хачапури по-аджарски",
    description: "Традиционное грузинское блюдо с сыром и яйцом",
    price: "от 450 ₽",
    image: "/menu/dishes/hachapuri_po-adzharski.jpg",
  },
  {
    name: "Тирамису",
    description: "Нежный десерт с кофе и маскарпоне",
    price: "от 350 ₽",
    image: "/menu/dishes/tiramisu.jpg",
  },
]

export default function EntertainmentPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  const handleCloseModal = () => {
    setSelectedImageIndex(null)
  }
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Для вашего комфорта"
          title="Аква-комплекс «Прибой»"
          description="Современный центр водных развлечений с бассейнами, горками, детскими зонами и территорией для отдыха"
        />
        <section className="pb-6 bg-foreground">
          <div className="site-container text-center">
            <p className="text-base text-gold font-medium">Для гостей отеля — скидка 50% на посещение!</p>
          </div>
        </section>

        {/* Main Content */}
        <Section className="py-16 sm:py-20 bg-white">
            {/* Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => handleImageClick(0)}
                    className="preview-grid-card group/img h-48 sm:h-56 md:h-64"
                    aria-label="Открыть фото: Аква-комплекс бассейн"
                    title="Открыть фото: Аква-комплекс бассейн"
                  >
                    <Image
                      src="/imgi_38_P1363925_1.jpg"
                      alt="Аква-комплекс Прибой в Лазаревском — бассейн"
                      fill
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleImageClick(1)}
                    className="preview-grid-card group/img h-64 sm:h-72 md:h-80"
                    aria-label="Открыть фото: Аква-комплекс зона отдыха"
                    title="Открыть фото: Аква-комплекс зона отдыха"
                  >
                    <Image
                      src="/imgi_41_P1363557.jpg"
                      alt="Аква-комплекс Прибой — зона отдыха у бассейна"
                      fill
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" aria-hidden />
                  </button>
                </div>
                <div className="space-y-4 pt-8">
                  <button
                    type="button"
                    onClick={() => handleImageClick(2)}
                    className="preview-grid-card group/img h-64 sm:h-72 md:h-80"
                    aria-label="Открыть фото: Аква-комплекс водные горки"
                    title="Открыть фото: Аква-комплекс водные горки"
                  >
                    <Image
                      src="/imgi_42_P1363565.jpg"
                      alt="Аква-комплекс Прибой — водные горки"
                      fill
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleImageClick(3)}
                    className="preview-grid-card group/img h-48 sm:h-56 md:h-64"
                    aria-label="Открыть фото: Аква-комплекс развлечения"
                    title="Открыть фото: Аква-комплекс развлечения"
                  >
                    <Image
                      src="/imgi_75_P1363992_1.jpg"
                      alt="Аква-комплекс Прибой — развлечения для гостей"
                      fill
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-500 pointer-events-none" aria-hidden />
                  </button>
                </div>
              </div>

              <div className="lg:pl-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                  Яркий отдых для всей семьи!
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  Аква-комплекс «Прибой» — современный центр водных развлечений в Лазаревском с бассейнами, водными горками, детскими зонами и территорией для отдыха. Идеальное место для активного семейного досуга.
                </p>

                <div className="bg-terracotta/10 border border-terracotta/30 p-4 mb-8 rounded-sm">
                  <p className="text-terracotta font-semibold text-base">
                    🎉 Для гостей отеля — скидка 50% на посещение аква-комплекса!
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Открытый бассейн с подогревом",
                    "Водные горки и аттракционы",
                    "Безопасная детская зона",
                    "Шезлонги и зоны отдыха",
                    "Кафе и бар у воды",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0" />
                      <span className="text-foreground text-base font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="brand" className="px-8 py-6 text-base font-medium">
                  <Link href="/booking">Забронировать номер</Link>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="bg-cream p-6 border border-border text-center">
                <Waves className="h-10 w-10 text-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Открытый бассейн</h3>
                <p className="text-sm text-muted-foreground">
                  Комфортное купание и отдых для всей семьи
                </p>
              </div>
              <div className="bg-cream-dark p-6 border border-border text-center">
                <Users className="h-10 w-10 text-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Детская зона</h3>
                <p className="text-sm text-muted-foreground">
                  Безопасные развлечения для детей всех возрастов
                </p>
              </div>
              <div className="bg-cream p-6 border border-border text-center">
                <Sun className="h-10 w-10 text-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Зона отдыха</h3>
                <p className="text-sm text-muted-foreground">
                  Удобные шезлонги и зонтики для комфортного отдыха
                </p>
              </div>
              <div className="bg-cream-dark p-6 border border-border text-center">
                <Coffee className="h-10 w-10 text-terracotta mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Кафе и бар</h3>
                <p className="text-sm text-muted-foreground">
                  Освежающие напитки и легкие закуски прямо у бассейна
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-cream-dark p-8 sm:p-10 border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Почему выбирают наш аква-комплекс?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Для всей семьи</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Аква-комплекс Прибой создан для отдыха всей семьи. Здесь каждый найдет развлечение по душе: от активных водных аттракционов до спокойного отдыха у бассейна.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Безопасность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Все зоны аква-комплекса оборудованы в соответствии с требованиями безопасности. За детьми следят опытные инструкторы, а вода в бассейнах регулярно очищается и обеззараживается.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Комфорт</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Современное оборудование, удобные зоны отдыха, кафе и бар — всё для вашего комфорта.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Разнообразие</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Водные горки, бассейны разной глубины, детские игровые зоны, зоны для релаксации — в нашем аква-комплексе каждый день может быть особенным.
                  </p>
                </div>
              </div>
            </div>
        </Section>

        {/* Menu Section */}
        <Section muted className="py-16 md:py-20">
          <SectionHeader
            eyebrow="Меню"
            title="Меню ресторана аква-комплекса"
            description="Ознакомьтесь с нашим меню, включающим авторские блюда из свежих морепродуктов и традиции кавказской кухни"
            centered
            className="mb-12"
          />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 border border-border">
                <h3 className="text-xl font-medium text-foreground mb-4">Завтраки</h3>
                <p className="text-muted-foreground mb-4">Богатый шведский стол с 08:00 до 10:30</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Свежая выпечка и круассаны</li>
                  <li>• Блюда из яиц на выбор</li>
                  <li>• Каши и хлопья</li>
                  <li>• Мясная и сырная нарезка</li>
                  <li>• Фрукты и йогурты</li>
                  <li>• Свежевыжатые соки</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 border border-border">
                <h3 className="text-xl font-medium text-foreground mb-4">Обеды</h3>
                <p className="text-muted-foreground mb-4">Комплексные обеды с 12:00 до 15:00</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Супы дня (2 вида)</li>
                  <li>• Салаты и закуски</li>
                  <li>• Горячие блюда на выбор</li>
                  <li>• Гарниры</li>
                  <li>• Напитки</li>
                  <li>• Десерт дня</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 border border-border">
                <h3 className="text-xl font-medium text-foreground mb-4">Ужины</h3>
                <p className="text-muted-foreground mb-4">Авторские блюда с 18:00 до 22:00</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Черноморская рыба</li>
                  <li>• Стейки и мясо на гриле</li>
                  <li>• Паста и ризотто</li>
                  <li>• Кавказская кухня</li>
                  <li>• Вегетарианские блюда</li>
                  <li>• Авторские десерты</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 border border-border">
                <h3 className="text-xl font-medium text-foreground mb-4">Винная карта</h3>
                <p className="text-muted-foreground mb-4">Более 100 наименований</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Локальные кубанские вина</li>
                  <li>• Европейские производители</li>
                  <li>• Крепкие напитки</li>
                  <li>• Коктейли и безалкогольные напитки</li>
                </ul>
              </div>
            </div>
            
            {/* Menu PDFs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              {[
                { id: "menu-main", name: "Основное меню", file: "menu-main.pdf" },
                { id: "menu-kids", name: "Детское меню", file: "menu-kids.pdf" },
              ].map((menu) => (
                <a
                  key={menu.id}
                  href={`/menu/${menu.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg border-2 border-border bg-cream-dark hover:border-terracotta transition-all flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-terracotta/10 flex items-center justify-center group-hover:bg-terracotta/20 transition-colors">
                      <svg
                        className="w-8 h-8 text-terracotta"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-terracotta transition-colors">
                      {menu.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">PDF • Открыть</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="bg-terracotta/10 p-8 border border-terracotta/20 rounded-lg text-center">
              <p className="text-foreground mb-4 font-medium">
                Полное меню с ценами доступно в ресторане аква-комплекса или по запросу
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="brand" className="px-8">
                  <a href="tel:+79890305555">Позвонить +7 989 030 5555</a>
                </Button>
                <Button asChild variant="brand-outline" className="px-8">
                  <a href="mailto:info@priboy-aquacomplex.ru">info@priboy-aquacomplex.ru</a>
                </Button>
              </div>
            </div>
        </Section>

        {/* Specialties */}
        <Section className="py-16 md:py-20 bg-white">
          <SectionHeader eyebrow="Рекомендуем" title="Фирменные блюда" centered className="mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialties.map((dish, index) => (
                <div key={index} className="bg-cream overflow-hidden group border border-border">
                  <div className="relative aspect-square overflow-hidden bg-cream-dark">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      onError={(e) => {
                        // Если изображение не найдено, показываем placeholder
                        e.currentTarget.src = "/placeholder.svg"
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-foreground mb-2">{dish.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{dish.description}</p>
                    <p className="text-terracotta font-semibold">{dish.price}</p>
                  </div>
                </div>
              ))}
            </div>
        </Section>

        {/* CTA */}
        <section className="py-16 bg-terracotta text-white text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы к незабываемому отдыху?
            </h2>
            <p className="text-lg mb-4 text-white/90">
              Забронируйте номер в Гранд Отель & SPA Прибой и получите скидку 50% на посещение аква-комплекса!
            </p>
            <p className="text-base mb-8 text-white/70">
              Бассейны, водные горки, детские зоны и кафе — всё для вашего комфорта
            </p>
            <Button asChild size="xl" variant="inverse" className="bg-white text-terracotta border-white hover:bg-cream hover:text-terracotta px-10 py-6 text-base font-medium">
              <Link href="/booking">Забронировать номер</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <AquaPromoModal />
      {selectedImageIndex !== null && (
        <ImageModal
          images={aquaImages}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex !== null}
          onClose={handleCloseModal}
          alt="Аква-комплекс"
        />
      )}
    </>
  )
}

