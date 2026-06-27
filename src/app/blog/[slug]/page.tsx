import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BLOG_POSTS, SITE } from "@/lib/data"

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: post.title,
    description: post.excerpt.replace(/&apos;/g, "'"),
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-widest">{post.category}</span>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mt-3 mb-4">{post.title}</h1>
          <p className="text-blue-200 text-sm">{post.date}</p>
        </div>
      </section>

      <div className="relative h-72 md:h-96 max-w-3xl mx-auto px-4 -mt-1">
        <div className="relative h-full rounded-2xl overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {post.body.split("\n\n").filter(Boolean).map((para, i) => (
            <p key={i} className="text-[#374151] leading-relaxed mb-5">{para.trim().replace(/&apos;/g, "'")}</p>
          ))}
        </div>

        <div className="mt-12 p-8 bg-[#EEF2FF] rounded-2xl border border-[#C9A84C]/20">
          <h3 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3">Ready to Study Abroad?</h3>
          <p className="text-[#6B7280] text-sm mb-5">Get a free profile evaluation from Versa Global&apos;s expert counsellors.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/#contact" className="bg-[#C9A84C] text-[#1B2A4A] font-bold px-6 py-2.5 rounded-lg hover:bg-[#E8C96A] transition-colors flex items-center gap-2 text-sm">
              Book Free Evaluation <ArrowRight size={16} />
            </Link>
            <a href={`tel:${SITE.phone}`} className="border border-[#1B2A4A] text-[#1B2A4A] font-semibold px-6 py-2.5 rounded-lg hover:bg-[#1B2A4A] hover:text-white transition-colors text-sm">
              {SITE.phone}
            </a>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-12 px-4 bg-[#F8F9FA]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-7">More Guides</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#C9A84C]/30 hover:shadow-md transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-[#C9A84C] text-xs font-bold">{p.category}</span>
                    <h3 className="font-playfair font-bold text-[#1B2A4A] mt-1 text-sm group-hover:text-[#C9A84C] transition-colors">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
