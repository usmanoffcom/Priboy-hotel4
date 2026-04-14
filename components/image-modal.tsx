"use client"

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageModalContextType {
  openModal: (images: string[], index?: number) => void
  closeModal: () => void
}

const ImageModalContext = createContext<ImageModalContextType | null>(null)

export function useImageModal() {
  const context = useContext(ImageModalContext)
  if (!context) {
    throw new Error("useImageModal must be used within ImageModalProvider")
  }
  return context
}

export function ImageModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openModal = useCallback((imgs: string[], index = 0) => {
    setImages(imgs)
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ""
  }, [])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  return (
    <ImageModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                aria-label="Следующее фото"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {images[currentIndex]?.endsWith('.mp4') ? (
              <video
                src={images[currentIndex]}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={images[currentIndex]}
                alt="Фото отеля Гранд Прибой в Лазаревском"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            )}
          </div>

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </ImageModalContext.Provider>
  )
}

// Clickable image component
interface ClickableImageProps {
  src: string
  alt: string
  gallery?: string[]
  index?: number
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  /** По умолчанию лёгкое затемнение при hover; для сеток превью с scale — false */
  hoverOpacity?: boolean
}

export function ClickableImage({
  src,
  alt,
  gallery,
  index = 0,
  fill = true,
  className = "object-cover",
  sizes,
  priority = false,
  hoverOpacity = true,
}: ClickableImageProps) {
  const { openModal } = useImageModal()
  
  const handleClick = () => {
    const images = gallery || [src]
    openModal(images, index)
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={cn(
        className,
        "cursor-pointer",
        hoverOpacity && "hover:opacity-90 transition-opacity",
      )}
      sizes={sizes}
      priority={priority}
      onClick={handleClick}
    />
  )
}

// Standalone ImageModal component for pages that manage their own state
interface ImageModalProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  alt: string
}

export function ImageModal({ images, currentIndex, isOpen, onClose, alt }: ImageModalProps) {
  const [index, setIndex] = useState(currentIndex)

  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        aria-label="Закрыть"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image */}
      <div
        className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {images[index]?.endsWith('.mp4') ? (
          <video
            src={images[index]}
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        ) : (
          <Image
            src={images[index]}
            alt={alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        )}
      </div>

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  )
}
