//argurment est un nombre entier pair ou impaire ou pas un nombre entier
const args = process.argv.slice(2);

// const number = args[0];

let i = 0;

while (i < args.length ) {
  //si le nombre est divisible par 2
  if (args[i] % 2 === 0) {
    console.log("ce nombre est pair");

  //sinon le nombre n'est pas divisible par 2
  } else if (args[i] % 2 === 1) {
    console.log("ce nombre est impair");

  //sinon le nombre est negatif
  } else if (args[i] < 0) {
     console.log("ce nombre est negativif");

  //sinon l'argument n'est pas un nombre
  } else if (isNaN(args[i])) {
    console.log("Pas un nombre, tu ne me la mettras pas à l’envers.");
  
  //si le argument pas de arguments args[0]
  } else if(args[i].Math.abs() === 0)  {
    console.log("Pas d'argument, tu ne me la mettras pas à l’envers.");
  }
  i++;
}

console.log(args);

// Sortie attendue :

// $> node Terre04.js 2
// pair

//OK

// $> node Terre04.js 5
// impair

//OK

// $> node Terre04.js Bonjour
// Tu ne me la mettras pas à l’envers.

//OK

// $> node Terre04.js
// Tu ne me la mettras pas à l’envers.

//KO