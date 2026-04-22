import { MetadataRoute } from 'next'
import { rooms } from '@/lib/rooms-data'
import { blogPosts } from '@/lib/blog-data'
import { spaServices } from '@/lib/spa-data'
import { attractions } from '@/lib/lazarevskoe-data'
import { services } from '@/lib/services-data'
import { newsPosts } from '@/lib/news-data'

const baseUrl = 'https://priboy-spa.ru'

const RU_MONTHS: Record<string, string> = {
  января: '01',
  февраля: '02',
  марта: '03',
  апреля: '04',
  мая: '05',
  июня: '06',
  июля: '07',
  августа: '08',
  сентября: '09',
  октября: '10',
  ноября: '11',
  декабря: '12',
}

/** Даты вида «27 января 2026» из контента → lastModified для sitemap */
function lastModifiedFromRuDate(dateRu: string): Date {
  const parts = dateRu.trim().split(/\s+/)
  if (parts.length !== 3) return new Date()
  const [dayRaw, monthName, year] = parts
  const month = RU_MONTHS[monthName.toLowerCase()]
  if (!month) return new Date()
  const day = dayRaw.padStart(2, '0')
  return new Date(`${year}-${month}-${day}`)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/o-komplekse`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/rooms`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/spa`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/restaurant`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/entertainment`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/news`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/prices`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/booking`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contacts`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/events`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/pravila-prozhivaniya`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/otmena-bronirovaniya`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/rekvizity`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/lazarevskoe`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/lazarevskoe/dostoprimechatelnosti`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/lazarevskoe/plyazhi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/lazarevskoe/letom`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/lazarevskoe/zimoy`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/kak-dobratsya`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/uslugi`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/oteli-lazarevskoe`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
  ]

  const roomPages: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: lastModifiedFromRuDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const spaPages: MetadataRoute.Sitemap = spaServices.map((service) => ({
    url: `${baseUrl}/spa/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const attractionPages: MetadataRoute.Sitemap = attractions.map((attraction) => ({
    url: `${baseUrl}/lazarevskoe/dostoprimechatelnosti/${attraction.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/uslugi/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const newsPages: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: lastModifiedFromRuDate(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...roomPages, ...blogPages, ...spaPages, ...attractionPages, ...servicePages, ...newsPages]
}
