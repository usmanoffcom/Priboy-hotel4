"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const slides = [
  "/slides/1.jpg",
  "/slides/2.jpg",
  "/slides/3.png",
  "/slides/4.png",
  "/slides/5.JPG",
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [mounted])

  // До гидратации — только первый слайд (LCP), остальные не запрашиваем
  const slidesToRender = mounted ? slides : [slides[0]]

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slidesToRender.map((slide, index) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt="Гранд Отель и СПА Прибой"
              fill
              className="object-cover"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : undefined}
              sizes="100vw"
              quality={index === 0 ? 75 : 70}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-hero-overlay z-10" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-white w-7"
                : "bg-white/35 hover:bg-white/60 w-1.5"
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-pill inline-flex items-center gap-2 mb-8 sm:mb-10 text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase text-white/90 font-medium">
          Лазаревский отель • Черноморское побережье
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-10 leading-[1.1] tracking-tight drop-shadow-lg">
          Гранд Отель и СПА
          <br />
          <span className="font-extrabold">«Прибой»</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4 drop-shadow-sm">
          Изысканный отдых в отеле с роскошным спа-комплексом, водяными горками и бассейном
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
          <Button
            asChild
            size="xl"
            variant="brand"
            className="tracking-wide"
          >
            <Link href="/booking">Забронировать номер</Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="inverse"
            className="tracking-wide"
          >
            <Link href="/rooms">Смотреть номера</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse z-20">
        <ChevronDown className="h-8 w-8 text-white/50 drop-shadow-lg" />
      </div>
    </section>
  )
}
