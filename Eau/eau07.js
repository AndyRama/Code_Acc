// Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. 
// Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.

// Exemples d’utilisation :
// $> node exo.js “bonjour mathilde, comment vas-tu ?!”
// Bonjour Mathilde, Comment Vas-tu ?!

// $> node exo.js 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Vérification du nombre d'arguments
// Récupération de la chaîne de caractères depuis le premier argument
// Vérification si la chaîne est vide
// Créer une fonction pour mettre en majuscule la première lettre d'un mot
// Séparation de la chaîne de caractères en mots
// Transformation de chaque mot en mettant en majuscule la première lettre
// Reconstruction de la chaîne de caractères avec les mots transformés
// Affichage du résultat

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Vérification du nombre d'arguments
if(process.argv.length !== 3) {
  console.error("Error")
  process.exit(1)
}

// Récupération de la chaîne de caractères depuis le premier argument
const inputString = process.argv[2]

// Vérification si la chaîne est vide
if(inputString.length === 0) {
  console.error("Error")
  process.exit(1)
}

// Créer une fonction pour mettre en majuscule la première lettre d'un mot
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase + word.slice(1).toLowerCase
}

// Séparation de la chaîne de caractères en mots
const words = inputString.split(/\s+/)

// Transformation de chaque mot en mettant en majuscule la première lettre
const capitalizeWords = words.map(capitalizeFirstLetter)

// Reconstruction de la chaîne de caractères avec les mots transformés
const outputString = capitalizeWords.join(" ")

// Affichage du résultat
console.log(outputString);