import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogList } from "@/components/blog-list"
import { blogPosts, getBlogCategories } from "@/lib/blog-data"
import type { Metadata } from "next"
import { PageHero } from "@/components/ui/page-hero"

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
        <PageHero
          eyebrow="Наш блог"
          title="Полезный Блог от Лучшего Отеля в Лазаревское"
          description="Отдых в Лазаревском: здоровье, комфорт и главные достопримечательности"
          className="bg-cover bg-center"
          backgroundImage="https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg"
        />

        {/* Blog List with Categories */}
        <BlogList posts={serializedPosts} categories={categories} />
      </main>
      <Footer />
    </>
  )
}
