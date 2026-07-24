export type AnalysisOption = {
  id: string
  label: string
  result: string
}

export type ClueKind = 'bloodstain' | 'watch' | 'footprint' | 'ledger' | 'boots' | 'casing' | 'weapon' | 'gsrSwab'

export type Clue = {
  id: string
  number: number
  position: [number, number, number]
  /** which detailed 3D prop to render for this clue */
  kind: ClueKind
  title: string
  summary: string
  analyses: AnalysisOption[]
  /** ids of other clues this one corroborates or contradicts — surfaced once both are solved */
  links?: string[]
}

export const clues: Clue[] = [
  {
    id: 'bloodstain',
    number: 1,
    position: [-1.6, 0, 1.2],
    kind: 'bloodstain',
    title: 'Dark stain by the window',
    summary: 'A dried stain on the floorboards, partially scuffed by a shoe.',
    links: ['footprint'],
    analyses: [
      {
        id: 'luminol',
        label: 'Luminol test',
        result: 'Glows in a dragged trail toward the window — the stain was moved, not made, here.',
      },
      {
        id: 'uv',
        label: 'UV light scan',
        result: 'A partial fingerprint fluoresces at the stain’s edge, smudged but a print.',
      },
      {
        id: 'bag',
        label: 'Bag without testing',
        result: 'Logged as evidence. No new detail — you’ll need to come back and actually test it.',
      },
    ],
  },
  {
    id: 'watch',
    number: 2,
    position: [0.4, 0.79, -0.2],
    kind: 'watch',
    title: 'Broken pocket watch',
    summary: 'Stopped at 11:47. The glass is cracked outward, not in.',
    links: ['ledger'],
    analyses: [
      {
        id: 'fingerprint',
        label: 'Dust for prints',
        result: 'One clean print on the casing — doesn’t match the desk’s owner.',
      },
      {
        id: 'mechanism',
        label: 'Inspect mechanism',
        result: 'The hands were forced, not stopped by impact. 11:47 is staged, not real.',
      },
    ],
  },
  {
    id: 'footprint',
    number: 3,
    position: [-1.9, 0, -1.4],
    kind: 'footprint',
    title: 'Muddy footprint',
    summary: 'A single print tracked in under the window, pointing outward.',
    links: ['boots', 'bloodstain'],
    analyses: [
      {
        id: 'cast',
        label: 'Plaster cast',
        result: 'Tread pattern matches a work boot, size 44 — narrows the list of suspects.',
      },
      {
        id: 'soil',
        label: 'Soil composition',
        result: 'Clay with iron traces — not from this house. Matches the riverbank two miles out.',
      },
      {
        id: 'database',
        label: 'Match tread database',
        result: 'No match on file. Either a new player, or boots bought just for this.',
      },
    ],
  },
  {
    id: 'ledger',
    number: 4,
    position: [0.85, 0.79, -0.78],
    kind: 'ledger',
    title: "Torn page from Voss's ledger",
    summary: 'A single account page, corner torn away, tucked under the desk blotter.',
    links: ['watch'],
    analyses: [
      {
        id: 'crosscheck',
        label: 'Cross-check figures',
        result: 'Funds bled out in small amounts over six months, hidden by resequenced entries — embezzlement.',
      },
      {
        id: 'handwriting',
        label: 'Handwriting comparison',
        result: 'The correcting entries are not in Voss’s hand. Someone else had been altering his books.',
      },
      {
        id: 'file',
        label: 'File without cross-referencing',
        result: 'Logged as evidence. No new detail — you’ll need to come back and actually test it.',
      },
    ],
  },
  {
    id: 'boots',
    number: 5,
    position: [-3.0, 0, 0.9],
    kind: 'boots',
    title: 'Muddy boots in the hall closet',
    summary: 'A pair of work boots, mud still caked in the tread.',
    links: ['footprint'],
    analyses: [
      {
        id: 'tread',
        label: 'Compare tread',
        result: 'Matches the plaster cast from the window exactly — same boot, same size 44.',
      },
      {
        id: 'dampness',
        label: 'Check dampness',
        result: 'Still faintly damp inside. Worn recently — within the day, not weeks ago.',
      },
      {
        id: 'ignore',
        label: 'Log as household item',
        result: 'Logged as evidence. No new detail — you’ll need to come back and actually test it.',
      },
    ],
  },
]
