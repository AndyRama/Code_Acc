///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

//Créer une variable qui contient l'alphabet
//Créer une variable qui contient la longueur de l'alphabet
//Créer une variable qui contient la boucle
//Afficher la boucle

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Créer une variable qui contient l'alphabet
const lettre = "abcdefghijklmnopqrstuvwxyz";

let i = 0;
let result = "";

//Créer une boucle
while (i < lettre.length) {
	result = result + lettre[i];
	i++;
}

console.log(result);




