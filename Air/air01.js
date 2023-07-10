// Créez un programme qui découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

// Votre programme devra intégrer une fonction prototypée comme ceci :
// ma_fonction(string_à_couper, string_séparateur) { // syntaxe selon votre langage
// 	# votre algorithme
// 	return (tableau)
// }


// Exemples d’utilisation :
// $> node air01.js “Crevette magique dans la mer des étoiles” “la”
// Crevette magique dans 
//  mer des étoiles

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

ma_fonction("Crevette magique dans la mer des étoiles", "la");