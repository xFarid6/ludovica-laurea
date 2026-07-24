import * as THREE from 'three'

/** Irregular dried-blood blob: overlapping dark red-brown ellipses on transparent bg. */
export function bloodStainTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, 256, 256)
  const blobs: [number, number, number, number, number][] = [
    [128, 128, 70, 90, 0.85],
    [95, 110, 45, 55, 0.7],
    [160, 150, 40, 48, 0.65],
    [140, 90, 30, 34, 0.55],
    [105, 165, 26, 30, 0.5],
    [175, 105, 20, 24, 0.4],
  ]
  for (const [x, y, rx, ry, a] of blobs) {
    ctx.beginPath()
    ctx.ellipse(x, y, rx, ry, Math.random() * Math.PI, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(74, 18, 14, ${a})`
    ctx.fill()
  }
  // a few dark specks / drips
  for (let i = 0; i < 12; i++) {
    ctx.beginPath()
    ctx.arc(30 + Math.random() * 196, 30 + Math.random() * 196, 2 + Math.random() * 5, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(52, 10, 8, 0.6)'
    ctx.fill()
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

/** Boot-sole tread: heel + sole ellipses with groove lines, muddy brown. */
export function bootTreadTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 256
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, 128, 256)
  // sole (front) + heel (back) as muddy filled ellipses
  ctx.fillStyle = 'rgba(78, 58, 36, 0.9)'
  ctx.beginPath()
  ctx.ellipse(64, 90, 42, 78, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.beginPath()
  ctx.ellipse(64, 200, 38, 46, 0, 0, Math.PI * 2)
  ctx.fill()
  // tread grooves
  ctx.strokeStyle = 'rgba(40, 28, 16, 0.85)'
  ctx.lineWidth = 5
  for (let y = 40; y < 150; y += 16) {
    ctx.beginPath()
    ctx.moveTo(28, y)
    ctx.lineTo(100, y)
    ctx.stroke()
  }
  for (let y = 170; y < 240; y += 16) {
    ctx.beginPath()
    ctx.moveTo(32, y)
    ctx.lineTo(96, y)
    ctx.stroke()
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

/** Dark radial scorch mark with a small burnt hole at center, for a bullet impact on wood paneling. */
export function scorchTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, 128, 128)
  const grad = ctx.createRadialGradient(64, 64, 4, 64, 64, 60)
  grad.addColorStop(0, 'rgba(10,10,10,0.95)')
  grad.addColorStop(0.35, 'rgba(30,25,20,0.6)')
  grad.addColorStop(1, 'rgba(30,25,20,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 128, 128)
  ctx.beginPath()
  ctx.arc(64, 64, 6, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(0,0,0,1)'
  ctx.fill()
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

/** Radiating crack lines + fracture rings on transparent bg, off-center origin. */
export function crackTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, 256, 256)
  const cx = 110
  const cy = 120
  ctx.strokeStyle = 'rgba(235, 235, 245, 0.9)'
  ctx.lineWidth = 2
  // radiating cracks with jagged mid-points
  const spokes = 9
  for (let i = 0; i < spokes; i++) {
    const ang = (i / spokes) * Math.PI * 2 + Math.random() * 0.3
    const len = 90 + Math.random() * 40
    const midAng = ang + (Math.random() - 0.5) * 0.4
    const mx = cx + Math.cos(midAng) * len * 0.5
    const my = cy + Math.sin(midAng) * len * 0.5
    ctx.beginPath()
    ctx.moveTo(cx, cy)
    ctx.lineTo(mx, my)
    ctx.lineTo(cx + Math.cos(ang) * len, cy + Math.sin(ang) * len)
    ctx.stroke()
  }
  // concentric fracture rings
  ctx.lineWidth = 1.5
  for (const r of [28, 55]) {
    ctx.strokeStyle = 'rgba(220, 220, 235, 0.55)'
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.stroke()
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}
