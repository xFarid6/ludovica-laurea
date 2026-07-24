# Foto

Le 3 foto curate (usate in Hero, Diploma, Gallery) vivono qui:

- `crown-wink.jpeg` — corona di fiori, occhiolino + linguaccia (Hero + Gallery)
- `crown-smile.jpeg` — corona di fiori, sorriso dolce (Gallery)
- `lab-coat.jpeg` — camice bianco ricamato (Diploma)

Sono referenziate in `src/data/content.ts` (`content.gallery[].src`) e importate
direttamente nei componenti che le usano.

Per la gallery completa (tutte le foto/video del dump grezzo), vedi
`scripts/optimize-media.mjs` e `scripts/generate-media-index.mjs`: comprimono
il dump sorgente in `public/gallery/` e `public/videos/` e generano
`src/data/mediaIndex.ts`.
