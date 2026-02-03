import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Статья не найдена",
    }
  }

  const baseUrl = "https://priboy-spa.ru"
  const url = `${baseUrl}/blog/${slug}`
  
  // Полный URL для изображения (если локальный путь, добавляем baseUrl)
  const imageUrl = post.image.startsWith('http') 
    ? post.image 
    : `${baseUrl}${post.image}`

  return {
    title: `${post.title} | Блог отеля Прибой`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: url,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "ru_RU",
      siteName: "Гранд Отель & SPA Прибой",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3)
  const otherPosts = relatedPosts.length > 0 ? relatedPosts : blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('${post.image}')`,
          }}
          aria-label={`Изображение для статьи: ${post.title}`}
        >
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
            <span className="inline-block bg-terracotta text-white text-sm px-4 py-1 mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-5xl font-light mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="py-4 bg-cream border-b border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-terracotta transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Посмотреть все статьи
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>
              {post.content ? (
                <div 
                  className="text-base text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <>
                  <p className="text-base text-foreground leading-relaxed">
                    Лазаревское – это место, где можно совместить приятный отдых у моря с оздоровительными процедурами и
                    насыщенной экскурсионной программой. Планируя поездку, важно учитывать все детали, чтобы провести время
                    с комфортом и пользой для здоровья.
                  </p>
                  <p className="text-base text-foreground leading-relaxed mt-4">
                    Гранд Отель & SPA «Прибой» в Лазаревском предлагает комфортные условия для отдыха: современные номера,
                    SPA-комплекс с бассейнами и банями, ресторан. Забронируйте номер и откройте для себя
                    лучший отдых на Черноморском побережье.
                  </p>
                </>
              )}
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-cream-dark">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-light text-foreground mb-4">Готовы к отдыху?</h3>
            <p className="text-muted-foreground mb-6">Забронируйте номер в Гранд Отель & SPA Прибой</p>
            <Button asChild className="bg-terracotta hover:bg-terracotta-light text-white rounded-none px-8">
              <Link href="/booking">Забронировать</Link>
            </Button>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-light text-foreground mb-8 text-center">Другие статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-cream border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-terracotta text-white text-xs px-2 py-1">
                      {relatedPost.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-medium text-foreground group-hover:text-terracotta transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
