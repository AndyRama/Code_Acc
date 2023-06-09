// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.

// Exemples d’utilisation :
// $> node eau06.js “Hello world !”
// HeLlO wOrLd !

// $> node eau06.js 42
// error

// Afficher error et quitter le programme en cas de problèmes d’arguments.

///////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////

// Déterminer l'argument
// Si l'argument est présent 
  // Prendre la chaine de caractère et mettre la lettre en capitalize
    // Si index est impaire
    // Sinon return lowercase
// Sinon afficher error

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function capitalizeEveryOtherLetter(string) {
  let result = "";
  let shouldCapitalize = true;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (/[a-zA-Z]/.test(char)) {
      if (shouldCapitalize) {
        result += char.toUpperCase();
      } else {
        result += char.toLowerCase();
      }
      shouldCapitalize = !shouldCapitalize;
    } else {
      result += char;
    }
  }

  return result;
}

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log("error");
  process.exit(1);
}

const inputString = args[0];
const resultString = capitalizeEveryOtherLetter(inputString);
console.log(resultString);