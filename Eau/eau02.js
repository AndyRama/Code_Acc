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
