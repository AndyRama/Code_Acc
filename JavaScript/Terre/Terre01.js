// Créez un programme qui affiche son nom de fichier.

// Exemples d’utilisation :
// $> node exo.js
// exo.js

// $> node crevette.js
// crevette.js

const args = process.argv[1];

// /home/andyrama/code/AndyRama/Code_Acc/JavaScript/Terre/Terre01.js

return console.log(args.split("/").pop());

// Terre01.js 




