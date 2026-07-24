import { useState } from 'react'
import { content } from '../data/content'
import { galleryFullIndex, videoIndex } from '../data/mediaIndex'
import SectionHeading from './SectionHeading'
import crownSmile from '../assets/photos/crown-smile.jpeg'
import crownWink from '../assets/photos/crown-wink.jpeg'
import labCoat from '../assets/photos/lab-coat.jpeg'

const photosByKey: Record<string, string> = {
  'crown-smile': crownSmile,
  'crown-wink': crownWink,
  'lab-coat': labCoat,
}

// ±2° deterministic tilt per index, so the polaroid stack doesn't
// look perfectly aligned but stays stable across re-renders.
const TILTS = [-2, 1.5, -1, 2, -1.5, 1]
const tiltFor = (i: number) => TILTS[i % TILTS.length]

const base = import.meta.env.BASE_URL

type Lightbox = { src: string; alt: string }

function Polaroid({ src, alt, caption, index, onOpen }: { src: string; alt: string; caption: string; index: number; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="animate-fade-up group block cursor-pointer rounded-sm bg-white p-3 pb-8 text-left shadow-lg shadow-lilac-300/40 transition hover:-translate-y-1 hover:shadow-xl"
      style={{ transform: `rotate(${tiltFor(index)}deg)`, animationDelay: `${index * 0.08}s` }}
    >
      <img src={src} alt={alt} className="aspect-[4/5] w-full rounded-xs object-cover" loading="lazy" />
      <p className="font-display mt-3 text-center text-sm text-lilac-700 italic">{caption}</p>
    </button>
  )
}

const curatedVideoFiles = new Set<string>(content.videos.map((v) => v.file))
const restOfVideos = videoIndex.filter((v) => !curatedVideoFiles.has(v.file))

export default function Gallery() {
  const [lightbox, setLightbox] = useState<Lightbox | null>(null)

  return (
    <section id="gallery" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading eyebrow="I ricordi" title="Momenti da incorniciare" />

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
        {content.gallery.map((photo, i) => (
          <Polaroid
            key={photo.src}
            src={photosByKey[photo.src]}
            alt={photo.alt}
            caption={photo.caption}
            index={i}
            onOpen={() => setLightbox({ src: photosByKey[photo.src], alt: photo.alt })}
          />
        ))}
      </div>

      {content.videos.length > 0 && (
        <div className="mt-16">
          <h3 className="font-display mb-6 text-center text-2xl font-semibold text-lilac-800">Video ricordi</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {content.videos.map((v) => (
              <figure key={v.file} className="animate-fade-up overflow-hidden rounded-2xl bg-white shadow-md shadow-lilac-200/60">
                <video controls preload="metadata" playsInline className="aspect-video w-full bg-ink" src={`${base}videos/${v.file}`}>
                  <track kind="captions" />
                </video>
                <figcaption className="px-4 py-3 text-sm text-lilac-900/70">{v.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {restOfVideos.length > 0 && (
        <div className="mt-16">
          <h3 className="font-display mb-6 text-center text-2xl font-semibold text-lilac-800">Altri video</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {restOfVideos.map((v) => (
              <figure key={v.file} className="animate-fade-up overflow-hidden rounded-2xl bg-white shadow-md shadow-lilac-200/60">
                <video controls preload="metadata" playsInline className="aspect-video w-full bg-ink" src={`${base}videos/${v.file}`}>
                  <track kind="captions" />
                </video>
                <figcaption className="px-4 py-2 text-xs text-lilac-900/60">{v.day}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <h3 className="font-display text-center text-2xl font-semibold text-lilac-800">{content.fullGallery.title}</h3>
        <p className="mx-auto mt-2 mb-8 max-w-lg text-center text-lilac-900/70">{content.fullGallery.intro}</p>
        <div className="columns-2 gap-3 sm:columns-3 md:columns-4">
          {galleryFullIndex.map((item, i) => (
            <button
              key={item.file}
              type="button"
              onClick={() => setLightbox({ src: `${base}gallery/${item.file}`, alt: `Foto ricordo — ${item.day}` })}
              className="mb-3 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-xl bg-lilac-100 shadow-sm shadow-lilac-200/50 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <img
                src={`${base}gallery/${item.file}`}
                alt={`Foto ricordo — ${item.day}`}
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
                style={{ aspectRatio: i % 5 === 0 ? '4/5' : '1/1' }}
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="animate-pop fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox.src} alt={lightbox.alt} className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl" />
        </div>
      )}
    </section>
  )
}
