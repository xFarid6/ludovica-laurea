import type { ComponentType } from 'react'
import type { Clue } from './clues'
import type { Hint } from './hints'
import type { Suspect } from './suspects'
import { clues } from './clues'
import { hints } from './hints'
import { suspects, CULPRIT_ID, wrongVerdicts } from './suspects'
import { gunshotClues } from './gunshotClues'
import { gunshotHints } from './gunshotHints'
import { gunshotSuspects, GUNSHOT_CULPRIT_ID, gunshotWrongVerdicts } from './gunshotSuspects'
import { Room } from '../scene/Room'
import { GunRoom } from '../scene/GunRoom'

export type CaseConfig = {
  id: string
  navLabel: string
  heading: string
  subheading: string
  Room: ComponentType
  clues: Clue[]
  hints: Hint[]
  suspects: Suspect[]
  culpritId: string
  wrongVerdicts: Record<string, string>
  caseSolved: (solvedAnalyses: Record<string, string>) => boolean
  accusationQuestion: string
  unprovenMessage: string
  winTitle: string
  winParagraphs: string[]
}

export const cases: CaseConfig[] = [
  {
    id: 'study',
    navLabel: 'The Study',
    heading: 'The Study — case file',
    subheading: 'drag to orbit · scroll to zoom · click a marker',
    Room,
    clues,
    hints,
    suspects,
    culpritId: CULPRIT_ID,
    wrongVerdicts,
    caseSolved: (s) => s.watch === 'mechanism' && s.footprint === 'soil',
    accusationQuestion: 'Who killed Edmund Voss?',
    unprovenMessage:
      "You may be right about him — but you can't prove it yet. Inspect the watch mechanism and test the footprint's soil composition before you name him.",
    winTitle: 'You named the nephew.',
    winParagraphs: [
      "Edmund Voss confronted his nephew that evening over a discrepancy he'd found in the accounts — the real time of death was closer to 9 PM, the raised voices the housekeeper half-heard. The nephew spent the next two hours building a burglary: forcing the watch to 11:47, an hour he could account for elsewhere, dragging the wound toward the window, breaking the latch, and pressing a boot print from mud he'd carried in on his own walk earlier that day.",
      "The watch's forced hands and the footprint's foreign soil were the two threads he couldn't fake convincingly enough — proof no outside intruder ever came through that window.",
    ],
  },
  {
    id: 'gunroom',
    navLabel: 'The Gun Room',
    heading: 'The Gun Room — case file',
    subheading: 'drag to orbit · scroll to zoom · click a marker',
    Room: GunRoom,
    clues: gunshotClues,
    hints: gunshotHints,
    suspects: gunshotSuspects,
    culpritId: GUNSHOT_CULPRIT_ID,
    wrongVerdicts: gunshotWrongVerdicts,
    caseSolved: (s) => s.residue === 'distance' && s.note === 'ink',
    accusationQuestion: 'Who killed Colonel Ashford Grey?',
    unprovenMessage:
      "You may be right about them — but you can't prove it yet. Check the stippling distance on the residue swab and the ink on that note before you name them.",
    winTitle: 'You named the valet.',
    winParagraphs: [
      'The valet had been skimming from the household accounts for months, and the Colonel found the shortfall that afternoon. When confronted across the desk, the valet took the revolver from the cabinet and fired point-blank — then staged a duel: forging a challenge note from the Colonel’s old rival, backing off to fire a second shot into the wall paneling to fake distance, and leaving the note where it would be found.',
      'The residue swab told the truth the staged distance couldn’t — powder burns that close only happen point-blank. And a note with ink still wet was never going to pass for weeks-old correspondence.',
    ],
  },
]
