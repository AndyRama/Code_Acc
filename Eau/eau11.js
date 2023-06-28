// Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.

// Exemples d’utilisation :
// $> node eau11.js 5 1 19 21
// 2

// $> node eau11.js 20 5 1 19 21
// 1

// $> node eau11.js -8 -6 4
// 2

// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Vérifier du nombre d'argurment
// Récupérer les chiffres à partir des arguments 
// Vérifier si ce sont tous des chiffres (ISNAN)
// Vérification du nombre de chiffres
// Initialisation de la diff min à une valeur élevée
// Parcourir les paires élements pour trouver la diff min avec une boucle
// Affichage resultat

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vérifier du nombre d'argurment 
if(process.argv.length < 3 ) {
  console.log("Erreur nombre d'arguments");
  process.exit(1)
}

// Récupérer les chiffres à partir des arguments 
const numbers = process.argv.slice(2).map(Number)

// console.log(numbers);

// Vérification du nombre de chiffres
if(numbers.length < 2 || numbers.some(isNaN)) {
  console.log("Erreur : Pas un nombre ou ajouter deux nombres valides");
  process.exit(1)
}

// Initialisation de la diff min à une valeur élevée
let minDiff = 100

// Parcourir les paires élements pour trouver la diff min avec une boucle
for(let i = 0; i < numbers.length -1 ; i++) {
  for(let j = i + 1; j < numbers.length ; j++) {
    const diff = Math.abs(numbers[i] - numbers[j])
    if(diff < minDiff) {
      minDiff = diff
    }
  }
}

// Affichage resultat
console.log(minDiff);

