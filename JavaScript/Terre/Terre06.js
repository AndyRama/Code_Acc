// Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.


// Exemples d’utilisation :
// $> node exo.js “Hello world!”
// !dlrow olleH


// $> node exo.js “lehciM”
// Michel

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

//Recupére les arguments
//Prendre la string est la decomposer (.split) "Hello world!" => ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"] 
//Inverser le tableau (.reverse)
//Reconstruire la string (.join)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const args = process.argv.slice(2);

// version final (refacto)
let i = 0;
let result = '';

while (i < args.length) {
  result = result + args[i].split('').reverse().join('');
  i++;
}

console.log(result);
