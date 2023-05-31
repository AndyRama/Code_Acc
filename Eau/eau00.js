///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// On crée une fonction qui va vérifier si les chiffres sont différents les uns des autres.
// On crée une boucle for qui va de 0 à 9 pour le premier chiffre.    [i] = 0
// On crée une boucle for qui va de 0 à 9 pour le deuxième chiffre.   [j] = [i] + 1
// On crée une boucle for qui va de 0 à 9 pour le troisième chiffre.  [k] = [j] + 1
// On crée une variable qui va contenir les chiffres de la combinaison.
// On appelle la fonction qui va vérifier si les chiffres sont différents les uns des autres.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// On crée une function qui va vérifier si les chiffres sont différents les uns des autres
function checkCombination(combination) {
  const digits = combination.split('');
  const uniqueDigits = [...new Set(digits)]; 
  return digits.length === uniqueDigits.length;
}

const result = [];

// On crée une boucle for qui va de 0 à 9 pour le premier chiffre.
for (let i = 0; i <= 9; i++) {
  // On crée une boucle for qui va de 0 à 9 pour le deuxième chiffre.
  for (let j = i + 1; j <= 9; j++) {
    // On crée une boucle for qui va de 0 à 9 pour le troisième chiffre.
    for (let k = j + 1; k <= 9; k++) {
      // On crée une variable qui va contenir les chiffres de la combinaison.
      let combination = `${i}${j}${k}`;

      // On appelle la fonction qui va vérifier si les chiffres sont différents les uns des autres.
      if (checkCombination(combination)) { 
        // on ajoute la combinaison au tableau result
          result.push(combination);
        } 
      }
    }
  }

console.log(result.join(', '));
