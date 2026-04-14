import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getNewsBySlug, getRecentNews, newsPosts } from "@/lib/news-data"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { PageHero } from "@/components/ui/page-hero"
import { Section } from "@/components/ui/section"
import { SectionHeader } from "@/components/ui/section-header"
import { TextLink } from "@/components/ui/text-link"

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
        <PageHero
          title={post.title}
          description={post.excerpt}
          className="bg-cover bg-center"
          backgroundImage={post.image}
        />
        <section className="py-4 bg-foreground">
          <div className="site-container">
            <TextLink href="/news" className="inline-flex text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              <span>Вернуться к новостям</span>
            </TextLink>
          </div>
        </section>
        <section className="py-2 bg-foreground">
          <div className="site-container">
            <div className="flex items-center justify-center gap-2 text-sm text-white/70">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>
        </section>

        {/* Content */}
        <Section muted className="py-16">
          <div className="max-w-4xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-terracotta prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-video:w-full prose-video:rounded-sm prose-iframe:w-full prose-iframe:rounded-sm prose-iframe:my-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </Section>

        {/* Recent News */}
        {recentNews.length > 0 && (
          <Section className="py-16 bg-white">
            <SectionHeader title="Другие новости" className="mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentNews
                  .filter((item) => item.slug !== post.slug)
                  .slice(0, 3)
                  .map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="site-card bg-cream overflow-hidden group"
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
          </Section>
        )}
      </main>
      <Footer />
    </>
  )
}
