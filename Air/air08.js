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

  while (index1 < list1.length && index2 < list2.length) {
    if (list1[index1] < list2[index2]) {
      mergedList.push(list1[index1]);
      index1++;
    } else {
      mergedList.push(list2[index2]);
      index2++;
    }
  }

  while (index1 < list1.length) {
    mergedList.push(list1[index1]);
    index1++;
  }

  while (index2 < list2.length) {
    mergedList.push(list2[index2]);
    index2++;
  }
  return mergedList;
}

// Vérifier les arguments de ligne de commande
const args = process.argv.slice(2);

if (args.length !== 5 || args[3] !== 'fusion') {
  console.error('Arguments invalides. Utilisation : node air08.js <list1> fusion <list2>');
  process.exit(1);
}

// Extraire les listes d'entiers
const list1 = args[0].split(' ').map(Number);
const list2 = args[4].split(' ').map(Number);

// Appeler la fonction sortedFusion 
const mergedList = sortedFusion(list1, list2);
// afficher le résultat
console.log(mergedList.join(' '));