import { content } from '../data/content'

function EventCard({ event }: { event: (typeof content.events)[number] }) {
  return (
    <div className="flex-1 rounded-3xl bg-white/70 p-6 text-center shadow-md shadow-lilac-200/60 ring-1 ring-lilac-100 backdrop-blur">
      <p className="text-xs font-semibold tracking-widest text-lilac-500 uppercase">{event.kicker}</p>
      <h3 className="font-display mt-1 text-xl font-bold text-lilac-800">{event.title}</h3>
      <p className="mt-2 text-lilac-900/80">
        {event.date} · {event.time}
      </p>
      <p className="mt-1 text-sm text-lilac-900/60">{event.place}</p>
      {'note' in event && event.note && <p className="mt-2 text-sm font-medium text-bloom-600">{event.note}</p>}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-6 py-24">
      <div className="flex flex-col gap-6 md:flex-row">
        {content.events.map((event) => (
          <EventCard key={event.key} event={event} />
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-lilac-500">{content.footer.signoff}</p>
    </footer>
  )
}
