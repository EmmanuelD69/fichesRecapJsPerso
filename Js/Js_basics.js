/*** INTRODUIRE UN FICHIER JS DANS SON CODE HTML ***
Pour insérer un fichier javascript dans notre code, il faut le positioner dans la balise "body" juste avant qu'elle se ferme "</body>". 
la méthode pour insérer le fichier consiste à ajouter une balise autofermante "<script>" en y indiquant l'attribut "src" en pointant vers le dossier où se trouve le fichier Js voulu. 
example:
<body>
    <script src="./guide.js"></script>
</body>
*/

/*** CONSTANTES ET VARIABLES ***
Javascript est un langage qui gère des informations, les comparent, les utilisent.
Pour ce faire, il utilise des "boites" dans lesquelles il range ces informations. Les "boites" sont étiquetées pour les identifier, ont leur attribut un nom distinct.
Il existe deux type de boites:
LA CONSTANTE => const (sa valeur doit être définie et reste la même, on ne peux pas la changer)
Exemple: const nom = "emmanuel";
LA VARIABLE => let (sa valeur est variable, on n'est pas obligé de la définir dès le départ, on peut très bien n'attribuer aucune valeur et juste déclarer (identifier) la variable.)
Exemple: let age = 35;
Exemple: let country = "france";
Exemple: let ville;
!!! ON UTILISE "LET" ET PAS "VAR" A CAUSE DU RISQUE D'ALTERER UNE VALEUR, CE QUI PEU SUBVENIR DANS UN SCOPE DE FONCTION OU DE LOOP !!!
*/

/*** ECRITURES POSSIBLES DES NOMS DE VARIABLES/CONSTANTES ***
1-CAMEL CASE (première lettre premier mot minuscule, première lettre deuxième mot Majuscule)
const yourVideos = 10;
2-PASCAL CASE (Majuscule à toutes les premières lettres des mots)
const YourVideos = 20;
3-UNDERSCORE (chaque mot est connecté par un symbole _)
const your_videos = 30;
*/

/*** OPERATEURS DE BASE EN JS ***
let a = 10;
let b = 4;
let c;

1-ADDITION (+)
let c = a + b; 

2-SOUSTRACTION (-)
let c = a - b; 

3-MULTIPLICATION (*)
let c = a * b; 

4-DIVISION (/)
let c = a / b; 

5-MODULO (c'est le chiffre restant, lors d'une division) (%)
let c = a % b; 
let c = 10 % 4;
let c = 2;

6-PUISSANCE (Le nombre de fois que l'on mutliplie un nombre par sa valeur)(**)
let c = a ** b;
let c = 10 ** 4;
let c = 10 * 10 * 10 * 10;
let c = 10000;

7-AJOUTE 1 (++ ajoute 1 à la valeur de la variable)(++)
let c = 10;
c++;
signifie: c = c+1;
console.log(c); affichera 11 

8-SOUSTRAIT 1 (-- ajoute 1 à la valeur de la variable)(--)
let c = 10;
c--;
signifie: c = c-1;
console.log(c); affichera 9

9-AJOUTE UN NOMBRE (+= ajoute un nombre de notre choix à la valeur de la variable)
let c = 10;
c += 20;
signifie: c = c + 20;
console.log(c); affichera 30
*/

/*** DIFFERENTS TYPES D'INFORMATIONS QUE PEUX STOCKER UNE VARIABLE/CONSTANTE
 la valeur que peux prendre une variable/constante peut être de plusieurs types:
 1-UN NOMBRE
 const a = 10;

 2-UNE CHAINE DE CHARACTERS
 const a = "toto";
 const a = "4";

 3-UN BOOLEANS
 const a = TRUE;
 const a = FALSE;

 4-VALEUR INDEFINIE (indique qu'aucune valeur n'a été attribué à la variable. valable uniquement pour let, car (par defaut) la valeur d'une constante doit être définie.)
 let a;
 console.log(a); affichera "undefined"

 5-VALEUR NULLE (on déclare ici, pour la variable, une valeur égale à rien (null))
 let a = null;

 6-SYMBOL (utile pour donner un ID unique à l'intérieur d'un objet)
 const a = symbol();
*/

/*** CONCATENATION ***
 C'est comme connecter deux valeurs ensemble, 
 example:
 const greeting = "Welcome to my website "
 let name = "Emmanuel"
 console.log(greeting + name);
 affichera: Welcome to my website Emmanuel

 1-INCLURE UNE CITATION DANS UNE VARIABLE
 Example:
 const citation = "Lafontaine nous dis:"La méfiance est mère de la sûreté."";
 console.log(citation); nous indiquera un message d'erreur car il considère que le (") rencontré au moment de citer l'auteur, a pour action de fermer le premier ("). Le contenu qui suit est donc en dehors des "" et donc au mauvais endroit, d'où le message d'erreur.

 Pour corriger cela, il faut donc "échaper" le symbole (") se trouvant au début et à la fin de la citation à l'aide du symbole \ (alt+Gr 8).
 Example:
 const citation = "Lafontaine nous dis:\"La méfiance est mère de la sûreté.\"";
 console.log(citation); nous affichera le résultat attendu.

 Une autre méthode consiste à utiliser les simples guillemets au lieu des doubles guillemets.
 Example:
 const citation = 'Lafontaine nous dis:"La méfiance est mère de la sûreté."';
 console.log(citation); nous affichera le résultat attendu.
 MAIS encore une fois, dans cette méthode, si l'on utilise quelque part dans notre phrase un apostrophe ('), cela va casser le code..
 Example: 
 const citation = 'Lafontaine, l'a dit:"La méfiance est mère de la sûreté."';
 console.log(citation); nous indiquera un message d'erreur car l'apostrophe situé après le (l) de "l'a dit" casse le code.
 Pour solutionner le problème, il faut donc à nouveau utiliser la méthode (alt+Gr 8) et ainsi "échaper" l'apostrophe en trop.
 Example:
 const citation = 'Lafontaine, l\'a dit:"La méfiance est mère de la sûreté."';
 console.log(citation); nous affichera le résultat attendu.

 !!!METHODE ULTIME POUR NE PAS SE PRENDRE LA TETE AVEC GUILLEMETS ET APOSTROPHES!!!
 il suffit d'utiliser (alt+Gr 7) qui nous donnera ces apostrophes arrières (``). Tout le texte se trouvant entre ces deux guillemets arrière sera valide, peu importe qu'il comprenne des guillemets ou des apostrophes.
 Example: 
 const citation = `Lafontaine, l'a dit:"La méfiance est mère de la sûreté."`;
 console.log(citation); nous affichera le résultat attendu.

 !!!METHODE ULTIME POUR UTILISER LA CONCATENATION!!!
 on abandonne la connection des valeurs en utilisant le symbole (+) et on le remplace par ${variable} tout en conservant l'écriture du contenu de la variable entre apostrophes arrières (alt Gr 7)
 Example:
 const auteur = "Lafontaine";
 const citation = `${auteur} l'a dit:"La méfiance est mère de la sûreté."`;
 console.log(citation); nous affichera le résultat attendu.

 Faire attention de bien déclarer les variables/constantes dans le bon ordre, pour ne pas se retrouver avec un message d'erreur. En effet Js lis le code de haut en bas et donc si l'on déclare par example:
 const citation = `${auteur} l'a dit:"La méfiance est mère de la sûreté."`;
 const auteur = "Lafontaine";
 console.log(citation); nous affichera un message d'erreur car la constante "auteur" n'a pas pu etre identifier puisque elle est déclaré après la constante "citation".
*/

/*** LES COMPARAISONS ***
 pour comparer deux variables nous avons plusieurs notations à notre disposition:
 1-(==) est égal à
 Examples utilisés en console:
 5 == 5 le résultat est "true"
 5 == 4 le résultat est "false"
 
 2-(!=) n'est pas égal à
 Examples utilisés en console:
 5 != 5 le résultat est "false"
 5 != 4 le résultat est "true"

 3-(>) supérieur à
 Examples utilisés en console:
 5 > 5 le résultat est "false"
 5 > 4 le résultat est "true"

 4-(<) inférieur à
 Examples utilisés en console:
 5 < 5 le résultat est "false"
 4 < 5 le résultat est "true"

 5-(>=) supérieur ou égal à
 Examples utilisés en console:
 5 >= 5 le résultat est "true"
 4 >= 5 le résultat est "false"

 6-(<=) inférieur ou égal à
 Examples utilisés en console:
 5 <= 5 le résultat est "true"
 5 <= 4 le résultat est "false"

 !!!CAS PARTICULIER!!!
 Examples utilisés en console:
 5 == "5" le résultat est "true"
 5 est un nombre et "5" est une chaine de charactères (string), on devrait donc avoir false au lieu de true.
 pouv éviter ce type d'erreur il existe une solution qu'il faut généraliser à notre code.
 c'est le cas suivant:

 7-(===) égal et strictement égal à
 5 === 5 le résultat est "true"
 5 === "5" le résultat est "false"
*/

/*** LES CONDITIONS ***
 Une condition induit qu'elle est vérifiée ou non, en d'autre terme qu'elle est vraie ou fausse.
 Si elle est vérifiée (true) alors le code entre accolades {...} s'execute, si elle n'est pas vérifiée (false) alors le code entre accolades {...} ne s'execute pas. 
1-IF / SI
if(condition){
 console.log("la condition est vraie");
}
si ma condition est vraie, alors executer le code entre accolades {...}.

2-IF ELSE / SI SINON
if(condition){
 console.log("la condition est vraie");
}
else{
 console.log("la condition est fausse")
}
si ma condition est vraie, alors on execute le code entre accolades {...}, sinon on execute le code entre accolades {...} situé après "else".

3-IF ELSE IF / SI SINON SI
if(condition1){
 console.log("la condition1 est vraie");
}
else if(condition2){
 console.log("la condition2 est vraie")
}
else{
 console.log("aucune des conditions est vraie")
}
si ma condition1 est vraie, alors on execute le code entre ses accolades {...}, sinon si ma condition2 est vraie, alors on execute le code entre ses accolades {...}, sinon on execute le code entre accolades {...} situé après "else".

par Example:
const condition = true; 
if(condition){
 console.log("la condition est vraie"); le message s'affichera dans la console car la condition est égale à "true"
}

const condition = false; 
if(condition){
 console.log("la condition est vraie"); rien se s'affichera dans la console car la condition est égale à "false"
}

const condition = 20;
if(condition > 10){
 console.log("la condition1 est vraie"); le message s'affichera dans la console car la condition est vérifiée et égale à "true"
}
if(condition < 10){
 console.log("la condition est vraie"); rien se s'affichera dans la console car la condition n'est pas respectée et donc égale à "false"
}

const condition = "emmanuel"
if(condition === "emmanuel"){
 console.log("la condition est vraie"); le message s'affichera dans la console car la condition est vérifiée et égale à "true"
}
if(condition === "paul"){
 console.log("la condition est vraie"); rien se s'affichera dans la console car la condition n'est pas respectée et donc égale à "false"
}

Cela fonctionne exactement de la même manière pour toutes les autres formes de conditions. 
On vérifie l'exactitude de l'information / de la comparaison et on execute ou pas le code.
!!!à noter que plusieurs conditions peuvent être vraies, et donc plusieurs codes peuvent s'executer!!!
Example:
const age = 18;
const money = 100;

if(age >= 18){
 console.log("la condition1 est vraie"); le message s'affichera dans la console car la condition est vérifiée et égale à "true"
}
else if(money >= 50){
 console.log("la condition2 est vraie") le message s'affichera dans la console car la condition est vérifiée et égale à "true"
}
else{
 console.log("aucune des conditions est vraie")
}
*/

/*** CAS PARTICULIER: VALEUR TRUE OU FALSE ***
 il est possible d'affecter à une constante / variable des valeurs qui auront pour intérprétation par Javascript, soit "vrai" (true) ou "faux" (false).
 Example:
 const age = 25; la valeur affectée à cette constante est égale à "true"
 const name = "Emmanuel"; la valeur affectée à cette constante est égale à "true"

 const age = 0; la valeur affectée à cette constante est égale à "false"
 const age = false; la valeur affectée à cette constante est égale à "false"
 const age = ""; la valeur affectée à cette constante est égale à "false"
 const age = null; la valeur affectée à cette constante est égale à "false"
 const age = undefined; la valeur affectée à cette constante est égale à "false"
 const age = Nan; la valeur affectée à cette constante est égale à "false"
 */

/*** FONCTIONS ***
 Une fonction est un ensemble d'actions secondaire ayant pour but d'accomplir une action globale.
 Example d'une Fonction pour demander le nom d'une personne:
 function askName(){
    let nom = prompt('Quel est ton nom?');
    console.log(`Bienvenue sur mon site ${nom}`); version (alt Gr 7)
    console.log("Bienvenue sur mon site " + nom); version concaténation normale.
 }
 Pour executer une fonction, il faut l'appeler!
 Example:
 askName();
 console.log("je viens d'executer la fonction en l'appelant par son nom.")

 Une fonction peut faire appel à d'autres fonctions, ces appels étant inclue dans la fonction.
 Example:
 function greet(nom){    
    console.log(`Bienvenue sur mon site ${nom}`); version (alt Gr 7)
    console.log("Bienvenue sur mon site " + nom); version concaténation normale.
    Ce qui se trouve entre paranthèses, après le nom de la fonction, est appelé "paramètre", il peut y en avoir plusieurs.
    On appel donc cela, les paramètres de la fonction.
 }
 
 function signUp(){
    let nom = prompt('Quel est ton nom?'); le prompt est affiché lors de l'appel de la fonction "signUp".
    greet(nom); 
    on execute alors la fonction "greet" en passant l'information enregistré dans la variable "nom" lorsqu'on a répondu au prompt. 
    Quand on passe une information à une fonction, on appel ce qui se trouve entre paranthèses (), un argument.
    Cet argument peut être un nombre, une chaine de charactères, un booléen, etc... il peut y avoir plusieurs arguments en même temps, il suffit de les séparer par une virgule (,).
    Nous passons donc l'argument correspondant à la valeur se trouvant dans la variable "nom" vers la fonction "greet"
 }


 *** PRINCIPE DU "RETURN" ***
 Certaines fonctions ne retourne pas forcément une valeur / argument, elles accomplissent ce qu'on leurs demande de faire, puis passe le relais ou s'arrête. 
 Example:
 let greet = console.log("coucou c'est moi"); 
 console.log(greet); le message s'affichera dans la console mais la valeur de la variable "greet" sera indéfinie "undefined".
 afin d'obtenir la valeur d'une variable, il faut que celle ci nous soit "Retournée".
 Example:
 function max(nr1, nr2){
     if(nr1 > nr2){
         return nr1; le mot clé "return" permet de renvoyer/retourner le nombre1 si la condition est vérifiée (true).
     }
     else{
         return nr2; sinon renvoyer / retourner le nombre2 si la condition n'est pas vérifiée (false).
     }

     let inbox = max(1, 5);
     console.log(inbox);

     on fait un console.log de la variable "inbox", ce qui doit nous afficher son contenu, une valeur.
     Mais la variable inbox contient un appel vers une fonction, la fonction max, qui contient deux "paramètres".
     Si la fonction que nous avons écris au dessus, n'existait pas, nous aurions une valeur "indéfinie".
     Mais étant donné que cette fonction est prévu, et qu'elle compare plusieurs conditions, son résultat nous sera retourné grâce à l'utilisation du mot clé "return".
     En effet, selon la condition, la fonction max va nous "returner" la valeur nr1 ou nr2.
     Nous aurons donc bien une valeur, qui ici est un nombre, qui sera attribué à la variable "inbox".
     A partir de là, le console log de "inbox" nous affichera le nombre "retourné" par la fonction max.
 }
*/

/*** OBJETS *** 
 Un objet est comme une armoire à tiroirs, on y stock à l'intérieur des données. Chaque donnée est stockée dans un tiroir qui porte un nom/ID. Ces données peuvent être des nombres, chaines de charactères, booléens, et même des fonctions!
 Un objet se décompose donc en propriétés et leurs valeurs, la propriété étant le nom/ID qui contient des valeurs (key: value).
 !!!IMPORTANT: on appel "Méthode", une fonction se trouvant dans un objet!!!
 Example1:
 const user = {
     name: "Emmanuel",
     age: 36,
     married: false,
     greet: function(){ Version longue
         console.log("hello there!");
     };
  
  Example2:
  const user = {
     name: "Emmanuel",
     age: 36,
     married: false,
     greet(){ Version simplifiée
         console.log("hello there!");
     };
 !!! On peut utiliser un raccourci pour écrire une méthode en supprimant ": function", cela correspond exactement à la même chose en version simplifié. !!!


 Un objet peut par exemple identifier une personne et contenir les informations concernant cette personne.
 !!! PROPERTY = KEY / VALUE - PROPRIETE = CLEF / VALEUR !!!
 Un objet est composé de propriétés qui se décompose en deux temps, tout d'abord la clé, puis sa valeur.
 Dans notre example, "name" est la clé, et "Emmanuel" est la valeur, l'ensemble formant la première propriété de l'objet "user".
 
 }

 pour acceder à une information dans un objet, il faut le nommer et ajouter un point (.) pour nommer ensuite la propriété qui intéresse.
 Example:
 console.log(user.name);
 ou directement dans la console avec:
 user.name;
*/

/*** TABLEAU / ARRAY ***
 Un tableau, ou plutôt un array en anglais, est une variable qui contient plusieurs valeurs, appelées items. Chaque item est accessible au moyen d'un indice (index en anglais) et dont la numérotation commence à partir de 0. 
 Le contenu du tableau se définit entre crochets, et chaque valeur est séparée par une virgule. Les valeurs sont introduites comme pour des variables simples, c'est-à-dire qu'il faut des guillemets ou des apostrophes pour définir les chaînes de caractères.
 Example:
 const listUsers = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

 Il est possible d'interagir avec un tableau de plusieurs façons, pour cela on utilise comme pour une objet un point (.) suivi de la méthode que l'on souhaite appliquer à notre tableau.
 Exemples:
 listUsers.shift(); // Retire « Sébastien »
 listUsers.pop(); // Retire « Guillaume »
 alert(listUsers); // Affiche « Laurence,Ludovic,Pauline »

 Quelques méthodes les plus fréquemment utilisées:
 -La méthode "push()" permet d'ajouter un ou plusieurs items à un tableau, 
 const myFriends = ['Sébastien', 'Laurence'];
 myFriends.push('Ludovic'); Ajoute « Ludovic » à la fin du tableau
 myFriends.push('Pauline', 'Guillaume'); Ajoute « Pauline » et « Guillaume » à la fin du tableau
 les méthodes sont des fonctions, et peuvent donc recevoir des paramètres. "push()" peut recevoir un nombre illimité de paramètres, et chaque paramètre représente un item à ajouter à la fin du tableau.

 -La méthode "unshift()" fonctionne comme "push()", excepté que les items sont ajoutés au début du tableau. Cette méthode n'est pas très fréquente mais peut être utile.

 -Les méthodes "shift()" et "pop()" retirent respectivement le premier et le dernier élément du tableau.

 -Les chaînes de caractères possèdent une méthode "split()" qui permet de les découper en un tableau:
 Example:
 const myFamily = 'Pauline Guillaume Clarisse',
       myFamily = myFamily.split(' ');
 
 La méthode "split()" va couper la chaîne de caractères à chaque fois qu'elle va rencontrer une espace. 
 Les portions ainsi découpées sont placées dans un tableau, ici dans "myFamily".

 !!!Remarquez que quand vous affichez un tableau via "alert()" les éléments sont séparés par des virgules et il n'y a pas d'apostrophes ou de guillemets. C'est dû à "alert()" qui, pour afficher un objet (un tableau, un booléen, un nombre…), le transforme en une chaîne de caractères grâce à une méthode nommée "toString()".!!!
 Example:
 alert(cousinsString);
 alert(cousinsArray);

 -L'inverse de "split()", c'est-à-dire créer une chaîne de caractères depuis un tableau, se nomme "join()":
 Example:
 var myFamily_2 = myFamily.join('-');
 alert(myFamily_2);
 une chaîne de caractères va être créée, et les valeurs de chaque "item" seront séparées par un tiret. Si vous ne spécifiez rien comme séparateur, les chaînes de caractères seront collées les unes aux autres.

 -La méthode "length" permet d'afficher le nombre d'éléments que comporte un tableau.
 Example:
 const listUsers = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
 console.log(listUsers.length); nous affichera 5 dans la console.

 -La méthode "indexOf()" permet d'afficher l'ID/la position ou se trouve l'éléments que l'on a passé en argument de la fonction indexOf.
 Example:
 const listUsers = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
 console.log(listUsers.indexOf('Laurence')); nous affichera 1 dans la console.

 -Et enfin pour acceder à un élément d'un tableau, il suffit de nommer le tableau et de mettre entre crochets l'ID correspondant à cet élément dans le tableau.
 Example:
 const listUsers = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
 console.log(listUsers[2]); nous affichera Ludovic dans la console.
 */

/*** SWITCH STATEMENT ***
 Un "switch()" est une fonction qui permet d'analyser une variable et d'exécuter du code en fonction que la valeur cherchée existe ou non.
 c'est comme utiliser IF / IF ELSE / IF ELSE IF sauf qu'esthétiquement c'est plus compact.
 Example:
 let userInput = prompt("Entrez le nom d'un fruit");

 switch (userInput) {
  case "kiwi":
    console.log("Le kiwi est un fruit vert");
    break;
  case "banane":
    console.log("La banane est un fruit jaune");
    break;
  case "abricot":
    console.log("L'abricot est un fruit orange");
    break;
  default:
    console.log("Je n'ai pas reconnu de fruits.");
    break;
 }

 "break" permet de sortir du switch une fois que la bonne condition a été trouvée, sinon le code continuerai de s'executer et toutes conditions afficheraient leur message dans la console.
 
 !!!Pour s'assurer que l'entrée de l'utilisateur soit bien conforme à ce que l'on attend (texte en majuscules ou minuscules), il est de bonne pratique de convertir ce que l'utilisateur entre au clavier dans le format que l'on souhaite. Pour ce faire, il existe deux standard:
 -toLowerCase() qui va convertir tout le texte en lettres minuscules.
 -toUpperCase() qui va convertir tout le texte en lettres majuscules.
 pour l'implémenter il suffit de rajouter la fonction soit dans la variable:
 let userInput = prompt("Entrez le nom d'un fruit".toLowerCase());
 let userInput = prompt("Entrez le nom d'un fruit".toUpperCase());
 ou alors en créant une nouvelle variable qui va servir à convertir la variable contenant la donnée enregistré:
 let userInput = prompt("Entrez le nom d'un fruit";
 let controlUserInput = userInput.toLowerCase();
 let controlUserInput = userInput.toUpperCase();
 */

/*** FOR LOOP ***
  Une boucle nous permet pendant un temps donnée, d'effectuer un balayage sur un ensemble de données et d'agir avec elles en fonction qu'une information soit vérifiée (true) ou non (false).
  la boucle for va donc effectuer un balayage sur un nombre d'itérations prédéterminés:
  Example:
  x= variable de départ égale à un nombre de notre choix
  y= condition durant laquelle la boucle va s'effectuer
  z= incrémentation de notre variable de départ de +1
  Tant que la condition y est "true", la boucle va continuer.
  Si la condition est "false", on sortira alors de la boucle.

  for (x;y;z){
    if(condition){
      code
    }
  }

  for (let i = 0; i <= 100 ; i++) {
    if (i === 20){
      console.log("Hey, tu as atteint 20!");
      continue;
    }
    if (i === 40){
      console.log("Hey, tu as atteint 40!");
      break;
    }
    console.log(i);
  }
 "continue;" permet de zapper le code qui suit afin de passer directement à l'itération suivante.
 "break;" permet de sortir de la boucle immédiatement.
  */

/*** FOR OF LOOP ***
  This is a different way to write the FOR loop, it doesn't work on Microsoft Explorer.
  Examples:
  const names = ["emmanuel", "georgia", "maria", "nikos", "roulis"]; 

  for (let name of names) {
  console.log(name);
  }
  Cela se lit de la manière suivante:
  Pour chaque nom du tableau "names", affiche moi, dans la console, le nom.

  for (let name of names) {
  console.log(names.indexOf(name));
  }
  Cela se lit de la manière suivante:
  Pour chaque nom du tableau "names", affiche moi, dans la console, l'index du nom.
  "break;" permet aussi dans ce cas de sortir de la boucle immédiatement.
   */

/*** FOR EACH / SPECIALEMENT POUR LES TABLEAUX  ***
 !!!FORE EACH SERA PLUS LONG A PARCOURIR UN TABLEAU QUE FOR OF, A PEU PRET 25% PLUS LONG!!!
 !!!Ne s'utilise uniquement que pour parcourir des tableaux!!!
 Example:
 names.forEach(function(name, index) {
   console.log(name, index);
 })
 Cela se lit de la manière suivante:
  A chaque itération du tableau "names", affiche moi, dans la console, le nom et l'index du nom.

  "break;" ne permet pas de sortir de la boucle car il se retrouve dans une fonction et non pas dans une loop aka, on ne peut pas utiliser break dans une fonction!!!
*/

/*** FOR IN LOOP ***
 C'est une version différente de FOR OF que l'on va utiliser généralement avec des Objets.
 Examples:
 const user = {
     name: "Emmanuel",
     age: 36,
     suscribers: 200,
     money: "lolno"
     };

     for(let x in user){
       console.log(x);
     }
     ici la boucle va nous afficher chaque propriétés dans notre object.
     Pour chaque proriétés (x) faisant parti de l'objet user, affiche moi le nom.

     for(let x in user){
       console.log(user.x);
       console.log(user[x]);       
     }
     ici la boucle va nous afficher la valeur de la propriété "x", les deux façons de faire sont vraies.
 */

/*** WHILE / DO WHILE *** 
  While lance une boucle qui va s'itérer tant qu'on a pas satisfait une condition, le code qui est dans la boucle va donc être relancer à chaque itérations jusqu'à avoir satisfait la condition.
  Example: 
  let i = 20;

  while (condition){
    codes
    i++; 
  }
  while (i < 30){
    console.log(i);
    i++;
  }
  la console va nous afficher les nombres de 20 à 29 et la boucle va s'arrêter car à partir de 30, la condition n'est plus satisfaite.
  Si la condition est "vraie" (true), le code entre accolade s'execute.
  Si la condition est "fausse" (false), le code entre accolade ne s'execute pas.
  C'est l'un ou l'aute.

  Do while fonctionne de la même manière, à l'exeption que "do" permet d'executer un premier code avant de verifier que la condition est vraie ou fausse. On a donc obligatoirement un code qui s'execute avant d'entrer dans la boucle while.
  Example:

 do {
   codes
 } while (condition);

 do {
  console.log(i);
  i++;
  console.log(i);
 } 
 while (i < 30);
*/

/*** SCOPE NOTIONS ***
 1-Global Scope:
 Le scope global représente l'ensemble des lignes de code utilisé dans un fichier.
 c'est à dire, le programme dans son intégralité en partant de la ligne 1 jusqu'à la dernière.
 Les variables/constantes définient dans le "global scope" sont accèssibles depuis n'importe où dans notre code.
 Example:
 1//
 2//
 3//                GLOBAL SCOPE = TOUTES LES LIGNES DE CODE
 .......
 500//

 2-Function Scope:
 Le scope de la fonction représente l'ensemble des lignes de code qui compose une fonction. Tout ce qui se trouve en dehors n'est pas pris en compte. Le scope se limite à la fonction.
 Les variables/constantes définient dans le "function scope" ne sont accèssibles que dans la fonction et nulle part ailleurs. 
 Example:
 1//
 2//
 3// function store(){
   let food = "banane";  FUNCTION SCOPE = TOUTES LES LIGNES DE CODE DANS LA FONCTION
   let fruits = 50;
 }               
 .......
 500//

 3-Block Scope:
 Le scope de block représente l'ensemble des lignes se trouvant dans une "loop". Tout ce qui se trouve en dehors n'est pas pris en compte. Le scope se limite à la "loop".
 Les variables/constantes définient dans le "block scope" ne sont accèssibles que dans la loop et nulle part ailleurs.  
 Example:
 1//
 2//
 3// if(true){
   let food = "kiwi";  BLOCK SCOPE = TOUTES LES LIGNES DE CODE DANS LA LOOP
   let fruits = 50;
 }               
 .......
 500//

 !!! LES BOUCLES SE TROUVANT DANS UNE FONCTION AURONT ACCESS AUX VARIABLES DE LA FONCTION, ET BIEN EVIDEMMENT A CELLES DU GLOBAL AUSSI !!!
 */
