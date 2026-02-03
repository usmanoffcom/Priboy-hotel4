import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog-list"
import { blogPosts, getBlogCategories } from "@/lib/blog-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Полезный Блог от Лучшего Отеля в Лазаревское | Гранд Отель & SPA Прибой",
  description: "Отдых в Лазаревском: здоровье, комфорт и главные достопримечательности. Полезные статьи о курорте, SPA-процедурах, достопримечательностях и отдыхе в Лазаревском.",
  alternates: {
    canonical: "https://priboy-spa.ru/blog",
  },
  openGraph: {
    title: "Полезный Блог от Лучшего Отеля в Лазаревское",
    description: "Отдых в Лазаревском: здоровье, комфорт и главные достопримечательности. Полезные статьи о курорте, SPA-процедурах, достопримечательностях и отдыхе в Лазаревском.",
    url: "https://priboy-spa.ru/blog",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Блог Гранд Отель & SPA Прибой",
      },
    ],
    type: "website",
  },
}

export default function BlogPage() {
  const categories = getBlogCategories()
  
  // Serialize blog posts for client component
  const serializedPosts = blogPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
  }))

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-3">Наш блог</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
                Полезный Блог от Лучшего Отеля в Лазаревское
              </h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Отдых в Лазаревском: здоровье, комфорт и главные достопримечательности
              </p>
            </div>
          </div>
        </section>

        {/* Blog List with Categories */}
        <BlogList posts={serializedPosts} categories={categories} />
      </main>
      <Footer />
    </>
  )
}
