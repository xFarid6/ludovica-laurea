import { useState } from 'react'
import type { Suspect } from '../data/suspects'

export function AccusationPanel({
  open,
  onClose,
  caseSolved,
  onWin,
  suspects,
  wrongVerdicts,
  culpritId,
  question,
  unprovenMessage,
}: {
  open: boolean
  onClose: () => void
  caseSolved: boolean
  onWin: () => void
  suspects: Suspect[]
  wrongVerdicts: Record<string, string>
  culpritId: string
  question: string
  unprovenMessage: string
}) {
  const [verdict, setVerdict] = useState<string | null>(null)

  if (!open) return null

  function accuse(id: string) {
    if (id === culpritId) {
      if (caseSolved) {
        onWin()
        return
      }
      setVerdict(unprovenMessage)
      return
    }
    setVerdict(wrongVerdicts[id] ?? 'Not enough to hold that.')
  }

  return (
    <div className="pointer-events-auto absolute inset-0 z-20 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-md rounded border border-amber-900/50 bg-[#0e0e11] p-8 font-mono text-amber-100 shadow-2xl">
        <p className="text-xs tracking-widest text-amber-500/70 uppercase">Make an accusation</p>
        <h2 className="mt-1 text-lg text-amber-50">{question}</h2>

        <div className="mt-6 flex flex-col gap-2">
          {suspects.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => accuse(s.id)}
              className="rounded border border-amber-800/50 bg-amber-950/30 px-4 py-3 text-left hover:border-amber-500 hover:bg-amber-900/40"
            >
              <p className="text-base">{s.name}</p>
              <p className="mt-0.5 text-xs text-amber-400/60">{s.description}</p>
            </button>
          ))}
        </div>

        {verdict && (
          <div className="mt-5 rounded border border-rose-800/50 bg-rose-950/30 px-4 py-3 text-sm text-rose-100">
            {verdict}
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setVerdict(null)
            onClose()
          }}
          className="mt-6 text-xs text-amber-500/70 hover:text-amber-200"
        >
          close
        </button>
      </div>
    </div>
  )
}
