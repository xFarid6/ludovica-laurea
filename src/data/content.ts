// Tutti i testi reali del sito vivono qui. I componenti leggono da
// questo file: modifica pure i valori senza toccare i componenti.

export const content = {
  hero: {
    eyebrow: '23 luglio 2026 · Torino',
    title: 'Dottoressa Ludovica',
    subtitle:
      'Suona bene, vero? Tre anni di provette, notti insonni e un laser puntato sui residui di sparo — e adesso è ufficiale. Siamo fieri di te. 💜',
    cta: 'Segui gli indizi ↓',
    celebrate: 'Festeggia! 🎉',
  },
  counter: {
    graduatedAt: '2026-07-23T11:00:00',
    label: 'Dottoressa da',
    units: { months: 'mesi', days: 'giorni', hours: 'ore', minutes: 'minuti', seconds: 'secondi' },
  },
  timeline: [
    { year: "L'inizio", title: 'Il primo giorno in aula', text: 'Zaino pieno di sogni e un po’ di paura del primo esame di chimica generale.' },
    { year: 'La svolta', title: 'La chimica forense', text: 'Scopre che la scienza può risolvere casi veri. Da lì non si è più fermata.' },
    { year: 'La tesi', title: '«Sparo un laser sui residui di sparo»', text: 'La frase con cui ha spiegato la tesi a mezza famiglia. Nessuno ha capito, tutti fieri.' },
    { year: 'Le notti', title: 'Caffè, paper e spettri', text: 'Notti sui grafici e sugli articoli scientifici. La caffeina, trasformata in laurea.' },
    { year: '23.07.2026', title: 'Aula Cannizzaro, ore 9:00', text: 'Il grande giorno. La discussione. Il momento che aspettavamo tutti.' },
    { year: 'Ufficiale', title: 'Dottoressa Di Stasio', text: 'Fatto. Ora è ufficiale e non glielo toglie più nessuno.' },
  ],
  investigation: {
    intro: 'La tesi di Ludovica è chimica forense: identificare i residui di sparo. Raccogli gli indizi per risolvere il caso.',
    clues: [
      {
        id: 'raman',
        tech: 'Spettroscopia Raman',
        tag: 'OGSR',
        hint: 'Impronta digitale molecolare',
        explain: 'Legge la struttura delle molecole (gli stabilizzanti DPA, MC, EC) creando un’impronta univoca, senza distruggere il reperto.',
        love: 'Come lei: riconosce le persone dai dettagli che gli altri non notano.',
      },
      {
        id: 'semedx',
        tech: 'SEM-EDX',
        tag: 'IGSR',
        hint: 'Il «gold standard»',
        explain: 'Microscopia elettronica + raggi X: guarda i granelli uno per uno, il metodo di riferimento per i residui inorganici.',
        love: 'Precisa fin nei minimi granelli. Tipico.',
      },
      {
        id: 'icpms',
        tech: 'ICP-MS',
        tag: 'Tracce',
        hint: 'Caccia agli elementi in tracce',
        explain: 'Spettrometria di massa a plasma: trova gli elementi anche in quantità piccolissime.',
        love: 'Trova sempre quello che cerca, anche quando è nascosto.',
      },
      {
        id: 'libs',
        tech: 'LIBS',
        tag: 'La protagonista',
        hint: 'Il laser che accende un plasma',
        explain: 'Laser Induced Breakdown Spectroscopy: un laser accende un micro-plasma e ne legge la luce. Veloce, portatile, il cuore della sua tesi.',
        love: 'La sua tecnica del cuore. Brillante, letteralmente.',
      },
    ],
    verdict: {
      title: 'Caso risolto.',
      text: 'Imputata riconosciuta colpevole di essere troppo brava. Condanna: una laurea in Chimica e Tecnologie Chimiche. Nessuna attenuante. 🎓',
    },
  },
  gallery: [
    { src: 'crown-smile', alt: 'Ludovica con la corona di fiori, sorriso dolce, per le vie di Torino', caption: 'Regina per un giorno 👑🌸' },
    { src: 'crown-wink', alt: 'Ludovica con la corona di fiori fa l’occhiolino e la linguaccia', caption: 'Seria, serissima.' },
    { src: 'lab-coat', alt: 'Ludovica nel camice bianco con «Ludovica» ricamato', caption: 'In tenuta da scienziata 🔬' },
  ],
  fullGallery: {
    title: 'Tutti i ricordi',
    intro: 'Ogni scatto della giornata, dal primo al mille e uno. Scorri con calma. 💜',
  },
  videos: [
    { file: 'VID-20260723-WA0002.mp4', caption: 'Il giorno della discussione 🎓' },
    { file: 'VID-20260724-WA0064.mp4', caption: 'La festa comincia 🍹' },
    { file: 'VID-20260724-WA0128.mp4', caption: 'Balli e brindisi' },
    { file: 'VID-20260724-WA0145.mp4', caption: 'Un altro momento da non perdere' },
    { file: 'VID-20260724-WA0177.mp4', caption: 'Fino a notte fonda' },
  ],
  diploma: {
    university: 'Università degli Studi di Torino',
    course: 'Corso di Laurea in Chimica e Tecnologie Chimiche',
    thesisTitle: 'Utilizzo della Laser Induced Breakdown Spectroscopy nell’identificazione dei residui di polvere da sparo',
    advisor: 'Relatore: Prof. Marco Pazzi',
    candidate: 'Candidata: Ludovica Di Stasio',
    matricola: 'Matricola 1044864',
    academicYear: 'Anno Accademico 2025/2026',
    blurb: 'Si attesta che Ludovica Di Stasio ha ufficialmente trasformato litri di caffeina in una laurea in Chimica. Con affetto e un pizzico di invidia.',
  },
  periodicCard: {
    symbol: 'Lv',
    number: '118',
    name: 'Ludovicium',
    category: '∞ talento',
    description: 'Elemento raro, stabile sotto pressione, brilla nei momenti che contano.',
    properties: [
      'Configurazione: 100% determinata',
      'Punto di ebollizione: alto (sopporta tutti gli esami)',
      'Reattività: fortissima con la chimica',
      'Stato: finalmente laureata',
    ],
  },
  guestbook: {
    intro: 'Lascia due parole alla dottoressa 💌',
    submitHref: 'https://wa.me/?text=Auguri%20dottoressa%20Ludovica!',
    notes: [
      { from: 'Mamma e papà', text: 'Il nostro orgoglio più grande. Sempre.' },
      { from: 'Gli amici', text: 'Ora che sei dottoressa ci spieghi tu la chimica dei cocktail 🍹' },
      { from: 'Chi ti vuole bene', text: 'Te lo meriti tutto. Ogni singola provetta.' },
      { from: 'Volpe 🦊', text: 'Da una volpe al suo coniglietto: sono fiero di te più di quanto le parole sappiano dire. Ti amo, dottoressa mia.' },
      { from: 'Il Boss', text: 'La collega migliore che abbia mai avuto, e ora pure dottoressa. Complimenti di cuore, te lo sei guadagnato tutto.' },
      { from: 'Il tuo Bf', text: 'Ti ho vista studiare, piangere, ridere e non mollare mai. Sono innamorato di ogni singola versione di te. Congratulazioni, amore mio 💜' },
    ],
  },
  events: [
    {
      key: 'discussione',
      kicker: 'Il grande giorno',
      title: 'La discussione di laurea',
      date: '23 luglio 2026',
      time: 'ore 9:00',
      place: 'Aula Cannizzaro — Dipartimento di Chimica, Università di Torino',
      mapQuery: 'Dipartimento di Chimica Università di Torino',
      ics: 'discussione.ics',
    },
    {
      key: 'festa',
      kicker: 'Si festeggia',
      title: 'I festeggiamenti',
      date: '24 luglio 2026',
      time: 'ore 21:30',
      place: 'Cocktail bar Mana Tiki 🍹',
      mapQuery: 'Mana Tiki cocktail bar Torino',
      ics: 'festa.ics',
      note: 'Confido nella vostra puntualità. Non mancate!',
    },
  ],
  footer: {
    signoff: 'Con tutto l’affetto del mondo — per la nostra dottoressa Ludovica. 💜🔬',
  },
} as const

export type Content = typeof content
