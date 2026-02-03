import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getNewsBySlug, getRecentNews, newsPosts } from "@/lib/news-data"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface NewsPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return newsPosts.map((post) => ({
    slug: post.slug,
  }))
}

export const dynamicParams = true

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getNewsBySlug(slug)

  if (!post) {
    return {
      title: "Новость не найдена",
    }
  }

  return {
    title: `${post.title} | Новости отеля | Гранд Отель & SPA Прибой`,
    description: post.excerpt,
    alternates: {
      canonical: `https://priboy-spa.ru/news/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://priboy-spa.ru/news/${slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
  }
}

export default async function NewsPostPage({ params }: NewsPageProps) {
  const { slug } = await params
  const post = getNewsBySlug(slug)
  const recentNews = getRecentNews(3)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Вернуться к новостям</span>
            </Link>
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-4">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
                {post.title}
              </h1>
              {post.excerpt && (
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16 bg-cream">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-terracotta prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-video:w-full prose-video:rounded-sm prose-iframe:w-full prose-iframe:rounded-sm prose-iframe:my-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Recent News */}
        {recentNews.length > 0 && (
          <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-light text-foreground mb-8">Другие новости</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentNews
                  .filter((item) => item.slug !== post.slug)
                  .slice(0, 3)
                  .map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="bg-cream border border-border hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    >
                      {item.image && (
                        <div className="relative w-full h-48 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <time dateTime={item.date}>{item.date}</time>
                        </div>
                        <h3 className="text-lg font-medium text-foreground mb-2 line-clamp-2 group-hover:text-terracotta transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {item.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
