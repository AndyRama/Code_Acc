// Créez un programme qui trouve le plus court chemin entre l’entrée et la sortie d’un labyrinthe en évitant les obstacles.


// Le labyrinthe est transmis en argument du programme. La première ligne du labyrinthe contient les informations pour lire la carte : LIGNESxCOLS, caractère plein, vide, chemin, entrée et sortie du labyrinthe. 


// Le but du programme est de remplacer les caractères “vide” par des caractères “chemin” pour représenter le plus court chemin pour traverser le labyrinthe. Un déplacement ne peut se faire que vers le haut, le bas, la droite ou la gauche.

// Exemples d’utilisation :
// $> cat -e example.map
// 10x10* o12$
// *****2****$
// * *   ****$
// *   **** *$
// * ****   *$
// *  *     2$
// *  ** *  *$
// *     * **$
// ***  **  *$
// 1     ****$
// **********$

// $> ruby exo.rb example.map
// 10x10* o12
// *****2****
// * *   **** 
// *   **** *
// * ****   * 
// *  * oooo2
// *  **o*  *
// *  ooo* **
// ***o **  *
// 1ooo  ****
// **********
// => SORTIE ATTEINTE EN 12 COUPS !

///////////////////////////////////////////////////// Pseudo code ////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////