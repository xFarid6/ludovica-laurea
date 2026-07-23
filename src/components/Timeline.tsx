import { timeline } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Il percorso" title="Un viaggio tra provette e libri" />

      <ol className="relative border-l-2 border-lilac-200 pl-8">
        {timeline.map((event, i) => (
          <li
            key={event.year}
            className="animate-fade-up relative mb-10 last:mb-0"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="absolute top-1 -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-lilac-500 text-base shadow-md shadow-lilac-300">
              {event.emoji}
            </span>
            <p className="text-sm font-semibold text-lilac-500">{event.year}</p>
            <h3 className="font-display text-xl font-semibold text-lilac-800">
              {event.title}
            </h3>
            <p className="mt-1 text-lilac-900/70">{event.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
