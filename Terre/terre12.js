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

let h = args.split(':').reverse().pop()
// console.log(h) //hh

let min = args.split(':').pop().substring(0, 2)
// console.log(min) //mm

let abv = args.split(':').pop().substring(4, 2)
// console.log(abv) //am ou pm

function changeTimeTo24(h, min, abv) {
  // Si l'argument hh est inferieur à 12 && am alors afficher h et min
  if (h < 12 && abv.toLowerCase() == 'am') {
    return `${h}:${min}`
  } else {
    // Si l'argument hh est superieur à 12 ou egale à 12 && pm alors afficher h + 12 + min
    if (h <= 12 && abv.toLowerCase() == 'pm') {
      if (h == '12') {
        return `${h}:${min}`
      } else {
        return `${parseInt(h) + 12}:${min}`
      }
    } else {
      return `Erreur`
    }
  }
}

console.log(changeTimeTo24(h, min, abv))