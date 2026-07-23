# 🎓💜 Dr.ssa Ludovica

Regalo di laurea per Ludovica — laureata in Chimica. Una piccola webapp cute,
nei toni del lilla, per festeggiarla.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (palette lilla custom in `src/index.css`)
- [canvas-confetti](https://www.kirilv.com/canvas-confetti/) per l'effetto coriandoli
- Deploy automatico su GitHub Pages via GitHub Actions

## Funzionalità

- **Hero** — titolo di benvenuto + bottone "Festeggia" con coriandoli lilla (canvas-confetti)
- **Timeline** — le tappe del percorso universitario, in ordine cronologico
- **Caso investigativo** — mini-gioco a tema chimica forense: 6 indizi cliccabili sparsi in una scena, ognuno apre un pannello con dettaglio; trovarli tutti sblocca una schermata "caso chiuso" con coriandoli e pulsante rigioca
- **Gallery** — griglia foto con lightbox a schermo intero; foto non ancora caricate mostrano un placeholder
- **Diploma** — pergamena virtuale con effetto flip 3D, si apre al click rivelando tesi/università/data
- **Elemento personalizzato** — easter egg a tema tavola periodica ("Ludovicium", elemento 118)
- **Muro degli auguri** — messaggi di amici e famiglia
- **Sfondo animato** — bolle e molecole SVG fluttuanti, puramente decorativo
- Tutti i testi sono centralizzati in `src/data/content.ts`, così le sezioni si aggiornano senza toccare i componenti

## Prossime feature (roadmap)

Tracciate come [Issue su GitHub](../../issues) — idee non ancora implementate:

- Countdown/contatore "Dr.ssa da X giorni"
- Modalità musica di sottofondo
- Dark mode lilla

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
