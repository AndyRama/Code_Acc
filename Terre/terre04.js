// nombre entier pair ou impaire ou pas un nombre entier

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

//argurment est un nombre entier pair ou impaire ou pas un nombre entier
//si le nombre est divisible par 2
//sinon le nombre n'est pas divisible par 2
//sinon le nombre est negatif
//sinon l'argument n'est pas un nombre
//si le argument pas de arguments args[0]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//argurment est un nombre entier pair ou impaire ou pas un nombre entier
const args = process.argv.slice(2)

let i = 0
while(i < args.length ){
  //si le nombre est divisible par 2
  if(args[i] % 2 === 0) {
    console.log("nombre est pair");
  }

  //sinon si le nombre n'est pas divisible par 2
  else if(args[i] % 2 === 1) {
    console.log("nombre est impaire");
  }

  //sinon si le nombre est negatif
  else if(args[i] < 0) {
    console.log("ce nombre est negatif");
  }

  //sinon si l'argument n'est pas un nombre
  else if(isNaN(argss[i])) {
    console.log("Pas un nombre, tu ne me la mettras pas à l’envers.");
  }
  
  //si le argument pas de arguments args[0]
  else if(args[i].Math.abs() === 0) {
    console.log("Pas argument, tu ne me la mettras pas à l’envers.");
  }

  i++
}

console.log(args);
