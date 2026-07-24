import { useState } from 'react'
import { Html } from '@react-three/drei'
import type { Clue } from '../data/clues'
import { ClueProp } from './ClueProps'

export function ClueMarker({
  clue,
  solved,
  onSelect,
}: {
  clue: Clue
  solved: boolean
  onSelect: (id: string) => void
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <group position={clue.position}>
      {/* invisible hit target keeps small props easy to click/hover */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
        }}
        onPointerOut={() => setHovered(false)}
        onClick={(e) => {
          e.stopPropagation()
          onSelect(clue.id)
        }}
      >
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <group scale={hovered ? 1.15 : 1}>
        <ClueProp kind={clue.kind} solved={solved} />
      </group>

      <Html position={[0, 0.22, 0]} center distanceFactor={8} style={{ pointerEvents: 'none' }}>
        <span className="text-xs font-mono font-bold text-black">{clue.number}</span>
      </Html>
    </group>
  )
}
