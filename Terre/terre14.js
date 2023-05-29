// Créez un programme qui détermine si une liste d’entiers est triée ou pas.

// Exemples d’utilisation :
// $> ruby exo.rb 9 8 3
// Pas triée !

// $> ruby exo.rb 3 8 9 12
// Triée !

// $> ruby exo.rb “Salut”
// erreur.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Récuper les arguments dans un tableau
// Récupérer les arguments dans un tableau
//  Si le tableau contient que des nombre
//    Determiner si le tableau est ordonné
//      Si ordonnée : afficher "Triée !"
//      Sinon : afficher "pas Triée !"
//      Sinon : afficher "même valeur"
//      Sinon : afficher "Erreur"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Récupérer les arguments dans un tableau
const args = process.argv.slice(2)

const number1 = args[0]
const number2 = args[1]
const number3 = args[2]

//    Determiner si le tableau est ordonné
//      Si ordonnée : afficher "Triée !"
//      Sinon : afficher "pas Triée !"
//      Sinon : afficher "Tableau de même valeur"
//      Sinon : afficher "Erreur"

// Récupérer les arguments dans un tableau // results
results = [number1, number2, number3]

//   Si le tableau contient que des nombre
if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
  // Déterminer si le tableau est ordonné
  if (
    (number1 < number2 && number2 < number3) ||
    (number1 === number2 && number1 < number3)
  ) {
    console.log('Triée !') //Afficher : Triée !
  } else if (number1 > number2 && number2 < number3) {
    console.log('Pas Triée !') //Afficher : pas Triée !
  } else if (number1 === number2 && number2 === number3) {
    console.log('Tableau de même valeur') //Afficher : "Tableau de même valeur"
  } else {
    console.log('erreur') //Afficher : "Erreur"
  }
}
