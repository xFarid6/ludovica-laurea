import { vi } from 'vitest'

// jsdom has no canvas; confetti bursts are visual-only, so stub them for tests.
vi.mock('canvas-confetti', () => ({ default: vi.fn() }))
