import { Line } from '@react-three/drei'
import type { Clue } from '../data/clues'

/** Draws a red-string line between two markers once both clues are solved and linked —
 * makes "the evidence connects" visible instead of only readable in the drawer text. */
export function ClueLinks({ clues, solvedIds }: { clues: Clue[]; solvedIds: Set<string> }) {
  const pairs: [Clue, Clue][] = []
  const seen = new Set<string>()

  for (const clue of clues) {
    if (!solvedIds.has(clue.id) || !clue.links) continue
    for (const linkId of clue.links) {
      if (!solvedIds.has(linkId)) continue
      const key = [clue.id, linkId].sort().join('|')
      if (seen.has(key)) continue
      seen.add(key)
      const other = clues.find((c) => c.id === linkId)
      if (other) pairs.push([clue, other])
    }
  }

  return (
    <>
      {pairs.map(([a, b]) => {
        const mid: [number, number, number] = [
          (a.position[0] + b.position[0]) / 2,
          Math.max(a.position[1], b.position[1]) + 0.5,
          (a.position[2] + b.position[2]) / 2,
        ]
        return (
          <Line
            key={`${a.id}-${b.id}`}
            points={[a.position, mid, b.position]}
            color="#f43f5e"
            lineWidth={1.5}
            dashed
            dashScale={6}
            transparent
            opacity={0.85}
          />
        )
      })}
    </>
  )
}
