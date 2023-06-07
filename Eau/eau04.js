// Créez un programme qui affiche le premier "nombre premier supérieur" au nombre donné en argument.

// Exemples d’utilisation :
// $> python exo.py 14
// 17
// $>

// Afficher -1 si le paramètre est négatif ou mauvais.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Recupére l'argument du fichier 
// Determiner le "nextPrimeNumber" avec number+ 1 
// Sinon on affiche -1 si le paramètre est négatif ou mauvais.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const number = process.argv[2]

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

console.log(nextNumberPrime());