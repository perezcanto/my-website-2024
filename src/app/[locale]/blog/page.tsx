"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FiCalendar, FiClock, FiArrowRight, FiSearch, FiTag } from "react-icons/fi"

// Blog post data
const blogPosts = [
  {
    id: "modern-web-development",
    title: "Modern Web Development Techniques for 2023",
    excerpt:
      "Exploring the latest frameworks, tools, and methodologies that are shaping the future of web development.",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF/png",
    date: "2023-06-15",
    readTime: "8 min read",
    category: "Development",
    tags: ["Web Development", "JavaScript", "React", "Next.js"],
    featured: true,
  },
  {
    id: "ux-design-principles",
    title: "Essential UX Design Principles Every Developer Should Know",
    excerpt:
      "Understanding the fundamental principles of user experience design can dramatically improve the quality of your applications.",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF/png",
    date: "2023-05-28",
    readTime: "6 min read",
    category: "Design",
    tags: ["UX Design", "UI", "Design Principles", "Accessibility"],
    featured: true,
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt:
      "Learn how to structure your TypeScript projects for maintainability, performance, and developer productivity.",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF/png",
    date: "2023-05-10",
    readTime: "10 min read",
    category: "Development",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Architecture"],
    featured: false,
  },
  {
    id: "responsive-design-strategies",
    title: "Responsive Design Strategies for Modern Websites",
    excerpt:
      "Discover effective approaches to building websites that work flawlessly across all devices and screen sizes.",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF/png",
    date: "2023-04-22",
    readTime: "7 min read",
    category: "Design",
    tags: ["Responsive Design", "CSS", "Mobile First", "Media Queries"],
    featured: false,
  },
  {
    id: "api-design-principles",
    title: "API Design Principles for Scalable Backend Systems",
    excerpt: "Learn how to design robust, scalable, and developer-friendly APIs that stand the test of time.",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF/png",
    date: "2023-04-05",
    readTime: "9 min read",
    category: "Backend",
    tags: ["API Design", "REST", "GraphQL", "Backend Development"],
    featured: false,
  },
  {
    id: "performance-optimization",
    title: "Web Performance Optimization Techniques",
    excerpt:
      "Practical strategies to improve loading times, reduce bundle sizes, and create lightning-fast web experiences.",
    coverImage: "https://placehold.co/600x400/000000/FFFFFF/png",
    date: "2023-03-18",
    readTime: "11 min read",
    category: "Performance",
    tags: ["Web Performance", "Optimization", "Core Web Vitals", "Lighthouse"],
    featured: false,
  },
]

// Categories for filtering
const categories = [
  { id: "all", label: "All" },
  { id: "development", label: "Development" },
  { id: "design", label: "Design" },
  { id: "backend", label: "Backend" },
  { id: "performance", label: "Performance" },
]

// Featured Post Component
const FeaturedPost = ({ post }: { post: (typeof blogPosts)[0] }) => {
  return (
    <article className="group relative grid grid-cols-1 overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl lg:grid-cols-2">
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between p-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
              Featured
            </span>
            <span className="inline-flex items-center text-sm text-gray-500">
              <FiCalendar className="mr-1 h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h2 className="mb-4 text-2xl font-bold leading-tight transition-colors group-hover:text-black md:text-3xl">
            {post.title}
          </h2>

          <p className="mb-6 text-gray-600">{post.excerpt}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
              >
                <FiTag className="mr-1 h-3 w-3" />
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{post.category}</span>
          <span className="flex items-center text-sm text-gray-500">
            <FiClock className="mr-1 h-4 w-4" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative order-first h-60 w-full overflow-hidden lg:order-last lg:h-auto">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Overlay link */}
      <Link href={`/blog/${post.id}`} className="absolute inset-0 z-20">
        <span className="sr-only">Read more about {post.title}</span>
      </Link>
    </article>
  )
}

// Blog Post Card Component
const BlogPostCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
              {post.category}
            </span>
            <span className="inline-flex items-center">
              <FiCalendar className="mr-1 h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          <h3 className="mb-2 text-xl font-bold leading-tight transition-colors group-hover:text-black">
            {post.title}
          </h3>

          <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-medium">{post.category}</span>
          <span className="flex items-center text-xs text-gray-500">
            <FiClock className="mr-1 h-3 w-3" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Overlay link */}
      <Link href={`/blog/${post.id}`} className="absolute inset-0 z-20">
        <span className="sr-only">Read more about {post.title}</span>
      </Link>
    </article>
  )
}

// Newsletter Subscription Component
const NewsletterSubscription = () => {
  return (
    <form
      className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gray-50 opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gray-50 opacity-50"></div>

      <div className="relative z-10">
        <h3 className="mb-2 text-2xl font-bold">Subscribe to my newsletter</h3>
        <p className="mb-6 text-gray-600">
          Get the latest articles, tutorials, and updates delivered straight to your inbox.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-all hover:bg-gray-800"
          >
            Subscribe
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          By subscribing, you agree to our Privacy Policy. No spam, unsubscribe anytime.
        </p>
      </div>
    </form>
  )
}

export default function BlogPage() {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter posts based on active category
  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category.toLowerCase() === activeCategory.toLowerCase())

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-100 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 to-white"></div>

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">Blog</h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
                Thoughts, tutorials, and insights on web development, design, and technology.
              </p>

              {/* Search Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium transition-all hover:border-gray-300 hover:shadow-md"
                >
                  <FiSearch className="h-4 w-4 text-gray-500" />
                  <span>Search articles, topics, or keywords...</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="w-full border-b border-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <h2 className="text-2xl font-bold">Featured Articles</h2>
            </div>

            <div className="space-y-8">
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="text-2xl font-bold">All Articles</h2>

              <div className="flex flex-wrap items-center gap-3">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                        activeCategory === category.id
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg text-gray-600">No articles found in this category.</p>
                <button
                  onClick={() => setActiveCategory("all")}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                >
                  View all articles
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredPosts.length > 0 && (
              <div className="mt-12 text-center">
                <button className="group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-medium transition-all hover:border-gray-300 hover:shadow-md">
                  Load more articles
                  <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full border-t border-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <NewsletterSubscription />
          </div>
        </div>
      </section>
    </main>
  )
}

