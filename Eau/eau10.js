// Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. 
// L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.

// Exemples d’utilisation :
// $> node eau10.js Ceci est le monde qui contient Charlie un homme sympa Charlie
// 6

// $> node eau10.js test test test
// 0

// $> node eau10.js test boom
// -1

// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Afficher error et quitter le programme en cas de problèmes d’arguments.
//Récupérer  tout les arguments exepter le dernier 
//Récupérer l'argument rechercher   ["charlie"]
//Parcourir le tableau pour trouver l'index de l'élement recherché
//Afficher l'index
//Afficher -1 si l’élément n’est pas trouvé
//Afficher 0 si pas assez d'arguments

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Afficher error et quitter le programme en cas de problèmes d’arguments.
if(process.argv.length < 3 ){
  console.log('Erreur : Pas d\'arguments.');
  process.exit(1)
}

//Récupérer  tout les arguments exepter le dernier
const elements = process.argv.slice(2,-1) //["Ceci" ,"est" ,"le","monde" ,"qui" ,"contient" ,"Charlie" ,"un" ,"homme" ,"sympa"]

//Récupérer l'argument rechercher   ["charlie"]
const recherche = process.argv[process.argv.length - 1 ]

//Parcourir le tableau pour trouver l'index de l'élement recherché
let index = -1 
for (let i =0; i < elements.length; i++) {
  if(elements[i] === recherche) {
    index = i; 
    break;
  }
}

//Afficher l'index
//Afficher -1 si l’élément n’est pas trouvé
//Afficher 0 aucun argument

console.log(`${index}`);


// console.log(`Tableau : [${elements }]`);
// console.log(`Recherche : [${recherche}]`);
