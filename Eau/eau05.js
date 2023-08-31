// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.

// Exemples d’utilisation :
// $> node eau05.js bonjour jour
// true

// $> node eau05.js bonjour joure
// false

// $> node eau05.js 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Récupération les arguments 
// Vérifier le nombre d'argument
// Vérifier si arg1 est presente dans l'arg2

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Récupération les arguments
const arg1 = process.argv[2]
const arg2 = process.argv[3]

// Vérifier le nombre d'argument
if(process.argv.length !== 4 ) {
  console.log('error');
  process.exit(1)
}

// Vérifier si arg1 est presente dans arg2 
const resultat = arg1.includes(arg2)

console.log(resultat);