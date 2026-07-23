# 🎓💜 Dr.ssa Ludovica

Regalo di laurea per Ludovica — laureata in Chimica. Una piccola webapp cute,
nei toni del lilla, per festeggiarla.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (palette lilla custom in `src/index.css`)
- [canvas-confetti](https://www.kirilv.com/canvas-confetti/) per l'effetto coriandoli
- Deploy automatico su GitHub Pages via GitHub Actions

## Sezioni attuali (facilmente modificabili/sostituibili)

- **Hero** — titolo di benvenuto + bottone "Festeggia" con coriandoli lilla
- **Timeline** — le tappe del percorso universitario
- **Gallery** — griglia foto con lightbox (placeholder finché non arrivano le foto vere)
- **Diploma** — pergamena virtuale animata da aprire
- **Elemento personalizzato** — easter egg a tema tavola periodica ("Ludovicium")
- **Muro degli auguri** — messaggi di amici e famiglia

Idee non ancora implementate, da valutare: countdown/contatore "Dr.ssa da X
giorni", modalità musica di sottofondo, dark mode lilla.

## Sviluppo locale

```bash
npm install
npm run dev
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
