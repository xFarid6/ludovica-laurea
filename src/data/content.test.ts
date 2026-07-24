import { describe, expect, it } from 'vitest'
import { content } from './content'
import { galleryFullIndex, videoIndex } from './mediaIndex'

describe('content data', () => {
  it('has unique investigation clue ids', () => {
    const ids = content.investigation.clues.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('has non-empty timeline, gallery and guestbook content', () => {
    expect(content.timeline.length).toBeGreaterThan(0)
    expect(content.gallery.length).toBeGreaterThan(0)
    expect(content.guestbook.notes.length).toBeGreaterThan(0)
  })

  it('has exactly two footer events, each with an .ics filename', () => {
    expect(content.events.length).toBe(2)
    for (const event of content.events) {
      expect(event.ics.endsWith('.ics')).toBe(true)
    }
  })

  it('has a non-empty personal media index', () => {
    expect(galleryFullIndex.length).toBeGreaterThan(0)
    expect(videoIndex.length).toBeGreaterThan(0)
  })
})
