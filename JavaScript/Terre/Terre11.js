// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.

// Exemples d’utilisation :
// $> ruby exo.rb 23:40
// 11:40PM

// Attention : midi et minuit.

///////////////////////////////////////////////// Pseudo code ///////////////////////////////////////////////////////////////////////////////////////////////

// Recupére l'argument apres le nom du fichier
// Recupére l'heure HH dans l'argument args => HH:MM
// si l'argument est egale à 24:00 alors args = 00:00
// Si l'argument HH est inferieur à 12 alors afficher l'heure + AM
// Si l'argument HH est superieur à 12 ou egale à 12 alors afficher l'heure + PM

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Recupére l'argument apres le nom du fichier
let args = process.argv[2];
// Recupére l'heure HH dans l'argument args => HH:MM
let heure = args.split(":").reverse().pop();

function changeTime(heure, args) {
  // Si l'argument HH est inferieur à 12 alors afficher l'heure + AM
  if (heure < 12) {
    return args + "AM";

    // Si l'argument HH est superieur à 12 ou egale à 12 alors afficher l'heure + PM
  } else if (heure == 12 || heure < 24)   {
    return args + "PM";

    // si l'argument est egale à 24:00 alors args = 00:00
  } else if (heure == 24) {
    args = args.replace(heure, "00");
    return `${args}` + "AM";

  } else {
    // sinon l'argument n' est pas une heure valide
    return "Heure invalide";
  }
}

console.log(changeTime(heure, args));
