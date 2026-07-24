import { useEffect, useState } from 'react'
import type { Clue } from '../data/clues'

function Connections({ clue, allClues, solvedIds }: { clue: Clue; allClues: Clue[]; solvedIds: Set<string> }) {
  if (!clue.links?.length) return null

  return (
    <div className="mt-8 border-t border-amber-900/40 pt-4">
      <p className="text-xs tracking-widest text-amber-500/70 uppercase">Connections</p>
      <div className="mt-2 flex flex-col gap-2">
        {clue.links.map((linkId) => {
          const other = allClues.find((c) => c.id === linkId)
          if (!other) return null
          const established = solvedIds.has(linkId)
          return (
            <div
              key={linkId}
              className={`rounded border px-3 py-2 text-sm ${
                established
                  ? 'border-rose-700/60 bg-rose-950/30 text-rose-100'
                  : 'border-amber-900/30 bg-transparent text-amber-500/50'
              }`}
            >
              <p className="text-[10px] tracking-widest uppercase">
                {established ? 'connection established' : 'not yet connected'}
              </p>
              <p className="mt-0.5">
                Evidence #{other.number} — {other.title}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function EvidenceDrawer({
  clue,
  allClues,
  solvedIds,
  onClose,
  onAnalyzed,
}: {
  clue: Clue | null
  allClues: Clue[]
  solvedIds: Set<string>
  onClose: () => void
  onAnalyzed: (clueId: string, analysisId: string) => void
}) {
  const [resultText, setResultText] = useState<string | null>(null)

  useEffect(() => {
    setResultText(null)
  }, [clue?.id])

  return (
    <div
      className={`pointer-events-auto absolute top-0 right-0 h-full w-[26rem] max-w-full border-l border-amber-900/40 bg-[#0e0e11]/95 p-8 font-mono text-amber-100 shadow-2xl transition-transform duration-300 ${
        clue ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {clue && (
        <>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-amber-400/70 hover:text-amber-200"
          >
            close
          </button>

          <p className="text-xs tracking-widest text-amber-500/70 uppercase">Evidence #{clue.number}</p>
          <h2 className="mt-1 text-xl text-amber-50">{clue.title}</h2>
          <p className="mt-2 text-base text-amber-200/80">{clue.summary}</p>

          {!resultText ? (
            <div className="mt-6 flex flex-col gap-3">
              <p className="text-xs tracking-widest text-amber-500/70 uppercase">Choose analysis</p>
              {clue.analyses.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => {
                    setResultText(a.result)
                    onAnalyzed(clue.id, a.id)
                  }}
                  className="rounded border border-amber-800/50 bg-amber-950/30 px-4 py-3 text-left text-base text-amber-100 hover:border-amber-500 hover:bg-amber-900/40"
                >
                  {a.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-6">
              <p className="text-xs tracking-widest text-teal-400/70 uppercase">Result</p>
              <p className="mt-2 text-base text-teal-100">{resultText}</p>
              <button
                type="button"
                onClick={() => setResultText(null)}
                className="mt-4 rounded border border-teal-700/50 px-3 py-1.5 text-xs text-teal-300 hover:bg-teal-900/30"
              >
                Try another angle
              </button>
            </div>
          )}

          <Connections clue={clue} allClues={allClues} solvedIds={solvedIds} />
        </>
      )}
    </div>
  )
}
