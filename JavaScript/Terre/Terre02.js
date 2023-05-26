// Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.

const args = process.argv.slice(2);

let i = 0;

while (i < args.length) {
    console.log(args[i]);
    i++;
}

