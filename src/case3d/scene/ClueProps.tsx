import type { ClueKind } from '../data/clues'
import { bloodStainTexture, bootTreadTexture, crackTexture } from './textures'

// module-level singletons so all prop instances share one canvas texture each
const bloodTex = bloodStainTexture()
const treadTex = bootTreadTexture()
const crackTex = crackTexture()

/** Translucent presence pad preserving the solved/unsolved colour signal. */
function GlowPad({ solved }: { solved: boolean }) {
  return (
    <mesh position={[0, 0.004, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.28, 24]} />
      <meshBasicMaterial
        color={solved ? '#4ade80' : '#facc15'}
        transparent
        opacity={0.25}
        depthWrite={false}
      />
    </mesh>
  )
}

function Bloodstain() {
  return (
    <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[0.45, 0.45]} />
      <meshStandardMaterial
        map={bloodTex}
        color="#7a241a"
        transparent
        roughness={0.8}
      />
    </mesh>
  )
}

function Footprint() {
  return (
    <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0.5]}>
      <planeGeometry args={[0.28, 0.4]} />
      <meshStandardMaterial
        map={treadTex}
        color="#6b4f30"
        transparent
        roughness={0.9}
      />
    </mesh>
  )
}

function Watch() {
  return (
    <group position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* brass body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.085, 0.085, 0.03, 24]} />
        <meshStandardMaterial color="#b8860b" metalness={0.75} roughness={0.3} />
      </mesh>
      {/* rim */}
      <mesh position={[0, 0.015, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.085, 0.012, 12, 24]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.25} />
      </mesh>
      {/* crown / winder */}
      <mesh position={[0, 0, 0.095]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.03, 10]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.25} />
      </mesh>
      {/* cracked crystal face */}
      <mesh position={[0, 0.018, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.078, 24]} />
        <meshStandardMaterial
          map={crackTex}
          color="#e8ecf0"
          transparent
          opacity={0.55}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
      {/* two hands, forced to a stopped angle */}
      <mesh position={[0, 0.02, -0.018]}>
        <boxGeometry args={[0.006, 0.004, 0.05]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.022, 0.02, 0]} rotation={[0, 0.9, 0]}>
        <boxGeometry args={[0.006, 0.004, 0.04]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  )
}

function Ledger() {
  return (
    <group position={[0, 0.01, 0]}>
      {/* torn account page */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.01, 0.4]} />
        <meshStandardMaterial color="#e8dcc0" roughness={0.85} />
      </mesh>
      {/* torn corner sticking up */}
      <mesh position={[0.12, 0.03, -0.16]} rotation={[0.3, 0.4, -0.2]} castShadow>
        <boxGeometry args={[0.1, 0.008, 0.1]} />
        <meshStandardMaterial color="#ddceac" roughness={0.85} />
      </mesh>
    </group>
  )
}

function Boot({ x }: { x: number }) {
  return (
    <group position={[x, 0, 0]}>
      {/* sole */}
      <mesh position={[0, 0.03, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.14, 0.06, 0.34]} />
        <meshStandardMaterial map={treadTex} color="#4a3520" roughness={0.9} />
      </mesh>
      {/* upper / ankle */}
      <mesh position={[0, 0.13, 0.08]} castShadow>
        <cylinderGeometry args={[0.07, 0.075, 0.18, 12]} />
        <meshStandardMaterial color="#3a2817" roughness={0.8} />
      </mesh>
      {/* toe cap */}
      <mesh position={[0, 0.07, -0.14]} castShadow>
        <sphereGeometry args={[0.07, 12, 10]} />
        <meshStandardMaterial color="#3a2817" roughness={0.8} />
      </mesh>
    </group>
  )
}

function Boots() {
  return (
    <group>
      <Boot x={-0.11} />
      <Boot x={0.11} />
    </group>
  )
}

function Casing() {
  return (
    <mesh position={[0, 0.015, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
      <cylinderGeometry args={[0.012, 0.014, 0.09, 10]} />
      <meshStandardMaterial color="#c9a04a" metalness={0.8} roughness={0.3} />
    </mesh>
  )
}

function GunWeapon() {
  return (
    <group position={[0, 0.03, 0]} rotation={[0, 0.3, 0]}>
      {/* grip */}
      <mesh position={[-0.06, -0.02, 0]} rotation={[0, 0, 0.5]} castShadow>
        <boxGeometry args={[0.04, 0.09, 0.03]} />
        <meshStandardMaterial color="#241c14" roughness={0.6} />
      </mesh>
      {/* cylinder */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.028, 0.028, 0.05, 10]} />
        <meshStandardMaterial color="#3a3a3d" metalness={0.7} roughness={0.35} />
      </mesh>
      {/* barrel */}
      <mesh position={[0.09, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.014, 0.014, 0.14, 10]} />
        <meshStandardMaterial color="#2a2a2d" metalness={0.75} roughness={0.3} />
      </mesh>
    </group>
  )
}

function GsrSwab() {
  return (
    <group position={[0, 0.005, 0]}>
      {/* tray */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.16, 0.1]} />
        <meshStandardMaterial color="#d8dee2" roughness={0.6} />
      </mesh>
      {/* swab stick */}
      <mesh position={[0, 0.01, 0]} rotation={[0, 0.4, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.004, 0.004, 0.1, 8]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.7} />
      </mesh>
      {/* cotton tip */}
      <mesh position={[0.045, 0.012, 0.02]} castShadow>
        <sphereGeometry args={[0.012, 8, 8]} />
        <meshStandardMaterial color="#f4f0e8" roughness={0.9} />
      </mesh>
    </group>
  )
}

export function ClueProp({ kind, solved }: { kind: ClueKind; solved: boolean }) {
  let prop
  switch (kind) {
    case 'bloodstain':
      prop = <Bloodstain />
      break
    case 'watch':
      prop = <Watch />
      break
    case 'footprint':
      prop = <Footprint />
      break
    case 'ledger':
      prop = <Ledger />
      break
    case 'boots':
      prop = <Boots />
      break
    case 'casing':
      prop = <Casing />
      break
    case 'weapon':
      prop = <GunWeapon />
      break
    case 'gsrSwab':
      prop = <GsrSwab />
      break
  }
  return (
    <group>
      <GlowPad solved={solved} />
      {prop}
    </group>
  )
}
