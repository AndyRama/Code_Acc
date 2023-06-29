// Créez un programme qui affiche le premier "nombre premier supérieur" au nombre donné en argument.

// Exemples d’utilisation :
// $> node eau04.js 14
// 17
// $>

// Afficher -1 si le paramètre est négatif ou mauvais.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Récupére l'argument du fichier 
// Determiner le "nextPrimeNumber" avec number+ 1 
// Sinon on affiche -1 si le paramètre est négatif ou mauvais.
// Afficher le prochain nextPrime

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Récupére l'argument du fichier 
const number = process.argv[2]

// Determiner le "nextPrimeNumber" avec number+ 1 
function primeNumber(number) {
  if (number < 2) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }  
  return true;
}

// Afficher -1 si le paramètre est négatif ou mauvais.
function nextPrimeNumber(number) {
  if (number < 0 || isNaN(number)) {
    return -1;
  }
  
  let nextNumberPrime  = number + 1;
  
  while (!primeNumber(nextNumberPrime )) {
    nextNumberPrime++;
  }
  
  return nextNumberPrime ;
}

// Afficher le prochain nextPrime
console.log(nextNumberPrime());