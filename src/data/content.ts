// ─────────────────────────────────────────────────────────────
// Tutti i contenuti "reali" del sito vivono qui: modifica pure
// questi valori (testi, date, foto, messaggi) senza dover
// toccare i componenti.
// ─────────────────────────────────────────────────────────────

export const graduate = {
  firstName: 'Ludovica',
  degree: 'Laurea in Chimica',
  // Formato libero, es. "9 luglio 2026"
  graduationDate: '',
  thesisTitle: '',
  university: '',
}

export type TimelineEvent = {
  year: string
  title: string
  description: string
  emoji: string
}

// Tappe del percorso di Ludovica: sostituisci con quelle vere.
export const timeline: TimelineEvent[] = [
  {
    year: 'Anno 1',
    title: 'La prima provetta',
    description: 'Immatricolazione e primi laboratori: tutto da scoprire.',
    emoji: '🧪',
  },
  {
    year: 'Anno 2',
    title: 'Formule su formule',
    description: 'Chimica organica, notti di studio e caffè infiniti.',
    emoji: '📚',
  },
  {
    year: 'Anno 3',
    title: 'In laboratorio sul serio',
    description: 'Esperimenti, analisi e tanta pazienza tra becher e bilance.',
    emoji: '⚗️',
  },
  {
    year: 'Tesi',
    title: 'L’ultima reazione',
    description: 'Ricerca, scrittura e revisioni fino all’ultimo giorno.',
    emoji: '🔬',
  },
  {
    year: 'Oggi',
    title: 'Dr.ssa Ludovica!',
    description: 'Reazione completata: obiettivo raggiunto al 100%.',
    emoji: '🎓',
  },
]

export type GalleryPhoto = {
  // Importa la foto in cima al file components/Gallery.tsx e passa
  // qui il riferimento, es: src: fotoLaboratorio
  src?: string
  caption: string
}

// 6 slot placeholder: appena arrivano le foto di Ludovica, aggiungi
// gli import in Gallery.tsx e valorizza "src".
export const galleryPhotos: GalleryPhoto[] = [
  { caption: 'Il giorno della laurea' },
  { caption: 'In laboratorio' },
  { caption: 'Con le amiche di corso' },
  { caption: 'La tesi finita' },
  { caption: 'Festeggiamenti' },
  { caption: 'Un ricordo speciale' },
]

export type GuestbookMessage = {
  author: string
  message: string
  emoji: string
}

// Messaggi di auguri: modifica/aggiungi quelli veri di amici e famiglia.
export const guestbookMessages: GuestbookMessage[] = [
  {
    author: 'Tutti noi',
    message:
      'Complimenti Dr.ssa! Da oggi ufficialmente la più brava a bilanciare le equazioni (e non solo).',
    emoji: '💜',
  },
  {
    author: 'Il gruppo di laboratorio',
    message: 'Ce l’hai fatta! Ora tocca a te scoprire la formula della felicità.',
    emoji: '🧫',
  },
  {
    author: 'Chi ti vuole bene',
    message: 'Orgogliosi di te, oggi e sempre. Sei una vera scienziata!',
    emoji: '🥂',
  },
]

// Elemento "personalizzato" per l'easter egg a tema tavola periodica.
export const customElement = {
  symbol: 'Lv',
  number: 118,
  name: 'Ludovicium',
  mass: '∞ talento',
  description:
    'Elemento raro, stabile sotto pressione, brilla nei momenti che contano.',
}
