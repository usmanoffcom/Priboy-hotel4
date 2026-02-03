"use client"

import { useState, useMemo } from "react"
import { BlogCategories } from "./blog-categories"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  image?: string
  category: string
  date: string
  readTime: string
}

interface BlogListProps {
  posts: BlogPost[]
  categories: string[]
}

export function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return posts
    return posts.filter((post) => post.category === selectedCategory)
  }, [posts, selectedCategory])

  const featuredPost = filteredPosts[0]
  const otherPosts = filteredPosts.slice(1)

  return (
    <>
      {/* Categories */}
      <section className="py-6 bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-72 lg:h-96 overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                    priority
                  />
                  <span className="absolute top-4 left-4 bg-terracotta text-white text-xs px-3 py-1">
                    {featuredPost.category}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 group-hover:text-terracotta transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-terracotta font-medium">
                    Читать далее
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other Posts Grid */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                В этой категории пока нет статей
              </p>
            </div>
          ) : otherPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-terracotta text-white text-xs px-2 py-1">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-terracotta transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                Больше статей в этой категории скоро появятся
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

