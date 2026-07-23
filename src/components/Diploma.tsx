import { useState } from 'react'
import { graduate } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Diploma() {
  const [open, setOpen] = useState(false)

  return (
    <section id="diploma" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <SectionHeading eyebrow="Ufficialmente" title="La tua pergamena" />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group relative mx-auto block w-full max-w-md cursor-pointer [perspective:1200px]"
        aria-expanded={open}
      >
        <div
          className={`relative rounded-2xl border-4 border-lilac-300 bg-gradient-to-b from-white to-lilac-50 p-8 shadow-xl shadow-lilac-300/40 transition-transform duration-700 ${
            open ? '[transform:rotateX(0deg)]' : '[transform:rotateX(-8deg)]'
          }`}
        >
          <div className="mb-3 text-4xl">🎓</div>
          <p className="font-display text-sm tracking-widest text-lilac-500 uppercase">
            Diploma di Laurea
          </p>
          <h3 className="font-display mt-2 text-2xl font-bold text-lilac-800">
            {graduate.firstName}
          </h3>
          <p className="mt-1 text-lilac-900/70">{graduate.degree}</p>

          {open && (
            <div className="animate-fade-up mt-4 border-t border-lilac-200 pt-4 text-sm text-lilac-900/60">
              {graduate.thesisTitle && (
                <p className="italic">“{graduate.thesisTitle}”</p>
              )}
              {graduate.university && <p className="mt-1">{graduate.university}</p>}
              {graduate.graduationDate && <p className="mt-1">{graduate.graduationDate}</p>}
              <p className="mt-3 font-semibold text-lilac-600">Voto: 110 e lode 💜</p>
            </div>
          )}

          <p className="mt-6 text-xs text-lilac-400 group-hover:text-lilac-600">
            {open ? 'tocca per richiudere' : 'tocca per aprire ✨'}
          </p>
        </div>
      </button>
    </section>
  )
}
