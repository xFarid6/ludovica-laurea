import type { Suspect } from './suspects'

export const gunshotSuspects: Suspect[] = [
  { id: 'valet', name: 'The valet', description: 'Managed the gun cabinet and the household accounts. Was alone with the Colonel that evening.' },
  { id: 'rival', name: 'The dueling rival', description: 'Long-standing feud with the Colonel. Named on the challenge note.' },
  { id: 'intruder', name: 'An unknown intruder', description: 'The duel the scene wants you to see.' },
]

export const GUNSHOT_CULPRIT_ID = 'valet'

export const gunshotWrongVerdicts: Record<string, string> = {
  rival:
    'He never received the challenge — it was still folded, unsent, and the ink was wet that same night, not weeks old. He had no idea a duel had even been called.',
  intruder:
    "That's exactly what the staged distance was built to suggest. An intruder doesn't explain contact-range powder burns or a revolver that was already inside the house.",
}
