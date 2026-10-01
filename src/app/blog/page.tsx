import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { BLOG_TOPIC_LINKS } from "@/lib/data"
import { getAllBlogPosts } from "@/lib/content"

const BASE = "https://www.versaglobal.in"
const clean = (text: string) => text.replace(/&apos;/g, "'")

export const metadata: Metadata = {
  title: "Study Abroad Blog — MBBS Abroad, Dubai IT Careers, Visa & Scholarship Guides",
  description:
    "Practical guides from Versa Global: MBBS abroad after NEET, FMGE, the job-assured Dubai IT program, UK, Canada, Australia and Germany visas, English tests, scholarships and education loans.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  const BLOG_POSTS = getAllBlogPosts()

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Versa Global Study Abroad Guides",
      url: `${BASE}/blog`,
      inLanguage: "en-IN",
      blogPost: BLOG_POSTS.map((post) => ({
        "@type": "BlogPosting",
        headline: clean(post.title),
        url: `${BASE}/blog/${post.slug}`,
        ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      ],
    },
  ]

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Resources</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">Study Abroad Guides</h1>
          <p className="text-blue-200 text-lg">Expert advice for students navigating universities, visas, and financing options abroad.</p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {BLOG_TOPIC_LINKS.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="inline-flex items-center gap-1.5 border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#C9A84C]/10 transition-colors"
              >
                {topic.label} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#C9A84C]/30 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={clean(post.title)} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-[#1B2A4A] text-[#C9A84C] text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <div className="p-6">
                <p className="text-[#6B7280] text-xs mb-2">{post.date}</p>
                <h2 className="font-playfair font-bold text-[#1B2A4A] mb-2 group-hover:text-[#C9A84C] transition-colors">{clean(post.title)}</h2>
                <p className="text-[#6B7280] text-sm line-clamp-2">{clean(post.excerpt)}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#C9A84C] mt-4">
                  Read Guide <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
