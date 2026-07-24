export function WinScreen({
  open,
  onClose,
  title,
  paragraphs,
}: {
  open: boolean
  onClose: () => void
  title: string
  paragraphs: string[]
}) {
  if (!open) return null

  return (
    <div className="pointer-events-auto absolute inset-0 z-30 flex items-center justify-center bg-black/85 p-6">
      <div className="w-full max-w-lg rounded border border-emerald-700/50 bg-[#0e0e11] p-8 font-mono text-emerald-100 shadow-2xl">
        <p className="text-xs tracking-widest text-emerald-500/70 uppercase">Case closed</p>
        <h2 className="mt-1 text-2xl text-emerald-50">{title}</h2>

        {paragraphs.map((p, i) => (
          <p key={i} className="mt-3 text-sm text-emerald-100/90 first:mt-4">
            {p}
          </p>
        ))}

        <button
          type="button"
          onClick={onClose}
          className="mt-6 rounded border border-emerald-700/50 px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-900/30"
        >
          Close case file
        </button>
      </div>
    </div>
  )
}
