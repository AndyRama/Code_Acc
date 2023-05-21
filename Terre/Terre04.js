//argurment est un nombre entier pair ou impaire ou pas un nombre entier

const args = process.argv.slice(2);

let i = 0;

while (i < args.length) {
  //Pour chaque argument, on vérifie si c'est un nombre entier est pair
  if (args[i] % 2 === 0) {
    console.log(args[i] + " est pair");
    //sinon on vérifie si c'est un nombre entier impaire
  } else if (args[i] % 2 === 1){
    console.log(args[i] + " est impair");
    //sinon NAN
  } else {
    console.log(args[i] + " n'est pas un nombre entier");      
  }
  i++;
}
