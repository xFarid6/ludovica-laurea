import { useState } from 'react'
import { content } from '../data/content'
import SectionHeading from './SectionHeading'

const { periodicCard } = content

export default function PeriodicCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <section id="element" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <SectionHeading eyebrow="Scoperta scientifica" title="Un nuovo elemento" />

      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-pressed={flipped}
        aria-label={`Elemento ${periodicCard.name}, tocca per vedere le proprietà`}
        className="group animate-bob mx-auto block h-96 w-64 cursor-pointer [perspective:1200px]"
      >
        <div
          className={`relative h-full w-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d] ${
            flipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-3xl bg-gradient-to-br from-lilac-400 to-bloom-400 p-5 text-[#fff] shadow-[0_25px_50px_-15px_rgba(30,15,56,0.45),0_0_70px_10px_rgba(199,125,255,0.5),0_0_30px_8px_rgba(255,143,199,0.35)] [backface-visibility:hidden]">
            <span className="absolute top-4 left-4 text-sm font-semibold">{periodicCard.number}</span>
            <span className="absolute top-3.5 right-4 text-lg text-[#ffe3f2]">♥</span>
            <span className="font-display text-7xl font-bold drop-shadow-sm">{periodicCard.symbol}</span>
            <span className="mt-1 text-xl font-semibold">{periodicCard.name}</span>
            <span className="mt-1 text-sm text-[#fff]/85">{periodicCard.category}</span>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-y-auto rounded-3xl bg-ink p-6 text-[#f3e8ff] shadow-[0_25px_50px_-15px_rgba(30,15,56,0.6),0_0_60px_8px_rgba(114,53,199,0.4)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="text-center text-xs leading-snug text-[#e9d5ff]/80 italic">{periodicCard.description}</p>
            <div className="h-px w-10 shrink-0 bg-[#d8b4fe]/40" aria-hidden />
            <ul className="flex flex-col gap-3 text-left">
              {periodicCard.properties.map((p, i) => (
                <li key={p} className="flex items-start gap-2 text-xs leading-snug">
                  <span aria-hidden>{['🧬', '🔥', '✨', '✅'][i]}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </button>

      <p className="mt-6 text-sm text-lilac-400">Tocca la card per leggere le proprietà</p>
    </section>
  )
}
