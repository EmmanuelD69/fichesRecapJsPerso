/*** TYPE DE DONNEES PRIMITIVES (PRIMITIVE DATA TYPE) ***
 Une primitive (valeur primitive ou structure de donnée primitive) est une donnée qui n'est pas un objet et n'a pas de méthode. En JavaScript, il y a 6 types de données primitives: String, Number, Boolean, Null, undefined, Symbol.
 Si l'on assigne une donnée primitive à une variable, on peut schématiser cette action comme une valeur particulière que l'on range dans une boite spécifique.
 Quand on attribue la valeur d'une variable vers une autres variable, celle ci sera copié dans cette nouvelle variable et l'écrasera.
 Example:
 let name = "Pierre"; on défini la variable "name" en lui attribuant la valeur "Pierre"
 name = "Paul"; on décide d'attribuer à name une nouvelle valeur "Paul"
 console.log(name); quand on va faire un console log, la valeur "Paul" sera affichée.
*/

/*** TYPE DE DONNES REFERENCES (REFERENCE DATA TYPE) ***
 Javascript possède 3 types de données référence:
 -un Tableau (Array),
 -une Fonction (function),
 -un Objet (object)
 Ce sont des données complexes qui peuvent contenir de nombreux types de données primitives et auxquelles on accède grâce à un nom, c'est ce que l'on appel une référence. 
 Example:
 const voiture = ["renault", "peugeot","citroen"]; voiture est un tableau contenant des données primitives de type "string". 
 console.log(voiture); pour afficher mon tableau je m'y réfère par son nom (voiture) avec la méthode console log. 

 !!!IL FAUT ETRE TRES PRUDENT QUAND ON DECIDE DE MODIFIER LA VALEUR D'UNE DONNEE REFERENCE CAR CELA PEUT MODIFIER L'ORIGINAL AUSSI!!!
*/

/*** USAGE DE CONST vs LET ***
Example1: 
on a défini pour la constante "bank", une valeur qui est un nombre, c'est une donnée primitive. 
const bank = 250; 
bank = 100; 
si on essai de changer la valeur de la constante "bank", nous allons avoir un message d'erreur car on ne peux pas modifier avec const un donnée primitive, ici notre donnée est de type "number".

!!!Avec "let" on peut changer cette valeur, et c'est pourquoi on préférera l'utilisation de let pour les données primitives au lieu d'une constante.!!!

Example2:
Meme principe que pour l'example1 mais cette fois avec une variable qui contiendra une donnée de type référence.
const names = ["Emmanuel", "Georgia", "Maria"]; on définit une constante contenant un tableau avec des noms.
const newNames = names; on définit une nouvelle constante contenant un tableau qui va avoir pour "référence" le tableau "names".
newNames.push("Nikos"); on rajoute un nom dans le tableau newNames.
console.log(newNames); on affiche le contenu du tableau "newNames"
console.log(names); on affiche le contenu du tableau "names"

Les deux console.log vont nous donner le même résultat, à savoir:
Array(4) [ "Emmanuel", "Georgia", "Maria", "Nikos" ]
En effet le tableau d'origine a été, lui aussi, modifié alors qu'on ne penser ajouter un nom que dans le tableau "newName", pourquoi?
Parce que le tableau "newNames" ne fait que faire référence au tableau "names", ce n'est pas un nouveau tableau avec un contenu vierge, il récupère le contenu de "names" et fais office de "relais/rooter" entre le développeur et la constante contenant le tableau d'origine.

On priviligiera "const" pour les data de type références.
*/
const names = ["Emmanuel", "Georgia", "Maria"];

const newNames = names;

newNames.push("Nikos");
console.log(newNames);
console.log(names);

/*** HIGHER ORDER FUNCTION ***
Qu'est-ce que c'est??
C'est une fonction qui utilise une autre fonction en paramètres/argument.
Example:
Const mixes = ["Techno", "House", "Disco", "Funk"];

mixes.forEach(function(mix)){ la fonction "forEach" utilise une fonction anonyme en paramètre/argument.
console.log(mix);
}

Example2:
funtion repeater(fn) { on crée la fonction, de type "High order", "repeater". elle prend en paramètre une autre fonction.
    fn();
    fn();
    fn();
}

function sayHello(){
    console.log("Hello There!");
}

repeater(sayHello);
*/

/*** CALLBACK FUNCTION ***
Qu'est ce que c'est?
C'est une fonction qui est utilisé à un moment précis, déterminé par une autre fonction (ex: high order function) ou par une action précise "ex: addEventListener".
Example: (high order fonction)
Const mixes = ["Techno", "House", "Disco", "Funk"];

mixes.forEach(function(mix)){ function (mix) est notre fonction callback
    console.log(mix);
}

Example2:
button.addEventListener("click", function(){ function() est notre fonction callback
    console.log("Hello There!");
});
*/

const mixes = [
  "Techno party 2020",
  "You are in da House tonight",
  "Disco House fever",
  "Funky sensation in da House",
];

mixes.forEach(function (mix) {
  console.log(mix);
});

function repeater(toto) {
  toto();
  toto();
  toto();
}

function sayHello() {
  console.log("Hello There!");
}

repeater(sayHello);

/*** "MAP" QU'EST CE QUE C'EST??? ***
 MAP est une fonction (méthode) qui nous permet d'agir sur un tableau en y apportant d'éventuelles modifications (si on le souhaite). MAP retournera toujours quelques chose en sortie. (undefined si on ne lui dit rien)
 Le fonctionnement de MAP est comme celui de FOREACH, c'est une loop sur un tableau.

 Example:
 const mixes = ["Techno", "House", "Disco", "Funk"];
 const newMix = mixes.map(funtion(mix){ map va agir comme foreach, en survolant chaque éléments du tableau les uns après les autres
    return mix.toUpperCase(); on va renvoyer(return) la valeur de l'élément survolé en la passant en Majuscule (toUpperCase). Ce renvoi va remplacer / écraser la valeur actuelle sans pour autant modifier la valeur dans le tableau de référence.
 });
 console.log(mixes);
 Array(4) [ "Techno", "House", "Disco", "Funk" ]
 newMix.push("Deep"); ajout de la valeur "Deep" dans le tableau newMix, sans modification du tableau d'origine(mixes).
 console.log(newMix);
 Array(4) [ "TECHNO", "HOUSE", "DISCO", "FUNK", "Deep" ]

 !!!MAP NOUS PERMET DE RETOURNER UNE VALEUR ET DE LA SAUVER DANS UN TABLEAU SANS POUR AUTANT CHANGER LES VALEURS DU TABLEAU REFERENT (TABLEAU D'ORIGINE).!!!
*/

const newMix = mixes.map(function (mix) {
  return mix.toUpperCase();
});
newMix.push("deep into my house");
console.log(newMix);
console.log(mixes);

/*** "FIND" QU'EST CE QUE C'EST? ***
 FIND est une fonction(méthode) qui vous permet de parcourir un tableau(array) et qui compare chaque éléments à une condition que vous avez fixé. Une fois que la condition est respecté(true) le code de la fonction callback s'effectue.
 Example:
 const searchMix = mixes.find(function (mix) { parcourt et cherche dans le tableau "mixes"
  return mix.includes("Disco"); renvoi l'élément qui contient le mot "Disco".
 });
 console.log(searchMix);

 !!! FIND RENVERRA UNIQUEMENT LE PREMIER ELEMENT QUI CORRESPONDRA A LA RECHERCHE, UNE FOIS L'ELEMENT TROUVE ON SORT DE LA BOUCLE !!!
*/

const searchMix = mixes.find(function (mix) {
  return mix.includes("Disco");
});
console.log(searchMix);

/*** "FILTER" QU'EST CE QUE C'EST? ***
 FILTER est une fonction(méthode) qui vous permet de parcourir un tableau(array) et comparer chaque éléments à une condition que vous avez fixé. Une fois que la condition est respecté(true) le code de la fonction callback s'effectue.
 Example:
 const filterMix = mixes.filter(function (mix) { parcourt et cherche dans le tableau "mixes"
  return mix.includes("House"); renvoi les éléments qui contiennent le mot "House".
 });
 console.log(filterMix);

 !!! FILTER RENVERRA TOUS LES ELEMENTS QUI CORRESPONDRONT A LA RECHERCHE, UNE FOIS LES ELEMENTS TROUVES ON SORT DE LA BOUCLE, LE TABLEAU EST PARCOURU DANS SON ENSEMBLE !!!
*/

const filterMix = mixes.filter(function (mix) {
  // return mix.includes("House");
  return (
    mix.length < 20
  ); /* UNE SEULE CONDITION A LA FOIS, APRES UN PREMIER RETURN ON NE PEUX PAS ENCHAINER DU CODE DERRIERE DANS LE SCOPE DE LA FONCTION */
});
console.log(filterMix);

const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "League of Legends", rating: 5 },
  { title: "Last of Us", rating: 10 },
  { title: "God of War", rating: 10 },
  { title: "WWE 2k20", rating: 4 },
];

const highRates = games.filter(function (game) {
  return game.rating > 7;
});

console.log(highRates);

/*** "SOME" ET "EVERY" QU'EST CE QUE C'EST? ***
 Méthodes qui permettent de parcourir un tableau et comparer chaque éléments à une condition que l'on a fixé. Selon que la condition soit respecté ou non, on aura un retour "True" ou "False". Le but est donc d'avoir une confirmation ou non.
 SOME est utilisé dans le cas où l'on souhaite que certains des éléments (un ou plus) correspondent à la condition.
 EVERY est utilisé dans le cas où l'on souhaite que tous les éléments correspondent à la condition.
*/

/* EXAMPLE EVERY */
const checkRating = games.every(function (game) {
  return game.rating > 8;
});

console.log(checkRating);

/* EXAMPLE SOME */
const someRating = games.some(function (game) {
  return game.rating > 8;
});

console.log(someRating);

/*** FONCTION TERNAIRE - TERNARY FUNCTION ***
 Qu'est ce que c'est?
 Cette fonction va nous permettre d’écrire des conditions plus condensées et donc d’alléger nos scripts et de gagner du temps en développement.
 On utilisera ce type de fonction dans le cas ou l'on à a soumettre une condition "simple" de type "If / Else".
 Les fonctions ternaires vont se présenter sous la forme suivante : 
 (condition) ? (code à exécuter si true) : (code à exécuter si false).
 */

const goodGame = games.map(function (game) {
  return game.rating > 8 ? game : "bad";
});

console.log(goodGame);

/* EQUIVALENT A: */

const goodGames = games.map(function (game) {
  if (game.rating > 8) {
    return game;
  } else {
    return "bad";
  }
});

// console.log(goodGames);

/*** ARROW FUNCTIONS - FONCTIONS ARROWS ***
 Qu'est ce que c'est?
 Cette fonction va nous permettre de "factoriser" (condenser) une fonction simple (une ligne de code à executer dans la fonction) et donc d’alléger nos scripts.
 Example:
 (AVANT)
 const goodGames = games.map(function (game) {
  if (game.rating > 8) {
    return game;
  } else {
    return "bad";
  }
 });

 (APRES)
 const goodGames2 = games.map (game => (game.rating > 8 ? game : "bad"));

 DECOMPOSITION DE LA FACTORISATION(SIMPLIFICATION):
 Original:
 const goodGame = games.map(function (game) {
  return game.rating > 8 ? game : "bad";
 });

 Step1: suppréssion de "function" au bénéfice de "=>" qui vient se placer après le paramètre/attribut.
 const arrowGames =games.map(game => {  
 return game.rating >8 ? game : "bad";  
 });

 !!! SI ON A BESOIN DE PLUS D'UN PARAMETRES POUR LE MAPPING, ALORS ON LES METS ENTRE PARANTHESES SINON JAVASCRIPT NE VA PAS COMPRENDRE LE CODE !!!
  Example:
 const arrowGames =games.map((game,index) => {  
 return game.rating >8 ? game : "bad";  
 });

 Step2: Suppréssion des accolades "{}" et du "return".
 const arrowGames =games.map(game => game.rating >8 ? game : "bad");

 !!! TOUT CE QUI SE RETROUVE APRES LA FLECHE SERA IMPLICITEMENT COMPRIS COMME UN RENVOI(RETURN) D'INFORMATIONS !!!

 Example2:
 button.addEventListener("click", event => {
 code...
 });
 */

/* LES 3 VERSIONS SONT EGALES */
const arrowGames1 = games.map(function (game) {
  return game.rating > 8 ? game : "bad";
});

const arrowGames2 = games.map((game) => {
  return game.rating > 8 ? game : "bad";
});

/* L'extension "prettier" rajoute par default les parantheses à la propriété "game" */
const arrowGames3 = games.map((game) => (game.rating > 8 ? game : "bad"));

console.log(arrowGames1);
console.log(arrowGames2);
console.log(arrowGames3);

const arrowMixes = mixes.map((mix) => mix.toUpperCase());
console.log(arrowMixes);

/*** "SORT" QU'EST CE QUE C'EST? ***
 Cette fonction va nous permettre de trier le contenu d'un tableau par ordre alphabetique, ou chiffres croissant / décroissant.

 Cas 1 - Ordre Alphabétique:
 Ce cas est le plus simple à appliquer, il suffit d'appliquer la méthode ".sort()" au tableau.
 Exemple: mixes.sort();
 si on console log, le résultat nous affichera le contenu string du tableau, trier par ordre alphabétique, en prenant en compte la première lettre de chaque entrées du tableau.
 console.log(mixes);
 Array(4) [ "Disco House fever", "Funky sensation in da House", "Techno party 2020", "You are in da House tonight" ]

 Cas 2 - Ordre Croissant:
 Ce cas de figure est un peu plus complexe, car "sort", par defaut, trie des srtings et non des chiffres. Mais on peut réussir à faire comprendre à la méthode "sort" en lui faisant comparer les chiffres d'un tableau les uns après les autres par série de 2, "a" étant le premier chiffre et "b" le second.

 Example: Prenons un tableau de chiffres.
 const points = [10, 95, 1, 16, 45, 3, 12, 25, 76];

 appliquons la méthode "sort" à ce tableau en lui appliquant une fonction de comparaison.
 points.sort(function(a,b){
   return a - b;
 });

 3 possibilitées: 
 1) a - b est un nombre négatif alors "a" sera compris comme inférieur à "b" et placé avant.
 2) a - b est un nombre positif alors "a" sera compris comme supérieur à "b" et placé après.
 3) a - b est un nombre nul alors "a" sera compris comme égal à "b" rien ne change dans l'ordre.

 le résultat est un tableau ordonnée par ordre croissant, du plus petit au plus grand. 
 si on fait un console log de "point", on obtient:
 Array(9) [ 1, 3, 10, 12, 16, 25, 45, 76, 95 ]

 !!! on peut factoriser cette fonction, en la transformant en une fonction "arrow" !!!
 points.sort((a,b) => a-b);

 Cas 3 - Ordre Décroissant:
 Il suffit d'inverser "a" avec "b" dans la fonction de comparaison pour obtenir le classement du plus grand au plus petit.

 !!! L'UTILISATION DE SORT VA AFFECTER LE TABLEAU DE REFERENCE, IL VA LE MODIFIER EN SAUVEGARDANT LE SENS DU TRI QU'ON LUI AURA DEMANDEE !!!
 Example, si le tableau référence d'origine est:
 const points = [10, 95, 1, 16, 45, 3, 12, 25, 76];
 Il sera trié et sauvegardé dans l'ordre souhaité,
 Array(9) [ 1, 3, 10, 12, 16, 25, 45, 76, 95 ]
*/

mixes.sort();
console.log(mixes);

const points = [10, 95, 1, 16, 45, 3, 12, 25, 76];
/* version normale */
points.sort(function (a, b) {
  return a - b;
});

/* version factorisé avec fonction arrow */
points.sort((a, b) => a - b); /* ordre croissant */
console.log(points);

points.sort((a, b) => b - a); /* ordre décroissant */
console.log(points);

/* si l'on souhaite trier avec un objet */
games.sort((a, b) => a.rating - b.rating); /* par rating croissant */
console.log(games);

games.sort((a, b) => b.rating - a.rating); /* par rating décroissant */
console.log(games);

/*** COPIER UN TABLEAU & AGIR DESSUS SANS MODIFIER L'ORIGINAL ***
 Nous allons ici apprendre à créer une copie d'un tableau référence et agir dessus, ce qui n'affectera pas le tableau référence d'origine. 
 pour ce faire il suffit d'utiliser "..." suivi du nom du tableau référence que l'on souhaite copier.
 Example, soit "points2" le tableau référence d'origine.
 const points2 = [10, 95, 1, 16, 45, 3, 12, 25, 76];
 const decroissant = [...points2];
*/

const points2 = [
  10,
  95,
  1,
  16,
  45,
  3,
  12,
  25,
  76,
]; /* tableau référence original */
const croissant = [...points2]; /* copie1 du tableau original */
const decroissant = [...points2]; /* copie2 du tableau original */
croissant.sort((a, b) => a - b);
decroissant.sort((a, b) => b - a);
console.log(croissant);
console.log(decroissant);
console.log(points2);

/*** CREER UN TABLEAU A PARTIR D'UNE VARIABLE STRING ***
 Il existe plusieurs façons de procéder et nous allons en voir 2.

 -1ère version avec la méthode "split()":
 Soit une variable "titre" contenant du texte(string).
 const titre = "leboncoin";

 pour transformer cette variable en tableau, il nous suffit de lui appliquer la méthode "split()" que nous allons utiliser de sorte qu'elle découpe le texte contenu dans la variable "titre" en tableau de lettres. 
 const lettresTitre = titre.split("");

 si on effectue maintenant un console log de notre tableau "lettresTitre", on obtiendra le résultat suivant:
 console.log(lettresTitre);
 Array(9) [ "l", "e", "b", "o", "n", "c", "o", "i", "n" ]

 -2ème version en utilisant la méthode "...":
 On va utiliser la même variable et la tranformer en tableau par l'utilisation des "..." que nous avons vu plus tôt pour créer une copie d'un tableau.
 const lettresTitre2 = [...titre];

 si on effectue maintenant un console log de notre tableau "lettresTitre", on obtiendra le résultat suivant:
 console.log(lettresTitre2);
 Array(9) [ "l", "e", "b", "o", "n", "c", "o", "i", "n" ]
*/

/* 1ère méthode en utilisant split() */
const titre = "leboncoin";
const lettresTitre = titre.split("");
console.log(lettresTitre);

/* 2ème méthode en utilisant "..." */
const lettresTitre2 = [...titre];
console.log(lettresTitre2);

/*** COMBINER/MERGER DES TABLEAUX ENSEMBLE *** 
 Partons du principe que nous avons plusieurs tableaux et que nous souhaitons combiner(merger) leurs contenus.
 Soit 2 tableaux, table1 et table2:
 const table1 = ["je", " m'", "appel", " jean"];
 const table2 = ["je", " suis", " plombier"];

 Nous allons combiner ces deux tableau en 1 seul que nous appellerons "table3".

 pour cela nous allons utiliser 2 méthodes différentes:
 -1ère méthode avec la fonction "concat()":
 const table3 = table1.concat(table2);
 la fonction "concat()" ne va pas modifier les tableaux référence d'origine.

 -2ème méthode avec l'utilisation des "...":
 const table3 = [...table1, ...table2];

 Dans les deux cas, le résultat sera le même.
 Maintenant, partons du principe que l'on veux créer un nouveau tableau, en y ajoutant les données contenues dans un tableau deja existant.
 Example:
 const birthday = ["le", "30", "décembre", "1988"]; Tableau existant
 const utilisateur = ["jean", "est", "né", ...birthday]; Nouveau tableau
*/

const table1 = ["je", " m'", "appel", " jean"];
const table2 = ["je", " suis", " plombier"];
const table3 = table1.concat(table2);
const table4 = [...table1, ...table2];

console.log(table3);
console.log(table4);
console.log(table1);
console.log(table2);

const birthday = ["le", "30", "décembre", "1988"];
const utilisateur = ["jean", "est", "né", ...birthday];

console.log(utilisateur);
console.log(birthday);
