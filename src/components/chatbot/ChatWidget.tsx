"use client"

import { useEffect, useRef, useState } from "react"
import type { FormEvent } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, Send, Sparkles, X } from "lucide-react"
import { getBotReply, GREETING } from "@/lib/chatbot"
import { openWhatsApp } from "@/lib/supabase"
import { cn } from "@/lib/utils"

type Message = {
  role: "bot" | "user"
  text: string
  quickReplies?: string[]
}

const WHATSAPP_ACTION = "Chat on WhatsApp"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", ...GREETING }])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, typing])

  function sendUserMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    if (trimmed === WHATSAPP_ACTION) {
      openWhatsApp("Hello, I have a question about studying abroad.")
      return
    }

    setMessages((prev) => [...prev, { role: "user", text: trimmed }])
    setInput("")
    setTyping(true)

    setTimeout(() => {
      const reply = getBotReply(trimmed)
      setMessages((prev) => [...prev, { role: "bot", ...reply }])
      setTyping(false)
    }, 500)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    sendUserMessage(input)
  }

  const lastMessage = messages[messages.length - 1]

  return (
    <div className="fixed bottom-24 left-5 z-40 md:bottom-8 md:left-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 flex h-[70vh] max-h-[520px] w-[92vw] max-w-[360px] flex-col overflow-hidden rounded-[1.75rem] border border-navy-light bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 bg-navy px-5 py-4">
              <div className="flex items-center gap-2 text-white">
                <Sparkles className="size-4 text-gold" />
                <div>
                  <p className="font-playfair text-sm font-semibold leading-tight">Versa Global Assistant</p>
                  <p className="text-[11px] text-white/70">Usually replies instantly</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1 text-white/90 hover:bg-white/15"
              >
                <X className="size-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      m.role === "user" ? "rounded-br-sm bg-navy text-white" : "rounded-bl-sm bg-navy-light text-navy"
                    )}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-navy-light px-3.5 py-2.5 text-sm text-muted">
                    &middot;&middot;&middot;
                  </div>
                </div>
              )}

              {!typing && lastMessage?.role === "bot" && lastMessage.quickReplies && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {lastMessage.quickReplies.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => sendUserMessage(q)}
                      className="rounded-full border border-gold/50 bg-white px-3 py-1.5 text-xs font-medium text-navy transition-colors hover:bg-gold-light"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-navy-light p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about destinations, visas, fees..."
                className="h-10 flex-1 rounded-full border border-navy-light bg-white px-4 text-sm text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy text-white hover:bg-navy-dark"
              >
                <Send className="size-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="flex size-14 items-center justify-center rounded-full bg-navy text-white shadow-xl shadow-navy/30 hover:bg-navy-dark"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X className="size-6" /> : <MessageCircle className="size-6 text-gold" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
