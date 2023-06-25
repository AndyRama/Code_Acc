// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.

// Exemples d’utilisation :
// $> node exo.js “4445353”
// true

// $> node exo.js 42
// true

// $> node exo.js “Bonjour 36”
// false

// Afficher error et quitter le programme en cas de problèmes d’arguments.

/////////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const isOnlyDigits = (str) => {
  return /^\d+$/.test(str);
};

const input = process.argv[2];

if (!input) {
  console.error("Erreur : Aucun argument fourni.");
  process.exit(1);
}

console.log(isOnlyDigits(input));
