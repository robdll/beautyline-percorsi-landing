export type CertificationLevel = {
  level: string;
  label: string;
};

export type Percorso = {
  name: string;
  shortName: string;
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
  description: string;
  description2: string;
  sessions: ProgramSession[];
};

export const pageContent = {
  brand: "Beauty Line Academy",
  siteUrl: "https://www.beautylineprofessional.com/",
  contactPhone: "+39 338 253 5226",
  contactAddress: "Via Michelangelo Buonarroti 24 - Monza",
  hero: {
    eyebrow: "Percorsi Master Beauty Line Academy 2027",
    title: "Scegli il tuo Percorso Master",
    description:
      "Beauty Line Academy presenta due percorsi formativi esclusivi con Master nazionali, internazionali e mondiali, dedicati alle onicotecniche che vogliono portare la propria tecnica a un livello superiore.",
    depositLine: "Blocca il tuo posto con una caparra di soli €299",
    limitedSeats: "Classi a numero chiuso Solo 12 posti disponibili per ogni percorso master",
    introParagraphs: [
      "Beauty Line Academy ha creato due percorsi formativi esclusivi pensati per le onicotecniche che desiderano crescere professionalmente, perfezionare la propria tecnica e confrontarsi con alcuni dei migliori Master nazionali, internazionali e mondiali del settore nails.",
      "Durante il percorso avrai la possibilità di apprendere tecniche avanzate di alto livello, vivere un’esperienza formativa intensa e ottenere una certificazione finale di prestigio basata sulle competenze raggiunte.",
    ],
    strongLine:
      "MASTER NAZIONALI, INTERNAZIONALI E MONDIALI • TECNICHE AVANZATE • CERTIFICAZIONE FINALE • SOLO 12 POSTI DISPONIBILI",
    ctaPrimary: "Prenota ora",
    ctaSecondary: "Scopri il programma",
    imageAlt: "Placeholder hero Percorsi Master",
    imagePlaceholder: "Sostituire con foto hero ufficiale",
  },
  comparisonIntro:
    "Due percorsi formativi esclusivi creati da Beauty Line Academy per offrirti una vera esperienza professionale e portare la tua tecnica a un livello superiore.",
  comparisonTitle: "Scegli il tuo Percorso Master",
  sharedInfoTitle: "Cosa include il percorso",
  sharedFeatures: [
    "6 Master di alto livello",
    "6 tecniche avanzate",
    "6 attestati di partecipazione",
    "Kit professionale in omaggio FIRMATO CHRIS NAILS",
    "Gadget e merchandising esclusivo",
    "Formazione pratica intensiva",
    "Confronto diretto con Master nazionali e internazionali e mondiali",
  ],
  sharedInfoStrong: "ATTESTATI BRONZESILVERGOLD *PLATINUM",
  openingCeremonyDate: "11 Aprile",
  openingCeremonyLabel: "MASTER AWARD DAY 📅 11 Aprile 🏆 Cerimonia Master Award Day",
  programIntro:
    "Una programmazione esclusiva distribuita su più giornate formative, con Master nazionali e internazionali, Mondiali dedicati a tecniche avanzate.",
  programDetails: [
    "Ogni giornata sarà guidata da un Master diverso, che presenterà una tecnica specifica attraverso dimostrazione, pratica guidata e confronto diretto con le partecipanti.",
    "Un format formativo intenso ispirato ai grandi eventi internazionali del settore nails.",
  ],
  masterAwardDay: {
    title: "Cerimonia finale Percorsi Master Beauty Line Academy",
    date: "11 Aprile",
    description:
      "Una festa speciale dedicata alla conclusione dei Percorsi Master, dove celebreremo insieme il percorso formativo delle partecipanti con la consegna delle certificazioni finali e la premiazione dei livelli raggiunti.",
    bullets: [
      "Durante l’evento vivremo un momento di condivisione con tutte le corsiste, festeggiando insieme la crescita professionale e l’esperienza vissuta durante il percorso.",
      "Aperitivo celebrativo per brindare insieme alla conclusione del percorso e condividere un momento speciale con tutte le partecipanti.",
    ],
  },
  certificationSection: {
    title: "SEZIONE CERTIFICAZIONE",
    textA: "Durante il percorso ogni partecipante verrà valutata dai Master.",
    textB: "Il punteggio finale determinerà il livello della certificazione ottenuta.",
  },
  requirementsIntro:
    "I Percorsi Master Beauty Line Academy sono dedicati a onicotecniche che possiedono già una base tecnica e desiderano portare le proprie competenze a un livello superiore.",
  requirements: [
    "Corso Base Gel",
    "Corso Fresa",
    "Corso Forme",
    "Corso Base Dual Form",
    "Corso Base Nail Art",
  ],
  requirementsEvaluationTitle: "Valutazione della preparazione",
  requirementsEvaluation:
    "Le partecipanti che hanno seguito corsi online potranno comunque richiedere l’accesso al percorso. La loro preparazione tecnica verrà valutata dallo staff Beauty Line Academy per verificare che il livello sia adeguato alle tecniche avanzate previste durante il Master.",
  preMasterTitle: "Pre Master di preparazione",
  preMaster:
    "Per le partecipanti che desiderano accedere al percorso ma devono ancora consolidare alcune basi tecniche, verrà organizzato un Pre Master dedicato. Questo incontro formativo permetterà di prepararsi alle tecniche avanzate del percorso e affrontare il Master con una preparazione adeguata.",
  materialsTitle: "Materiali e attrezzatura Kit professionale incluso",
  materialsIntro:
    "Durante il percorso verranno utilizzati prodotti professionali della linea Chris Nails, insieme ad altri marchi selezionati messi a disposizione dai Master per lo svolgimento delle diverse tecniche. Ogni partecipante riceverà un kit completo di prodotti per lavorare durante le giornate formative.",
  materialsCarryTitle: "Cosa portare ai corsi",
  materialsCarryText:
    "Per partecipare sarà necessario portare solo la propria attrezzatura personale. Tutti gli altri prodotti verranno forniti durante i corsi.",
  materials: [
    "Lampada UV/LED",
    "Fresa",
    "Punte per fresa",
    "Pennelli da lavoro",
    "Attrezzatura personale (forbicine, spingicuticole, ecc.)",
  ],
  dayFlow: [
    "Dimostrazione tecnica del Master passo dopo passo",
    "Fase pratica guidata con applicazione immediata",
    "Valutazione su struttura, precisione, pulizia ed equilibrio",
    "Focus su limatura e rifinitura professionale",
  ],
  programSectionTitle: "Il Programma",
  lessonPlaceholderLabel: "Tecnica del giorno",
  dayFlowOutro:
    "Un’esperienza formativa completa per migliorare realmente la propria tecnica.",
  whyParticipate:
    "Non si tratta di un semplice corso, ma di un vero percorso di crescita professionale pensato per migliorare la propria tecnica, confrontarsi con grandi professionisti del settore e ottenere un riconoscimento reale delle proprie competenze.",
  urgency:
    "I posti sono limitati per garantire la massima qualità nella formazione e permettere a ogni partecipante di essere seguita durante tutte le fasi del lavoro.",
  closingStrong: "Solo 12 posti disponibili per ogni percorso master.",
  faqs: [
    {
      question: "PERCHÉ PARTECIPARE",
      answer:
        "I Percorsi Master Beauty Line Academy non sono semplici corsi, ma un’esperienza formativa unica che ti permetterà di confrontarti con alcuni dei migliori Master nazionali e internazionali e monidiali del settore nails. Durante il percorso potrai migliorare la tua tecnica, acquisire nuove competenze avanzate e ottenere una certificazione finale di grande valore professionale e fare una bella esperinza",
    },
    {
      question: "Posso partecipare se non ho ancora completato i prerequisiti?",
      answer:
        "Sì. È possibile iscriversi al percorso e completare almeno uno dei corsi richiesti prima dell’inizio delle giornate Master. Per le partecipanti che devono consolidare alcune basi tecniche verrà organizzato anche un Pre Master di preparazione .",
    },
    {
      question: "Riceverò un attestato?",
      answer:
        "Sì. Durante il percorso riceverai un attestato di partecipazione per ogni Master, per un totale di 6 attestati. Al termine del percorso verrà rilasciata una certificazione finale basata sul livello tecnico raggiunto, che varierà in base al percorso scelto. Percorso Master Pro • Bronze – Attestato Tecnico • Silver – Attestato Tecnico Expert • Gold – Attestato Master. Percorso Master Experience • Master expert Gold • Master advanced Platinum –. La certificazione verrà consegnata durante il Master Award Day, la giornata finale dedicata alla premiazione e alla consegna degli attestati.",
    },
    {
      question: "I materiali sono inclusi?",
      answer:
        "Sì. Durante il percorso verranno forniti prodotti professionali della linea Chris Nails e materiali messi a disposizione dai Master. Ogni partecipante riceverà inoltre un kit professionale per lavorare durante le giornate formative. Le partecipanti dovranno portare solo la propria attrezzatura personale: lampada, fresa con punte, pennelli e strumenti da lavoro.",
    },
    {
      question: "Qual è la differenza tra Percorso Master Pro e Percorso Master Experience?",
      answer:
        "Percorso Master Pro. Il Percorso Master Pro è pensato per migliorare la propria tecnica in modo strutturato attraverso il confronto diretto con Master nazionali e internazionali. È il percorso ideale per le onicotecniche che desiderano iniziare un’esperienza formativa con i Master e intraprendere un percorso di crescita professionale. È aperto a chi possiede già una base tecnica e vuole sviluppare ulteriormente le proprie competenze. Un percorso pensato per crescere tecnicamente e prepararsi a livelli sempre più avanzati nel mondo nails. Durante il percorso verrà effettuata una valutazione tecnica, che porterà alla certificazione finale basata sul livello raggiunto: • Bronze – Attestato Tecnico • Silver – Attestato Tecnico Expert • Gold – Attestato Master. Percorso Master Experience. Il Percorso Master Experience è un percorso formativo immersivo con Master internazionali e mondiali, pensato per vivere un’esperienza formativa di alto livello e portare la propria tecnica ancora più in alto. È dedicato alle onicotecniche che possiedono già una formazione avanzata e desiderano confrontarsi con tecniche evolute e professionisti di fama internazionale. Un percorso pensato per vivere un’esperienza formativa intensa, migliorare la propria visione tecnica e raggiungere livelli professionali ancora più elevati nel mondo nails. Durante il percorso verrà effettuata una valutazione tecnica, che porterà alla certificazione finale basata sul livello raggiunto: • Master Gold – Certificazione finale •Master advanced Platinum –",
    },
    {
      question: "i posti sono limitati?",
      answer:
        "Sì. Per garantire una formazione di alto livello e un confronto diretto con i Master, ogni percorso è limitato a massimo 12 partecipanti.",
    },
    {
      question: "Devo portare modella o lavorerò su di me?",
      answer:
        "Durante i corsi si lavorerà principalmente su tip o su se stesse, seguendo le indicazioni del Master durante la fase pratica.",
    },
    {
      question: "Quanto dura una giornata di Master?",
      answer:
        "Le giornate formative sono intensive e comprendono dimostrazione tecnica, pratica guidata e valutazione del lavoro svolto si inzia molto presto 9.00 e si finisce alle 18.00 con piccola pausa",
    },
    {
      question: "Posso prenotare il mio posto ora?",
      answer:
        "Sì. È possibile prenotare il proprio posto con un acconto, fino al raggiungimento del numero massimo di partecipanti.",
    },
    {
      question: "Posso pagare il percorso a rate?",
      answer:
        "Sì. Per bloccare il tuo posto è sufficiente una caparra di €299. Il restante importo potrà essere suddiviso e gestito con tranquillità prima dell’inizio del percorso.",
    },
    {
      question: "Come avviene la valutazione durante il percorso?",
      answer:
        "Durante ogni giornata di Master verrà effettuata una valutazione tecnica del lavoro svolto. Ogni Master assegnerà 5 criteri di valutazione legati alla tecnica proposta (come struttura, precisione, pulizia del lavoro, limatura ed equilibrio della forma). Al termine della giornata il Master attribuirà un voto da 5 a 10 per ciascun criterio. Alla fine del percorso, la somma delle valutazioni ottenute durante tutte le giornate di Master determinerà il livello della certificazione finale.",
    },
    {
      question: "Ancora indecisa?",
      answer:
        "Se stai pensando di partecipare, probabilmente senti già il desiderio di fare un passo avanti nella tua crescita professionale. Iscriviti e vivi l’esperienza dei Percorsi Master Beauty Line Academy.",
    },
  ],
  leadForm: {
    title: "Prenota ora",
    subtitle:
      "Compila il modulo e ti ricontattiamo per aiutarti a scegliere il percorso più adatto.",
    submitLabel: "Invia richiesta",
    limitedSeatsLine: "Solo 12 posti disponibili per ogni percorso master",
    privacyText:
      "Acconsento a essere ricontattata per ricevere informazioni sui Percorsi Master.",
  },
};

export const percorsi: Percorso[] = [
  {
    name: "Percorso Master Pro",
    shortName: "Master Pro",
    subtitle: "Crescita tecnica completa",
    description:
      "Percorso esclusivo con master nazionali e internazionali, dedicato a precisione, struttura e visione professionale del lavoro.",
    highlights: [
      "6 attestati di partecipazione",
      "Valutazione tecnica durante il percorso",
      "Kit professionale in omaggio FIRMATO CHRIS NAILS",
      "Gadget e merchandising esclusivo",
    ],
    dates: ["24-25 Gennaio", "14-15 Febbraio", "14-15 Marzo"],
    certifications: [
      { level: "Bronze", label: "Attestato Tecnico" },
      { level: "Silver", label: "Attestato Tecnico Expert" },
      { level: "Gold", label: "Attestato Master" },
    ],
  },
  {
    name: "Percorso Master Experience",
    shortName: "Master Experience",
    subtitle: "Formazione intensiva con master internazionali",
    description:
      "Esperienza immersiva per apprendere nuove tecniche e alzare il livello professionale insieme a master di fama mondiale.",
    highlights: [
      "Full immersion tecnica",
      "Affiancamento con master internazionali",
      "Esperienza pratica ad alta intensita",
      "Master mondiali e confronto diretto",
    ],
    dates: ["20-21-22 Febbraio", "20-21-22 Marzo"],
    certifications: [
      { level: "Master expert Gold", label: "" },
      { level: "Master advanced Platinum", label: "" },
    ],
  },
];

export const programTracks: ProgramTrack[] = [
  {
    name: "Percorso Master Pro",
    description: "Solo 12 posti disponibili per ogni percorso master",
    description2: "Blocca il tuo posto con una caparra di soli €299",
    sessions: [
      {
        date: "24 Gennaio",
        master: "master da definire",
        image: "/images/master_01.webp",
        lessonPlaceholder: "NOME CORSO DA DEFINIRE"
      },
      {
        date: "25 Gennaio",
        master: "Valentina Petrocco",
        image: "/images/master_02.webp",
        lessonPlaceholder: "NOME CORSO DA DEFINIRE",
      },
      {
        date: "14 Febbraio",
        master: "Facio Billoni",
        image: "/images/master_03.webp",
        lessonPlaceholder: "NOME CORSO DA DEFINIRE",
        imagePosition: "50% 2%",
      },
      {
        date: "15 Febbraio",
        master: "Serjey",
        image: "/images/master_04.webp",
        lessonPlaceholder: "NOME CORSO DA DEFINIRE",
      },
      {
        date: "14 Marzo",
        master: "Ildiko",
        image: "/images/master_05.webp",
        lessonPlaceholder: "NOME CORSO DA DEFINIRE",
      },
      {
        date: "15 Marzo",
        master: "Irina Primo",
        image: "/images/master_06.webp",
        lessonPlaceholder: "NOME CORSO DA DEFINIRE",
      },
      {
        date: "11 Aprile",
        master: "Cerimonia Master Award Day",
        image: "/images/cerimonia.webp",
        lessonPlaceholder: "Evento di chiusura",
      },
    ],
  },
  {
    name: "Percorso Master Experience",
    description: "Solo 12 posti disponibili per ogni percorso master",
    description2: "Blocca il tuo posto con una caparra di soli €299",
    sessions: [
      {
        date: "20 Febbraio",
        master: "giulia sago",
        image: "/images/master_07.webp",
        lessonPlaceholder: "Realistic",
      },
      {
        date: "21 Febbraio",
        master: "Master Mariann Molinar",
        image: "/images/master_08.webp",
        lessonPlaceholder: "Moma Square",
      },
      {
        date: "22 Febbraio",
        master: "Master Tanya Povescaia",
        image: "/images/master_09.webp",
        lessonPlaceholder: "NOME CORSO DA DEFINIRE",
        imagePosition: "50% 15%",
      },
      {
        date: "20 MARZO",
        master: "MASTER DA DEFINIRE",
        image: "/images/master_10.webp",
        lessonPlaceholder: "MASTER DA DEFINIRE",
      },
      {
        date: "21 MARZO",
        master: "MASTER DA DEFINIRE",
        image: "/images/master_11.webp",
        lessonPlaceholder: "MASTER DA DEFINIRE",
      },
      {
        date: "22 MARZO",
        master: "Master MIMO VO",
        image: "/images/master_12.webp",
        lessonPlaceholder: "Extreme Dragon",
        imagePosition: "50% 0%",
      },
      {
        date: "11 Aprile",
        master: "Cerimonia Master Award Day",
        image: "/images/cerimonia.webp",
        lessonPlaceholder: "Evento di chiusura",
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
