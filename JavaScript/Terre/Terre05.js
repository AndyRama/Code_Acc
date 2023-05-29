// Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

// Exemples d’utilisation :
// $> node Terre.js 5 2
// résultat: 2
// reste: 1

// $> node Terre.js 10 0
// erreur.

// $> node Terre.js 3 5
// erreur.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Division deux de nombre entier afiichage de la division et du reste
// Division error[refacto condition else if]
// Résultat et reste de la division sans décimal

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//division deux de nombre entier afiichage de la division et du reste
const args = process.argv.slice(2)

const number = args[0]
const number2 = args[1]

let result = number / number2
let result2 = number % number2

//Division error[refacto condition else if]
if (result == 'Infinity' || result2 == 'NaN' || Math.trunc(result) === 0) {
  console.log(' résultat: ' + 'erreur')

// Résultat et reste de la division sans décimal
} else {
  console.log(' résultat: ' + Math.trunc(result))
  console.log(' reste: ' + Math.trunc(result2))
}