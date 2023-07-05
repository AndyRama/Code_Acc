// Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

// Vous utiliserez une fonction de cette forme (selon votre langage) :
// my_select_sort(array) {
// 	# votre algorithme
// 	return (new_array)
// }

// Exemples d’utilisation :
// $> node eau13.js 6 5 4 3 2 1
// 1 2 3 4 5 6

// $> node eau13.js test test test
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

// Wikipedia vous présentera une belle description de cet algorithme de tri.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////
 
// Création de la fonction my_select_sort(array)
// Vérifier si l'entrée est une liste de nombres
// Créer l' algorithme de tri par sélection
// Récupérer les arguments de la ligne de commande.
// Appeler la fonction de tri
// Afficher le résultat

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Création de la fonction my_select_sort(array)

function my_select_sort(array) {
  // Vérifier si l'entrée est une liste de nombres
  if(!Array.isArray(array) || array.some(isNaN)){
    console.log("error");
    process.exit(1)
  }  
  // Créer l' algorithme de tri par sélection
  for(let i = 0; i < array.length - 1; i++){

    let minIndex = i
    
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    
    if(minIndex != i ) {

      let min = array[i]

      array[i] = array[minIndex]
      array[minIndex] = min
    }
  }
}

// Récupérer les arguments de la ligne de commande.
// Appeler la fonction de tri
// Afficher le résultat
console.log(array);