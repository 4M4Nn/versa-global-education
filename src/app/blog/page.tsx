import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { BLOG_POSTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Study Abroad Blog — Guides for Kerala Students",
  description: "Expert guides on UK visa, Canada PGWP, Germany free education and more — for Kerala students planning to study abroad.",
}

export default function BlogPage() {
  return (
    <div>
      <section className="bg-[#1B2A4A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-4">Resources</p>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-5">Study Abroad Guides</h1>
          <p className="text-blue-200 text-lg">Expert advice for Kerala students navigating universities, visas, and scholarships abroad.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#C9A84C]/30 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-[#1B2A4A] text-[#C9A84C] text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <div className="p-6">
                <p className="text-[#6B7280] text-xs mb-2">{post.date}</p>
                <h2 className="font-playfair font-bold text-[#1B2A4A] mb-2 group-hover:text-[#C9A84C] transition-colors">{post.title}</h2>
                <p className="text-[#6B7280] text-sm line-clamp-2">{post.excerpt.replace(/&apos;/g, "'")}</p>
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
