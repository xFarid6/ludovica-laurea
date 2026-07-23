import { customElement } from '../data/content'
import SectionHeading from './SectionHeading'

export default function PeriodicCard() {
  return (
    <section id="element" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <SectionHeading eyebrow="Scoperta scientifica" title="Un nuovo elemento" />

      <div className="animate-fade-up mx-auto flex w-40 flex-col items-center rounded-2xl border-2 border-lilac-400 bg-white p-4 shadow-lg shadow-lilac-300/50 transition hover:-translate-y-1 hover:shadow-xl">
        <span className="self-start text-xs font-semibold text-lilac-400">
          {customElement.number}
        </span>
        <span className="font-display -mt-1 text-5xl font-bold text-lilac-700">
          {customElement.symbol}
        </span>
        <span className="mt-1 text-sm font-medium text-lilac-800">
          {customElement.name}
        </span>
        <span className="text-xs text-lilac-400">{customElement.mass}</span>
      </div>

      <p className="mx-auto mt-6 max-w-md text-lilac-900/70">
        {customElement.description}
      </p>
    </section>
  )
}
