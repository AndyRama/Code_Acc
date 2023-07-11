// Créez un programme qui fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

// Utilisez une fonction de ce genre (selon votre langage) :
// sorted_fusion(array1, array2) {
// 	# your algo
// 	return (new_array)
// }

// Exemples d’utilisation :
// $> node air08.js 10 20 30 fusion 15 25 35
// 10 15 20 25 30 35

// Afficher error et quitter le programme en cas de problèmes d’arguments.

/////////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function sortedFusion(list1, list2) {
  if (!Array.isArray(list1) || !Array.isArray(list2)) {
    console.error('Les arguments doivent être des tableaux.');
    process.exit(1);
  }

  let mergedList = [];
  let index1 = 0;
  let index2 = 0;

}