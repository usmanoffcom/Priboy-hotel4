"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogCategoriesProps {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export function BlogCategories({ categories, selectedCategory, onCategoryChange }: BlogCategoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="relative">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-foreground hover:bg-cream transition-colors"
          aria-label="Прокрутить влево"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}

      {/* Categories Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-1 py-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <button
          onClick={() => onCategoryChange(null)}
          className={`flex-shrink-0 px-4 py-2 text-sm rounded-none transition-colors whitespace-nowrap ${
            selectedCategory === null
              ? "bg-terracotta text-white"
              : "border border-border text-foreground hover:bg-cream"
          }`}
        >
          Все статьи
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`flex-shrink-0 px-4 py-2 text-sm rounded-none transition-colors whitespace-nowrap ${
              selectedCategory === category
                ? "bg-terracotta text-white"
                : "border border-border text-foreground hover:bg-cream"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md rounded-full flex items-center justify-center text-foreground hover:bg-cream transition-colors"
          aria-label="Прокрутить вправо"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

