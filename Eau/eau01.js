// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.

// Exemples d’utilisation :
// $> node eau01.js
// 00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
// $>

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// On crée une fonction qui va vérifier si les chiffres sont différents les uns des autres.
// On crée une boucle for qui va de 0 à 99 pour le deuxième premier chiffres.   [i] = 00
// On crée une boucle for qui va de 0 à 99 pour le deuxième suivant chiffres.   [j] = 00
// On crée une variable qui va contenir les chiffres de la combinaison.
// On appelle la fonction qui va vérifier si les chiffres sont différents les uns des autres.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// On crée une fonction qui va vérifier si les chiffres sont différents les uns des autres.
function allCombi(combi) {
  const digits = combi.split('')
  const uniqueDigits = [ ...new Set(digits)] 
  return digits.length == uniqueDigits.length
}

let result = [];

for (let i = 0; i <= 99; i++) {
  for (let j = 0  && i >= 99; j <= 99; j++) {

    let combi = `${i}${j}`;

    if (allCombi(combi)) { 
      if (i < 10 && j < 10) {
        combi = `0${i}0${j}`;
      } else if (i < 99 && j < 99) {
        combi = `0${i}${j}`;

      } else if (result.length <= 4 ) {
        combi = `${i}${j}`;
      }
      
      result.push(combi);
    }
  }
}
console.log(result.join(', '));
