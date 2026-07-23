import { useMemo, useState } from 'react'
import confetti from 'canvas-confetti'
import { clues, caseSolved, type Clue } from '../data/content'
import SectionHeading from './SectionHeading'

const lilacPalette = ['#9d4edd', '#c77dff', '#e9d5ff', '#ff8fc7', '#7b2cbf']

function Hotspot({
  clue,
  found,
  onClick,
}: {
  clue: Clue
  found: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={clue.label}
      className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-xl transition hover:scale-110"
      style={{ left: `${clue.x}%`, top: `${clue.y}%` }}
    >
      <span
        className={`absolute inset-0 rounded-full ${
          found ? 'bg-lilac-300/30' : 'animate-pulse bg-lilac-400/50'
        }`}
      />
      <span className="relative">{found ? '✅' : clue.emoji}</span>
    </button>
  )
}

export default function InvestigationPlayground() {
  const [found, setFound] = useState<Set<string>>(new Set())
  const [active, setActive] = useState<Clue | null>(null)
  const [solved, setSolved] = useState(false)

  const allFound = useMemo(() => found.size === clues.length, [found])

  const handleOpen = (clue: Clue) => {
    setActive(clue)
    if (!found.has(clue.id)) {
      const next = new Set(found)
      next.add(clue.id)
      setFound(next)
      if (next.size === clues.length) {
        setTimeout(() => {
          setSolved(true)
          confetti({ particleCount: 120, spread: 110, origin: { y: 0.5 }, colors: lilacPalette })
        }, 400)
      }
    }
  }

  const reset = () => {
    setFound(new Set())
    setActive(null)
    setSolved(false)
  }

  return (
    <section id="caso" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Un piccolo caso da risolvere" title="La scena del... laboratorio" />
      <p className="mx-auto -mt-6 mb-8 max-w-lg text-center text-lilac-900/70">
        Clicca sugli indizi nascosti nella scena e ricostruisci il caso, dalle
        tracce ematiche fino alla spettroscopia LIBS.
      </p>

      <div className="mb-4 flex items-center justify-center gap-3">
        <div className="h-2 w-40 overflow-hidden rounded-full bg-lilac-100">
          <div
            className="h-full rounded-full bg-lilac-500 transition-all duration-500"
            style={{ width: `${(found.size / clues.length) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-lilac-600">
          {found.size}/{clues.length} indizi
        </span>
      </div>

      {/* Scena */}
      <div className="relative aspect-4/3 overflow-hidden rounded-3xl border-4 border-lilac-300 bg-gradient-to-b from-lilac-100 via-lilac-50 to-bloom-50 shadow-xl shadow-lilac-300/40">
        {/* nastro da "scena del crimine", in versione lilla */}
        <div className="absolute -left-16 top-6 w-64 -rotate-12 bg-lilac-600 py-1.5 text-center text-[11px] font-bold tracking-widest text-white shadow">
          SCENA DEL LABORATORIO · NON OLTREPASSARE
        </div>
        <div className="absolute -right-16 top-6 w-64 rotate-12 bg-lilac-600 py-1.5 text-center text-[11px] font-bold tracking-widest text-white shadow">
          SCENA DEL LABORATORIO · NON OLTREPASSARE
        </div>

        {/* arredo stilizzato */}
        <div className="absolute bottom-0 left-1/2 h-28 w-64 -translate-x-1/2 rounded-t-2xl bg-lilac-200/70" />
        <div className="absolute bottom-24 left-1/2 h-6 w-56 -translate-x-1/2 rounded bg-lilac-300/80" />
        <div className="absolute top-8 right-10 h-16 w-16 rounded-lg border-2 border-lilac-300 bg-white/50" />

        {clues.map((clue) => (
          <Hotspot
            key={clue.id}
            clue={clue}
            found={found.has(clue.id)}
            onClick={() => handleOpen(clue)}
          />
        ))}
      </div>

      {allFound && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={reset}
            className="font-display cursor-pointer rounded-full border-2 border-lilac-300 px-6 py-2 text-sm font-semibold text-lilac-600 transition hover:bg-lilac-100"
          >
            Rigioca il caso ↺
          </button>
        </div>
      )}

      {active && !solved && (
        <div
          className="animate-pop fixed inset-0 z-50 flex items-center justify-center bg-lilac-900/60 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="max-w-sm rounded-3xl bg-white p-6 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 text-4xl">{active.emoji}</div>
            <h3 className="font-display text-xl font-bold text-lilac-800">{active.title}</h3>
            <p className="mt-2 text-lilac-900/70">{active.detail}</p>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="font-display mt-5 cursor-pointer rounded-full bg-lilac-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-lilac-700"
            >
              Continua l’indagine
            </button>
          </div>
        </div>
      )}

      {solved && (
        <div
          className="animate-pop fixed inset-0 z-50 flex items-center justify-center bg-lilac-900/70 p-6 backdrop-blur-sm"
          onClick={() => setSolved(false)}
        >
          <div
            className="max-w-sm rounded-3xl bg-white p-8 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 text-5xl">🎓🔬</div>
            <h3 className="font-display text-2xl font-bold text-lilac-800">
              {caseSolved.title}
            </h3>
            <p className="mt-3 text-lilac-900/70">{caseSolved.message}</p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setSolved(false)}
                className="font-display cursor-pointer rounded-full bg-lilac-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-lilac-700"
              >
                Evviva!
              </button>
              <button
                type="button"
                onClick={reset}
                className="font-display cursor-pointer rounded-full border-2 border-lilac-300 px-6 py-2 text-sm font-semibold text-lilac-600 transition hover:bg-lilac-100"
              >
                Rigioca
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
