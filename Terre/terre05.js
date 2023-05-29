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