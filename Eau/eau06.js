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

  let result = '';
  let shouldCapiltalize = true

  for(let i = 0; i < string.length; i++) {
    const char = string[i]
    if(/[a-za-Z]/.test(char)) {
      if(shouldCapiltalize) {
        result += char.toUpercase()
      }
    }
  }
}
