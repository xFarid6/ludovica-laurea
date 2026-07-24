import { useState } from 'react'
import { CaseView } from '../case3d/CaseView'
import { cases } from '../case3d/data/caseConfig'
import SectionHeading from './SectionHeading'

export default function CaseRoom3D() {
  const [activeCaseId, setActiveCaseId] = useState(cases[0].id)
  const activeCase = cases.find((c) => c.id === activeCaseId) ?? cases[0]

  return (
    <section id="stanza-3d" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="Indagine 3D" title="Entra nella stanza del delitto" />

      <div className="relative">
        <div className="pointer-events-none absolute top-4 right-4 z-10 flex gap-2 font-mono">
          {cases.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveCaseId(c.id)}
              className={`pointer-events-auto rounded border px-3 py-1.5 text-xs tracking-widest uppercase ${
                c.id === activeCaseId
                  ? 'border-amber-500 bg-amber-900/50 text-amber-200'
                  : 'border-amber-800/40 bg-amber-950/20 text-amber-500/60 hover:border-amber-600 hover:text-amber-300'
              }`}
            >
              {c.navLabel}
            </button>
          ))}
        </div>

        {/* key resets CaseView's internal state on switch, so solved clues don't leak between rooms */}
        <CaseView key={activeCaseId} config={activeCase} />
      </div>
    </section>
  )
}
