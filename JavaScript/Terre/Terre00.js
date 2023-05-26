// Créez un programme qui affiche l’alphabet en lettres minuscules suivi d’un retour à la ligne.

// Sortie attendue :
// abcdefghijklmnopqrstuvwxyz

// Attention : votre programme devra utiliser une boucle.

const lettre = "abcdefghijklmnopqrstuvwxyz";

let i = 0;
let result = "";

while (i < lettre.length) {
    result = result + lettre[i];
    i++;
}

console.log(result);




