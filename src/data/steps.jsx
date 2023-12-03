const data = [
  // {
  //   id: 1,
  //   group: (
  //     <>
  //       <span className="gr">Ο Οικισμός</span>
  //       <span className="en">Village</span>
  //     </>
  //   ),
  //   title: (
  //     <>
  //       <span className="gr">Μονοδένδρι</span>
  //       <span className="en">Monodendri</span>
  //     </>
  //   ),
  //   content: {
  //     gr: [
  //       {
  //         startTime: 0,
  //         text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
  //       },
  //       {
  //         startTime: 6,
  //         text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
  //       },
  //       {
  //         startTime: 9,
  //         text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
  //       },
  //     ],
  //     en: [
  //       {
  //         startTime: 0,
  //         text: "Monodendri, a village steeped in history,",
  //       },
  //       {
  //         startTime: 3.2,
  //         text: "is a pristine example of 18th-century Zagorian architecture and culture.",
  //       },
  //       {
  //         startTime: 6.2,
  //         text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
  //       },
  //     ],
  //   },
  //   badge: [
  //     <>
  //       <span className="gr">
  //         Ζαγορίσια Αρχιτεκτονική
  //       </span>
  //       <span className="en">
  //         Zagorian Village Architecture
  //       </span>
  //     </>,
  //     <>
  //       <span className="gr">
  //         Ιστορικός Σχεδιασμός Οικισμών
  //       </span>
  //       <span className="en">
  //         Historical Settlement Design
  //       </span>
  //     </>,
  //   ],
  //   fromTime: 0,
  //   toTime: 15,
  // },
  // {
  //   id: 2,
  //   group: (
  //     <>
  //       <span className="gr">Δόμηση</span>
  //       <span className="en">Construction</span>
  //     </>
  //   ),
  //   title: (
  //     <>
  //       <span className="gr">Αρχιτεκτονική Κάτοψη</span>
  //       <span className="en">Architectural Layout</span>
  //     </>
  //   ),
  //   content: {
  //     gr: [
  //       {
  //         startTime: 0,
  //         text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
  //       },
  //       {
  //         startTime: 3.2,
  //         text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
  //       },
  //       {
  //         startTime: 6.2,
  //         text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
  //       },
  //     ],
  //     en: [
  //       {
  //         startTime: 0,
  //         text: "Monodendri, a village steeped in history,",
  //       },
  //       {
  //         startTime: 3.2,
  //         text: "is a pristine example of 18th-century Zagorian architecture and culture.",
  //       },
  //       {
  //         startTime: 6.2,
  //         text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
  //       },
  //     ],
  //   },
  //   badge: [
  //     <>
  //       <span className="gr">
  //         Ζαγορίσια Αρχιτεκτονική
  //       </span>
  //       <span className="en">
  //         Zagorian Village Architecture
  //       </span>
  //     </>,
  //     <>
  //       <span className="gr">
  //         Ιστορικός Σχεδιασμός Οικισμών
  //       </span>
  //       <span className="en">
  //         Historical Settlement Design
  //       </span>
  //     </>,
  //   ],
  //   fromTime: 15,
  //   toTime: 19.01,
  // },
  // {
  //   id: 3,
  //   group: (
  //     <>
  //       <span className="gr">Δόμηση</span>
  //       <span className="en">Construction</span>
  //     </>
  //   ),
  //   title: (
  //     <>
  //       <span className="gr">Αρχιτεκτονική Κάτοψη</span>
  //       <span className="en">Architectural Layout</span>
  //     </>
  //   ),
  //   content: {
  //     gr: [
  //       {
  //         startTime: 0,
  //         text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
  //       },
  //       {
  //         startTime: 3.2,
  //         text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
  //       },
  //       {
  //         startTime: 6.2,
  //         text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
  //       },
  //     ],
  //     en: [
  //       {
  //         startTime: 0,
  //         text: "Monodendri, a village steeped in history,",
  //       },
  //       {
  //         startTime: 3.2,
  //         text: "is a pristine example of 18th-century Zagorian architecture and culture.",
  //       },
  //       {
  //         startTime: 6.2,
  //         text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
  //       },
  //     ],
  //   },
  //   badge: [
  //     <>
  //       <span className="gr">
  //         Ζαγορίσια Αρχιτεκτονική
  //       </span>
  //       <span className="en">
  //         Zagorian Village Architecture
  //       </span>
  //     </>,
  //     <>
  //       <span className="gr">
  //         Ιστορικός Σχεδιασμός Οικισμών
  //       </span>
  //       <span className="en">
  //         Historical Settlement Design
  //       </span>
  //     </>,
  //   ],
  //   fromTime: 19.01,
  //   toTime: 27.22,
  // },
  {
    id: 1,
    audio: {
      gr: "/media/audio/gr/03.mp3",
      en: "/media/audio/en/03.mp3",
    },
    group: (
      <>
        <span className="gr">Δόμηση</span>
        <span className="en">Construction</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Τοιχοποιία</span>
        <span className="en">Masonry</span>
      </>
    ),
    content: {
      gr: [
        {
          startTime: 0,
          text: "Η τοιχοποιία στο Ζαγόρι προσφέρει όχι μόνο δομική ανθεκτικότητα, αλλά και φυσική μόνωση.",
        },
        {
          startTime: 6.1,
          text: "Πρόκειται για παραδοσιακή τεχνική, που αναδεικνύει τη χρήση ντόπιων υλικών",
        },
        {
          startTime: 10.17,
          text: "ενσωματώνοντας τα κτίσματα στο φυσικό τοπίο.",
        },
        {
          startTime: 13.15,
          text: "Το υλικό δόμησης είναι η άσπρη πέτρα της περιοχής. ",
        },
        {
          startTime: 16.5,
          text: "Η απόχρωση της πέτρας διαφοροποιείται κατά περιοχή και είναι ανεπίχριστη.",
        },
        {
          startTime: 20.9,
          text: "Η εξωτερική τοιχοποιία είναι λιτή και το πάχος της κυμαίνεται από 50-70 εκ.",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 0,
    toTime: 15,
  },
  {
    id: 2,
    audio: {
      gr: "/media/audio/gr/04.mp3",
      en: "/media/audio/en/04.mp3",
    },
    group: (
      <>
        <span className="gr">Εσωτερική Αρχιτεκτονική</span>
        <span className="en">Interior Architecture</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Διπλή Σκάλα</span>
        <span className="en">Double Staircase</span>
      </>
    ),
    content: {
      gr: [
        {
          startTime: 0,
          text: "Η διπλή εσωτερική σκάλα που συνδέει τους δύο ορόφους",
        },
        { startTime: 3.2, text: "είναι πολύ ιδιαίτερη για το Ζαγόρι." },
        {
          startTime: 5.2,
          text: "Αυτό το σπάνιο αρχιτεκτονικό στοιχείο του αρχοντικού,",
        },
        {
          startTime: 8.2,
          text: "αντικατοπτρίζει την κοινωνικοοικονομική κατάσταση της οικογένειας Πανταζή",
        },
        {
          startTime: 12.7,
          text: "και προσδίδει στο κτίσμα στοιχεία μοναδικότητας και πολυτέλειας. ",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: (
      <>
        <span className="gr">
          "Συμμετρία στον Σχεδιασμό", "Σύμβολο Κοινωνικής Κατάστασης"
        </span>
        <span className="en">
          "Structural Symmetry in Design", "Luxury and Status Symbol"
        </span>
      </>
    ),
    fromTime: 15,
    toTime: 19.01,
  },
  {
    id: 3,
    audio: {
      gr: "/media/audio/gr/05.mp3",
      en: "/media/audio/en/05.mp3",
    },
    group: (
      <>
        <span className="gr">Εσωτερική Αρχιτεκτονική</span>
        <span className="en">Interior Architecture</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Ξυλόγλυπτο Ταβάνι</span>
        <span className="en">Woodcarved Ceiling</span>
      </>
    ),
    content: {
      gr: [
        {
          startTime: 0.5,
          text: "Τα εντυπωσιακά ξυλόγλυπτα στις οροφές των ζαγορίσιων σπιτιών",
        },
        {
          startTime: 4.3,
          text: "αντανακλούν την πλούσια παράδοση της περιοχής στην ξυλουργική και την ξυλογλυπτική.",
        },
        {
          startTime: 9,
          text: "Αυτά τα καλλιτεχνήματα προσθέτουν ένα στοιχείο υπαίθριας κομψότητας",
        },
        {
          startTime: 13.9,
          text: "στους εσωτερικούς χώρους των οικιών των εύπορων οικογενειών.",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 19.01,
    toTime: 27.22,
  },
  {
    id: 4,
    audio: {
      gr: "/media/audio/gr/08.mp3",
      en: "/media/audio/en/08.mp3",
    },
    group: (
      <>
        <span className="gr">Λειτουργικής Αρχιτεκτονικής</span>
        <span className="en">Functional Architecture</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Φουρούσια</span>
        <span className="en">Fourousia</span>
      </>
    ),
    content: {
      gr: [
        {
          startTime: 0.5,
          text: "Τα Φουρούσια ή τα στηρίγματα για τα μπαλκόνια και οι αρχιτεκτονικές προεξοχές,",
        },
        {
          startTime: 4.7,
          text: "συνδυάζουν τη λειτουργικότητα και την παραδοσιακή τεχνική στο Ζαγόρι.",
        },
        {
          startTime: 9,
          text: "Αυτά τα δομικά στοιχεία φέρουν συχνά περίπλοκα σχέδια.",
        },
        {
          startTime: 12.9,
          text: "Το αρχοντικό Πανταζή κοσμείται από πολύ ιδιαίτερα πέτρινα φουρούσια.",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 27.22,
    toTime: 33.23,
  },
  {
    id: 5,
    audio: {
      gr: "/media/audio/gr/07.mp3",
      en: "/media/audio/en/07.mp3",
    },
    group: (
      <>
        <span className="gr">Λειτουργικής Αρχιτεκτονικής</span>
        <span className="en">Functional Architecture</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Σκεπή</span>
        <span className="en">Roof</span>
      </>
    ),
    content: {
      gr: [
        {
          startTime: 0,
          text: "Η στέγη είναι σχεδιασμένη για ορεινές περιοχές που δέχονται έντονες χιονοπτώσεις,",
        },
        { startTime: 5.1, text: "έχοντας την απαιτούμενη κλίση." },
        {
          startTime: 7.2,
          text: "Ακολουθεί το περίγραμμα της κάτοψης και συχνά χρησιμοποιείται ο τοπικός σχιστόλιθος.",
        },
        {
          startTime: 13,
          text: "Έχει γείσα με μικρή προεξοχή, φουρούσια λίθινα ή ξύλινα,",
        },
        {
          startTime: 17.1,
          text: "ανάλογα της φιλοσοφίας κατασκευής του κτίσματος.",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 33.23,
    toTime: 43.09,
  },

  {
    id: 6,
    audio: {
      gr: "/media/audio/gr/09.mp3",
      en: "/media/audio/en/09.mp3",
    },
    group: (
      <>
        <span className="gr">Λεπτομέρειες</span>
        <span className="en">Details</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Λίθινες Επιγραφές</span>
        <span className="en">Stone Inscriptions</span>
      </>
    ),
    content: {
      gr: [
        {
          startTime: 0.6,
          text: "Οι λιθογραφίες στη Ζαγορίσια αρχιτεκτονική δεν είναι μόνο διακοσμητικές,",
        },
        { startTime: 5.45, text: "αλλά λειτουργούν και ως ιστορικά αρχεία." },
        { startTime: 8.05, text: "Αντανακλούν την κληρονομιά της περιοχής" },
        {
          startTime: 10.4,
          text: "και τις δεξιότητες λιθογλυπτικής των τοπικών τεχνιτών,",
        },
        {
          startTime: 13.9,
          text: "με στοιχεία που συχνά αφορούν στο έτος κατασκευής και τον ιδιοκτήτη.",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 43.09,
    toTime: 51.77,
  },
  {
    id: 7,
    audio: {
      gr: "/media/audio/gr/06.mp3",
      en: "/media/audio/en/06.mp3",
    },
    group: (
      <>
        <span className="gr">Λειτουργικής Αρχιτεκτονικής</span>
        <span className="en">Functional Architecture</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Τζινέτια</span>
        <span className="en">Tzinetia</span>
      </>
    ),
    content: {
      gr: [
        {
          startTime: 0.5,
          text: "Τα τζινέτια χρησιμοποιούνται ως μεταλλικοί δεσμοί για την ενίσχυση των πέτρινων τοίχων,",
        },
        { startTime: 5.7, text: "βοηθώντας ταυτόχρονα στη σεισμική αντοχή." },
        {
          startTime: 8.9,
          text: "Είναι ένα αντιπροσωπευτικό στοιχείο της τοπικής αρχιτεκτονικής,",
        },
        {
          startTime: 12.5,
          text: "που `δένει` την τοιχοποιία και εξασφαλίζει τη στατικότητα του κτίσματος.",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 51.77,
    toTime: 53.92,
  },
  {
    id: 8,
    audio: {
      gr: "/media/audio/gr/10.mp3",
      en: "/media/audio/en/10.mp3",
    },
    group: (
      <>
        <span className="gr">Αυλή</span>
        <span className="en">Courtyard</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Πηγάδι</span>
        <span className="en">Well</span>
      </>
    ),
    content: {
      gr: [
        {
          startTime: 0,
          text: "Αναπόσπαστο στοιχείο της πλακόστρωτης αυλής είναι η στέρνα,",
        },
        { startTime: 3.85, text: "που συχνά φέρει στέγαστρο," },
        {
          startTime: 5.5,
          text: "με σκοπό την συλλογή του βρόχινου νερού για τις ανάγκες του νοικοκυριού και του κήπου.",
        },
        { startTime: 10.24, text: "Οι παραδοσιακές στέρνες στο Ζαγόρι," },
        {
          startTime: 12.3,
          text: "αξιοποιούν τους υδάτινους πόρους με έναν αξιοθαύμαστο, πρώιμο και οικολογικό τρόπο. ",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 53.92,
    toTime: 61.03,
  },
  {
    id: 9,
    audio: {
      gr: "/media/audio/gr/11.mp3",
      en: "/media/audio/en/11.mp3",
    },
    group: (
      <>
        <span className="gr">Αυλή</span>
        <span className="en">Courtyard</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Οβορός</span>
        <span className="en">Ovoros</span>
      </>
    ),
    content: {
      gr: [
        { startTime: 0, text: "Οι οβοροί ή λίθινοι τοιχοποιοί," },
        {
          startTime: 2.63,
          text: "είναι οι περιφραγμένες αυλές που ορίζουν τα όρια των ιδιοκτησιών,",
        },
        { startTime: 6.58, text: "προσφέροντας προστασία." },
        {
          startTime: 8.1,
          text: "Η αυλόθυρα, στη μάντρα περιτοίχισης, είναι το σημείο επαφής με το δημόσιο χώρο",
        },
        {
          startTime: 12.9,
          text: "και συχνά φέρει στέγαστρο εκατέρωθεν της θύρας και καθιστικά πεζούλια.",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 61.03,
    toTime: 68.04,
  },
  {
    id: 10,
    audio: {
      gr: "/media/audio/gr/12.mp3",
      en: "/media/audio/en/12.mp3",
    },
    group: (
      <>
        <span className="gr">Ο Οικισμός</span>
        <span className="en">Village</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Το αρχοντικό</span>
        <span className="en">Manor House</span>
      </>
    ),
    content: {
      gr: [
        { startTime: 0, text: "Το Αρχοντικό Πανταζή, χτισμένο περί το 1900," },
        {
          startTime: 3.8,
          text: "μας συστήνει τη λαϊκή αρχιτεκτονική του Ζαγορίου.",
        },
        {
          startTime: 6.8,
          text: "Η πέτρα και το ξύλο κυριαρχούν στην επιβλητική διώροφη οικία με την περίτεχνη λιθοδομή,",
        },
        {
          startTime: 12.7,
          text: "τον ψηλό πέτρινο περίβολο, τις πλακόστρωτες αυλές και τους λειτουργικούς χώρους.",
        },
        {
          startTime: 17.7,
          text: "Όλα, σύμβολο ευημερίας, υψηλού βιοτικού επιπέδου, κοινωνικής θέσης και πολιτιστικής καλλιέργειας .",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 68.04,
    toTime: 100,
  },
  {
    id: 11,
    audio: {
      gr: "/media/audio/gr/13.mp3",
      en: "/media/audio/en/13.mp3",
    },
    group: (
      <>
        <span className="gr">Ο Οικισμός</span>
        <span className="en">Village</span>
      </>
    ),
    title: (
      <>
        <span className="gr">Μονοδένδρι</span>
        <span className="en">Monodendri</span>
      </>
    ),
    content: {
      gr: [
        {
          startTime: 0,
          text: "Το Ριζάρειο Ίδρυμα είναι ένα από τα μεγαλύτερα ενεργά Εθνικά Κληροδοτήματα της χώρας μας.",
        },
        { startTime: 5.8, text: "Σε αυτό ανήκει το Αρχοντικό Πανταζή," },
        {
          startTime: 8.2,
          text: "το οποίο κατέχει σημαντικό ρόλο στην ανάδειξη της πολιτιστικής",
        },
        {
          startTime: 11.73,
          text: "και ιστορικής κληρονομιάς του Μονοδενδρίου και της ευρύτερης περιοχής.",
        },
        {
          startTime: 15.87,
          text: "Το Ίδρυμα υποστηρίζει τις τοπικές κοινότητες",
        },
        {
          startTime: 18.6,
          text: "και προσφέρει τα μέγιστα στο όραμα των μεγάλων Εθνικών Ευεργετών",
        },
        {
          startTime: 22.35,
          text: "και ιδρυτών του, Μάνθου και Γεωργίου Ριζάρη.",
        },
      ],
      en: [
        {
          startTime: 0,
          text: "Monodendri, a village steeped in history,",
        },
        {
          startTime: 3.2,
          text: "is a pristine example of 18th-century Zagorian architecture and culture.",
        },
        {
          startTime: 6.2,
          text: "Originally a center for trade and culture, it flourished with its architecture reflecting the prosperity of that era.",
        },
      ],
    },
    badge: [
      <>
        <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        <span className="en">Zagorian Village Architecture</span>
      </>,
      <>
        <span className="gr">Ιστορικός Σχεδιασμός Οικισμών</span>
        <span className="en">Historical Settlement Design</span>
      </>,
    ],
    fromTime: 43.09,
    toTime: 51.05,
  },
];

const totalStates = data.length;

export { totalStates };

export default data;
