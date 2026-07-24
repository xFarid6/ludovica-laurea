import { scorchTexture } from './textures'

// shared bullet-scorch texture for the paneled wall
const scorchTex = scorchTexture()

function Wall({
  position,
  rotation,
  withScorch,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  withScorch?: boolean
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[6.8, 3, 0.2]} />
        <meshStandardMaterial color="#2e2420" roughness={0.85} />
      </mesh>
      {/* wainscoting rail */}
      <mesh position={[0, -0.35, 0.11]}>
        <boxGeometry args={[6.6, 0.06, 0.02]} />
        <meshStandardMaterial color="#1c1512" roughness={0.8} />
      </mesh>
      {withScorch && (
        <mesh position={[1.3, 1.55, 0.105]}>
          <circleGeometry args={[0.16, 20]} />
          <meshStandardMaterial map={scorchTex} color="#111" transparent roughness={0.9} />
        </mesh>
      )}
    </group>
  )
}

function GunCabinet() {
  return (
    <group position={[-3.15, 0, -2]}>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 2, 0.9]} />
        <meshStandardMaterial color="#3c2c22" roughness={0.7} />
      </mesh>
      {/* glass front, one pistol missing from its rack */}
      <mesh position={[0.16, 1, 0]}>
        <boxGeometry args={[0.02, 1.8, 0.8]} />
        <meshStandardMaterial color="#8fb0c4" transparent opacity={0.2} roughness={0.1} metalness={0.2} />
      </mesh>
    </group>
  )
}

function Desk() {
  return (
    <group position={[0.4, 0, -0.7]}>
      <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.08, 0.8]} />
        <meshStandardMaterial color="#3a2a1c" roughness={0.6} />
      </mesh>
      {[
        [-0.7, -0.3],
        [0.7, -0.3],
        [-0.7, 0.3],
        [0.7, 0.3],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.37, z]} castShadow>
          <boxGeometry args={[0.08, 0.75, 0.08]} />
          <meshStandardMaterial color="#2e2015" roughness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

function Chair() {
  return (
    <group position={[-0.3, 0, 0.6]} rotation={[0, 0.4, 0]}>
      <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.06, 0.5]} />
        <meshStandardMaterial color="#4a2f1f" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.75, -0.22]} castShadow>
        <boxGeometry args={[0.5, 0.6, 0.06]} />
        <meshStandardMaterial color="#4a2f1f" roughness={0.7} />
      </mesh>
      {[
        [-0.2, -0.2],
        [0.2, -0.2],
        [-0.2, 0.2],
        [0.2, 0.2],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.21, z]} castShadow>
          <boxGeometry args={[0.05, 0.42, 0.05]} />
          <meshStandardMaterial color="#3a2416" roughness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

export function GunRoom() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#201914" roughness={0.95} />
      </mesh>

      <Wall position={[0, 0, -3.4]} rotation={[0, 0, 0]} withScorch />
      <Wall position={[-3.4, 0, 0]} rotation={[0, Math.PI / 2, 0]} />

      <GunCabinet />
      <Desk />
      <Chair />
    </group>
  )
}
