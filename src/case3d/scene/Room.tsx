import * as THREE from 'three'
import { crackTexture } from './textures'

// shared cracked-glass texture for both window panes
const crackTex = crackTexture()

// scattered glass shards near the sill and on the floor in front of the wall
const SHARDS: { pos: [number, number, number]; rot: [number, number, number]; size: [number, number] }[] = [
  { pos: [-0.6, 0.02, 0.35], rot: [-Math.PI / 2, 0.3, 0.4], size: [0.12, 0.16] },
  { pos: [0.3, 0.02, 0.5], rot: [-Math.PI / 2, -0.2, 1.1], size: [0.09, 0.13] },
  { pos: [0.05, 0.02, 0.28], rot: [-Math.PI / 2, 0.5, -0.3], size: [0.07, 0.1] },
  { pos: [-0.35, 0.02, 0.62], rot: [-Math.PI / 2, 0.1, 0.9], size: [0.1, 0.08] },
  { pos: [0.65, 0.02, 0.4], rot: [-Math.PI / 2, -0.4, 0.2], size: [0.06, 0.11] },
  { pos: [-0.15, 1.02, 0.12], rot: [-Math.PI / 2, 0.2, 0.6], size: [0.08, 0.1] },
]

function Wall({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <group position={position} rotation={rotation}>
      {/* lintel above window */}
      <mesh position={[0, 2.7, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.6, 0.2]} />
        <meshStandardMaterial color="#3c2c22" roughness={0.9} />
      </mesh>
      {/* left pier */}
      <mesh position={[-1.6, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 3, 0.2]} />
        <meshStandardMaterial color="#3c2c22" roughness={0.9} />
      </mesh>
      {/* right pier */}
      <mesh position={[1.6, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 3, 0.2]} />
        <meshStandardMaterial color="#3c2c22" roughness={0.9} />
      </mesh>
      {/* sill below window */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 1, 0.2]} />
        <meshStandardMaterial color="#3c2c22" roughness={0.9} />
      </mesh>

      {/* broken glass pane — hangs ajar because the latch is broken */}
      <group position={[-1.2, 1.7, 0.06]} rotation={[0, 0.35, 0]}>
        <mesh position={[1.2, 0, 0]}>
          <planeGeometry args={[2.4, 1.4]} />
          <meshStandardMaterial
            map={crackTex}
            color="#a9c7d0"
            transparent
            opacity={0.28}
            roughness={0.1}
            metalness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* scattered shards near the sill and on the floor (pane broke inward) */}
      {SHARDS.map((s, i) => (
        <mesh key={i} position={s.pos} rotation={s.rot}>
          <planeGeometry args={s.size} />
          <meshStandardMaterial
            color="#b6d2da"
            transparent
            opacity={0.35}
            roughness={0.1}
            metalness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

function Desk() {
  return (
    <group position={[0.4, 0, -0.6]}>
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.08, 0.8]} />
        <meshStandardMaterial color="#4a2f1f" roughness={0.6} />
      </mesh>
      {[
        [-0.7, -0.3],
        [0.7, -0.3],
        [-0.7, 0.3],
        [0.7, 0.3],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.37, z]} castShadow>
          <boxGeometry args={[0.08, 0.75, 0.08]} />
          <meshStandardMaterial color="#3a2416" roughness={0.7} />
        </mesh>
      ))}
      {/* desk lamp */}
      <mesh position={[0.6, 0.82, 0.25]} castShadow>
        <cylinderGeometry args={[0.02, 0.06, 0.18, 8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <pointLight position={[0.6, 1, 0.25]} color="#ffb066" intensity={4} distance={4} decay={2} />
    </group>
  )
}

export function Room() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#26201a" roughness={0.95} />
      </mesh>

      <Wall position={[0, 0, -3.4]} rotation={[0, 0, 0]} />
      <Wall position={[-3.4, 0, 0]} rotation={[0, Math.PI / 2, 0]} />

      <Desk />
    </group>
  )
}
