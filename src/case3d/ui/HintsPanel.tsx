import type { Hint } from '../data/hints'

export function HintsPanel({
  open,
  onClose,
  solvedAnalyses,
  hints,
}: {
  open: boolean
  onClose: () => void
  solvedAnalyses: Record<string, string>
  hints: Hint[]
}) {
  return (
    <div
      className={`pointer-events-auto absolute top-0 left-0 h-full w-96 max-w-full border-r border-amber-900/40 bg-[#0e0e11]/95 p-8 font-mono text-amber-100 shadow-2xl transition-transform duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 text-amber-400/70 hover:text-amber-200"
      >
        close
      </button>

      <p className="text-xs tracking-widest text-amber-500/70 uppercase">Hints</p>
      <h2 className="mt-1 text-xl text-amber-50">Stuck?</h2>

      <div className="mt-6 flex flex-col gap-3">
        {hints.map((h, i) => {
          const unlocked = h.unlocked(solvedAnalyses)
          return (
            <div
              key={h.id}
              className={`rounded border px-4 py-3 text-sm ${
                unlocked
                  ? 'border-amber-800/50 bg-amber-950/30 text-amber-100'
                  : 'border-amber-900/20 bg-transparent text-amber-600/40'
              }`}
            >
              <p className="text-[10px] tracking-widest uppercase">Hint {i + 1}</p>
              <p className="mt-1">{unlocked ? h.text : 'Locked — investigate more of the room first.'}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
