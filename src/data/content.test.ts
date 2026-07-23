import { describe, expect, it } from 'vitest'
import { clues, timeline, galleryPhotos, guestbookMessages } from './content'

describe('content data', () => {
  it('has unique clue ids', () => {
    const ids = clues.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('positions every clue inside the 0-100 scene bounds', () => {
    for (const clue of clues) {
      expect(clue.x).toBeGreaterThanOrEqual(0)
      expect(clue.x).toBeLessThanOrEqual(100)
      expect(clue.y).toBeGreaterThanOrEqual(0)
      expect(clue.y).toBeLessThanOrEqual(100)
    }
  })

  it('has non-empty timeline, gallery and guestbook content', () => {
    expect(timeline.length).toBeGreaterThan(0)
    expect(galleryPhotos.length).toBeGreaterThan(0)
    expect(guestbookMessages.length).toBeGreaterThan(0)
  })
})
