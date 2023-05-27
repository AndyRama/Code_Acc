const args = process.argv.slice(2);

if (args.length !== 1) {
    console.log("Missing arguments");
    process.exit(1);
}

const nombre = Number(args[0]);

if (isNaN(nombre)) {
    console.log(`Error: ${args[0]} is not a number.`);
    process.exit(1);
}

const exposant = Number(args[1]);

