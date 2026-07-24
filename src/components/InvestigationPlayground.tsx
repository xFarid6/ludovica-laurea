import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { content } from '../data/content'
import SectionHeading from './SectionHeading'

const { clues, intro, verdict } = content.investigation
const scienceColors = ['#38bdf8', '#9d4edd', '#c77dff', '#ff8fc7']

type Clue = (typeof clues)[number]

// Where each reperto sits in the 2D scene (percent of the room), plus its
// evidence-marker number for that crime-scene-photography look.
const SCENE_LAYOUT: Record<string, { left: number; top: number; width: number; marker: number }> = {
  raman: { left: 4, top: 10, width: 25, marker: 1 },
  semedx: { left: 71, top: 8, width: 25, marker: 2 },
  icpms: { left: 4, top: 64, width: 25, marker: 3 },
  libs: { left: 37, top: 36, width: 27, marker: 4 },
}

// Purely decorative room dressing — never focusable, never part of the game.
const ROOM_PROPS = [
  { emoji: '🔫', left: 6, top: 46, size: 34, rotate: -18, className: 'hidden sm:block opacity-70' },
  { emoji: '💨', left: 16, top: 42, size: 26, rotate: 0, className: 'hidden sm:block opacity-50' },
  { emoji: '🛡️', left: 90, top: 44, size: 28, rotate: 8, className: 'hidden sm:block opacity-60' },
  { emoji: '🩸', left: 60, top: 12, size: 16, rotate: 12, className: 'opacity-70' },
  { emoji: '🩸', left: 30, top: 86, size: 12, rotate: -20, className: 'opacity-60' },
  { emoji: '👣', left: 46, top: 78, size: 18, rotate: -30, className: 'opacity-50' },
  { emoji: '👣', left: 53, top: 84, size: 18, rotate: -15, className: 'opacity-50' },
  { emoji: '👣', left: 60, top: 89, size: 18, rotate: -25, className: 'opacity-40' },
] as const

function EvidenceMarker({ n }: { n: number }) {
  return (
    <span
      aria-hidden
      className="absolute -top-3 -left-3 flex h-6 w-6 rotate-[-6deg] items-center justify-center bg-yellow-400 text-xs font-bold text-black shadow-sm"
      style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
    >
      <span className="mt-1.5">{n}</span>
    </span>
  )
}

function TapeStrip({ rotate }: { rotate: number }) {
  return (
    <div
      aria-hidden
      className="relative -mx-4 my-4 overflow-hidden bg-ink py-1.5 shadow-md"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="flex flex-nowrap gap-10 whitespace-nowrap text-xs font-bold tracking-widest text-[#fff] uppercase">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}>Scena del laboratorio · non oltrepassare</span>
        ))}
      </div>
    </div>
  )
}

function ClueCard({
  clue,
  revealed,
  onReveal,
}: {
  clue: Clue
  revealed: boolean
  onReveal: () => void
}) {
  return (
    <button
      type="button"
      onClick={onReveal}
      aria-pressed={revealed}
      aria-label={revealed ? `${clue.tech}: ${clue.explain}` : `Reperto coperto — indizio: ${clue.hint}`}
      className="relative block aspect-square min-h-11 w-full cursor-pointer [perspective:1000px]"
    >
      <div
        className={`relative h-full w-full rounded-2xl shadow-md shadow-lilac-200/60 transition-transform duration-500 [transform-style:preserve-3d] ${
          revealed ? 'animate-pop [transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-lilac-200 bg-gradient-to-br from-lilac-100 via-white to-bloom-50 p-3 text-center [backface-visibility:hidden]">
          <span className="text-3xl">🔍</span>
          <span className="text-xs font-semibold tracking-wide text-lilac-500 uppercase">{clue.tag}</span>
          <span className="text-sm font-medium text-lilac-800">{clue.hint}</span>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-science-300 bg-white p-3 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="font-display text-base font-bold text-science-700">{clue.tech}</span>
          <p className="text-xs leading-snug text-lilac-900/70">{clue.explain}</p>
          <p className="text-xs font-medium text-bloom-600">{clue.love}</p>
        </div>
      </div>
    </button>
  )
}

export default function InvestigationPlayground() {
  const [found, setFound] = useState<Set<string>>(new Set())
  const [solved, setSolved] = useState(false)
  const [flashing, setFlashing] = useState(false)

  const reveal = (id: string) => {
    if (found.has(id)) return
    const next = new Set(found)
    next.add(id)
    setFound(next)
  }

  useEffect(() => {
    if (found.size === clues.length && !solved) {
      setFlashing(true)
      const flashTimer = setTimeout(() => setFlashing(false), 900)
      const solveTimer = setTimeout(() => {
        setSolved(true)
        confetti({ particleCount: 100, spread: 100, origin: { y: 0.5 }, colors: scienceColors })
      }, 350)
      return () => {
        clearTimeout(flashTimer)
        clearTimeout(solveTimer)
      }
    }
  }, [found, solved])

  const reset = () => {
    setFound(new Set())
    setSolved(false)
  }

  return (
    <section id="caso" className="mx-auto max-w-3xl px-6 py-24">
      <SectionHeading eyebrow="Il Caso Di Stasio" title="Raccogli gli indizi" />
      <p className="mx-auto -mt-6 mb-8 max-w-lg text-center text-lilac-900/70">{intro}</p>

      <div className="mb-6 flex items-center justify-center gap-3">
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

      <TapeStrip rotate={-1.2} />

      <div
        className="relative min-h-[420px] overflow-hidden rounded-2xl border-2 border-lilac-200 bg-lilac-50 sm:min-h-[480px]"
        style={{
          backgroundImage:
            'conic-gradient(var(--color-lilac-100) 90deg, transparent 90deg 180deg, var(--color-lilac-100) 180deg 270deg, transparent 270deg)',
          backgroundSize: '48px 48px',
        }}
      >
        {ROOM_PROPS.map((prop, i) => (
          <span
            key={i}
            aria-hidden
            className={`pointer-events-none absolute select-none ${prop.className}`}
            style={{
              left: `${prop.left}%`,
              top: `${prop.top}%`,
              fontSize: prop.size,
              transform: `rotate(${prop.rotate}deg)`,
            }}
          >
            {prop.emoji}
          </span>
        ))}

        {clues.map((clue) => {
          const pos = SCENE_LAYOUT[clue.id]
          return (
            <div
              key={clue.id}
              className="absolute"
              style={{ left: `${pos.left}%`, top: `${pos.top}%`, width: `${pos.width}%` }}
            >
              <EvidenceMarker n={pos.marker} />
              <ClueCard clue={clue} revealed={found.has(clue.id)} onReveal={() => reveal(clue.id)} />
            </div>
          )
        })}
      </div>

      <TapeStrip rotate={1.2} />

      {found.size === clues.length && !solved && (
        <p className="mt-6 text-center text-sm font-medium text-science-700">
          Tutti gli indizi raccolti — il laser sta parlando…
        </p>
      )}

      {flashing && (
        <div aria-hidden className="animate-flash pointer-events-none fixed inset-0 z-50 bg-science-300" />
      )}

      {solved && (
        <div
          className="animate-pop fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-6 backdrop-blur-sm"
          onClick={() => setSolved(false)}
        >
          <div className="max-w-sm rounded-3xl bg-white p-8 text-center shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-2 text-5xl">🔬💜</div>
            <h3 className="font-display text-2xl font-bold text-lilac-800">{verdict.title}</h3>
            <p className="mt-3 text-lilac-900/70">{verdict.text}</p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setSolved(false)}
                className="font-display cursor-pointer rounded-full bg-lilac-600 px-6 py-2 text-sm font-semibold text-[#fff] transition hover:bg-lilac-700"
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
