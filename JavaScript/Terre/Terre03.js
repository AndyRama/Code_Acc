// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.

// Exemples d’utilisation :
// $> python exo.py n
// nopqrstuvwxyz

const args = process.argv.slice(2);

const lettre = "abcdefghijklmnopqrstuvwxyz";

let i = 0;
let result = "";

while (i < lettre.length) {
  if (args[0] === lettre[i]) {
    while (i < lettre.length) {
      result = result + lettre[i];
      i++;
    }
  }
  i++;
}

console.log(result);

