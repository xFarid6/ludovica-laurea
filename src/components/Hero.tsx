import confetti from 'canvas-confetti'
import { content } from '../data/content'
import crownWink from '../assets/photos/crown-wink.jpeg'

const EMISSION_DELAYS = [0, 0.15, 0.3, 0.45, 0.2, 0.35]
const celebrateColors = ['#38bdf8', '#9d4edd', '#c77dff', '#ff8fc7']

function celebrate() {
  const end = Date.now() + 500
  ;(function frame() {
    confetti({ particleCount: 12, angle: 60, spread: 60, origin: { x: 0, y: 0.6 }, colors: celebrateColors })
    confetti({ particleCount: 12, angle: 120, spread: 60, origin: { x: 1, y: 0.6 }, colors: celebrateColors })
    if (Date.now() < end) requestAnimationFrame(frame)
  })()
}

function EmissionBars({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-end gap-1.5 ${className}`}>
      {EMISSION_DELAYS.map((delay, i) => (
        <span
          key={i}
          className="animate-emission w-1.5 rounded-full bg-science-500"
          style={{ height: `${18 + (i % 3) * 10}px`, animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center gap-8 px-6 py-24 md:flex-row md:items-center md:gap-12"
    >
      <div className="relative order-1 md:order-2 md:w-2/5">
        <EmissionBars className="absolute -top-6 left-4 md:-top-4 md:-left-8" />
        <img
          src={crownWink}
          alt="Ludovica con la corona di fiori fa l'occhiolino e la linguaccia"
          className="aspect-[4/5] w-full rounded-[2rem] object-cover ring-4 ring-lilac-300 shadow-xl shadow-bloom-400/30 md:aspect-[4/5]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-lilac-500/[0.06]" />
        <EmissionBars className="absolute -right-4 -bottom-6 md:-right-8 md:bottom-8" />
      </div>

      <div className="order-2 flex flex-col items-center gap-6 text-center md:order-1 md:w-3/5 md:items-start md:text-left">
        <span className="animate-fade-up rounded-full bg-lilac-100 px-4 py-1 text-sm font-medium text-lilac-700">
          {content.hero.eyebrow}
        </span>

        <h1 className="font-display animate-fade-up font-bold text-lilac-800 [animation-delay:0.1s]" style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)' }}>
          <span className="bg-gradient-to-r from-lilac-600 via-bloom-600 to-lilac-500 bg-clip-text text-transparent">
            {content.hero.title}
          </span>
        </h1>

        <p className="animate-fade-up max-w-xl text-base leading-relaxed text-lilac-900/70 [animation-delay:0.2s] md:text-lg">
          {content.hero.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            href="#caso"
            className="font-display animate-fade-up animate-bob rounded-full bg-lilac-600 px-8 py-3 text-lg font-semibold text-[#fff] shadow-lg shadow-lilac-400/40 transition hover:scale-105 hover:bg-lilac-700 active:scale-95 [animation-delay:0.3s]"
          >
            {content.hero.cta}
          </a>

          <button
            type="button"
            onClick={celebrate}
            className="font-display animate-fade-up rounded-full bg-lilac-100 px-8 py-3 text-lg font-semibold text-lilac-700 shadow-lg shadow-lilac-400/20 transition hover:scale-105 hover:bg-lilac-200 active:scale-95 [animation-delay:0.3s]"
          >
            {content.hero.celebrate}
          </button>
        </div>
      </div>
    </section>
  )
}
