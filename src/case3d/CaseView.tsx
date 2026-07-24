import { Suspense, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing'
import { ClueMarker } from './scene/ClueMarker'
import { ClueLinks } from './scene/ClueLinks'
import { EvidenceDrawer } from './ui/EvidenceDrawer'
import { HintsPanel } from './ui/HintsPanel'
import { AccusationPanel } from './ui/AccusationPanel'
import { WinScreen } from './ui/WinScreen'
import type { CaseConfig } from './data/caseConfig'

/** Renders one case: room + clues + the full investigation UI. Mount with a fresh
 * `key` per case id so switching rooms resets all in-progress state for free. */
export function CaseView({ config }: { config: CaseConfig }) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [solvedAnalyses, setSolvedAnalyses] = useState<Record<string, string>>({})
  const [showHints, setShowHints] = useState(false)
  const [showAccusation, setShowAccusation] = useState(false)
  const [showWin, setShowWin] = useState(false)

  const solvedIds = useMemo(() => new Set(Object.keys(solvedAnalyses)), [solvedAnalyses])
  const caseSolved = config.caseSolved(solvedAnalyses)
  const selectedClue = config.clues.find((c) => c.id === selectedId) ?? null
  const Room = config.Room

  return (
    <div className="relative h-[80vh] w-full overflow-hidden rounded-2xl bg-[#0e0e11] sm:h-screen">
      <Canvas shadows camera={{ position: [5, 4.5, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.65} color="#6b594a" />
          <spotLight
            position={[-3, 6, 3]}
            angle={0.55}
            penumbra={0.6}
            intensity={70}
            color="#ffb066"
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          {/* cool moonlight fill through the window, opposite the warm key */}
          <directionalLight position={[4, 5, 2]} intensity={1.1} color="#8fb0c4" />
          {/* soft warm bounce so the far side of the room isn't left flat/dark */}
          <pointLight position={[-2.2, 2.2, -0.5]} intensity={22} distance={9} decay={2} color="#c9a876" />
          <pointLight position={[1.5, 1.8, 1.8]} intensity={16} distance={8} decay={2} color="#e8c9a0" />

          <Room />

          {config.clues.map((clue) => (
            <ClueMarker key={clue.id} clue={clue} solved={solvedIds.has(clue.id)} onSelect={setSelectedId} />
          ))}

          <ClueLinks clues={config.clues} solvedIds={solvedIds} />

          <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={8} blur={2} far={4} />

          <OrbitControls
            target={[0, 0.7, 0]}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 4}
            minDistance={4}
            maxDistance={9}
            enableDamping
          />

          <EffectComposer>
            <Bloom intensity={0.6} luminanceThreshold={0.6} />
            <Vignette eskil={false} offset={0.25} darkness={0.55} />
            <Noise opacity={0.06} />
          </EffectComposer>
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute inset-0">
        <div className="p-6 font-mono text-amber-200/80">
          <h1 className="text-xl tracking-widest uppercase">{config.heading}</h1>
          <p className="text-xs opacity-70">{config.subheading}</p>
          <div className="pointer-events-auto mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => setShowHints(true)}
              className="rounded border border-amber-800/50 bg-amber-950/40 px-3 py-1.5 text-xs tracking-widest text-amber-300 uppercase hover:border-amber-500 hover:bg-amber-900/50"
            >
              Hints
            </button>
            <button
              type="button"
              onClick={() => setShowAccusation(true)}
              className="rounded border border-rose-800/50 bg-rose-950/40 px-3 py-1.5 text-xs tracking-widest text-rose-300 uppercase hover:border-rose-500 hover:bg-rose-900/50"
            >
              Make an accusation
            </button>
          </div>
        </div>

        <EvidenceDrawer
          clue={selectedClue}
          allClues={config.clues}
          solvedIds={solvedIds}
          onClose={() => setSelectedId(null)}
          onAnalyzed={(id, analysisId) =>
            setSolvedAnalyses((prev) => ({ ...prev, [id]: analysisId }))
          }
        />

        <HintsPanel open={showHints} onClose={() => setShowHints(false)} solvedAnalyses={solvedAnalyses} hints={config.hints} />

        <AccusationPanel
          open={showAccusation}
          onClose={() => setShowAccusation(false)}
          caseSolved={caseSolved}
          onWin={() => {
            setShowAccusation(false)
            setShowWin(true)
          }}
          suspects={config.suspects}
          wrongVerdicts={config.wrongVerdicts}
          culpritId={config.culpritId}
          question={config.accusationQuestion}
          unprovenMessage={config.unprovenMessage}
        />

        <WinScreen open={showWin} onClose={() => setShowWin(false)} title={config.winTitle} paragraphs={config.winParagraphs} />
      </div>
    </div>
  )
}
