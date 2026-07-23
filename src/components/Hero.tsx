import { graduate } from '../data/content'
import CelebrateButton from './CelebrateButton'

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center"
    >
      <span className="animate-fade-up rounded-full bg-lilac-100 px-4 py-1 text-sm font-medium text-lilac-700">
        {graduate.degree || 'Laurea in Chimica'} 🎓
      </span>

      <h1 className="font-display animate-fade-up text-5xl font-bold text-lilac-800 sm:text-6xl md:text-7xl [animation-delay:0.1s]">
        Complimenti,
        <br />
        <span className="bg-gradient-to-r from-lilac-600 via-bloom-400 to-lilac-500 bg-clip-text text-transparent">
          Dr.ssa {graduate.firstName}
        </span>
        !
      </h1>

      <p className="animate-fade-up max-w-xl text-lg text-lilac-900/70 [animation-delay:0.2s]">
        Da oggi ufficialmente chimica. Una reazione lunga anni, mille esperimenti
        e un risultato perfetto: <strong>110 e lode di orgoglio</strong> 💜
      </p>

      <div className="animate-fade-up [animation-delay:0.3s]">
        <CelebrateButton />
      </div>

      <a
        href="#timeline"
        className="animate-bob mt-10 text-lilac-500 transition hover:text-lilac-700"
        aria-label="Scorri per scoprire di più"
      >
        ↓
      </a>
    </section>
  )
}
