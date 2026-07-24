import { content } from '../data/content'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

function TimelineItem({
  event,
  index,
}: {
  event: (typeof content.timeline)[number]
  index: number
}) {
  const { ref, visible } = useReveal<HTMLLIElement>()

  return (
    <li
      ref={ref}
      className={`relative mb-10 transition-all duration-700 last:mb-0 ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span className="animate-bob absolute top-1 -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-lilac-500 text-xs font-bold text-[#fff] shadow-md shadow-lilac-300">
        {index + 1}
      </span>
      <p className="text-sm font-semibold text-lilac-500">{event.year}</p>
      <h3 className="font-display text-xl font-semibold text-lilac-800">{event.title}</h3>
      <p className="mt-1 text-lilac-900/70">{event.text}</p>
    </li>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Il percorso" title="Un viaggio tra provette e libri" />

      <ol className="relative border-l-2 border-lilac-200 pl-8">
        {content.timeline.map((event, i) => (
          <TimelineItem key={event.year} event={event} index={i} />
        ))}
      </ol>
    </section>
  )
}
