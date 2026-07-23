import { useCallback } from 'react'
import confetti from 'canvas-confetti'

const lilacPalette = ['#9d4edd', '#c77dff', '#e9d5ff', '#ff8fc7', '#7b2cbf']

export default function CelebrateButton({ label = 'Festeggia! 🎉' }: { label?: string }) {
  const burst = useCallback(() => {
    const duration = 1200
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.7 },
        colors: lilacPalette,
      })
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.7 },
        colors: lilacPalette,
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()

    confetti({
      particleCount: 90,
      spread: 100,
      origin: { y: 0.6 },
      colors: lilacPalette,
    })
  }, [])

  return (
    <button
      type="button"
      onClick={burst}
      className="font-display cursor-pointer rounded-full bg-lilac-600 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-lilac-400/40 transition hover:scale-105 hover:bg-lilac-700 active:scale-95"
    >
      {label}
    </button>
  )
}
