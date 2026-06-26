import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { BLOG_POSTS, WA_URL } from "@/lib/data"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return {}
  return { title: `${post.title} | Versa Global`, description: post.excerpt }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) notFound()

  const paragraphs = post.body.split("\n\n")

  return (
    <main className="pt-24 pb-20 bg-[#F8F6F0]">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="text-[#C9A84C] text-xs tracking-widest uppercase mb-6 inline-block hover:underline">← All Articles</Link>
        <span className="text-xs px-3 py-1 rounded mb-4 inline-block" style={{ background:"#C9A84C20", color:"#C9A84C" }}>{post.tag}</span>
        <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-[#1B2A4A] mt-3 mb-4 leading-tight">{post.title}</h1>
        <p className="text-[#6B7280] text-sm mb-10">{post.date}</p>
        <div className="prose max-w-none mb-12">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-[#6B7280] leading-relaxed mb-4">{para}</p>
          ))}
        </div>
        <div className="navy-card rounded-2xl p-8 text-center">
          <h2 className="font-cormorant text-2xl font-bold text-white mb-2">Ready to Start Your Study Abroad Journey?</h2>
          <p className="text-[#A8B89A] text-sm mb-5">Our counselors answer all your questions — for free. No commitment required.</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-[#C9A84C] text-white text-sm font-bold tracking-widest hover:bg-[#E8C96A] transition-colors">WhatsApp for Free Counselling</a>
        </div>
      </div>
    </main>
  )
}
