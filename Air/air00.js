// Créez un programme qui découpe une chaîne de caractères en tableau 
// (séparateurs : espaces, tabulations, retours à la ligne).

// Votre programme devra utiliser une fonction prototypée comme ceci :
// ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
// 	# votre algorithme
// 	return (tableau)
// }


// Exemples d’utilisation :
// $> node exo.js “Bonjour les gars”
// Bonjour
// les
// gars

// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ma_fonction(string_a_couper, string_separateur) {
  if (!string_a_couper || !string_separateur) {
    console.error("Erreur : arguments manquants");
    return;
  }
  
  const tableau = string_a_couper.split(string_separateur);
  
  for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
  }
  
  return tableau;
}

ma_fonction("Bonjour les gars", " ");