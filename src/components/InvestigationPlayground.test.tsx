import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import InvestigationPlayground from './InvestigationPlayground'
import { clues, caseSolved } from '../data/content'

describe('InvestigationPlayground', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('reveals the case-solved modal once every clue is found', () => {
    render(<InvestigationPlayground />)

    for (const clue of clues) {
      fireEvent.click(screen.getByLabelText(clue.label))
    }
    act(() => vi.advanceTimersByTime(400))

    expect(screen.getByText(caseSolved.title)).toBeTruthy()
  })

  it('starts with no clues found', () => {
    render(<InvestigationPlayground />)
    expect(screen.getByText(`0/${clues.length} indizi`)).toBeTruthy()
  })
})
