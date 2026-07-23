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
  // Placeholder plausibile: sostituisci col titolo esatto della tesi.
  thesisTitle: 'Analisi di residui dello sparo (GSR) mediante spettroscopia LIBS',
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
    title: 'Le prime tracce',
    description:
      'La scoperta della chimica forense: si parte dalle tracce ematiche.',
    emoji: '🩸',
  },
  {
    year: 'Svolta',
    title: 'Sulle tracce della polvere da sparo',
    description:
      'L’interesse si sposta sul GSR (Gunshot Residue): particelle invisibili, indizi decisivi.',
    emoji: '💨',
  },
  {
    year: 'Tesi',
    title: 'LIBS: l’ultima reazione',
    description:
      'Spettroscopia LIBS per l’analisi dei residui dello sparo: ricerca, laser e tanta precisione.',
    emoji: '🔬',
  },
  {
    year: 'Oggi',
    title: 'Dr.ssa Ludovica!',
    description: 'Caso chiuso: obiettivo raggiunto al 100%.',
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

export type Clue = {
  id: string
  emoji: string
  label: string
  // Posizione della "hotspot" nella scena, in percentuale (0-100).
  x: number
  y: number
  title: string
  detail: string
}

// I 6 indizi del mini-caso investigativo (a tema chimica forense: dalle
// tracce ematiche al GSR, fino alla tecnica LIBS della tesi).
export const clues: Clue[] = [
  {
    id: 'blood',
    emoji: '🩸',
    label: 'Macchia sospetta',
    x: 22,
    y: 72,
    title: 'Traccia ematica',
    detail:
      'Da qui è iniziato tutto: le prime tracce ematiche che hanno acceso la passione per la chimica forense.',
  },
  {
    id: 'glove',
    emoji: '🧤',
    label: 'Guanto abbandonato',
    x: 74,
    y: 66,
    title: 'Residuo di polvere da sparo (GSR)',
    detail:
      'Particelle microscopiche di GSR sul tessuto: l’indizio decisivo, la vera specialità della nostra Dr.ssa.',
  },
  {
    id: 'libs',
    emoji: '🔬',
    label: 'Strumento sul tavolo',
    x: 50,
    y: 38,
    title: 'Spettrometro LIBS',
    detail:
      'Laser-Induced Breakdown Spectroscopy: un impulso laser, uno spettro di luce, un risultato. L’argomento della tesi.',
  },
  {
    id: 'swab',
    emoji: '🧷',
    label: 'Tampone per il prelievo',
    x: 34,
    y: 52,
    title: 'Campionamento',
    detail: 'Il prelievo va fatto con cura: un campione contaminato è un indizio perso.',
  },
  {
    id: 'lens',
    emoji: '🔍',
    label: 'Lente dimenticata',
    x: 84,
    y: 30,
    title: 'Osservazione al dettaglio',
    detail: 'Il diavolo è nei dettagli, anche in laboratorio: mai fidarsi solo a occhio nudo.',
  },
  {
    id: 'report',
    emoji: '🗂️',
    label: 'Fascicolo del caso',
    x: 12,
    y: 30,
    title: 'Referto finale',
    detail: 'Tutti i dati raccolti, incrociati e confermati: pronti per la relazione finale.',
  },
]

export const caseSolved = {
  title: 'Caso chiuso, Dr.ssa Ludovica! 🎉',
  message:
    'Dalle tracce ematiche al GSR, fino alla spettroscopia LIBS: hai unito tutti gli indizi e risolto il caso. Proprio come nella tua tesi.',
}

// Elemento "personalizzato" per l'easter egg a tema tavola periodica.
export const customElement = {
  symbol: 'Lv',
  number: 118,
  name: 'Ludovicium',
  mass: '∞ talento',
  description:
    'Elemento raro, stabile sotto pressione, brilla nei momenti che contano.',
}
