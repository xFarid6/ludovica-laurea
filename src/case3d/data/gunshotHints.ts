import type { Hint } from './hints'

export const gunshotHints: Hint[] = [
  {
    id: 'start',
    text: 'The room reads like a duel gone wrong. Test that reading before you trust it — pick a piece of evidence and run every analysis it offers.',
    unlocked: () => true,
  },
  {
    id: 'residue',
    text: 'Gunshot residue tells you how far away the muzzle was, not just that a gun went off. Check the stippling density on that swab.',
    unlocked: (s) => Object.keys(s).length >= 1,
  },
  {
    id: 'note',
    text: 'A challenge that was never sent can’t have started a duel. Check when that note was actually written.',
    unlocked: (s) => Object.keys(s).length >= 2,
  },
  {
    id: 'solve',
    text: 'Contact-range residue and a same-night forged note say the same thing: no duel, no distance. Someone close to the Colonel was standing over that desk. Check who had reason, then make your accusation.',
    unlocked: (s) => s.residue === 'distance' && s.note === 'ink',
  },
]
