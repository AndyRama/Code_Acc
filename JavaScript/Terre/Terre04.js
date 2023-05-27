//Argurment est un nombre entier pair ou impaire ou pas un nombre entier

// Exemples d’utilisation :
// $> ruby exo.rb 2
// pair

// $> ruby exo.rb 5
// impair


// $> ruby exo.rb Bonjour
// Tu ne me la mettras pas à l’envers.

// $> ruby exo.rb
// Tu ne me la mettras pas à l’envers.


// Attention : gérez aussi les entiers négatifs.

const args = process.argv.slice(2);

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
    console.log("Ce n'est pas un nombre, tu ne me la mettras pas à l’envers.");
  
  //si il n'y a pas d'arguments
  } else if(process.argv[1] === 0)  {
    console.log("il n'y a pas d'argument, tu ne me la mettras pas à l’envers.");
  }
  i++;
}

console.log(args);
