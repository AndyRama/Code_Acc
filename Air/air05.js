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
// Récupérer le dernier élément de la liste et le stocker dans une variable "opération".
// Vérifier si le premier caractère de "opération" n'est ni "+" ni "-".
// Si c'est le cas, afficher "Erreur : opération invalide" et quitter le programme.
// Convertir la partie restante de "opération" en entier et la stocker dans une variable "valeurOperation".
// Parcourir chaque élément dans la liste.
// Si le premier caractère de "opération" est "+", ajouter "valeurOperation" à l'élément actuel.
// Sinon, soustraire "valeurOperation" de l'élément actuel.
// Retourner la liste modifiée.
// Récupérer les arguments passés en ligne de commande.
// Appeler la fonction "faireOperation" en utilisant les arguments récupérés.
// Si un résultat est renvoyé, l'afficher sous forme de chaîne de caractères avec un espace entre chaque élément.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function faireOperation(liste) {
  // Vérifier si la liste passée en argument est vide, non une liste ou a une longueur inférieure à 2.
  if (!liste || !Array.isArray(liste) || liste.length < 2) {
    // Si la liste est invalide, afficher "Erreur"
    console.error("Erreur : arguments manquants ou invalides");
    return;
  }
  
  // Récupérer le dernier élément de la liste et le stocker dans une variable "opération".
  const operation = liste.pop();
  
  // Vérifier si le premier caractère de "opération" n'est ni "+" ni "-".
  if (operation[0] !== "+" && operation[0] !== "-") {
    // Si c'est le cas, afficher "Erreur : opération invalide" 
    console.error("Erreur : opération invalide");
    return;
  }

  // Convertir la partie restante de "opération" et la stocker dans une variable "valeurOperation".
  
  const valeurOperation = parseInt(operation.substring(1));
  
  // Parcourir chaque élément dans la liste.
  for (let i = 0; i < liste.length; i++) {
    // Si le premier caractère de "opération" est "+", ajouter "valeurOperation" à l'élément actuel.
    if (operation[0] === "+") {
      liste[i] += valeurOperation;
      // Sinon, soustraire "valeurOperation" de l'élément actuel.
    } else {
      // Retourner la liste modifiée.
      liste[i] -= valeurOperation;
    }
  }  
  return liste;
}

// Récupérer les arguments passés en ligne de commande.
const args = process.argv.slice(2);

// Appeler la fonction "faireOperation" en utilisant les arguments récupérés.
const resultat = faireOperation(args);

// Si un résultat est renvoyé, l'afficher sous forme de chaîne de caractères avec un espace entre chaque élément.
if (resultat) {
  console.log(resultat.join(" "));
}
