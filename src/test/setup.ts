import { vi } from 'vitest'

// jsdom has no canvas; confetti bursts are visual-only, so stub them for tests.
vi.mock('canvas-confetti', () => ({ default: vi.fn() }))

// jsdom implements neither API; useReveal() needs both to run without throwing.
class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}
vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

window.matchMedia =
  window.matchMedia ||
  ((query: string) => ({
    matches: false,
    media: query,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
