// const args = process.argv.slice(2)

// let i = 0
// let result = ''

// while (i < args.length - 1) {
//   result = result + args[i].length 
//   i++
// }

// console.log(result)

function countCaracteres(chaine) {
  return chaine.length;
}

if (process.argv.length === 3) {
  const chaine = process.argv[2];
  const nombreCaracteres = countCaracteres(chaine);
  console.log(nombreCaracteres);
} else {
  console.log("erreur");
}