// Créez un programme qui supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

// Utilisez une fonction de ce genre (selon votre langage) :
// ma_fonction(array_de_strings, string) {
// 	# votre algorithme
// 	return (nouvel_array_de_strings)
// }

// Exemples d’utilisation :
// $> python node air06.js “Michel” “Albert” “Thérèse” “Benoit” “t”
// Michel

// $> python node air06.js “Michel” “Albert” “Thérèse” “Benoit” “a”
// Michel, Thérèse, Benoit

// Afficher error et quitter le programme en cas de problèmes d’arguments.

/////////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Vérifier si le tableau array_de_strings est vide, non un tableau ou si la chaîne string est vide ou non une chaîne de caractères.
// Si l'un des arguments est invalide, afficher "Erreur : arguments manquants ou invalides".
// Initialiser un tableau vide appelé nouvel_array_de_strings.
// Parcourir chaque élément dans le tableau array_de_strings.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////