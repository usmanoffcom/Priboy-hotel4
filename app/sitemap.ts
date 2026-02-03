import { MetadataRoute } from 'next'
import { rooms } from '@/lib/rooms-data'
import { blogPosts } from '@/lib/blog-data'
import { spaServices } from '@/lib/spa-data'
import { attractions } from '@/lib/lazarevskoe-data'
import { services } from '@/lib/services-data'
import { newsPosts } from '@/lib/news-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://priboy-spa.ru'
  
  // Статические страницы
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/o-komplekse`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rooms`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/spa`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/restaurant`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/entertainment`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prices`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/pravila-prozhivaniya`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/otmena-bronirovaniya`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/rekvizity`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // Новые страницы о Лазаревском
    {
      url: `${baseUrl}/lazarevskoe`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lazarevskoe/dostoprimechatelnosti`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lazarevskoe/plyazhi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lazarevskoe/letom`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lazarevskoe/zimoy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kak-dobratsya`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/uslugi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/oteli-lazarevskoe`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Динамические страницы номеров
  const roomPages: MetadataRoute.Sitemap = rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Динамические страницы блога
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Динамические страницы SPA
  const spaPages: MetadataRoute.Sitemap = spaServices.map((service) => ({
    url: `${baseUrl}/spa/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Динамические страницы достопримечательностей
  const attractionPages: MetadataRoute.Sitemap = attractions.map((attraction) => ({
    url: `${baseUrl}/lazarevskoe/dostoprimechatelnosti/${attraction.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Динамические страницы услуг
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/uslugi/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Динамические страницы новостей
  const newsPages: MetadataRoute.Sitemap = newsPosts.map((post) => {
    // Парсим русскую дату в формат Date
    const dateParts = post.date.split(' ')
    const months: { [key: string]: string } = {
      'января': '01', 'февраля': '02', 'марта': '03', 'апреля': '04',
      'мая': '05', 'июня': '06', 'июля': '07', 'августа': '08',
      'сентября': '09', 'октября': '10', 'ноября': '11', 'декабря': '12'
    }
    let lastModified = new Date()
    if (dateParts.length === 3 && months[dateParts[1]]) {
      const day = dateParts[0].padStart(2, '0')
      const month = months[dateParts[1]]
      const year = dateParts[2]
      lastModified = new Date(`${year}-${month}-${day}`)
    }
    
    return {
      url: `${baseUrl}/news/${post.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  })

  return [...staticPages, ...roomPages, ...blogPages, ...spaPages, ...attractionPages, ...servicePages, ...newsPages]
}
