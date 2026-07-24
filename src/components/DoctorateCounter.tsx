import { useEffect, useState } from 'react'
import { content } from '../data/content'
import { elapsedSince } from '../lib/elapsedSince'

const GRADUATED_AT = new Date(content.counter.graduatedAt)

// Split-flap scoreboard look for the "big" units (months/days): one hinged
// card per digit, in this codebase's dark lilac + teal-adjacent palette
// rather than the toy's stock black/orange.
function FlipDigit({ digit }: { digit: string }) {
  return (
    <span className="relative flex h-11 w-8 items-center justify-center overflow-hidden rounded-md bg-ink shadow-md shadow-ink/30 sm:h-14 sm:w-10 lg:h-60 lg:w-40 lg:rounded-2xl" style={{ perspective: '200px' }}>
      <span
        key={digit}
        className="animate-flip-in font-display text-2xl font-bold text-bloom-400 sm:text-3xl lg:text-9xl"
        style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
      >
        {digit}
      </span>
      <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/40" />
    </span>
  )
}

// Plain rolling digits for the "small" units (h/m/s) — a lighter transition,
// no card, no hinge.
function RollDigit({ digit }: { digit: string }) {
  return (
    <span className="relative inline-block h-8 w-5 overflow-hidden text-center sm:h-9 sm:w-6 lg:h-24 lg:w-16">
      <span key={digit} className="animate-roll-in font-display block text-xl font-bold text-lilac-800 tabular-nums sm:text-2xl lg:text-7xl">
        {digit}
      </span>
    </span>
  )
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const digits = String(Math.max(value, 0)).padStart(2, '0').split('')
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {digits.map((d, i) => (
          <FlipDigit key={i} digit={d} />
        ))}
      </div>
      <span className="text-[0.65rem] font-semibold tracking-widest text-lilac-500 uppercase sm:text-xs lg:text-xl">{label}</span>
    </div>
  )
}

function RollUnit({ value, label }: { value: number; label: string }) {
  const digits = String(value).padStart(2, '0').split('')
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex">
        {digits.map((d, i) => (
          <RollDigit key={i} digit={d} />
        ))}
      </div>
      <span className="text-[0.6rem] font-medium tracking-wide text-lilac-500 uppercase lg:text-base">{label}</span>
    </div>
  )
}

export default function DoctorateCounter() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const elapsed = elapsedSince(GRADUATED_AT, now)
  const { units } = content.counter

  return (
    <section className="mx-auto max-w-3xl px-6 pb-16 text-center lg:max-w-6xl lg:pb-28" aria-live="off">
      <p className="font-display animate-fade-up mb-6 text-lg font-semibold text-lilac-700 sm:text-xl lg:mb-10 lg:text-3xl">{content.counter.label}</p>

      <div className="animate-fade-up flex flex-wrap items-end justify-center gap-x-6 gap-y-6 [animation-delay:0.1s] lg:gap-x-14 lg:gap-y-10">
        <FlipUnit value={elapsed.months} label={units.months} />
        <FlipUnit value={elapsed.days} label={units.days} />

        <div className="flex items-end gap-1.5 lg:gap-4">
          <RollUnit value={elapsed.hours} label={units.hours} />
          <span className="pb-4 text-lg font-bold text-lilac-400 lg:pb-8 lg:text-4xl">:</span>
          <RollUnit value={elapsed.minutes} label={units.minutes} />
          <span className="pb-4 text-lg font-bold text-lilac-400 lg:pb-8 lg:text-4xl">:</span>
          <RollUnit value={elapsed.seconds} label={units.seconds} />
        </div>
      </div>
    </section>
  )
}
