import type { Clue } from './clues'

export const gunshotClues: Clue[] = [
  {
    id: 'weapon',
    number: 1,
    position: [0.4, 0.79, -0.7],
    kind: 'weapon',
    title: 'Revolver on the desk',
    summary: 'A single spent chamber. Still warm when the constable arrived.',
    links: ['casing', 'residue'],
    analyses: [
      {
        id: 'barrel',
        label: 'Swab the barrel',
        result: 'Fresh burnt-powder residue in the bore — fired within the hour, not days ago as claimed.',
      },
      {
        id: 'serial',
        label: 'Trace the serial number',
        result: 'Bought six weeks ago under a false name — not a piece from the Colonel’s own collection.',
      },
      {
        id: 'log',
        label: 'Bag without testing',
        result: 'Logged as evidence. No new detail — you’ll need to come back and actually test it.',
      },
    ],
  },
  {
    id: 'casing',
    number: 2,
    position: [0.15, 0, 0.2],
    kind: 'casing',
    title: 'Spent cartridge on the rug',
    summary: 'A brass casing, kicked half under the desk.',
    links: ['weapon'],
    analyses: [
      {
        id: 'headstamp',
        label: 'Read the headstamp',
        result: 'A private commission mark — not a caliber sold in any shop within fifty miles.',
      },
      {
        id: 'rifling',
        label: 'Compare rifling marks',
        result: 'Striations match the revolver on the desk, not the Colonel’s own dueling pistol in the cabinet.',
      },
    ],
  },
  {
    id: 'residue',
    number: 3,
    position: [0.9, 0.79, -0.45],
    kind: 'gsrSwab',
    title: 'Gunshot residue swab',
    summary: 'Taken from the nearest hand at the scene.',
    links: ['weapon', 'wound'],
    analyses: [
      {
        id: 'pattern',
        label: 'Barium / antimony trace',
        result: 'A dense back-spatter pattern — this hand fired the shot, it wasn’t just nearby when it happened.',
      },
      {
        id: 'distance',
        label: 'Check stippling density',
        result:
          'Powder tattooing this tight means the muzzle was under two feet away — not the six-foot "dueling distance" the room was staged to suggest.',
      },
    ],
  },
  {
    id: 'wound',
    number: 4,
    position: [-0.05, 0.005, 1.1],
    kind: 'bloodstain',
    title: 'Wound and collar scorch',
    summary: 'A ring of powder burn around the entry wound.',
    links: ['residue'],
    analyses: [
      {
        id: 'burn',
        label: 'Examine powder tattooing',
        result: 'Contact-range scorching on the collar — a dueling-distance shot leaves no burn at all.',
      },
      {
        id: 'angle',
        label: 'Trace entry angle',
        result: 'Level entry, fired from across the desk while seated — not from the doorway where the "duel" was supposed to happen.',
      },
    ],
  },
  {
    id: 'note',
    number: 5,
    position: [-0.1, 0.79, -0.8],
    kind: 'ledger',
    title: 'Unsent duel challenge',
    summary: 'A note challenging the Colonel, still folded, never delivered.',
    analyses: [
      {
        id: 'handwriting',
        label: 'Compare handwriting',
        result: 'Doesn’t match the accused challenger’s hand at all — written by someone else, after the fact.',
      },
      {
        id: 'ink',
        label: 'UV ink check',
        result: 'Ink is still wet under UV. Written tonight, not weeks ago like the story claims.',
      },
      {
        id: 'log',
        label: 'File without cross-referencing',
        result: 'Logged as evidence. No new detail — you’ll need to come back and actually test it.',
      },
    ],
  },
]
