// Le programme prendra deux arguments : un nombre et un exposant.

const nombre = process.argv[2];
const exposant = process.argv[3];

if (process.argv.length !== 4) {
    console.log("Missing arguments");
    process.exit(1);

// Les arguments doivent être des nombre.
} else if (isNaN(nombre) || isNaN(exposant)) {
    console.log("One of the arguments is not a number");
    process.exit(1);

// L’exposant ne pourra pas être négatif.
} else if (exposant < 0) {
    console.log("is not a exposant positive number");
    process.exit(1);
    // Affiche resultat nombre puissance exposant.
} else {
    console.log(Math.pow(nombre, exposant));
}
