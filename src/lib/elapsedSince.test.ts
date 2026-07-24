import { describe, expect, it } from 'vitest'
import { elapsedSince } from './elapsedSince'

const GRADUATION = new Date('2026-07-23T11:00:00')

describe('elapsedSince', () => {
  it('is all zero at the exact instant', () => {
    expect(elapsedSince(GRADUATION, GRADUATION)).toEqual({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
  })

  it('splits a same-day gap into hours/minutes/seconds only', () => {
    const now = new Date('2026-07-24T12:30:15')
    expect(elapsedSince(GRADUATION, now)).toEqual({ months: 0, days: 1, hours: 1, minutes: 30, seconds: 15 })
  })

  it('rolls a full calendar month correctly regardless of month length', () => {
    const now = new Date('2026-08-23T11:00:00')
    expect(elapsedSince(GRADUATION, now)).toEqual({ months: 1, days: 0, hours: 0, minutes: 0, seconds: 0 })
  })

  it('accumulates months across a year boundary', () => {
    const now = new Date('2027-01-24T13:00:00')
    expect(elapsedSince(GRADUATION, now)).toEqual({ months: 6, days: 1, hours: 2, minutes: 0, seconds: 0 })
  })
})
