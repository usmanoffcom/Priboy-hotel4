"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import type { NewsPost } from "@/lib/news-data"

// Функция для парсинга русской даты
function parseRussianDate(dateStr: string): Date {
  const dateParts = dateStr.split(' ')
  const months: { [key: string]: string } = {
    'января': '01', 'февраля': '02', 'марта': '03', 'апреля': '04',
    'мая': '05', 'июня': '06', 'июля': '07', 'августа': '08',
    'сентября': '09', 'октября': '10', 'ноября': '11', 'декабря': '12'
  }
  if (dateParts.length === 3 && months[dateParts[1]]) {
    const day = dateParts[0].padStart(2, '0')
    const month = months[dateParts[1]]
    const year = dateParts[2]
    return new Date(`${year}-${month}-${day}`)
  }
  return new Date()
}

// Функция для форматирования даты
function formatDate(dateStr: string): string {
  try {
    const date = parseRussianDate(dateStr)
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

interface NewsListProps {
  news: NewsPost[]
}

export function NewsList({ news }: NewsListProps) {
  if (news.length === 0) {
    return (
      <section className="py-16 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Новости скоро появятся. Следите за обновлениями!
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-border hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {post.image && (
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {formatDate(post.date)}
                  </time>
                </div>
                <h2 className="text-xl font-medium text-foreground mb-3 line-clamp-2 group-hover:text-terracotta transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/news/${post.slug}`}
                  className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-light text-sm font-medium transition-colors"
                >
                  Читать далее
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
