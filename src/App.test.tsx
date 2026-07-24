import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { content } from './data/content'

describe('App', () => {
  it('renders every section without crashing', () => {
    render(<App />)
    expect(screen.getAllByText(content.hero.title).length).toBeGreaterThan(0)
  })
})
