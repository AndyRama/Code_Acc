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