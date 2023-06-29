// Créez un programme qui trie les éléments donnés en argument par ordre ASCII.

// Exemples d’utilisation :
// $> node eau14.js Alfred Momo Gilbert
// Alfred Gilbert Momo

// $> node eau14.js A Z E R T Y
// A E R T Y Z

// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Vérifier le nombre d'argument
// Récupération des éléments à trier
// Trier les élements(.sort)
// Affichage des élements ordonnés

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vérifier le nombre d'argument
if(process.argv.length < 3 ){
  console.log("Erreur : il faut au moins un élément à trier");
  process.exit(1)
}

// Récupération des éléments à trier
const elements = process.argv.slice(2)

console.log(elements);

// Trier les élements(.sort)
elements.sort();

// Affichage des élements ordonnés
console.log(elements.join(' '));

// Error
// node eau14.js A Z E R T Y
// tail: cannot open 'Y' for reading: No such file or directory