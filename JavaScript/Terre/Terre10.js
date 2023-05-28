// Créez un programme qui affiche si un nombre est premier ou pas.

// Exemples d’utilisation :
// $> node exo.js 5
// Oui, 5 est un nombre premier.

// $> node exo.js 6
// Non, 6 n’est pas un nombre premier.

// Attention : 0 et 1 ne sont pas des nombres premiers. Gérez les erreurs d’arguments.

// Un nombre premier est un entier naturel qui admet exactement deux diviseurs distincts entiers et positifs. Ces deux diviseurs sont 1 et le nombre lui-même

///////////////////////////////////////////////// Pseudo code ///////////////////////////////////////////////////////////////////////////////////////////////

// Recupére l'argument du fichier
// Si args est un nombre et il est divisible par 1 et par lui même
// Sinon afficher "Non, args n’est pas un nombre premier."
// Sinon afficher "Ce n'est pas un nombre, tu ne me la mettras pas à l’envers."

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Argument
const args = process.argv[2]

function isPrimeNumber(number) {
  if (isNaN(number) || number <= 1) {
    console.log(
      'il manque un argurment sinon' + ` "${number}"` + " n'est pas un nombre."
    )
  } else {
    let isPrime = true
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      console.log('Oui, ' + number + ' est un nombre premier.')
    } else {
      console.log('Non, ' + number + ' n’est pas un nombre premier.')
    }
  }
}

isPrimeNumber(args)
