// Bolle/molecole decorative fluttuanti sullo sfondo. Puramente
// estetico: nessun contenuto, solo atmosfera lilla.
const shapes = [
  { size: 90, top: '6%', left: '8%', delay: '0s', kind: 'blob' },
  { size: 50, top: '18%', left: '82%', delay: '0.8s', kind: 'molecule' },
  { size: 130, top: '55%', left: '2%', delay: '1.4s', kind: 'blob' },
  { size: 40, top: '75%', left: '90%', delay: '0.4s', kind: 'molecule' },
  { size: 70, top: '38%', left: '92%', delay: '2s', kind: 'blob' },
  { size: 60, top: '85%', left: '20%', delay: '1s', kind: 'molecule' },
] as const

function Molecule({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="opacity-40">
      <line x1="20" y1="30" x2="50" y2="60" stroke="#9d4edd" strokeWidth="4" />
      <line x1="50" y1="60" x2="80" y2="35" stroke="#9d4edd" strokeWidth="4" />
      <line x1="50" y1="60" x2="55" y2="90" stroke="#9d4edd" strokeWidth="4" />
      <circle cx="20" cy="30" r="12" fill="#e9d5ff" stroke="#c77dff" strokeWidth="3" />
      <circle cx="80" cy="35" r="9" fill="#ffd6e8" stroke="#ff8fc7" strokeWidth="3" />
      <circle cx="50" cy="60" r="14" fill="#c77dff" stroke="#7b2cbf" strokeWidth="3" />
      <circle cx="55" cy="90" r="8" fill="#e9d5ff" stroke="#c77dff" strokeWidth="3" />
    </svg>
  )
}

export default function FloatingBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lilac-50 via-bloom-50 to-lilac-100" />
      {shapes.map((s, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          {s.kind === 'blob' ? (
            <div
              className="rounded-full bg-lilac-300/30 blur-xl"
              style={{ width: s.size, height: s.size }}
            />
          ) : (
            <Molecule size={s.size} />
          )}
        </div>
      ))}
    </div>
  )
}
