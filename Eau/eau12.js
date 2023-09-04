// Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle .

// Vous utiliserez une fonction de cette forme (selon votre langage) :
// my_bubble_sort(array) {
// 	# votre algorithme
// 	return (new_array)
// }

// Exemples d’utilisation
// $> node eau12.js 6 5 4 3 2 1
// 1 2 3 4 5 6

// $> node eau.js test test test
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

// Wikipedia vous présentera une belle description de cet algorithme de tri.

// Définition
// Parcourez le tableau à trier à partir du premier élément (indice 0) jusqu'au dernier élément (indice n-1).
// Si l'élément courant est plus grand que l'élément suivant, échangez leur position. Ainsi, l'élément plus grand "remonte" vers la fin du tableau.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Vérifier le nombre d'argument
// Récupérer les chiffres à partir des argurments
// Vérifier sinous avons que des nombre(ISNAN)
// Fonction de tri à bulle
// Trie des nombres
// Affichage des nombres triés

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vérifier le nombre d'argument
if(process.argv.length < 3 ) {
  console.log("Erreur : veuillez spécifier une liste de nombres à trier");
  process.exit(1)
}

// Récupérer les chiffres à partir des arguments dans un nouveau tableau
const arg = process.argv.slice(2).map(number)

console.log(arg);

// Vérifier sinous avons que des nombre(ISNAN)
if(arg.some(isNaN)) {
  console.log("Erreur : veuillez spécifier une liste de nombre");
  process.exit(1)
}

// Fonction de tri à bulle
function ordered(arg) {
  const n = arg.length;
  for(let i = 0; i < n - 1; i++) {
    for(let j = 0; j < n - i - 1; j++) {
      if(arg[j] > arg[j + 1]) {
        //Echanger les éléments
        const max = arg[j]
        arg[j] = arg[ j + 1]
        arg[j + 1] = max
      }
    }
  }
  return arg
}

// Trie des nombres
const result = ordered(arg).join(' ');

// Affichage des nombres triés
console.log(result);