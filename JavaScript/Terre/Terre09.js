// Créez un programme qui affiche la racine carrée d’un entier positif.

// Exemples d’utilisation :
// $> node exo.js 9
// 3

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

// Racine carrée d'un nombre 

const number = process.argv[2];

function racineCarre(number) {
  return Math.sqrt(number);
}

console.log(racineCarre(number)); 