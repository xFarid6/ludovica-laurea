import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { graduate } from './data/content'

describe('App', () => {
  it('renders every section without crashing', () => {
    render(<App />)
    expect(screen.getAllByText(new RegExp(graduate.firstName)).length).toBeGreaterThan(0)
  })
})
