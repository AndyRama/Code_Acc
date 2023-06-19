// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.

// Exemples d’utilisation :
// $> python exo.py bonjour jour
// true

// $> python exo.py bonjour joure
// false

// $> python exo.py 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

//recuperation des arguments
// vérifier nombre d'argument
// vérifier si arg1 est presente dans arg2 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//recuperation des arguments
const arg1 = process.argv[2]
const arg2 = process.argv[3]

// vérifier nombre d'argument
if(process.argv.length !== 4 ) {
  console.log('error');
  process.exit(1)
}

// vérifier si arg1 est presente dans arg2 
const resultat = arg1.includes(arg2)

console.log(resultat);