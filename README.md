# 🎓💜 Dr.ssa Ludovica

Regalo di laurea per Ludovica — laureata in Chimica. Una piccola webapp cute,
nei toni del lilla, per festeggiarla.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (palette lilla custom in `src/index.css`)
- [canvas-confetti](https://www.kirilv.com/canvas-confetti/) per l'effetto coriandoli
- Deploy automatico su GitHub Pages via GitHub Actions

## Funzionalità

- **Hero** — foto + titolo, CTA che scorre al gioco investigativo
- **Timeline** — le tappe reali del percorso, con reveal-on-scroll (`useReveal` + IntersectionObserver)
- **Il Caso Di Stasio** — mini-gioco: 4 card-reperto (Raman, SEM-EDX, ICP-MS, LIBS) che si rivelano al tap/tastiera; trovarle tutte scatena un flash LIBS + verdetto finale
- **Gallery** — 3 foto curate stile polaroid, video ricordi, e una galleria completa con ogni foto del dump originale (compresse, lazy-loaded)
- **Diploma** — pergamena con dati reali della tesi, apertura a click
- **Elemento periodico** — card "Lu" (110) con flip al tap/hover
- **Muro degli auguri** — messaggi precaricati + link `wa.me` per aggiungerne
- **Footer** — le due date reali (discussione + festa), pulsanti "Aggiungi al calendario" (`.ics` statici in `public/`) e link a Google Maps
- Tutti i testi in `src/data/content.ts`; foto/video extra indicizzati in `src/data/mediaIndex.ts` (generato, vedi sotto)

## Foto e video: pipeline di compressione

Il dump grezzo delle foto (280 scatti, alcuni video) è troppo pesante per una
pagina mobile-first. Due script una-tantum (richiedono `sharp`, già in
`devDependencies`) si occupano di comprimere e indicizzare:

```bash
node scripts/optimize-media.mjs        # ridimensiona/comprime in public/gallery e public/videos
node scripts/generate-media-index.mjs  # rigenera src/data/mediaIndex.ts
```

Il percorso della cartella sorgente è hardcoded in cima a
`optimize-media.mjs` — aggiornalo se il dump si sposta.

## Sviluppo locale

```bash
npm install
npm run dev
npm run test   # vitest
```

## Contenuti

Tutti i testi (nome, tesi, timeline, messaggi) sono in `src/data/content.ts`.
Le foto vanno in `src/assets/photos/` (vedi il README lì dentro per come
collegarle alla gallery).

## Deploy su GitHub Pages

1. Su GitHub: Settings → Pages → Source: **GitHub Actions**.
2. Push su `main`: il workflow `.github/workflows/deploy.yml` builda e pubblica
   automaticamente.
3. Se il repository viene rinominato, aggiorna `base` in `vite.config.ts` e il
   `favicon` in `index.html` di conseguenza (devono combaciare col nome repo).

Il sito sarà disponibile su `https://<utente>.github.io/ludovica-laurea/`.
