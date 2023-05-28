// Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.

// Exemples d’utilisation :
// $> ruby exo.rb 23:40
// 11:40PM

// Attention : midi et minuit.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// On recupere l'argurment hh:mm
// On determine hh et mm
// Si hh < 12 => hh + min + AM
// Si hh >= 12 && hh < 24 => (hh -12) + min + PM
// Sinon hh = 24 => (hh = 00) + min + AM
// Sinon erreur

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const args = process.argv[2]

let h = args.split(":").reverse().pop(); //HH
console.log(h);

let min = args.split(":").pop();//MM
console.log(min);

function changeTimeTo12(h,min) {
  //si h < 12 => h + min + AM
  if(h < 12) {
    return `${h}:${min}AM`
    } else {
      //si h >= 12 && h < 24 => (h -12) + min + PM
      if(h >= 12 && h < 24) {
        return `${h - 12}:${min}PM`
      } else {
        //sinon h = 24 => (heure = 00) + min + AM
        if(h == 24) {
          return `00:${min}AM`
          //sinon erreur
        } else {
          return `Erreur: ${h}:${min}`
        }
      }
    }
}

console.log(changeTimeTo12(h,min))