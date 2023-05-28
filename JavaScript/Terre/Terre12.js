// Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.

// Exemples d’utilisation :
// $> ruby exo.rb 11:40PM
// 23:40

// Attention : midi et minuit.

///////////////////////////////////////////////// Pseudo code ///////////////////////////////////////////////////////////////////////////////////////////////

// Recupére l'argument apres le nom du fichier format 11:40PM
// Recupére l'heure hh et mm
// Si l'argument hh est inferieur à 12 alors afficher (h + 12) et min
// Sinon l'argument hh est superieur à 12 ou egale alors afficher h + min
// Sinon erreur

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const args = process.argv[2] //hh:mm

let h = args.split(":").reverse().pop()
console.log(h); //hh

let min = args.split(":").pop()
console.log(min); //mm

function changeTimeTo24(h,min) {

  // Si l'argument hh est inferieur à 12 alors afficher h + 12 et min
  if(h < 12) {
    return `${h + 12}:${min}`
    // Si l'argument hh est superieur à 12 ou egale à 12 alors afficher h + min
  } else if(h >= 12){
  return `${h + 12}:${min}`
  }else{
    return " erreur"
  }
  // Sinon erreur
}

  console.log(changeTimeTo24(h,min));
