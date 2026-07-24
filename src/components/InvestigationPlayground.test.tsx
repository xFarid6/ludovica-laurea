import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import InvestigationPlayground from './InvestigationPlayground'
import { content } from '../data/content'

const { clues, verdict } = content.investigation

describe('InvestigationPlayground', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('reveals the verdict once every clue is found', () => {
    render(<InvestigationPlayground />)

    for (const clue of clues) {
      fireEvent.click(screen.getByLabelText(`Reperto coperto — indizio: ${clue.hint}`))
    }
    act(() => vi.advanceTimersByTime(400))

    expect(screen.getByText(verdict.title)).toBeTruthy()
  })

  it('starts with no clues found', () => {
    render(<InvestigationPlayground />)
    expect(screen.getByText(`0/${clues.length} indizi`)).toBeTruthy()
  })
})
