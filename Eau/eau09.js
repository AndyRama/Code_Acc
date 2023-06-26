// Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.

// Exemples d’utilisation :
// $> node eau09.js 20 25
// 20 21 22 23 24

// $> node eau09.js 25 20
// 20 21 22 23 24

// $> node eau09.js hello
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.


///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Recupére les arguments du fichier min max
// Determiner
// effectuer une itération jusqu'a ce que min soit egale a max
// creer unw tableau avex min inclus et max exlus 
//resulte


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Recupére les arguments du fichier 
const args = process.argv.slice(2);

function displayRange(values) {
  const numbers = values.map((val) => parseInt(val));

  if (numbers.some(isNaN)) {
    console.error("Erreur : Les arguments doivent être des nombres.");
    process.exit(1);
  }

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  const range = Array.from({ length: max - min }, (_, index) => min + index);
  console.log(range.join(" "));
}

displayRange(args);


