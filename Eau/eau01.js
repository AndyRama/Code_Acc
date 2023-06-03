// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.

// Exemples d’utilisation :
// $> python exo.py
// 00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
// $>

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// On crée une fonction qui va vérifier si les chiffres sont différents les uns des autres.
// On crée une boucle for qui va de 0 à 99 pour le deuxième premier chiffres.   [i] = 00
// On crée une boucle for qui va de 0 à 99 pour le deuxième suivant chiffres.   [j] = 00
// On crée une variable qui va contenir les chiffres de la combinaison.
// On appelle la fonction qui va vérifier si les chiffres sont différents les uns des autres.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function allCombinaison(combination) {
  const digits = combination.split('');
  const uniqueDigits = [...new Set(digits)]; 
  return digits.length === uniqueDigits.length;
}

let result = [];

for (let i = 0; i <= 99; i++) {
  for (let j = 0  && i >= 99; j <= 99; j++) {
    // for (let k = j+1; k <= 9; k++) {
    //   for (let l = k+1; l <= 9; l++) {
    let combination = `${i}${j}`;

      if (allCombinaison(combination)) { 
        if (i < 10 && j < 10) {
          combination = `0${i}0${j}`;
        } else if (i < 99 && j < 99) {
          combination = `0${i}${j}`;
        // console.log(combination);
         
        } else if (result.length <= 4 ) {
          combination = `${i}${j}`;
        }
        result.push(combination);
    }
  }
}
console.log(result.join(', '));