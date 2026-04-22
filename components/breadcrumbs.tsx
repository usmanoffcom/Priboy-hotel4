import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { serializeJsonLd } from "@/lib/json-ld"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbItems = [
    { label: "Главная", href: "/" },
    ...items,
  ]

  // Структурированные данные для Schema.org
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `https://priboy-spa.ru${item.href}` }),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(structuredData),
        }}
      />
      <nav
        className="absolute top-20 sm:top-24 left-0 right-0 z-10 bg-transparent py-3"
        aria-label="Хлебные крошки"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1

              return (
                <li key={index} className="flex items-center gap-2">
                  {index === 0 ? (
                    <Link
                      href={item.href || "/"}
                      className="text-muted-foreground hover:text-terracotta transition-colors flex items-center gap-1"
                      aria-label="Главная страница"
                    >
                      <Home className="h-4 w-4" />
                    </Link>
                  ) : (
                    <>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      {isLast ? (
                        <span className="text-foreground font-medium" aria-current="page">
                          {item.label}
                        </span>
                      ) : (
                        <Link
                          href={item.href || "#"}
                          className="text-muted-foreground hover:text-terracotta transition-colors"
                        >
                          {item.label}
                        </Link>
                      )}
                    </>
                  )}
                </li>
              )
            })}
          </ol>
        </div>
      </nav>
    </>
  )
}
