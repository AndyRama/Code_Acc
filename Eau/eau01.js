// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


// Exemples d’utilisation :
// $> python exo.py
// 00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
// $>

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const result = [];
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = 0; k <= 9; k++) {
      const combination = `${i}${j}${k}`;

      if (i !== j && i !== k && j !== k) {
        console.log(combination);
      }
    }
  }
}