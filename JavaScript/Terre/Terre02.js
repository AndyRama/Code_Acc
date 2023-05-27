// Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.

// $> ruby exo.rb je suis solide !
// je
// suis
// solide
// !

const args = process.argv.slice(2);

let i = 0;

while (i < args.length) {
  console.log(args[i]);
  i++;
}

