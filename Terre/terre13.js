// Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.

// Exemples d’utilisation :
// $> ruby exo.rb 11 40 34
// 34

// $> ruby exo.rb 2 1 3
// 2

// $> ruby exo.rb 2 2 2
// erreur.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Récuper les arguments dans un tableau
// Récupérer la valeur la plus grande en triant le tableau
// Récupérer la valeur intermediaire
// Si les valeurs du tableau sont pareille
// Afficher erreur
// Sinon afficher la valeur intermediaire

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const args = process.argv.slice(2)

const number1 = args[0]
const number2 = args[1]
const number3 = args[2]

// Récuper les arguments dans un tableau // results
results = [number1, number2, number3]

// Récupérer la valeur la plus grande en triant le tableau
results.sort((a, b) => a - b)

// Récupérer la valeur intermediaire
const ValeurMoyenne = results[1]

// Si les valeurs du tableau sont pareil
if (number1 === number2 && number2 === number3) {
  // Afficher erreur
  console.log('erreur')
  // Sinon afficher la valeur intermediaire
} else {
  console.log("valeur intermédiaire : " + ValeurMoyenne)
}
