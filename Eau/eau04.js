// Créez un programme qui affiche le premier "nombre premier supérieur" au nombre donné en argument.

// Exemples d’utilisation :
// $> python exo.py 14
// 17
// $>

// Afficher -1 si le paramètre est négatif ou mauvais.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Recupére l'argument du fichier 
// Si args est un nombre et il est divisible par 1 et par lui même  //Prime
  // determiner prime number next
// Sinon pas prime alors determiner le nombre premier superieur
// Sinon afficher -1 si le paramètre est négatif ou mauvais.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const n = process.argv[2]

console.log(n);

function PrimeNumberNext(n) {
  let i = 0

  // Si args est un nombre Prime
  //tanque i < n alors i++
  while (i <= n && n >= 0) {
    console.log(n);
    if(n >= 1 && n % 1 === n && n % n === 1) {
      i++
    }
    else {
      console.log('-1 : erreur argument');
    }
    //boucle iteration (n , i)
  }
  // Sinon pas prime alors déterminer prime number next.
  // Sinon afficher -1 si le paramètre est négatif ou mauvais.


}