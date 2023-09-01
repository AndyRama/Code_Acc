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

// On recupere l'argument
// On verifie si l'argument est present
// On verifie ue l'argument contient uniquement des nombres
// On affiche le resultat

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// On recupere l'argument
const input = process.argv[2]

// On verifie si l'argument est present
if (!isNaN.input) {
  console.error("Erreur : Aucun argument fourni");
  process.exit(1)
  
}

// On verifie si l'argument contient uniquement des nombres
const isOnlyDigits = (input) => {
  return /^\d+$/.test(input)
}

// On affiche le resultat
console.log(isOnlyDigits(input));