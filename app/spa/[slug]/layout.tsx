import type { Metadata } from "next"
import { spaServices, getSpaServiceBySlug } from "@/lib/spa-data"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getSpaServiceBySlug(slug)

  if (!service) {
    return {
      title: "Услуга не найдена",
    }
  }

  const baseUrl = "https://priboy-spa.ru"
  const url = `${baseUrl}/spa/${slug}`

  return {
    title: `${service.name} | SPA Комплекс | Гранд Отель & SPA Прибой`,
    description: service.shortDescription || service.fullDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.name} | Гранд Отель & SPA Прибой`,
      description: service.shortDescription || service.fullDescription,
      url: url,
      images: service.image ? [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ] : undefined,
    },
  }
}

export default function SpaServiceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

