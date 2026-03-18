"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  eyebrow?: string
  title: React.ReactNode
  subtitle: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-24 md:pt-28 px-6 text-center md:px-8
      min-h-screen flex flex-col justify-center overflow-hidden
      bg-[linear-gradient(to_bottom,#050505,#050505_30%,rgba(232,123,28,0.15)_78%,rgba(232,123,28,0.5)_100%)]"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-40 h-[600px] w-full
        bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-[size:4rem_4rem]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent / Planet Horizon — static, no parallax */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)]
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%]
        origin-top"
      >
        <div
          className="w-full h-full rounded-[100%] border border-primary/50 bg-[#050505]
          bg-[radial-gradient(closest-side,#050505_82%,rgba(232,123,28,0.85))]
          shadow-[0_-20px_60px_rgba(232,123,28,0.15)]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center mb-24 md:mb-16">
        {/* Eyebrow */}
        {eyebrow && (
          <div className="flex justify-center mb-6 animate-hero-fade-down">
            <Link href={ctaHref} className="group">
              <span
                className="text-xs text-white/70 font-body mx-auto px-4 py-1.5
                bg-white/5 backdrop-blur-md
                border border-white/10
                rounded-3xl w-fit tracking-wider uppercase flex items-center justify-center
                hover:bg-white/10 hover:text-white transition-colors"
              >
                {eyebrow}
                <ChevronRight className="inline w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-primary" />
              </span>
            </Link>
          </div>
        )}

        {/* Title — NO initial opacity:0, renders immediately visible (critical for LCP) */}
        <h1 className="py-4 font-display tracking-tighter">
          {title}
        </h1>

        {/* Subtitle */}
        <div
          className="mt-4 mb-8 text-balance
          text-sm sm:text-base tracking-tight text-white/60 font-body
          md:text-lg max-w-[340px] sm:max-w-lg md:max-w-4xl mx-auto
          animate-hero-fade-up-d2"
        >
          {subtitle}
        </div>

        {/* CTA */}
        {ctaLabel && (
          <div className="flex justify-center animate-hero-fade-up-d3">
            <Link
              href={ctaHref}
              className="relative z-20 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-body font-medium tracking-tighter text-[15px] sm:text-lg whitespace-nowrap
              bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full
              shadow-[0_0_40px_rgba(232,123,28,0.4)] hover:shadow-[0_0_60px_rgba(232,123,28,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none
        bg-gradient-to-t from-[#050505] to-transparent"
      />
    </section>
  )
}
