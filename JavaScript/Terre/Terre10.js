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
// si args est un nombre et il est divisible par 1 et par lui même
// sinon afficher "Non, args n’est pas un nombre premier."
// sinon afficher "Ce n'est pas un nombre, tu ne me la mettras pas à l’envers."

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Argument 
// const args = process.argv[2];

// divisible par 1
// console.log(args % 1);

// divisible par lui même
// console.log(args % args);


// function isPrimeNumber(args) {
//   if (args / 1 === 0 && args / args === 0 && args > 1 && args % 2 !== 0) {
//     console.log("Oui, " + args + " est un nombre premier.");
//   } else if(isNaN(args) || args < 0) {
//     console.log("Missing an argument or " + `"${args}"` + " n'est pas un nombre.");
//   } else {
//     console.log("Non, " + args + " n’est pas un nombre premier.");
//   }
// }

// isPrimeNumber(args);


//Argument 
// const args = process.argv[2];

// function isPrimeNumber(number) {
//   if (isNaN(number) || number <= 1) {
//     console.log("Missing an argument or " + `"${number}"` + " n'est pas un nombre premier.");
//   } else {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log("Oui, " + number + " est un nombre premier.");
//     } else {
//       console.log("Non, " + number + " n’est pas un nombre premier.");
//     }
//   }
// }

// isPrimeNumber(args);

