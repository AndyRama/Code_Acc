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

// Récupérer les arguments passés en ligne de commande
// Inverser l'ordre des éléments dans le tableau
// Afficher les arguments et joindre en une seule chaîne de caractères séparée par des sauts de ligne

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Récupérer les arguments passés en ligne de commande
const args = process.argv.slice(2);

// version final (refacto)
let i = 0;
let result = '';

if (i < args.length) {
  // Inverser l'ordre des éléments et Afficher les arguments et joindre en une seule chaîne 
  result = result + args.reverse().join('\n');
  i++;
}

console.log(result);
