// Créez un programme qui retourne la valeur d’une liste qui n’a pas de paire.


// Exemples d’utilisation :
// $> node air.js 1 2 3 4 5 4 3 2 1
// 5

// $> node air.js bonjour monsieur bonjour
// monsieur


// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Vérifier si la liste passée en argument est vide ou non une liste.
// Si la liste est invalide, afficher "Erreur : argument manquant ou invalide" et quitter le programme.
// Initialiser un tableau vide appelé "occurrences".
// Parcourir chaque élément dans la liste.
// Si l'élément est déjà présent dans le tableau "occurrences", augmenter sa valeur de 1.
// Sinon, ajouter l'élément au tableau "occurrences" avec une valeur de 1.
// Parcourir chaque élément dans le tableau "occurrences".
// Si la valeur de l'élément n'est pas pair (c'est-à-dire différente de zéro modulo 2), retourner cet élément.
// Si aucune valeur non paire n'a été trouvée, retourner null.
// Récupérer les arguments passés en ligne de commande.
// Appeler la fonction "trouverValeurNonPaire" en utilisant les arguments récupérés.
// Si une valeur non paire est renvoyée, l'afficher.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////