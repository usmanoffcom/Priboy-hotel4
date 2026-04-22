"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

type Props = {
  src: string
  poster: string
  posterAlt?: string
  className?: string
  videoClassName?: string
}

/**
 * Показывает poster-картинку до тех пор, пока элемент не окажется в viewport,
 * после чего монтирует <video autoplay loop muted playsInline>. Это избавляет
 * от скачивания тяжёлого mp4 на других страницах и экранах вне видимости.
 */
export function LazyVideo({ src, poster, posterAlt = "", className, videoClassName }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === "undefined") {
      setActive(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true)
          io.disconnect()
        }
      },
      { rootMargin: "200px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {active ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          className={videoClassName ?? "w-full h-full object-cover"}
        >
          <source src={src} type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      ) : (
        <Image
          src={poster}
          alt={posterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
          priority={false}
        />
      )}
    </div>
  )
}
