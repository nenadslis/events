// ===== EVENTS PFLEGEN: neues Event = neuer Eintrag in dieser Liste =====
// date: Tag des Events (JJJJ-MM-TT). Vergangene Events verschwinden automatisch.
// fewAt: ab wann "Nur noch X Plätze" kommt (Standard: unter 10).
// sheet/max: Blattname in "Event-Teilnehmer" und Platzanzahl – Restplätze kommen automatisch aus dem Blatt "Plätze".
// icon: kleines Symbol (Emoji) vor dem Titel.
// soldOut: true setzen, wenn ausgebucht (Button wird grau – oder führt zur Warteliste, falls waitlist gesetzt).
const EVENTS = [
  {
    slug: "grillen",
    icon: "🔥",
    sheet: "Grillen 17.11.",
    max: 10,
    fewAt: 5,
    date: "2026-11-17",
    title: "Grillabend bei Nenad",
    text: "Der Grill wird wieder angeworfen – was auf den Rost kommt, bleibt noch ein Geheimnis. Bei der Anmeldung sagst du mir, worauf du Lust hast: Eure Wünsche entscheiden das Menü. Dazu kalte Getränke und ein entspannter Abend in netter Runde. Es wird früh dunkel und frisch, also packt eine warme Jacke ein.",
    time: "18:00 Uhr",
    place: "Kurfürstenstraße 56, 56068 Koblenz",
    price: "12 € p. P. inkl. Getränke · per PayPal direkt nach der Anmeldung · nur 10 Plätze",
    link: "https://tally.so/r/M1NEYE",
    soldOut: false
  },
  {
    slug: "thanksgiving",
    icon: "🇺🇸🦃",
    sheet: "Thanksgiving 26.11.",
    max: 10,
    fewAt: 5,
    date: "2026-11-26",
    title: "Thanksgiving Football",
    text: "Thanksgiving auf amerikanisch: Truthahn mit allem, was dazugehört, und dazu live NFL – die Chicago Bears zu Gast bei den Detroit Lions. Erst wird gegessen, um 19 Uhr ist Kickoff. Football-Ahnung ist keine Pflicht, gute Laune schon.",
    time: "18:00 Uhr · Kickoff 19:00 Uhr",
    place: "Kurfürstenstraße 56, 56068 Koblenz",
    price: "15 € p. P. inkl. Truthahn und Getränken · per PayPal direkt nach der Anmeldung · nur 10 Plätze",
    link: "https://tally.so/r/LDKxeJ",
    soldOut: false
  },
  {
    slug: "padel-21",
    icon: "🎾",
    sheet: "Padel 23.11.",
    max: 24,
    date: "2026-11-23",
    title: "Padel Americano",
    text: "Wir spielen ein Americano-Turnier in drei Spielstärken: Anfänger, Fortgeschrittene und Profis. Deine Spielstärke wählst du bei der Anmeldung selbst. Du wechselst jede Runde den Partner, am Ende zählen deine Punkte. Bitte mit vollem Namen anmelden.",
    time: "20:00 Uhr",
    place: "Padel City, Judengäßchen 1, 56218 Mülheim-Kärlich",
    price: "5 € p. P. per PayPal direkt nach der Anmeldung · mit Wellpass kostenlos · 24 Plätze + Warteliste",
    link: "https://tally.so/r/zENj18",
    waitlist: "https://tally.so/r/yXNMdp",
    soldOut: false
  },
  {
    slug: "cocktailparty",
    icon: "🍹",
    date: "2026-11-27",
    title: "Die legendäre Cocktailparty",
    text: "Same office, different vibe: Die legendäre Cocktailparty ist zurück! Wir shaken, mixen und feiern – All you can drink Cocktails, gute Musik und gute Leute. Bring gern Freunde mit, jede Person meldet sich einzeln mit vollem Namen an.",
    time: "Freitag ab 19:30 Uhr",
    place: "Frankenstraße 21, 56068 Koblenz",
    price: "10 € Eintritt p. P. inkl. All you can drink Cocktails · per PayPal direkt nach der Anmeldung",
    link: "https://tally.so/r/zEMjoE",
    soldOut: false
  },
  {
    slug: "gluehwein",
    icon: "🍷",
    sheet: "Glühwein 29.11.",
    date: "2026-11-29",
    title: "Glühwein-Wanderung",
    text: "Wir füllen die Thermoskannen mit Glühwein oder Punsch, fahren mit dem Zug nach Winningen und wandern durch die Weinberge zurück nach Koblenz. Bring deine eigene Thermoskanne mit!",
    time: "Treffen 11:30 Uhr",
    place: "Frankenstraße 21, 56068 Koblenz",
    price: "5 € p. P. inkl. Glühwein oder Punsch",
    link: "https://tally.so/r/vXGqEv",
    soldOut: false
  },
  {
    slug: "padel-30",
    icon: "🎾",
    sheet: "Padel 30.11.",
    max: 32,
    fewAt: 15,
    date: "2026-11-30",
    title: "Padel Americano",
    text: "Americano-Turnier auf 4 Feldern. Deine Spielstärke gibst du bei der Anmeldung selbst an – von 1 (Anfänger) bis 4 (Profi), gern mit Tendenz in halben Schritten. Du wechselst jede Runde den Partner, am Ende zählen deine Punkte. Bitte mit vollem Namen anmelden.",
    time: "Treffpunkt 19:50 Uhr · Start 20:00 Uhr",
    place: "Padel City, Judengäßchen 1, 56218 Mülheim-Kärlich",
    price: "5 € p. P. per PayPal direkt nach der Anmeldung · mit Wellpass kostenlos · 32 Plätze + Warteliste",
    link: "https://tally.so/r/rDBZzv",
    waitlist: "https://tally.so/r/xVjWOo",
    soldOut: false
  },
  {
    slug: "padel-07",
    icon: "🎾",
    sheet: "Padel 07.12.",
    max: 32,
    fewAt: 15,
    date: "2026-12-07",
    title: "Padel Americano",
    text: "Americano-Turnier auf 4 Feldern. Deine Spielstärke gibst du bei der Anmeldung selbst an – von 1 (Anfänger) bis 4 (Profi), gern mit Tendenz in halben Schritten. Du wechselst jede Runde den Partner, am Ende zählen deine Punkte. Bitte mit vollem Namen anmelden.",
    time: "Treffpunkt 19:50 Uhr · Start 20:00 Uhr",
    place: "Padel City, Judengäßchen 1, 56218 Mülheim-Kärlich",
    price: "5 € p. P. per PayPal direkt nach der Anmeldung · mit Wellpass kostenlos · 32 Plätze + Warteliste",
    link: "https://tally.so/r/GepdA2",
    waitlist: "https://tally.so/r/EqlQOq",
    soldOut: false
  },
  {
    slug: "darts",
    icon: "🎯",
    sheet: "Darts 30.12.",
    max: 30,
    fewAt: 10,
    players: { sheet: "Darts 30.12. Mitspieler", max: 16 },
    date: "2026-12-30",
    title: "Darts-WM & Turnier",
    text: "Darts-WM live und dazu unser eigenes Turnier: Wir gucken die Nachmittagsspiele aus dem Ally Pally und werfen zwischendurch selbst. Du entscheidest bei der Anmeldung, ob du mitspielst oder einfach zum Gucken kommst. Wer mitspielt, braucht einen Spielernamen und einen Einlaufsong – wie bei den Profis. Bitte mit vollem Namen anmelden.",
    time: "13:00 Uhr Get-together · 13:30 Uhr erstes WM-Spiel · 14:00 Uhr Start unseres Turniers",
    place: "Frankenstraße 21, 56068 Koblenz",
    price: "5 € p. P. inkl. Getränke und Snacks · per PayPal direkt nach der Anmeldung · max. 30 Leute, davon 16 Mitspieler",
    link: "https://tally.so/r/1W4011",
    soldOut: false
  },
  {
    slug: "quiz",
    icon: "🧠",
    sheet: "Quiz 04.12.",
    max: 32,
    date: "2026-12-04",
    title: "Quiz Night",
    text: "Wir rätseln: Quiz Night mit kniffligen Fragen, Snacks, kalten Getränken und Preisen zu gewinnen. Du musst kein Genie sein, um mitzumachen – Spaß steht im Vordergrund. Bring gern Freunde mit, jede Person meldet sich einzeln mit vollem Namen an.",
    time: "19:00 Uhr",
    place: "Frankenstraße 21, 56068 Koblenz",
    price: "10 € p. P. inkl. Snacks & Getränke · per PayPal direkt nach der Anmeldung · max. 32 Plätze",
    link: "https://tally.so/r/OQll8R",
    soldOut: false
  },
  {
    slug: "rosenmontag",
    icon: "🎭",
    sheet: "Rosenmontag 08.02.",
    date: "2027-02-08",
    title: "Rosenmontag in Kowelenz – Party",
    text: "Wir eröffnen an Rosenmontag einen Stand in der Südstadt – direkt an der Strecke, an der der Rosenmontagszug vorbeikommt, in der Nähe der Frankenstraße 21. Kostüm an, Laune hoch! Nach der Anmeldung kommst du in unsere WhatsApp-Gruppe – mit Getränke-Umfragen und vielleicht der ein oder anderen Überraschung.",
    time: "Start 11:11 Uhr · Ende offen",
    place: "Unser Stand an der Zugstrecke in der Südstadt, nahe Frankenstraße 21, 56068 Koblenz",
    price: "All you can drink 15 € p. P. · bezahlt wird vor Ort",
    link: "https://tally.so/r/Yj5y70",
    soldOut: false
  }
];
// =======================================================================
