// Créez un programme qui affiche ses arguments reçus à l’envers.


// Exemples d’utilisation :
// $> node eau02.js “Suis” “Je” “Drôle”
// Drôle
// Je
// Suis


// $> node eau02.js ha ho
// ho
// ha

// $> node eau02.js “Bonjour 36”
// Bonjour 36

// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Récupérer les aruments passés en ligne de cmd
// Inverser l'ordre des éléments dans le tableau 
// Afficher les argurments et joindre en une seule chaine de caracteres séparée par des sauts de ligne

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Récupérer les aruments passés en ligne de cmd

const args = process.argv.slice(2)

let i =0
let result = ''

if(i < args.length) {
  // Inverser l'ordre des éléments dans le tableau 
  result = result + args.reverse().join('\n')
  i++
}

// Afficher les argurments et joindre en une seule chaine de caracteres séparée par des sauts de ligne
console.log(result);
