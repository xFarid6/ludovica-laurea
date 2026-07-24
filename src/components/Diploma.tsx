import { useState } from 'react'
import { content } from '../data/content'
import labCoat from '../assets/photos/lab-coat.jpeg'
import SectionHeading from './SectionHeading'

const { diploma } = content

export default function Diploma() {
  const [open, setOpen] = useState(false)

  return (
    <section id="diploma" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Ufficialmente" title="La pergamena" />

      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <img
          src={labCoat}
          alt="Ludovica nel camice bianco con «Ludovica» ricamato"
          className="animate-fade-up aspect-[4/5] w-full rounded-3xl object-cover shadow-xl shadow-lilac-300/40 ring-4 ring-lilac-200 md:order-1"
        />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="group relative order-2 block w-full cursor-pointer text-left [perspective:1200px]"
          aria-expanded={open}
        >
          <div className="relative rounded-2xl border-4 border-lilac-300 bg-gradient-to-b from-white to-lilac-50 p-8 text-center shadow-xl shadow-lilac-300/40">
            <span className="animate-pop animate-float relative mx-auto -mt-2 mb-3 inline-block text-5xl" aria-hidden>
              🏵️
            </span>
            <p className="font-display text-sm tracking-widest text-lilac-500 uppercase">Diploma di Laurea</p>
            <h3 className="font-display mt-2 text-2xl font-bold text-lilac-800">{diploma.candidate}</h3>
            <p className="mt-1 text-lilac-900/70">{diploma.course}</p>

            {open && (
              <div className="animate-fade-up mt-4 space-y-1.5 border-t border-lilac-200 pt-4 text-sm text-lilac-900/70">
                <p className="italic">«{diploma.thesisTitle}»</p>
                <p>{diploma.advisor}</p>
                <p>{diploma.university}</p>
                <p>{diploma.matricola}</p>
                <p>{diploma.academicYear}</p>
              </div>
            )}

            <p className="mt-6 text-xs text-lilac-400 group-hover:text-lilac-600">
              {open ? 'tocca per richiudere' : 'tocca per aprire ✨'}
            </p>
          </div>
        </button>
      </div>

      <p className="mx-auto mt-10 max-w-xl text-center text-lilac-900/70 italic">{diploma.blurb}</p>
    </section>
  )
}
