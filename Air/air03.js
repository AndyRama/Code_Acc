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

// Vérifier si la liste passée en argument est vide ou non une liste.
function trouverValeurNonPaire(liste) {
  // Si la liste est invalide, afficher "Erreur : argument manquant ou invalide" et quitter le programme.
  if (!liste || !Array.isArray(liste)) {
    console.error("Erreur : argument manquant ou invalide");
    return;
  }
  
  // Initialiser un tableau vide appelé "occurrences".
  const occurrences = {};

  // Parcourir chaque élément dans la liste.
  for (let i = 0; i < liste.length; i++) {
    const element = liste[i];
    
    // Si l'élément est déjà présent dans le tableau "occurrences", augmenter sa valeur de 1.
    
    if (occurrences[element]) {
      occurrences[element]++;
      // Sinon, ajouter l'élément au tableau "occurrences" avec une valeur de 1.
    } else {
      occurrences[element] = 1;
    }
  }
  
  // Parcourir chaque élément dans le tableau "occurrences".
  for (const element in occurrences) {
    // Si la valeur de l'élément n'est pas pair (c'est-à-dire différente de zéro modulo 2), retourner cet élément.
    // Si aucune valeur non paire n'a été trouvée, retourner null.
    if (occurrences[element] % 2 !== 0) {
      return element;
    }
  }
  
  return null;
}

// Récupère les arguments passés en ligne de commande, à partir de l'index 2
const args = process.argv.slice(2); 

// Appeler la fonction "trouverValeurNonPaire" en utilisant les arguments récupérés.
const valeurNonPaire = trouverValeurNonPaire(args);
// Si une valeur non paire est renvoyée, l'afficher.
if (valeurNonPaire) {
  console.log(valeurNonPaire);
}