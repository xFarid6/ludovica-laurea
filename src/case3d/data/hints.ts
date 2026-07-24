export type Hint = {
  id: string
  text: string
  unlocked: (solvedAnalyses: Record<string, string>) => boolean
}

export const hints: Hint[] = [
  {
    id: 'start',
    text: 'Everything here reads like a burglary gone wrong. Test that reading before you trust it — pick a piece of evidence and run every analysis it offers.',
    unlocked: () => true,
  },
  {
    id: 'watch',
    text: 'A watch stopped by a real impact and a watch forced by hand break differently on the inside. The pocket watch is worth opening up, not just glancing at.',
    unlocked: (s) => Object.keys(s).length >= 1,
  },
  {
    id: 'footprint',
    text: 'If a footprint is real, the soil under it should match the ground outside. Check what that mud is actually made of.',
    unlocked: (s) => Object.keys(s).length >= 2,
  },
  {
    id: 'solve',
    text: 'A forced watch and foreign soil both say the same thing: nobody broke in through that window. Someone already inside had hours alone with the body — check who that was, then make your accusation.',
    unlocked: (s) => s.watch === 'mechanism' && s.footprint === 'soil',
  },
]
