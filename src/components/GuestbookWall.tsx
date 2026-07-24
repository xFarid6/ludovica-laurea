import { content } from '../data/content'
import SectionHeading from './SectionHeading'

const NOTE_STYLES = [
  { bg: 'bg-lilac-100', rotate: '-rotate-2' },
  { bg: 'bg-bloom-50', rotate: 'rotate-2' },
  { bg: 'bg-science-300/20', rotate: '-rotate-1' },
]

// Cycle lengths (4 and 5) are coprime with the 3-length NOTE_STYLES cycle,
// so bg/rotate/timing combos don't repeat in lockstep across the grid.
const FLOAT_DURATIONS = [6, 7.5, 5.5, 8]
const FLOAT_DELAYS = [0, 0.6, 1.3, 0.3, 1.8]

export default function GuestbookWall() {
  const { guestbook } = content

  return (
    <section id="messages" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Il muro degli auguri" title={guestbook.intro} />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {guestbook.notes.map((note, i) => {
          const style = NOTE_STYLES[i % NOTE_STYLES.length]
          return (
            <blockquote
              key={`${note.from}-${i}`}
              className={`animate-float animate-fade-up ${style.bg} ${style.rotate} rounded-lg p-6 shadow-md shadow-lilac-200/60 transition hover:-translate-y-1 hover:rotate-0 hover:shadow-xl`}
              style={{
                // animate-float and animate-fade-up both set the full `animation`
                // shorthand, so as plain classes only one ever wins the cascade.
                // Combine explicitly here so entrance + loop both play, with a
                // per-card float duration/delay so cards drift out of phase.
                animation: `var(--animate-fade-up), float ${FLOAT_DURATIONS[i % FLOAT_DURATIONS.length]}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s, ${FLOAT_DELAYS[i % FLOAT_DELAYS.length]}s`,
              }}
            >
              <p className="text-lilac-900/80">«{note.text}»</p>
              <footer className="mt-3 text-sm font-semibold text-lilac-600">— {note.from}</footer>
            </blockquote>
          )
        })}
      </div>

      <div className="mt-10 text-center">
        <a
          href={guestbook.submitHref}
          target="_blank"
          rel="noreferrer"
          className="font-display inline-block rounded-full bg-lilac-600 px-6 py-3 text-sm font-semibold text-[#fff] shadow-md shadow-lilac-400/40 transition hover:scale-105 hover:bg-lilac-700"
        >
          Lascia un messaggio 💌
        </a>
      </div>
    </section>
  )
}
