export type CertificationLevel = {
  level: string;
  label: string;
};

export type Percorso = {
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  dates: string[];
  certifications: CertificationLevel[];
};

export const pageContent = {
  brand: "Beauty Line Academy",
  siteUrl: "https://www.beautylineprofessional.com/",
  contactPhone: "+39 338 253 5226",
  contactAddress: "Via Michelangelo Buonarroti 24 - Monza",
  hero: {
    eyebrow: "Percorsi Master",
    title: "Scegli il tuo percorso master",
    description:
      "Due percorsi formativi esclusivi per onicotecniche che vogliono crescere professionalmente e raggiungere un livello tecnico superiore.",
    ctaPrimary: "Richiedi informazioni",
    ctaSecondary: "Scopri il programma",
    imageAlt: "Placeholder hero Percorsi Master",
    imagePlaceholder: "Sostituire con foto hero ufficiale",
  },
  comparisonIntro:
    "Confronta i due percorsi e scegli quello piu adatto al tuo prossimo livello professionale.",
  masterAwardDay: {
    title: "Master Award Day",
    date: "11 Aprile",
    description:
      "Cerimonia ufficiale di chiusura con consegna attestati, confronto con i master e festa finale.",
    bullets: [
      "Dimostrazioni tecniche",
      "Momenti di confronto con i Master",
      "Consegna ufficiale degli attestati",
      "Premiazione dei livelli raggiunti",
      "Festa finale con aperitivo",
    ],
  },
  requirements: [
    "Corso Base Gel",
    "Corso Fresa",
    "Corso Forme",
    "Corso Base Dual Form",
    "Corso Base Nail Art",
  ],
  preMaster:
    "Sara organizzato un PRE MASTER dedicato alle partecipanti per prepararle alle tecniche avanzate del percorso.",
  materials: [
    "Lampada UV/LED",
    "Fresa",
    "Punte per fresa",
    "Pennelli",
  ],
  dayFlow: [
    "Dimostrazione tecnica del Master passo dopo passo",
    "Fase pratica guidata con applicazione immediata",
    "Valutazione su struttura, precisione, pulizia ed equilibrio",
    "Focus su limatura e rifinitura professionale",
  ],
  whyParticipate:
    "Non e un semplice corso: e un percorso di crescita concreta per migliorare tecnica, confronto professionale e riconoscimento reale delle competenze.",
  urgency:
    "I posti sono limitati per garantire massima qualita nella formazione.",
  faqs: [
    {
      question: "Posso partecipare se non ho ancora completato i prerequisiti?",
      answer:
        "Puoi iscriverti ora e completare almeno uno dei corsi richiesti prima dell'inizio del percorso.",
    },
    {
      question: "Ricevero un attestato?",
      answer:
        "Si. Ogni percorso prevede certificazioni finali in base alla valutazione tecnica raggiunta.",
    },
    {
      question: "I materiali sono inclusi?",
      answer:
        "Ogni partecipante riceve un kit completo. Alcune attrezzature personali restano da portare in aula.",
    },
    {
      question: "Quando verranno inseriti foto e nomi corsi definitivi?",
      answer:
        "Questa pagina usa contenuti placeholder per facilitare l'aggiornamento rapido non appena vengono forniti.",
    },
  ],
  leadForm: {
    title: "Prenota il tuo colloquio orientativo",
    subtitle:
      "Compila il modulo e ti ricontattiamo con tutte le informazioni sul percorso piu adatto a te.",
    submitLabel: "Invia richiesta",
    privacyText:
      "Acconsento a essere ricontattata per ricevere informazioni sui Percorsi Master.",
  },
};

export const percorsi: Percorso[] = [
  {
    name: "Percorso Master Pro",
    subtitle: "6 master, 6 tecniche avanzate, crescita tecnica completa",
    description:
      "Percorso esclusivo con master nazionali e internazionali, dedicato a precisione, struttura e visione professionale del lavoro.",
    highlights: [
      "6 tecniche avanzate",
      "6 attestati di partecipazione",
      "Valutazione tecnica durante il percorso",
      "Kit professionale in omaggio",
      "Merchandising Beauty Line Academy",
    ],
    dates: ["24-25 Gennaio", "14-15 Febbraio", "14-15 Marzo"],
    certifications: [
      { level: "Bronzo", label: "Attestato Tecnico" },
      { level: "Silver", label: "Attestato Tecnico Pro" },
      { level: "Oro", label: "Attestato Master" },
    ],
  },
  {
    name: "Percorso Master Experience",
    subtitle: "Formazione intensiva con master internazionali",
    description:
      "Esperienza immersiva per apprendere nuove tecniche e alzare il livello professionale insieme a master di fama mondiale.",
    highlights: [
      "Full immersion tecnica",
      "Affiancamento con master internazionali",
      "Esperienza pratica ad alta intensita",
      "Networking professionale",
    ],
    dates: ["20-21-22 Febbraio", "20-21-22 Marzo"],
    certifications: [
      { level: "Master Gold", label: "Certificazione finale" },
      { level: "Master Platinum", label: "Certificazione finale" },
    ],
  },
];

export const sectionAnchors = {
  programma: "programma",
  requisiti: "requisiti",
  faq: "faq",
  contatti: "contatti",
};
