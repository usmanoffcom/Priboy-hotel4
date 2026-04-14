"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextLink } from "@/components/ui/text-link"

const navigation = [
  { name: "Номера", href: "/rooms" },
  { name: "Цены", href: "/prices" },
  { name: "SPA", href: "/spa" },
  { name: "Ресторан", href: "/restaurant" },
  { name: "Об отеле", href: "/o-komplekse" },
  { name: "Новости", href: "/news" },
  { name: "Блог", href: "/blog" },
  { name: "Контакты", href: "/contacts" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  
  // Определяем, находимся ли мы на странице номера
  const isRoomPage = pathname?.startsWith("/rooms/") && pathname !== "/rooms"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // На страницах номеров всегда используем светлую тему хедера
  const shouldUseLightTheme = isRoomPage || isScrolled
  const headerBg = shouldUseLightTheme
    ? "bg-cream/80 backdrop-blur-xl shadow-lg border-b border-white/30"
    : "bg-white/5 backdrop-blur-sm"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {shouldUseLightTheme ? (
              <Image
                src="/brown_logo.svg"
                alt="Гранд Отель & SPA Прибой"
                width={114}
                height={69}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            ) : (
              <Image
                src="/white_logo.png"
                alt="Гранд Отель & SPA Прибой"
                width={114}
                height={69}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5">
            {navigation.map((item) => (
              <TextLink
                key={item.name}
                href={item.href}
                className={`text-xs xl:text-sm font-medium tracking-tight transition-colors hover:opacity-70 whitespace-nowrap ${
                  shouldUseLightTheme ? "text-foreground" : "text-white hover:text-white"
                }`}
              >
                {item.name}
              </TextLink>
            ))}
          </div>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a
              href="tel:+79883443333"
              className={`flex items-center gap-1.5 text-xs xl:text-sm font-medium ${shouldUseLightTheme ? "text-foreground" : "text-white"}`}
            >
              <Phone className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
              <span className="hidden 2xl:inline">+7 (988) 344-33-33</span>
              <span className="2xl:hidden">+7 (988) 344-33-33</span>
            </a>
            <Button asChild variant="brand" className="px-4 xl:px-5 py-2 xl:py-2.5 font-medium text-xs xl:text-sm whitespace-nowrap">
              <Link href="/booking">Забронировать</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${shouldUseLightTheme ? "text-foreground" : "text-white"}`}
            aria-label="Меню"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-cream/85 backdrop-blur-2xl absolute top-20 sm:top-24 left-0 right-0 border-t border-white/20 shadow-xl">
            <div className="px-4 sm:px-6 py-6 sm:py-8 space-y-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-terracotta transition-colors py-1"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-5 border-t border-border space-y-5">
                <a href="tel:+79883443333" className="flex items-center gap-3 text-foreground font-medium">
                  <Phone className="h-5 w-5" />
                  +7 (988) 344-33-33
                </a>
                <Button asChild variant="brand" className="w-full py-3 font-medium">
                  <Link href="/booking">Забронировать</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
