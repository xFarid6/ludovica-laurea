import { useState } from 'react'
import { galleryPhotos } from '../data/content'
import SectionHeading from './SectionHeading'

// ── Come aggiungere le foto vere ──────────────────────────────
// 1. Copia i file immagine in src/assets/photos/
// 2. Importali qui sopra, es: import foto1 from '../assets/photos/laurea.jpg'
// 3. Aggiungi `src: foto1` alla voce corrispondente in data/content.ts

function PhotoFrame({ src, caption }: { src?: string; caption: string }) {
  return (
    <figure className="group relative aspect-square overflow-hidden rounded-3xl bg-lilac-100 shadow-md shadow-lilac-200/60">
      {src ? (
        <img
          src={src}
          alt={caption}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-lilac-100 via-bloom-200 to-lilac-200 text-lilac-500">
          <span className="text-4xl">🧪</span>
          <span className="px-4 text-center text-xs font-medium">foto in arrivo</span>
        </div>
      )}
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-lilac-900/60 px-3 py-2 text-sm text-white transition duration-300 group-hover:translate-y-0">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const activePhoto = active !== null ? galleryPhotos[active] : null

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="I ricordi" title="Momenti da incorniciare" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {galleryPhotos.map((photo, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            className="animate-fade-up cursor-pointer text-left"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <PhotoFrame src={photo.src} caption={photo.caption} />
          </button>
        ))}
      </div>

      {activePhoto && (
        <div
          className="animate-pop fixed inset-0 z-50 flex items-center justify-center bg-lilac-900/70 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div className="max-w-lg text-center">
            <div className="aspect-square w-full max-w-md overflow-hidden rounded-3xl bg-lilac-100">
              {activePhoto.src ? (
                <img
                  src={activePhoto.src}
                  alt={activePhoto.caption}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-lilac-100 via-bloom-200 to-lilac-200 text-lilac-500">
                  <span className="text-6xl">🧪</span>
                  <span className="text-sm font-medium">foto in arrivo</span>
                </div>
              )}
            </div>
            <p className="mt-4 font-medium text-white">{activePhoto.caption}</p>
          </div>
        </div>
      )}
    </section>
  )
}
