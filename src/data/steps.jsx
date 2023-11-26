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
          text: "Η τοιχοποιία στα Ζαγόρια προσφέρει όχι μόνο δομική ανθεκτικότητα, αλλά και φυσική μόνωση.",
        },
        {
          startTime: 5.5,
          text: "Πρόκειται για παραδοσιακή τεχνική, που αναδεικνύει τη χρήση ντόπιων υλικών, ενσωματώνοντας τα κτίσματα, στο φυσικό τοπίο."
        },
        {
          startTime: 13,
          text: "Το υλικό δόμησης είναι η άσπρη πέτρα της περιοχής. Η απόχρωση της πέτρας διαφοροποιείται κατά περιοχή και είναι ανεπίχριστη.",
        },
        {
          startTime: 20,
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
          text: "Η διπλή εσωτερική σκάλα, που συνδέει τους δύο ορόφους, είναι πολύ ιδιαίτερη για τα Ζαγόρια.",
        },
        {
          startTime: 7,
          text: " Αυτό το σπάνιο αρχιτεκτονικό στοιχείο του αρχοντικού, αντικατοπτρίζει την κοινωνικοοικονομική κατάσταση της οικογένειας Πανταζή",
        },
        {
          startTime: 15,
          text: "και προσδίδει στο κτίσμα στοιχεία μοναδικότητας και πολυτέλειας.",
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
          startTime: 0,
          text: "Τα εντυπωσιακά ξυλόγλυπτα στις οροφές των Ζαγορίσιων σπιτιών αντανακλούν την πλούσια παράδοση της περιοχής, στην ξυλουργική και την ξυλογλυπτική.",
        },
        {
          startTime: 10,
          text: "Αυτά τα καλλιτεχνήματα προσθέτουν ένα στοιχείο υπαίθριας κομψότητας στους εσωτερικούς χώρους οικημάτων των εύπορων οικογενειών.",
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
          startTime: 0,
          text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
        },
        {
          startTime: 3.2,
          text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
        },
        {
          startTime: 6.2,
          text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
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
          text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
        },
        {
          startTime: 3.2,
          text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
        },
        {
          startTime: 6.2,
          text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
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
          startTime: 0,
          text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
        },
        {
          startTime: 3.2,
          text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
        },
        {
          startTime: 6.2,
          text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
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
  {
    id: 7,
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
          startTime: 0,
          text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
        },
        {
          startTime: 3.2,
          text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
        },
        {
          startTime: 6.2,
          text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
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
  {
    id: 8,
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
          text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
        },
        {
          startTime: 3.2,
          text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
        },
        {
          startTime: 6.2,
          text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
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
  {
    id: 9,
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
        {
          startTime: 0,
          text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
        },
        {
          startTime: 3.2,
          text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
        },
        {
          startTime: 6.2,
          text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
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
  {
    id: 10,
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
        {
          startTime: 0,
          text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
        },
        {
          startTime: 6,
          text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
        },
        {
          startTime: 9,
          text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
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
  {
    id: 14,
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
          text: "Το Μονοδένδρι, ένα χωριό με πλούσια ιστορία, αποτελεί ένα παραδειγματικό δείγμα της αρχιτεκτονικής",
        },
        {
          startTime: 3.2,
          text: "και του πολιτισμού του Ζαγορίου του 18ου αιώνα.",
        },
        {
          startTime: 6.2,
          text: "Αρχικά κέντρο εμπορίου και πολιτισμού, με την αρχιτεκτονική του να αντανακλά την ευημερία εκείνης της εποχής.",
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
