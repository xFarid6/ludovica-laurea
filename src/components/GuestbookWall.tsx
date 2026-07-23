import { guestbookMessages } from '../data/content'
import SectionHeading from './SectionHeading'

export default function GuestbookWall() {
  return (
    <section id="messages" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Il muro degli auguri" title="Chi ti vuole bene ha scritto per te" />

      <div className="grid gap-5 sm:grid-cols-2">
        {guestbookMessages.map((m, i) => (
          <blockquote
            key={i}
            className="animate-fade-up rounded-3xl bg-white/70 p-6 shadow-md shadow-lilac-200/60 ring-1 ring-lilac-100 backdrop-blur"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <p className="text-lg">{m.emoji}</p>
            <p className="mt-2 text-lilac-900/80">“{m.message}”</p>
            <footer className="mt-3 text-sm font-semibold text-lilac-500">
              — {m.author}
            </footer>
          </blockquote>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-lilac-400">
        Vuoi aggiungere un messaggio? Modifica{' '}
        <code className="rounded bg-lilac-100 px-1.5 py-0.5">src/data/content.ts</code>
      </p>
    </section>
  )
}
