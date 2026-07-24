// Calendar-correct "time since" breakdown: months/days use real calendar
// month lengths (not a flat 30-day guess), the remainder is a plain
// hours/minutes/seconds split of the leftover milliseconds.
export type Elapsed = {
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function elapsedSince(from: Date, now: Date): Elapsed {
  let months = (now.getFullYear() - from.getFullYear()) * 12 + (now.getMonth() - from.getMonth())
  const anchor = new Date(from)
  anchor.setMonth(anchor.getMonth() + months)
  if (anchor.getTime() > now.getTime()) {
    months--
    anchor.setMonth(anchor.getMonth() - 1)
  }

  const restMs = Math.max(0, now.getTime() - anchor.getTime())
  const days = Math.floor(restMs / 86_400_000)
  const hours = Math.floor((restMs % 86_400_000) / 3_600_000)
  const minutes = Math.floor((restMs % 3_600_000) / 60_000)
  const seconds = Math.floor((restMs % 60_000) / 1000)

  return { months: Math.max(months, 0), days, hours, minutes, seconds }
}
