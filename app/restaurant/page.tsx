"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, Wine, UtensilsCrossed, Download } from "lucide-react"
import Link from "next/link"
import { ImageModal } from "@/components/image-modal"
import Image from "next/image"

const restaurantImages = [
  "/avenue.jpg",
  "/avenue.jpg",
  "/avenue.jpg",
]

export default function RestaurantPage() {
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
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/avenue.jpg"
              alt="Ресторан Авеню"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <p className="text-sm tracking-[0.2em] uppercase mb-4 text-gold">Гастрономия</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">Ресторан</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Кухня с акцентом на свежие черноморские морепродукты и лучшие традиции кавказской гастрономии
            </p>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-8 bg-terracotta text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5" />
                <span>08:00 – 23:00</span>
              </div>
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="h-5 w-5" />
                <span>Завтрак, обед, ужин</span>
              </div>
              <div className="flex items-center gap-3">
                <Wine className="h-5 w-5" />
                <span>Винная карта</span>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 md:py-20 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Ресторан Авеню</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Атмосфера изысканной гастрономии</h2>
            </div>
            <div className="relative w-full aspect-video overflow-hidden rounded-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="/avenue.jpg"
              >
                <source src="/restaurant-avenue.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">О ресторане</p>
                <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                  Вкус
                  <br />
                  черноморского
                  <br />
                  побережья
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Наш шеф-повар создаёт блюда, вдохновлённые богатыми традициями южной и кавказской кухни, используя
                  только свежайшие местные продукты.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Морепродукты доставляются каждое утро прямо с рыбацких лодок, овощи и зелень — с фермерских хозяйств
                  Краснодарского края. В нашем меню вы найдёте как традиционные блюда, так и авторские интерпретации
                  классики.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleImageClick(0)}
                  className="relative w-full h-64 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/avenue.jpg"
                    alt="Ресторан Авеню"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </button>
                <button
                  onClick={() => handleImageClick(1)}
                  className="relative w-full h-64 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity mt-8"
                >
                  <Image
                    src="/avenue.jpg"
                    alt="Ресторан Авеню"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </button>
                <button
                  onClick={() => handleImageClick(2)}
                  className="relative w-full h-64 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity col-span-2"
                >
                  <Image
                    src="/avenue.jpg"
                    alt="Ресторан Авеню"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Меню</p>
              <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">Меню ресторана 23 Avenue</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Ознакомьтесь с нашим актуальным меню, включающим авторские блюда из свежих морепродуктов и традиции кавказской кухни
              </p>
            </div>
            
            {/* PDF Preview Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-2 border-border rounded-lg overflow-hidden shadow-lg mb-8">
                {/* PDF Preview - Exact replica of the logo image */}
                <div className="relative bg-white p-8 md:p-12 flex items-center justify-center">
                  <div className="relative mx-auto" style={{ width: '400px', height: '500px' }}>
                    {/* Outer Rectangular Frame - Golden orange border */}
                    <div className="absolute inset-0" style={{ border: '4px solid #d97706' }}>
                      {/* Top border segment */}
                      <div className="absolute top-0 left-12 right-12 h-4" style={{ backgroundColor: '#d97706' }}></div>
                      {/* Bottom border segment */}
                      <div className="absolute bottom-0 left-12 right-12 h-4" style={{ backgroundColor: '#d97706' }}></div>
                      {/* Left border segment */}
                      <div className="absolute left-0 top-12 bottom-12 w-4" style={{ backgroundColor: '#d97706' }}></div>
                      {/* Right border segment */}
                      <div className="absolute right-0 top-12 bottom-12 w-4" style={{ backgroundColor: '#d97706' }}></div>
                      
                      {/* Corner L-shaped decorations with decorative elements */}
                      {/* Top-left corner */}
                      <div className="absolute top-0 left-0 w-12 h-12">
                        <div className="absolute top-0 left-0 w-12 h-4" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute top-0 left-0 w-4 h-12" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute top-3.5 left-5 w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
                        <div className="absolute top-5 left-2 w-5 h-1.5" style={{ backgroundColor: '#d97706' }}></div>
                      </div>
                      {/* Top-right corner */}
                      <div className="absolute top-0 right-0 w-12 h-12">
                        <div className="absolute top-0 right-0 w-12 h-4" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute top-0 right-0 w-4 h-12" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute top-3.5 right-5 w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
                        <div className="absolute top-5 right-2 w-5 h-1.5" style={{ backgroundColor: '#d97706' }}></div>
                      </div>
                      {/* Bottom-left corner */}
                      <div className="absolute bottom-0 left-0 w-12 h-12">
                        <div className="absolute bottom-0 left-0 w-12 h-4" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute bottom-0 left-0 w-4 h-12" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute bottom-3.5 left-5 w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
                        <div className="absolute bottom-5 left-2 w-5 h-1.5" style={{ backgroundColor: '#d97706' }}></div>
                      </div>
                      {/* Bottom-right corner */}
                      <div className="absolute bottom-0 right-0 w-12 h-12">
                        <div className="absolute bottom-0 right-0 w-12 h-4" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute bottom-0 right-0 w-4 h-12" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#d97706' }}></div>
                        <div className="absolute bottom-3.5 right-5 w-2 h-2 rounded-full" style={{ backgroundColor: '#f59e0b' }}></div>
                        <div className="absolute bottom-5 right-2 w-5 h-1.5" style={{ backgroundColor: '#d97706' }}></div>
                      </div>
                    </div>
                    
                    {/* Central Circular Logo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '240px', height: '240px' }}>
                      {/* Double Circle Border */}
                      <div className="absolute inset-0 rounded-full" style={{ border: '3px solid #d97706' }}></div>
                      <div className="absolute inset-0 rounded-full m-2.5" style={{ border: '2px solid #d97706' }}></div>
                      
                      {/* Top Element - Chef's hat / Cloche style */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                        <div className="relative" style={{ width: '36px', height: '28px' }}>
                          {/* Main dome shape */}
                          <div className="absolute top-2 left-1/2 -translate-x-1/2" 
                               style={{ 
                                 width: '28px', 
                                 height: '20px',
                                 border: '2.5px solid #d97706',
                                 borderBottom: 'none',
                                 borderRadius: '14px 14px 0 0'
                               }}></div>
                          {/* Top point/peak */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2" 
                               style={{ 
                                 width: '8px', 
                                 height: '8px',
                                 border: '2.5px solid #d97706',
                                 borderBottom: 'none',
                                 borderRadius: '50% 50% 0 0',
                                 backgroundColor: 'transparent'
                               }}></div>
                          {/* Side decorative circles */}
                          <div className="absolute top-4 left-1" 
                               style={{ 
                                 width: '6px', 
                                 height: '6px',
                                 border: '2px solid #d97706',
                                 borderRadius: '50%',
                                 backgroundColor: 'transparent'
                               }}></div>
                          <div className="absolute top-4 right-1" 
                               style={{ 
                                 width: '6px', 
                                 height: '6px',
                                 border: '2px solid #d97706',
                                 borderRadius: '50%',
                                 backgroundColor: 'transparent'
                               }}></div>
                        </div>
                      </div>
                      
                      {/* Inner Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        {/* Number 23 - Largest and boldest */}
                        <div className="text-5xl font-bold mb-1" style={{ color: '#d97706', fontFamily: 'system-ui, sans-serif', lineHeight: '1.2' }}>
                          23
              </div>
              
                        {/* Avenue - Elegant script */}
                        <div className="text-3xl mb-1" style={{ color: '#d97706', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 'normal', lineHeight: '1.2' }}>
                          Avenue
              </div>
              
                        {/* EST. 2020 - Small sans-serif uppercase */}
                        <div className="text-xs uppercase tracking-widest mb-2" style={{ color: '#d97706', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.15em' }}>
                          EST. 2020
              </div>
              
                        {/* RESTAURANT - Bottom, sans-serif uppercase */}
                        <div className="absolute bottom-10 left-0 right-0">
                          <div className="text-base uppercase tracking-widest text-center" style={{ color: '#d97706', fontFamily: 'system-ui, sans-serif', fontWeight: '500', letterSpacing: '0.2em' }}>
                            RESTAURANT
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
            
                {/* Download Section */}
                <div className="bg-cream p-6 md:p-8 border-t border-border">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-semibold text-foreground mb-2">Меню ресторана 23 Avenue</h3>
                      <p className="text-sm text-muted-foreground">
                        Скачайте полное меню с актуальными ценами и описанием блюд
                      </p>
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8 py-6 gap-2"
                    >
                      <a href="/menu_avenue23.pdf" download="menu_avenue23.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="h-5 w-5" />
                        Скачать меню (PDF)
                      </a>
                    </Button>
                  </div>
                </div>
            </div>
            
              {/* Additional Info */}
            <div className="bg-terracotta/10 p-8 border border-terracotta/20 rounded-lg text-center">
              <p className="text-foreground mb-4 font-medium">
                  Меню обновляется регулярно. Актуальные цены и наличие блюд уточняйте у официанта
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10 rounded-none px-8">
                  <a href="tel:+79883443333">Запросить меню по телефону</a>
                </Button>
                <Button asChild variant="outline" className="border-terracotta text-terracotta hover:bg-terracotta/10 rounded-none px-8">
                  <a href="mailto:booking@priboy-spa.ru">Запросить меню по email</a>
                </Button>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wine */}
        <section className="py-16 md:py-20 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src="/avenue.jpg"
                  alt="Винная карта"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-gold mb-4">Винная карта</p>
                <h2 className="text-4xl font-light text-white mb-6">Винная карта и коктейли</h2>
                <p className="text-white/80 leading-relaxed">
                  В нашем ресторане представлена хорошая винная карта и разнообразные фирменные и классические коктейли.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-cream text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">Забронируйте номер с питанием</h2>
            <p className="text-muted-foreground mb-8">
              Выберите вариант "Только завтраки" или "Полный пансион" при бронировании номера
            </p>
            <Button asChild size="lg" className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-10">
              <Link href="/booking">Перейти к бронированию</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      {selectedImageIndex !== null && (
        <ImageModal
          images={restaurantImages}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex !== null}
          onClose={handleCloseModal}
          alt="Ресторан"
        />
      )}
    </>
  )
}
