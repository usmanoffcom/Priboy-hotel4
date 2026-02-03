"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function TravellineBooking() {
  const initAttempted = useRef(false)
  const pathname = usePathname()

  useEffect(() => {
    // Очищаем контейнер при уходе со страницы booking
    if (pathname !== "/booking") {
      const container = document.getElementById("tl-booking-form")
      if (container) {
        // Безопасная очистка контейнера
        while (container.firstChild) {
          container.removeChild(container.firstChild)
        }
      }
      initAttempted.current = false
      return
    }

    // Сбрасываем флаг при переходе на страницу booking
    initAttempted.current = false
  }, [pathname])

  useEffect(() => {
    // Инициализируем только на странице booking
    if (pathname !== "/booking") {
      return
    }
    // Функция инициализации TravelLine
    const initTravelLine = () => {
      const container = document.getElementById("tl-booking-form")
      if (!container) {
        return false
      }

      // Проверяем, что контейнер пустой (форма еще не загружена)
      if (container.children.length > 0) {
        return true // Форма уже загружена
      }

      const w = window as any
      
      // Если TravelLine уже загружен, пытаемся инициализировать форму напрямую
      if (w.TL && typeof w.TL.embed === "function") {
        try {
          w.TL.embed("booking-form", {
            container: "tl-booking-form"
          })
          return true
        } catch (e) {
          console.log("TravelLine embed error:", e)
        }
      }

      // Инициализируем TravelLine, если еще не инициализирован
      if (!w.travelline?.integration?.__loader) {
        const q = [
          ["setContext", "TL-INT-priboy-spa-ru_2025-06-23", "ru"],
          ["embed", "booking-form", {
            container: "tl-booking-form"
          }]
        ]
        const h = ["ru-ibe.tlintegration.ru", "ibe.tlintegration.ru", "ibe.tlintegration.com"]
        const t = w.travelline = (w.travelline || {})
        const ti = t.integration = (t.integration || {})
        ti.__cq = ti.__cq ? ti.__cq.concat(q) : q

        if (!ti.__loader) {
          ti.__loader = true
          const d = w.document
          const c = d.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]
          
          function e(s: HTMLScriptElement, f: () => void) {
            return function() {
              if (!w.TL) {
                try {
                  c.removeChild(s)
                } catch (e) {
                  // Игнорируем ошибки удаления
                }
                f()
              }
            }
          }

          function l(hosts: string[]) {
            if (hosts.length === 0) return
            const s = d.createElement("script")
            s.type = "text/javascript"
            s.async = true
            s.src = "https://" + hosts[0] + "/integration/loader.js"
            s.onerror = s.onload = e(s, function() {
              l(hosts.slice(1, hosts.length))
            })
            c.appendChild(s)
          }

          l(h)
        }
        return true
      }

      // Если TravelLine уже инициализирован, добавляем команду в очередь
      if (w.travelline?.integration) {
        const q = [
          ["setContext", "TL-INT-priboy-spa-ru_2025-06-23", "ru"],
          ["embed", "booking-form", {
            container: "tl-booking-form"
          }]
        ]
        w.travelline.integration.__cq = w.travelline.integration.__cq 
          ? w.travelline.integration.__cq.concat(q) 
          : q
        return true
      }

      return false
    }

    // Первая попытка инициализации
    if (!initAttempted.current) {
      initAttempted.current = true
      
      // Пытаемся инициализировать сразу
      if (initTravelLine()) {
        return
      }

      // Если не получилось, ждем немного и пробуем снова
      const timeout1 = setTimeout(() => {
        if (initTravelLine()) {
          clearTimeout(timeout2)
        }
      }, 100)

      const timeout2 = setTimeout(() => {
        if (initTravelLine()) {
          return
        }
      }, 500)

      // Если все еще не получилось, пробуем после полной загрузки
      if (document.readyState === "complete") {
        setTimeout(initTravelLine, 1000)
      } else {
        window.addEventListener("load", () => {
          setTimeout(initTravelLine, 500)
        })
      }

      return () => {
        clearTimeout(timeout1)
        clearTimeout(timeout2)
      }
    }
  }, [pathname])

  return null
}

