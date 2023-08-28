// Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant.
// La répétition est volontaire.

// Exemples d’utilisation :
// $> node eau00.js
// 012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
// $>

// 987 n’est pas là parce que 789 est présent.

// 020 n’est pas là parce que 0 apparaît deux fois.

// 021 n’est pas là parce que 012 est présent.

// 000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.

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

  // On crée une boucle for qui va de 0 à 9 pour le deuxième chiffre.
  
    // On crée une boucle for qui va de 0 à 9 pour le troisième chiffre.
    
      // On crée une variable qui va contenir les chiffres de la combinaison.
      

      // On appelle la fonction qui va vérifier si les chiffres sont différents les uns des autres.
      
        // on ajoute la combinaison au tableau result


console.log(result.join(', '));
