// Créez un programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.


// Exemples d’utilisation :
// $> ruby exo.rb 1 2 3 4 5 “+2”
// 3 4 5 6 7

// $> ruby exo.rb 10 11 12 20 “-5”
// 5 6 7 15


// L’opération à appliquer sera toujours le dernier élément.


// Afficher error et quitter le programme en cas de problèmes d’arguments.

/////////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Vérifier si la liste passée en argument est vide, non une liste ou a une longueur inférieure à 2.
// Si la liste est invalide, afficher "Erreur"
// Récupérer le dernier élément de la liste et le stocker dans une variable appelée "opération".
// Vérifier si le premier caractère de "opération" n'est ni "+" ni "-".
// Si c'est le cas, afficher "Erreur : opération invalide" et quitter le programme.
// Convertir la partie restante de "opération" en entier et la stocker dans une variable appelée "valeurOperation".
// Parcourir chaque élément dans la liste.
// Si le premier caractère de "opération" est "+", ajouter "valeurOperation" à l'élément actuel.
// Sinon, soustraire "valeurOperation" de l'élément actuel.
// Retourner la liste modifiée.
// Récupérer les arguments passés en ligne de commande.
// Appeler la fonction "faireOperation" en utilisant les arguments récupérés.
// Si un résultat est renvoyé, l'afficher sous forme de chaîne de caractères avec un espace entre chaque élément.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

