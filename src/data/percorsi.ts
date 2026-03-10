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

export type ProgramSession = {
  date: string;
  master: string;
  image: string;
  lessonPlaceholder: string;
  imagePosition?: string;
};

export type ProgramTrack = {
  name: string;
  sessions: ProgramSession[];
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
    "Scegli il percorso che senti piu vicino ai tuoi obiettivi e inizia a costruire il tuo prossimo livello professionale.",
  comparisonTitle: "Quale percorso fa per te?",
  sharedInfoTitle: "Informazioni comuni ai due percorsi",
  sharedFeatures: [
    "6 master",
    "6 tecniche avanzate",
    "Kit professionale in omaggio",
    "Merchandising Beauty Line Academy",
  ],
  openingCeremonyDate: "11 Aprile",
  openingCeremonyLabel: "Festa di chiusura percorso",
  programIntro:
    "Una programmazione distribuita su piu giornate con master dedicati, ispirata a un format evento intensivo.",
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
  programSectionTitle: "Il Programma",
  lessonPlaceholderLabel: "Tecnica del giorno (placeholder)",
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
    title: "Parliamone insieme",
    subtitle:
      "Compila il modulo e ti ricontattiamo per aiutarti a scegliere il percorso giusto per te.",
    submitLabel: "Invia richiesta",
    privacyText:
      "Acconsento a essere ricontattata per ricevere informazioni sui Percorsi Master.",
  },
};

export const percorsi: Percorso[] = [
  {
    name: "Percorso Master Pro",
    subtitle: "Crescita tecnica completa",
    description:
      "Percorso esclusivo con master nazionali e internazionali, dedicato a precisione, struttura e visione professionale del lavoro.",
    highlights: [
      "6 attestati di partecipazione",
      "Valutazione tecnica durante il percorso",
      "Kit professionale in omaggio",
      "Merchandising Beauty Line Academy",
    ],
    dates: ["24-25 Gennaio", "14-15 Febbraio", "14-15 Marzo"],
    certifications: [
      { level: "Bronzo", label: "Attestato Tecnico" },
      { level: "Silver", label: "Attestato Tecnico Pro" },
      { level: "Gold", label: "Attestato Master" },
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
      { level: "Master Gold", label: "" },
      { level: "Master Platinum", label: "" },
    ],
  },
];

export const programTracks: ProgramTrack[] = [
  {
    name: "Percorso Master Pro",
    sessions: [
      {
        date: "24 Gennaio",
        master: "Yullia Bilichenco",
        image: "/images/master_01.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 24 Gennaio",
      },
      {
        date: "25 Gennaio",
        master: "Valentina Petrocco",
        image: "/images/master_02.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 25 Gennaio",
        imagePosition: "50% 3%",
      },
      {
        date: "14 Febbraio",
        master: "Facio Billoni",
        image: "/images/master_03.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 14 Febbraio",
        imagePosition: "50% 2%",
      },
      {
        date: "15 Febbraio",
        master: "Serjey",
        image: "/images/master_04.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 15 Febbraio",
      },
      {
        date: "14 Marzo",
        master: "Ildiko",
        image: "/images/master_05.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 14 Marzo",
      },
      {
        date: "15 Marzo",
        master: "Irina Primo",
        image: "/images/master_06.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 15 Marzo",
      },
    ],
  },
  {
    name: "Percorso Master Experience",
    sessions: [
      {
        date: "20 Febbraio",
        master: "Toxyc",
        image: "/images/master_07.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 20 Febbraio",
        imagePosition: "50% 25%",
      },
      {
        date: "21 Febbraio",
        master: "Mariann Molinar",
        image: "/images/master_08.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 21 Febbraio",
      },
      {
        date: "22 Febbraio",
        master: "Tanya Povescaia",
        image: "/images/master_09.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 22 Febbraio",
      },
      {
        date: "20 Marzo",
        master: "Moruz Dama",
        image: "/images/master_10.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 20 Marzo",
        imagePosition: "50% 95%",
      },
      {
        date: "21 Marzo",
        master: "Cabriales",
        image: "/images/master_11.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 21 Marzo",
        imagePosition: "50% 0%",
      },
      {
        date: "22 Marzo",
        master: "Mimo London",
        image: "/images/master_12.webp",
        lessonPlaceholder: "Inserire tecnica ufficiale del 22 Marzo",
      },
    ],
  },
];

export const sectionAnchors = {
  percorsi: "percorsi",
  programma: "programma",
  requisiti: "requisiti",
  faq: "faq",
  contatti: "contatti",
};
