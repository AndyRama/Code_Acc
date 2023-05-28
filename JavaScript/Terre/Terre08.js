// Créez un programme qui affiche le résultat d’une puissance.

// L’exposant ne pourra pas être négatif.

// Exemples d’utilisation :
// $> node Terre08.js 2 3
// 8

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Récupérer les arguments
// Le programme prendra deux arguments : un nombre et un exposant.
// Les arguments doivent être des nombres.
// L’exposant ne pourra pas être négatif.
// Affiche le resultat nombre  à la puissance de l'exposant.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const nombre = process.argv[2]
const exposant = process.argv[3]

if (process.argv.length !== 4) {
  console.log('Missing arguments')
  process.exit(1)

  // Les arguments doivent être des nombres.
} else if (isNaN(nombre) || isNaN(exposant)) {
  console.log('One of the arguments is not a number')
  process.exit(1)

  // L’exposant ne pourra pas être négatif.
} else if (exposant < 0) {
  console.log("it's not an exposant positive number")
  process.exit(1)

  // Affiche resultat nombre puissance exposant.
} else {
  console.log(Math.pow(nombre, exposant))
}