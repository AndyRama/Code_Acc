// Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.

// Exemples d’utilisation :
// $> node eau03.js 3
// 2
// $> 

// Afficher -1 si le paramètre est négatif ou mauvais.

/////////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Récupérer l'argument
// Crée une fonction fib(n) étant l'argument passer ligne de cmd et newFib
// Initialisation tableau
// Verifier mauvais cas et cas negatif
// Boucle iteration en fonction de(i , n )

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Récupérer l'argument
const n = process.argv[2]

// console.log(n);

// Crée une fonction fib(n) n etant l'argument passer ligne de cmd et newFib
let newFib = fib(n)

function fib(n) {
  // Initialisation tableau
  let result = [0, 1]

  // Vérifier mauvais cas et nombre négatif
  if (n <= 0  || n === undefined) { return '-1 : erreur argument'}
    // Boucle itération en fonction de(i , n )
    for (let i = 2; i <= n; i++) {
      let nextValue = result[i - 1] + result[i - 2]
      result.push(nextValue)
    }
    return result
  }

console.log(newFib.join(' '))
