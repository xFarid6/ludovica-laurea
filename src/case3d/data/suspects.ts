export type Suspect = {
  id: string
  name: string
  description: string
}

export const suspects: Suspect[] = [
  { id: 'nephew', name: 'The nephew', description: "Manages Voss's accounts. Was in the house that night." },
  { id: 'housekeeper', name: 'The housekeeper', description: 'Live-in staff. Says she heard nothing.' },
  { id: 'intruder', name: 'An unknown intruder', description: 'The burglary the scene wants you to see.' },
]

export const CULPRIT_ID = 'nephew'

export const wrongVerdicts: Record<string, string> = {
  housekeeper:
    'She has no motive and no access to the ledger — nothing ties her to the staged evidence. Not her.',
  intruder:
    "That's exactly what the scene was built to make you think. An outside intruder doesn't explain a forced watch or soil pressed in that doesn't match this ground. Look again at what's fabricated, not at what's missing.",
}
