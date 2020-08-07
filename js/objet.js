/*** HOISTING - LEVAGE ***
 Dans le cadre de la déclaration de fonctions, il est important de  garder à l'esprit la notion de "hoisting". Les variables "Let" et "Const" ne font pas de "hoisting".
 Qu'est ce que c'est?
 C'est la capacité à enregister dans la mémoire de l'objet global les fonctions que l'on a déclarées dans notre fichier js.
 Pour résumer, une fois nos fonctions déclarées dans notre fichier js, il y'a une lecture passive qui vient les enregister dans une "espace tampon" et les rends accessibles à n'importe quel moment (via la console) dans l'objet global qui intègre entre autre, la fenêtre de travail (F12).

 Example:
 sayHi(); appel de la fonction avant sa déclaration 
 function sayHi(){  Déclaration de la fonction après qu'on l'ai appelé.
     console.log("Hello");  
 }
 il y'a une lecture passive de la fonction qui s'effectue et viens sauvegarder en mémoire celle ci.
 Du coup, lorsqu'on appel en console la fonction "sayHi", tout fonctionne normalement.
 Le cas des variables "const" et "let" ne permettrai pas cette sauvegarde en mémoire, il faut les déclarer avant de les appeler.
 Example:
 console.log(age); appel de la variable age 
 let age = 25; déclaration de la variable age
 ReferenceError: can't access lexical declaration `age' before initialization / Message d'erreur car on appel la variable avant qu'elle ai été défini.
*/

/*** CALLSTACK ***
 Qu'est ce que c'est?
 C'est le moyen pour Javascript de garder la trace des étapes de l'execution de notre code (Execution context).
 !!! A chaque fois que l'on Execute une fonction, un contexte d'exécution est crée !!!

 on peut le développer de la manière suivante:
 Soit 2 fonctions "sayHi" et "changeName"

 function sayHi(){
     console.log(`hello there ${name}`);
     changeName();
     console.log(`sayHi is finished`);
 }

 function changeName(){
     name = "Bobby";
     console.log(`we change it to ${name}`);
     console.log(`changeName is finished`);
 }

 et une variable let "name"
 let name = "Emmanuel dev";

 on appel ensuite la fonction "sayHi"
 sayHi();

 puis on effectue un console.log pour indiquer que le code a atteint sa dernière ligne.
 console.log(`j'ai lu toutes les lignes de code, celui ci est terminé`);

 Comment ce code c'est executé?
 1-Lecture passive des fonctions sayHi et changeName avec sauvegarde dans l'objet global.
 2-Execution du code global, que l'on peux considerer comme une "fonction globale"(global();).
 3-La déclaration de la variable, let "name", est lue.
 4-Appel de la fonction "sayHi".
 5-Execution de la fonction "sayHi".
 6-Affichage dans la console du message "hello there Emmanuel dev".
 7-Appel de la fonction "changeName".
 8-Execution de la fonction "changeName"
 9-Affectation de "Bobby" à la variable "name".
 10-Affichage dans la console du message "we change it to Bobby".
 11-Affichage dans la console du message "changeName is finished".
 12-Affichage dans la console du message "sayHi is finished".
 13-Affichage dans la console du message "j'ai lu toutes les lignes de code, celui ci est terminé".

 donc pour schématiser le callstack nous aurions:
 CALLSTACK{
     changeName(); tant que cette fonction n'est pas fini, on ne peut pas passer à la suivante / Couche N°2
     sayHi(); ne peut se terminer que quand la fonction qui la précède est terminée / Couche N°1
     global(); Le code global ne peut s'achever que quand toutes les fonctions ont terminées leur execution. / Couche de base.
 }
 !!! les fonctions s'imbriquent les unes dans les autres, et pour que cela se termine il faut que chaque fonction se termine l'une après l'autre !!!
*/

function sayHello() {
  console.log(`hello there ${name}`);
  changeName();
  console.log(`sayHello is finished`);
}
function changeName() {
  name = "Bobby";
  console.log(`we change name to ${name}`);
  console.log(`changeName is finished`);
}
let name = "Emmanuel dev";
sayHello();
console.log(`j'ai lu toutes les lignes de code, celui ci est terminé`);

/*** THIS ***
 Qu'est ce que c'est?
 Il s'agit d'un pointeur qui cible un objet. Par default, si l'on fait un console.log de "this", il va cibler l'objet "window".
 console.log(this);
 Window http://127.0.0.1:5500/toDoList/index.html

 1-"this" dans un objet:
 Si on utilise "this" dans une méthode(fonction) se trouvant dans un objet, "this" va pointer vers l'objet qui le contient.

 Example: Soit l'objet "user"
 const user = {
   name: "emmanueldev",
   sayHi(){
     console.log(this);
   }
 };
 on va lancer la méthode se trouvant dans l'objet "user" sous la propriété "sayHi"
 user.sayHi();
 le résultat affiché en console est:
 Object { name: "emmanueldev", sayHi: sayHi() }

 2-"this" dans une fonction du scope glabal:
 On peut aussi créer une fonction dans le scope global contenant "this" et l'insérer dans un objet. 
 Example:
 const user = {
   name: "emmanueldev"
 };
 const admin = {
   name: "admin"
 };

 function sayHi(){
   console.log(this);
 }

 user.fn = sayHi; on ajoute une propriété à l'objet "user" qui aura pour clé "fn" et pour valeur "sayHi", sayHi étant la fonction que nous avons crée dans le scope glabal.
 admin.fn = sayHi; on ajoute une propriété à l'objet "admin" qui aura pour clé "fn" et pour valeur "sayHi", sayHi étant la fonction que nous avons crée dans le scope glabal.

 !!! IL EST POSSIBLE DE SIMPLIFIER/FACTORISER SON CODE EN UTILISANT "THIS" DANS UNE FONCTION QUE L'ON AJOUTE A UN OBJET, ON N'A PLUS BESOIN DE TAPER TOUTE LA FONCTION DANS L'OBJET.!!!

 pour appeler la fonction dans l'objet, il suffit simplement d'utiliser le code suivant:
 user.fn(); 
 admin.fn();
 on obtiendra dans la console: 
 Object { name: "emmanueldev", fn: sayHi() }
 Object { name: "admin", fn: sayHi() }
 "this", contenu dans la fonction "sayHi" pointe vers l'objet qui l'a appelé.

 Example d'usage de this dans une fonction:
 function majuscule (){
   console.log(this.name.toUpperCase());
 }
 la fonction "majuscule" va transformer un texte minuscule, en majuscule.
 il suffit de l'insérer dans un objet et de l'appeler pour que la méthode soit exécuté.
 
 3- Cas particulier - "this" dans une fonction faisant parti d'une méthode contenu dans un objet.
 !!! "THIS" NECESSITE L'USAGE D'UNE FONCTION ARROW POUR CIBLER L'OBJET QUI LE CONTIENT, SINON "THIS" SERA RESET ET NE CIBLERA PLUS L'OBJET. !!!
 
 Example1: non fonctionnel
 const user = {
   name: "emmanueldev",
   videos: ["html", "css", "javascript", "react"],
   greet(){
     console.log(`Hello there ${this.name}`);
     //add function
     const getVideos = function(){
       console.log(`You currently have ${this.videos.length} videos`);
     };
     getVideos();
   }
 };
 user.greet(); on appel l'execution de la méthode "greet" faisant parti de l'objet "user" ce qui veux dire que le "this" faisant directement parti de la méthode "greet" va faire référence à l'objet "user".
 PARCONTRE, la fonction getVideos étant "indirectement" appelé dans l'execution de la méthode "greet", le "this" qu'elle contient ne fais donc pas directement référence à l'objet qui le contient, par conséquent "this" ne sais pas ce qu'il doit pointer et affiche un message d'erreur.

 résultat dans la console:
 Hello there emmanueldev
 TypeError: can't access property "length", this.videos is undefined

 Quand on crée une fonction dans une méthode, le terme "this" ne fais plus référence à l'objet qui la contient. Pour pallier à ce problème, il faut utiliser une "fonction arrow".

 Example2: fonctionnel
 const user = {
   name: "emmanueldev",
   videos: ["html", "css", "javascript", "react"],
   greet(){
     console.log(`Hello there ${this.name}`);
     //add function
     const getVideos = () => { Notre fonction arrow est introduite ici (=>).
       console.log(`You currently have ${this.videos.length} videos`);
     };
     getVideos();
   }
 };

 Une fonction arrow ne crée pas un nouveau "this", elle prolonge celui déjà existant, il n'y a donc pas de "reset" de this et la référence à l'objet qui contient la méthode incluant la nouvelle fonction appelant "this", est donc fontionnelle.
*/
const user = {
  name: "emmanueldev",
  videos: ["html", "css", "javascript", "react"],
  greet() {
    console.log(`Hello there ${this.name}`);
    //add function
    const getVideos = () => {
      console.log(`You currently have ${this.videos.length} videos`);
    };
    getVideos();
  },
};

const admin = {
  name: "admin",
};

function sayHi() {
  console.log(this);
}

function majuscule() {
  console.log(this.name.toUpperCase());
}

user.fn = sayHi;
admin.fn = majuscule;

console.log(user);
console.log(admin);

user.fn();
admin.fn();
user.greet();

/*** BIND qu'est ce que c'est? ***
 BIND est une méthode qui permet, à une fonction située dans le scope global, d'accéder au contenu d'un objet en utilisant le nom de l'objet comme argurment de la méthode ".bind()".
 La fonction qui a été associé avec "bind" à un objet pourra acceder à l'ensemble de son contenu. Le "this" de l'objet aura été associé à la fonction grace à la méthode "bind".
 RAPPEL => Une fonction est soit: 
 -Déclaré dans le scope global de notre fichier Js, "this" fait alors référence à l'objet "window"
 ou 
 -Déclaré dans un objet et on l'appel alors une "méthode", "this" fait alors référence à l'objet contenant la méthode.
 ou
 -Déclaré au sein d'une méthode dans un objet, "this" fait alors référence à l"objet "window" si on n'utilise pas de fonction arrow. 
 Si une fonction arrow (=>) est utilisée, alors "this" fera référence à l'objet qui contient la méthode dont la fonction est issue.

 Example:
 1-CREATION OBJET "PERSON" AVEC METHODE "GETFULLNAME"
 const person = {
   firstName: "emmanuel",
   lastName: "dev",
   getFullName(){
     console.log(this.firstName + this.lastName);
   },
 };

 2-CREATION FONCTION "REGISTERUSER" DANS LE SCOPE GLOBAL
 function registerUser() {
  //fonctionnalitées additionnelles....
  console.log(this);
  this.getFullName(); à ce moment, this n'est pas lié à l'objet "person"
 }

 3-CREATION D'UNE CONSTANTE CONTENANT LA FONCTION "REGISTERUSER" QU'ON A LIE A L'OBJET "PERSON"
 const register = registerUser.bind(person); on lie içi la fonction registerUser à l'objet en utilisant ".bind()" dont "person" est l'argument.

 4-APPEL DE LA CONSTANTE CONTENANT LA FONCTION REGISTERUSER ET EXECUTION DE CELLE CI
 register();

*/

const person = {
  firstName: "emmanuel",
  lastName: "dev",
  getFullName() {
    console.log(this.firstName + this.lastName);
  },
};

function registerUser(country, lang, methode) {
  //fonctionnalitées additionnelles....
  console.log(this);
  this.getFullName();
  console.log(
    `My country is ${country} and my language is ${lang} and i used méthod ${methode}`
  );
}

const register = registerUser.bind(person);
console.log("ici la fonction");
console.log(register);
register("France", "Fr", "BIND");

/*** CALL qu'est ce que c'est? ***
 C'est exactement la même chose que BIND, à la différence que CALL ne sauvegarde pas la fonction dans une variable, mais lance un appel direct vers cette fonction dont il dépend. 
 Pour les paramètres/arguments, on passe en premier le nom de l'objet auxquel on souhaite lier la fonction, et ensuite d'autres arguments si nécéssaire, en fonction de ce dont la fonction à besoin.
*/

registerUser.call(person, "France", "Fr", "CALL");

/*** APPLY qu'est ce que c'est? ***
 C'est le même cas de figure que CALL, la seule chose qui varie est le moyen utilisé pour déclarer les paramètres/arguments complémentaires de la méthode "apply".
 Au lieu d'utiliser directement des strings, on utilise un tableau de strings.
*/
registerUser.apply(person, ["France", "Fr", "APPLY"]);

/*** CONSTRUCTOR FUNCTION  Qu'est ce que c'est? ***
 C'est une "fonction" qui va générer des "objets" . 
 C'est un moyen façile de créer autant d'objets que l'on souhaite.
 !!! De manière général, pour identifier une fonction constructor, on va écrire son nom en UPPERCASE !!!
 Chaque nouvel objet est crée en utilisant le mot clé "new". 
 Si le terme "NEW" est présent, c'est qu'on à une fonction constructor à l'oeuvre.
 !!! TOUTES LES DONNEES, QUELLES QU'ELLES SOIENT, SONT CREER PAR UNE FONCTION CONSTRUCTOR !!!
 Chaque objet est unique, et toutes les données qu'il contient lui sont unique, même si ces données ont exactement les mêmes dénominations de propriétées, keys, values. 
 Ce qui veux dire que pour chaque objet créer, si une méthode est identique pour chaque objet, elle sera quand même considéré comme une méthode différente et stocké dans la mémoire tampon du scope globale lors de la phase de création, surchargeant ainsi l'espace de stockage avec un "doublon".
 Cela va vite devenir un problème, et pour le solutionner il existe ce qu'on appel le "prototype" d'un objet. (Voir la partie suivante "prototype")
*/

/* fonction constructor pour créer des objets "user" */
function USER(name, surname) {
  /* les arguments passés lors de la création du nouvel objet, viendrons remplir les propriétées de l'objet */
  this.name = name;
  this.surname = surname;
  this.getName = function () {
    /* une méthode random que l'on a crée mais qui va être copié d'objet en objet à l'identique, créant ainsi une copie à chaque nouvel objet. */
    console.log(`${this.name} ${this.surname}`);
  };
}

const user1 = new USER("Emmanuel", "Dev");
/* new user() crée un nouvel objet et utilise les arguments entre paranthèses pour completer les propriétées de l'objet nouvellement crée */
const user2 = new USER("Georgia", "LILITH"); /* même chose ici */
console.log(user1);
user1.getName();
console.log(user2);
user2.getName();

/*** PROTOTYPE Qu'est ce que c'est? ***
 C'est une propriété présente dans tous les objets existants, c'est en quelques sorte une propriété par default. 
 Il faut l'imaginer comme une boite à outils, dont chaque objet dispose.
 A l'intérieur de cette boite à outils, on peut y ranger des "méthodes"(outils) qui seront disponibles pour l'ensemble des objets issus de la même fonction constructor.
 On peut remplir/vider cette boite à outils avec de nouvelles méthodes(outils), qui ne seront pas une copie de méthodes déjà existantes, mais bien un original unique.
 A la différence d'une méthode qui serait créer dans une fonction constructor et copié à chaque création d'objet, ce qui finirai par saturer l'espace de stockage de l'objet global.
 
 !!! BONNE PRATIQUE: EVITER D'ASSOCIER DES METHODES A UNE FONCTION CONSTRUCTOR MAIS LES AJOUTER AU PROTOTYPE DE LA FONCTION CONSTRUCTOR POUR EVITER DE DUPLIQUER LES METHODES !!!

 Toutes les données sont créer à partir de fonctions constructor, c'est pour cela qu'on peut leur appliquer des méthodes, car ces méthodes sont stockées dans la propriété prototype de la fonction constructor qui les a créées.
 Example:
 const name = "emmanueldev"; ceci est une donnée de type string
 const objName = new String("emmanueldev"); ceci est une donnée string sous sa forme originelle
 si on fait un console log de "objName":
 String​
 0: "e"​
 1: "m"​
 2: "m"​
 3: "a"​
 4: "n"​
 5: "u"​
 6: "e"​
 7: "l"​
 8: "d"​
 9: "e"​
 10: "v"​
 length: 11​
 <prototype>: String { "" } 
 On a une donnée string avec une propriété prototype qui fait parti d'un objet.
 Ce qui se passe lorsque qu'on applique une méthode à une donnée primitive comme une string, c'est que la string est temporairement introduite dans un objet de sorte à lui appliquer la méthode souhaité se trouvant dans la propriété prototype, puis une fois cette action effectuée, on ressort la string modifié pour lui redonner son status de "string" et non plus d'objet string.
 Example:
 const name = "emmanueldev";
 const upper = name.toUpperCase(); 
 console.log(typeof upper); le console log affichera un string.

 RESUME:
 new Object,
 new String,
 new Number,
 new Array,
 Tous sont issues des functions constructor utilisés pour créer nos données et qui agissent en arrière plan lors de la création, on ne s'en rend pas compte, mais à chaque création de données, il y'a une fonction constructor qui est derrière et qui transmet la propriété "prototype" avec les méthodes correspondant à la donnée créée. La nouvelle donnée hérite de la propriété "prototype".
*/

function Newuser(name, surname) {
  this.name = name;
  this.surname = surname;
}

/* Création d'une méthode que l'on ajoute au prototype de l'objet crée */
Newuser.prototype.getName = function () {
  console.log(`${this.name} ${this.surname}`);
};

const newuser1 = new Newuser("Emmanuel", "Dev");
console.log(newuser1);
newuser1.getName();
console.log(Newuser);

const nom = "emmanueldev";
const objNom = new String("emmanueldev");
console.log(objNom);

/*** PROTOTYPAL INHERITENCE - HERITAGE DE PROTOTYPES ***
 Qu'est ce que c'est???
 Cela consiste à passer la propriété "prototype" d'une objet vers la propriété "prototype" d'un autre objet en lui faisant bénéficier de toutes les méthodes contenues dans le prototype du 1er objet.
 C'est donc le fait de "faire hériter" un objet du prototype d'un autre objet tout en rendant l'ensemble des méthodes des 2 objets disponibles au nouvel objet.
 On va se retrouver avec une chaine de prototypes en cascade.
*/

/* Fonction constructor Enemy */
function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

/* méthodes liées à la propriété prototype de la fonction constructor Enemy */
Enemy.prototype.getInfos = function () {
  console.log(this.life, this.name, this.level);
};
Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};
Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked!`);
};

function Dragon(life, name, level, color, spell) {
  /* Le mot clé "this" va faire référence à l'objet "Dragon" et c'est ainsi qu'en utilisant la fonction constructor dejà existante, on n'aura pas besoin de redéclarer les propriétées "life, name, level". On va hériter de celles ci en liant la fonction constructor "Enemy" à notre objet "Dragon" */
  Enemy.call(this, life, name, level);

  /* Les dernières propriétés "color, spell" qui sont unique à l'objet "dragon" seront déclarés normalement. */
  this.color = color;
  this.spell = spell;
}

/* !!! Héritage des méthodes spécifiques à l'objet "Enemy" pour l'objet "Dragon" !!! 
ON CREER DANS LA PROPRIETE "PROTOTYPE" DE L'OBJET DRAGON, UN NOUVEL OBJET DONT LE CONTENU SERA L'ENSEMBLE DES METHODES CONTENUES DANS LA PROPRIETE "PROTOTYPE" DE L'OBJET "ENEMY". */
Dragon.prototype = Object.create(Enemy.prototype);

/* Création d'une méthode spécifique à l'objet "Dragon" que l'on ajoute à son prototype */
Dragon.prototype.fireBreath = function () {
  console.log("FIRE BREATHHHHH!");
};

/* Création d'un Dragon */
const newDragon = new Dragon(100, "lucifer", 15, "red", "Fire Breath");
console.log(newDragon);
newDragon.getInfos();

/*** CLASSES Qu'est ce que c'est??? ***
 On ne va plus utiliser les fonctions constructors car nous allons les remplacer par des "Classes".
 C'est une refactorisation / simplification / normalisation de notre code orienté objets.

 Example de refactorisation: 
 !!! VERSION FUNCTION CONSTRUCTOR !!!
 function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
 }
 
 Enemy.prototype.getInfos = function () {
  console.log(this.life, this.name, this.level);
 };
 Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
 };
 Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked!`);
 };

 !!! VERSION CLASSE !!!
 class Enemy {
   constructor(life, name, level){
    this.life = life;
    this.name = name;
    this.level = level;
   }
   getInfos(){
    console.log(this.life, this.name, this.level);
   }
   attack(){
    console.log(`${this.name} has attacked!`);
   }
   block(){
    console.log(`${this.name} has blocked!`);
   }
 }

 Pour faire hériter du contenu d'une classe vers une autre, il suffit simplement d'utiliser le terme "extends" dans la déclaration de la nouvelle classe en se référent à la classe dont la nouvelle doit hériter.
 De plus, le mot clé "super" permet d'aller chercher dans les propriétés de la classe indiquée en référence, toutes les informations dont à besoin la nouvelle classe.
 Example:
 class Boss extends Enemy {
   constructor(life, name, level, color, spell){
     super(life, name, level);
     this.color = color;
     this.spell = spell;
   }
 }

*/
class Dev {
  constructor(country, name, level) {
    this.country = country;
    this.name = name;
    this.level = level;
  }
  getInfos() {
    console.log(this.country, this.name, this.level);
  }
  attack() {
    console.log(`${this.name} has attacked!`);
  }
  block() {
    console.log(`${this.name} has blocked!`);
  }
}
console.log(Dev);

/* CLASSE ETENDUE: AVEC L'USAGE DU TERME "EXTENDS" ON PERMET A LA CLASSE INSTRUCTOR D'HERITER DU CONTENU DE LA CLASSE DEV */
class Instructor extends Dev {
  constructor(country, name, level, age, course) {
    /* "SUPER" EST LE MOT CLE QUI VA PERMETTRE D'ALLER CHERCHER DANS LA CLASSE DEV LE CONTENU DONT T'IL A BESOIN GRACE A LA LIAISION EFFECTUEE LORS DE LA DECLARATION DE LA CLASSE INSTRUCTOR VIA LE TERME EXTENDS */
    super(country, name, level);
    this.age = age;
    this.course = course;
  }
}

const frenchDev = new Dev("France", "emmanuelDev", "junior");
console.log(frenchDev);
frenchDev.getInfos();

const instructorDev = new Instructor(
  "Bulgaria",
  "DevED",
  "Experimented",
  28,
  "Javascript"
);
console.log(instructorDev);
instructorDev.getInfos();
instructorDev.attack();
instructorDev.block();
