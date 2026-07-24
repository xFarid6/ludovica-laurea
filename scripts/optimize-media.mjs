// One-off dev script: compress the raw phone-camera photo dump into
// public/gallery/ (mobile-first site, originals are multi-MB each) and
// the video dump into public/videos/. Not part of the build — run
// manually with `node scripts/optimize-media.mjs` whenever the source
// dump changes, then re-run generate-media-index.mjs.
import sharp from 'sharp'
import ffmpegPath from 'ffmpeg-static'
import { mkdirSync, readdirSync, copyFileSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import { execFileSync } from 'node:child_process'

const SOURCE_DIR = 'C:/Users/gioma/Downloads/Foto Laurea Ludo'
const PHOTO_OUT = 'public/gallery'
const VIDEO_OUT = 'public/videos'
const MAX_DIMENSION = 1100
const JPEG_QUALITY = 70

// VID_20260723_115847.mp4 is a 397MB/20Mbps full-length recording straight
// off the camera. Everything else here is already a WhatsApp-compressed
// clip (~1-2Mbps) and is copied through untouched — re-encoding those would
// only cost quality for negligible size gain.
const LONG_RECORDING = 'VID_20260723_115847.mp4'

mkdirSync(PHOTO_OUT, { recursive: true })
mkdirSync(VIDEO_OUT, { recursive: true })

const files = readdirSync(SOURCE_DIR)
const photos = files.filter((f) => extname(f).toLowerCase() === '.jpg')

let done = 0
for (const file of photos) {
  const src = join(SOURCE_DIR, file)
  const dest = join(PHOTO_OUT, file.replace(/\.jpg$/i, '.jpg'))
  await sharp(src)
    .rotate() // apply EXIF orientation, then strip metadata
    .resize({ width: MAX_DIMENSION, height: MAX_DIMENSION, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(dest)
  done++
  if (done % 50 === 0) console.log(`  ${done}/${photos.length} photos done`)
}
console.log(`Compressed ${done} photos -> ${PHOTO_OUT}`)

const videoFiles = readdirSync(SOURCE_DIR).filter((f) => extname(f).toLowerCase() === '.mp4')

let videoBytes = 0
for (const file of videoFiles) {
  const src = join(SOURCE_DIR, file)
  const dest = join(VIDEO_OUT, file)
  if (file === LONG_RECORDING) {
    execFileSync(ffmpegPath, [
      '-y',
      '-i', src,
      '-vf', 'scale=-2:720',
      '-c:v', 'libx264',
      '-crf', '26',
      '-preset', 'slow',
      '-c:a', 'aac',
      '-b:a', '128k',
      '-movflags', '+faststart',
      dest,
    ])
  } else {
    copyFileSync(src, dest)
  }
  videoBytes += statSync(dest).size
}
console.log(`Wrote ${videoFiles.length} videos -> ${VIDEO_OUT} (${(videoBytes / 1e6).toFixed(1)} MB)`)
