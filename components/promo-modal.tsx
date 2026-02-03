"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const STORAGE_KEY = "promo_modal_last_shown"
const DELAY_MS = 30000 // 30 секунд
const COOLDOWN_MS = 24 * 60 * 60 * 1000 // 24 часа

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const lastShown = localStorage.getItem(STORAGE_KEY)
    const now = Date.now()

    if (lastShown) {
      const timeSinceLastShown = now - parseInt(lastShown, 10)
      if (timeSinceLastShown < COOLDOWN_MS) {
        return
      }
    }

    const timer = setTimeout(() => {
      setIsOpen(true)
      localStorage.setItem(STORAGE_KEY, now.toString())
    }, DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-md sm:max-w-lg md:max-w-xl overflow-hidden rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Фоновое изображение */}
        <div className="relative aspect-[4/5] sm:aspect-[4/4]">
          <Image
            src="/pool2.jpg"
            alt="Раннее бронирование — скидки на летний сезон"
            fill
            className="object-cover"
            priority
          />
          
          {/* Градиент для лучшей читаемости текста */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          
          {/* Контент поверх изображения */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm tracking-widest uppercase mb-2 text-white/80">
                Специальное предложение
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                РАННЕЕ БРОНИРОВАНИЕ
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-light tracking-wide">
                на летний сезон 2026
              </p>
            </div>
            
            <p className="text-xs sm:text-sm text-white/90 text-center mb-4 sm:mb-6 leading-relaxed">
              Забронируйте номер заранее и получите выгодные цены на отдых!
              <br />
              <span className="text-gold font-medium">Время предложения ограничено</span>
            </p>
            
            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="flex-1 bg-terracotta hover:bg-terracotta-light text-white rounded-none h-12 sm:h-14 text-sm sm:text-base font-medium"
              >
                <a 
                  href="https://t.me/grandpriboy/82" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Условия акции
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-white text-white hover:bg-white hover:text-foreground rounded-none h-12 sm:h-14 text-sm sm:text-base font-medium bg-white/10"
              >
                <a href="tel:+79883443333">
                  Позвонить
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
