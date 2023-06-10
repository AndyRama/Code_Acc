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

//Déterminer l'argument
//Si l'argument est présent || un nombre
    //Tableau 1 ["bonjour" => "b", "o", "n" ...]
    //Tableau 2 ["jour" => "j", "o", "u", "r" ...]  //Include
      //Si meme return true
      //sinon return False
//sinon afficher error

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Déterminer l'argument
const args = process.argv.slice(2)

//Si l'argument est présent || un nombre
if (args.length === 2 && !isNaN(args[0]) && !isNaN(args[1])) {
  console.log(args.includes(`${args[1]}`));//CONDITION 
  //Si meme return true
  //sinon return False
}






  //Tableau 2 ["jour" => "j", "o", "u", "r" ...] 
  // console.log(args.includes(`${args[1]}`));//CONDITION 
  //Si meme return true
  //sinon return False
//sinon afficher error

console.log(args);