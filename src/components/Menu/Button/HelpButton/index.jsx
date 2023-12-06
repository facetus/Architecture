import React from "react";
import Button from ".."; // Assuming you have a Button component
import "./HelpButton.css";

const help = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 6.80501C8.329 5.86976 8.97838 5.08113 9.83312 4.57879C10.6879 4.07645 11.6928 3.89283 12.67 4.06044C13.6471 4.22804 14.5334 4.73607 15.1719 5.49454C15.8104 6.253 16.1598 7.21296 16.1583 8.20438C16.1583 11.0031 11.9602 12.4025 11.9602 12.4025L12 14"
      stroke="#272727"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="turnWhite"
    />
    <path
      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
      fill="#272727"
      stroke="#272727"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="turnWhite fill"
    />
  </svg>
);

const helpActive = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 6.80501C8.329 5.86976 8.97838 5.08113 9.83312 4.57879C10.6879 4.07645 11.6928 3.89283 12.67 4.06044C13.6471 4.22804 14.5334 4.73607 15.1719 5.49454C15.8104 6.253 16.1598 7.21296 16.1583 8.20438C16.1583 11.0031 11.9602 12.4025 11.9602 12.4025L12 14"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
      fill="#272727"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HelpButton = ({ currentInfo, requestControl, resetControl }) => {
  return (
    <Button
      icon={help}
      activeIcon={helpActive}
      changeToActiveColors={true}
      title={
        <>
          <span className="gr">Γλωσσάρι</span>
          <span className="en">Glossary</span>
        </>
      }
      cardClassName={"help right"}
      requestControl={requestControl}
      resetControl={resetControl}
    >
      <div className="help">
        <span className="gr">
          <div className="line">
            <span className="bold">Απεράτης ή περάτης</span> – Ξύλινη αμπάρα για
            την ασφάλιση της εξώπορτας ενός σπιτιού
          </div>
          <div className="line">
            <span className="bold">Αρκάδες</span> – Λευκές πέτρες στη
            λιθόστρωση,μπηγμένες κατακόρυφα,για να συγκρατούν ζώα και ανθρώπους
            στις κατηφόρες·επίσης τα πεζούλια των γεφυριών
          </div>
          <div className="line">
            <span className="bold">Αχούρι</span> – Ισόγειος χώρος για τα ζώα
            (στο κύριο σπίτι ή σε παράσπιτα)
          </div>
          <div className="line">
            <span className="bold">Γωνιά</span> – Το τζάκι
          </div>
          <div className="line">
            <span className="bold">Κελλάρι</span> – Ισόγειος χώρος του σπιτιού,
            αποθήκη
          </div>
          <div className="line">
            <span className="bold">Κιοσές</span> – Φαλτσογωνία , απότμηση
          </div>
          <div className="line">
            <span className="bold">Κορφιάς</span> – Η ράχη της στέγης
          </div>
          <div className="line">
            <span className="bold">Κρεβάτα</span> – Χώρος του ορόφου,όπου
            καταληγει η σκάλα
          </div>
          <div className="line">
            <span className="bold">Μαντζάτο</span> - Δωμάτιο με τζάκι που
            χρησιμοποιείται ως καθιστικό και υπνοδωμάτιο
          </div>
          <div className="line">
            <span className="bold">Μεσάντρα</span> – Μια σειρά ντουλάπια με
            ταμπλαδωτά φύλλα,που καλύπτουν όλο τον τοίχο
          </div>
          <div className="line">
            <span className="bold">Μεσοχώρι</span> – Η πλατεία-κέντρο του
            οικισμού
          </div>

          <div className="line">
            <span className="bold">Μπαντζάδες</span> – Φεγγίτες στη στέγη
          </div>

          <div className="line">
            <span className="bold">Μπάσια</span> – Υπερύψωση στο δάπεδο του
            μαντζάτου και του νοντά,γύρω από το τζάκι
          </div>

          <div className="line">
            <span className="bold">Μπίμτσα</span> – Κρυψώνα-δωμάτιο σκαμμένο
            μέσα στο έδαφος, χτιστό γύρω γύρω με κουρασάν και πηλό για
            στεγανότητα,για απόκρυψη πολύτιμων αντικειμένων
          </div>

          <div className="line">
            <span className="bold">Μπουχαρί</span> – Το προς τα μέσα του
            δωματίου εξόγκωμα του τζακιού,καθώς και η καμινάδα
          </div>

          <div className="line">
            <span className="bold">Νοντάς ή οντάς</span> – δωμάτιο υποδοχής στον
            όροφο
          </div>

          <div className="line">
            <span className="bold">Οβορός</span> – Μαντρότοιχος
          </div>

          <div className="line">
            <span className="bold">Φουρούσια ή κιλλίβαντες</span> – λίθινα,
            ξύλινα ή μεταλλικά, συνήθως περίτεχνα, στηρίγματα εξωστών ή άλλων
            αρχιτεκτονικών προεξοχών σε ορόφους
          </div>

          <div className="line">
            <span className="bold">Χαγιάτι</span> – Ο χώρος εισόδου στο ισόγειο
          </div>
        </span>

        <span className="en">
          <div className="line">
            <span className="bold">Aperatis or peratis</span> – Wooden bar for
            securing the exterior door of a house
          </div>
          <div className="line">
            <span className="bold">Arcades</span> – White stones in the
            pavement, set vertically, to restrain animals and people on downhill
            slopes; also the parapets of bridges
          </div>
          <div className="line">
            <span className="bold">Achoori</span> – Ground-level space for
            animals (in the main house or in shelters)
          </div>
          <div className="line">
            <span className="bold">Corner</span> – The fireplace
          </div>
          <div className="line">
            <span className="bold">Cellar</span> – Ground-level space of the
            house, storage
          </div>
          <div className="line">
            <span className="bold">Chioses</span> – False corner, cut in masonry
          </div>
          <div className="line">
            <span className="bold">Korfias</span> – The ridge of the roof
          </div>
          <div className="line">
            <span className="bold">Bed</span> – Floor space where the staircase
            ends
          </div>
          <div className="line">
            <span className="bold">Mantzato</span> - Room with a fireplace used
            as a living room and bedroom
          </div>
          <div className="line">
            <span className="bold">Mesantra</span> – A series of cupboards with
            paneled doors covering the entire wall
          </div>
          <div className="line">
            <span className="bold">Mesochori</span> – The central square of the
            settlement
          </div>
          <div className="line">
            <span className="bold">Bandzades</span> – Skylights in the roof
          </div>
          <div className="line">
            <span className="bold">Basia</span> – Elevation on the floor of the
            mantzato and nontas, around the fireplace
          </div>
          <div className="line">
            <span className="bold">Bimtsa</span> – Hidden room dug into the
            ground, built around with stone and clay for waterproofing, used to
            conceal valuable items
          </div>
          <div className="line">
            <span className="bold">Bouchari</span> – The inward bulge of the
            fireplace room, also the chimney
          </div>
          <div className="line">
            <span className="bold">Nontas or ondas</span> – Reception room on
            the upper floor
          </div>
          <div className="line">
            <span className="bold">Ovoros</span> – Compound wall
          </div>
          <div className="line">
            <span className="bold">Fourousia or killivantes</span> – Stone,
            wooden, or metal decorative supports typically used for projecting
            balconies or other architectural protrusions on floors
          </div>
          <div className="line">
            <span className="bold">Hagiaty</span> – The entrance space on the
            ground floor
          </div>
        </span>
      </div>
    </Button>
  );
};

export default HelpButton;
