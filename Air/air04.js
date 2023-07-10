// Créez un programme qui affiche une chaîne de caractères en évitant les caractères identiques adjacents.


// Exemples d’utilisation :
// $> node air.js “Hello milady,   bien ou quoi ??”
// Helo milady, bien ou quoi ?

// Afficher error et quitter le programme en cas de problèmes d’arguments.


///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Initialise le résultat avec le premier caractère de la chaîne.
// Vérifie si le caractère courant est différent du caractère précédent.
// Ajoute le caractère courant au résultat.
// Récupère l'argument passé en ligne de commande.
// Appeler la fonction "supprimerCaracteresAdjacents" en utilisant l'argument.
// Afficher le résultat.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function supprimerCaracteresAdjacents(chaine) {
  if (!chaine || typeof chaine !== "string") {
    console.error("Erreur : argument manquant ou invalide");
    return;
  }
  
  // Initialise le résultat avec le premier caractère de la chaîne.
  let resultat = chaine[0]; 
  
  for (let i = 1; i < chaine.length; i++) {
    // Vérifie si le caractère courant est différent du caractère précédent.
    if (chaine[i] !== chaine[i - 1]) { 
       // Ajoute le caractère courant au résultat.
      resultat += chaine[i];
    }
  }  
  return resultat;
}

// Récupère l'argument passé en ligne de commande.
const argument = process.argv[2]; 

// Appeler la fonction "supprimerCaracteresAdjacents" en utilisant l'argument.
const resultat = supprimerCaracteresAdjacents(argument);
// Afficher le résultat.
if (resultat) {
  console.log(resultat);
}