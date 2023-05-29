///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Si le nombre est négatif
// Sinon le nombre est divisible par 2 //pair
// Sinon le nombre n'est pas divisible par 2 //impair
// Sinon l'argument n'est pas un nombre
// Sinon il n'y a pas d'argument

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const args = process.argv.slice(2)

let i = 0

if (args.length === 0) {
  console.log("il n'y a pas d'argument, tu ne me la mettras pas à l’envers.")
  // Sinon le nombre est negatif
} else if (args[i] < 0 && Math.sign(args[i] !== 1 )) {
  console.log('ce nombre est negativif')
}
  {
  while (i < args.length && args > 0) {
    // Si le nombre est divisible par 2
    if (args[i] % 2 === 0) {
      console.log('ce nombre est pair')
      
    // Sinon le nombre n'est pas divisible par 2
    } else if (args[i] % 2 === 1) {
      console.log('ce nombre est impair')
      
    // Sinon l'argument n'est pas un nombre
    } else if (isNaN(args[i])) {
      console.log("Ce n'est pas un nombre, tu ne me la mettras pas à l’envers.")
    } 
    i++
  }
}

