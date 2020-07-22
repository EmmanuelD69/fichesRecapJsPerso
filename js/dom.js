/*** DOM / DOCUMENT OBJET MODEL ***

On peut schématiser le DOM comme un arbre généalogique que l'on appel l'objet "window".
Cet objet contient un ensemble de paramètres représentant l'ensemble des éléments contenus dans une page web
et dont l'objet "document" est le point d'origine/la racine.
Pour y acceder il suffit de taper dans la console "window.document" ou directement "document".
*/

/*** SELECTING ELEMENTS IN THE DOM ***
 METHODE 1: AVEC "GETELEMENTBY" qui va retourner une "HTMLCollection" dans la console.
 1-Selectionner un ou plusieurs éléments par leur nom de balise:
 const headers = document.getElementsByTagName("h2");  

 2-Sélectionner un ou plusieurs éléments par leur nom de classe:
 const list = document.getElementsByClassName("paragraphe");

 3-Sélectionner un élément par son ID:
 const section1 = document.getElementById("liste");
 !!! Si plusieurs éléments portent le même ID, celui qui s'affichera dans la console sera le premier rencontré en partant du haut vers le bas. !!!

 METHODE 2: AVEC "QUERYSELECTOR" qui va retourner une "NodeList" dans la console. On utilise les selecteurs CSS pour identifier ce que l'on veux cibler. (.nom) / (#nom) / (balise)
 4-Sélectionner un élément par son nom de balise:
 const header = document.querySelector("h2");
 !!! Si plusieurs éléments h2 existent, celui qui s'affichera dans la console sera le premier rencontré en partant du haut vers le bas. !!!

 5-Selectionner tous les éléments portant le même nom de balise:
 const headers2 = document.querySelectorAll("h2");

 6-Sélectionner un éléments par son nom de classe:
 const list2 = document.querySelector(".paragraphe");
 !!! Si plusieurs éléments portent le même nom de classe, celui qui s'affichera dans la console sera le premier rencontré en partant du haut vers le bas. !!!

 7-Selectionner tous les éléments portant le même nom de classe:
 const list3 = document.querySelectorAll(".paragraphe");

 8-Sélectionner un élément par son ID:
 const section1 = document.querySelector("#liste");

 PS: LA METHODE QUERYSELECTOR EST UN PEU PLUS LENTE A S'EXECUTER QUE GETELEMENTBY.

 Exemples:
 const headers3 = document.querySelector("h2.item");
 dans cet example, on cible une balise h2 qui porte le nom de class "item".

 const headers3 = document.querySelector("#liste a");
 dans cet example, on cible un lien se trouvant dans un élément ayant pour ID "liste".
*/

/*** HTMLCollection Vs NodeList ***
 const collectionArticles = document.getElementsByClassName("article");
 Sélection de tous les éléments ayant pour class "article". La console affichera alors une "HTMLcollection" contenant l'ensemble des éléments portant la class article. 
 Example:
 const collectionArticles = document.getElementsByClassName("article");
 HTMLCollection { 0: li.article, 1: li.article, 2: li.article, 3: li.article, 4: li.article, 5: li.article, 6: li.article, length: 7 }
 !!! "li.article" est aussi appelé un node de type élément. HTMLCollection n'affiche que des nodes de ce types, il ne peut pas en afficher d'autres. !!!

 const nodeArticles = document.querySelectorAll(".article");
 Sélection de tous les éléments ayant pour class "article". La console affichera alors une "NodeList" contenant l'ensemble des éléments portant la class article.
 Example:
 const nodeArticles = document.querySelectorAll(".article");
 NodeList(7) [ li.article, li.article, li.article, li.article, li.article, li.article, li.article ]
 !!! NodeList peut afficher différents types de nodes, élément node, text node, comment node, etc.... !!!
 exemple:
 const nodeArticles = document.querySelector(".liste-p");
 console.log(nodeArticles.childNodes); 
 ---childNodes demande l'affichage des nodes enfants de l'élément ciblé.---
 NodeList(27) [ #text, li.article, #text, li.article, #text, li.article, #text, li.article, #text, li.article, … ]

 !!! POUR ACCEDER UNIQUEMENT AUX "NODES ELEMENTS" DEPUIS UNE NODELIST, ON UTILISE LA METHODE "CHILDREN" SUR L'ELEMENT CIBLE !!!
 Example:
 console.log(nodeArticles.children); 
 HTMLCollection { 0: li.article, 1: li.article, 2: li.article, 3: li.article, 4: li.article, 5: li.article, 6: li.article, 7: li, 8: li, 9: li, … }
 ---ON PEUT DONC UTILISER FACILEMENT QUERYSELECTOR POUR AFFICHER UNE HTMLCOLLECTION---
*/

/*** UTILISATION DES LOOP ***
 1-FOR:
 HTMLCollection = yes
 NodeList = yes

 2-FOR OF:
 HTMLCollection = yes
 NodeList = yes

 3-FOR IN:
 HTMLCollection = yes
 NodeList = yes

 4-FOR EACH:
 HTMLCollection = not working
 NodeList = yes
*/

/*** AJOUT D'UN NODE ELEMENT ***
 1-Avec HTMLCollection - (getElementById)
 const collectionArticles = document.getElementsByClassName("article");
 const listPage = document.getElementById("liste-p");

 const newArticle = document.createElement("li"); création d'une li
 newArticle.classList.add("article"); ajout d'une classe à la li
 newArticle.innerText = "Cet article viens juste d'être ajouté."; ajout d'un texte à la li
 listPage.appendChild(newArticle); ajout de la li à l'élément node "liste-p"

 const articleCount = document.getElementsByClassName("list-paragraph-count")[0];
 articleCount.innerText = collectionArticles.length; affiche le nombre d'articles dans la fenêtre du viewer.
 console.log(collectionArticles); affiche en console la collection HTML mise à jour.

 !!! HTMLCollection se met à jour quand on ajoute un node élément tandis que NodeList ne le fait pas !!!

 2-Avec NodeList - (querySelector)
 const listPage = document.querySelector("#liste-p"); on cible l'élément node parent.
 const articles = listPage.children; on transforme la nodelist en HTMLCollection qui se met alors à jour avec tous les éléments node enfants.

 const newArticle = document.createElement("li");
 newArticle.classList.add("article");
 newArticle.innerText = "Cet article viens juste d'être ajouté.";
 listPage.appendChild(newArticle);

 const articleCount = document.querySelector(".list-paragraph-count");
 articleCount.innerText = articles.length;

 !!! NodeList étant "STATIC", on contourne ce problème en appliquant à la NodeList, la méthode (.children) qui nous renverra alors une HTMLCollection mise à jour. !!!
*/

const headers = document.getElementsByTagName('h2');
const headers2 = document.querySelectorAll('h2');
const list = document.getElementsByClassName('paragraphe');
const list2 = document.querySelector('.paragraphe');
const list3 = document.querySelectorAll('.paragraphe');
const section = document.getElementById('liste');
const section1 = document.querySelector('#liste');

const listPage = document.querySelector('#liste-p');
const articles = listPage.children;

const newArticle = document.createElement('li');
newArticle.classList.add('article');
newArticle.innerText = "Cet article viens juste d'être ajouté.";
listPage.appendChild(newArticle);

const articleCount = document.querySelector('.list-paragraph-count');
articleCount.innerText = articles.length;
console.log(articles);

/* Les "events", ou évenements en français, sont comme des caméras espions qui attendent patiemment que quelque chose se passe. Une fois qu'un évenement se produit, la caméra le détecte et lance une action. 
 Ces "events" peuvent être de plusieurs types comme:
 -CLICK
 -SCROLL
 -RESIZING BROWSER
 -HOVERING
 pour n'en citer que quelques uns...
*/

/*** INSTALLER UN EVENT LISTENER (une caméra)  ***
 1-CIBLER L'ELEMENT A SURVEILLER:
 const (ou let) nom-de-la-variable/constant = document.querySelector("class ou id de l'élément ciblé")
 Si plusieurs éléments portant le même nom de classe doivent être sélectionner, on utilisera la méthode "querySelectorAll"
 const button = document.querySelector("#submit");
 2-INSTALLER L'EVENT LISTENER AVEC "ADDEVENTLISTENER"
 structure:
 (cible).addEventListener("event", function anonyme ou pas(){
     codes...
 });
 
 Example1: Si je click sur le bouton, un message s'affichera dans la console.
 button.addEventListener("click", function(){
     console.log("coucou c'est moi");
 });
*/

/*** AJOUTER UN ELEMENT ***
 ajouter un article suppémentaire dans une liste d'articles quand on click sur le bouton "submit":

 const button = document.querySelector("#submit"); cible le button
 const listeArticles = document.querySelector("#liste-p"); cible l'ul
 const articles = listeArticles.children; affiche HTMLCollection de l'ul
 const articlesCount = document.querySelector(".list-paragraph-count b"); cible balise b du header3
 articlesCount.innerText = articles.length; affiche le nombre d'article dans header3

 button.addEventListener("click", function () { ajout d'un event sur le click du bouton
 const newArticle = document.createElement("li"); création d'un élément li
 newArticle.classList.add("article"); ajout de la classe "article" à l'élément li
 newArticle.innerText = `cet article est le n° ${articles.length + 1}`; ajout du texte à l'élément li
 listeArticles.appendChild(newArticle); ajout du nouvel élément li dans l'ul
 articlesCount.innerText = articles.length; affichage du nombre d'article dans le h3
 });
*/

/*** MODIFIER CSS AVEC JS ***
 1-Cibler l'élément dont ont veux modifier le css:
 const (ou let) nom-de-la-variable/constant = document.querySelector("class ou id de l'élément ciblé")
 Example:
 const title = document.querySelector(".titre");

 2-Placer une caméra espion (event) sur l'élément que l'on souhaite utiliser comme déclencheur d'action:
 élément.addEventListener("event", function anonyme ou non(){
   code à executer...
 })

 button.addEventListener("click", function () {
  code à executer...
 });

 3-Modifier le CSS avec JS en utilisant l'élément déclencheur:
 Example1: !!! solutuion qui peut rapidement devenir trop chargée !!!
 button.addEventListener("click", function () { ajout de l'event sur le bouton
  title.style.color = "red"; modification de la couleur du titre avec style.color
  title.style.fontSize = "30px"; modification de la taille de la font avec style.fontSize
 });

 Example2: SOLUTION COMMUNE ET SIMPLE
 Elle consiste à créer une classe dans le fichier Css du projet, et de changer la classe de l'élément souhaité en utilisant Js pour changer la classe de cet élément.

 fichier css: "style.css" (création d'une classe)
 .nouvelArticle {
 color: red;
 font-size: 30px;
 }

 button.addEventListener("click", function () {
 title.classList.add("nouvelArticle"); ajout de la class "nouvelArticle" à l'élément h3
 });

 Solution pour ajouter / supprimer une classe:
 button.addEventListener("click", function () {
 title.classList.toggle("nouvelArticle"); ajoute ou supprime la classe "nouvelArticle" de l'élément h3 grace à "toggle".
 });
*/

/*** FUNCTION(EVENT) à quoi sert "EVENT"? ***
 souvent on va utiliser une fonction anonyme sans paramètres:
 function(){
   code...
 }

 mais, par exemple, lorsqu'on souhaite utiliser certains events comme l'utilisation d'une touche du clavier comme déclencheur d'action.
 function(event) ou function(e) va nous permettre de passer en paramètre de la fonction toutes les informations concerant les touches du clavier sur lesquelles l'utilisateur appui en temps réel. Pour cela, il faut indiquer à notre fonction que l'évènement déclencheur est une caméra espion de type "keydown".
 Pour consulter les différents types d'events qui existent:
 https://developer.mozilla.org/fr/docs/Web/Events

 Example:
 button.addEventListener("keydown", function (e) { quand je click sur le bouton
  console.log(e); affiche dans la console les informations sur les touches du clavier qui sont préssés par l'utilisateur
 });
 résultat en console:
 keydown { target: button#submit , key: "s", charCode: 0, keyCode: 83 }
 keydown { target: button#submit , key: "a", charCode: 0, keyCode: 65 }
 keydown { target: button#submit , key: "l", charCode: 0, keyCode: 76 }
 keydown { target: button#submit , key: "u", charCode: 0, keyCode: 85 }
  keydown { target: button#submit, key: "t", charCode: 0, keyCode: 84 }

 Ainsi, en utilisant les informations obtenues sur le "keycode", on peut facilement décider de la touche qui va être le déclencheur de l'action. En fonction que cette touche soit préssé ou non (true ou false), alors on lance notre code.

 Example:
 button.addEventListener("keydown", function (e) { 
    if (e.keyCode === 65) { si le keycode est égal à 65
    title.classList.toggle("nouvelArticle"); changer la classe du h3
   }
  });

  !!! Pour que que l'event soit actif, il faut presser le bouton 1 fois, dans le cas présent.!!!
*/

/*** AJOUTER UN EVENT LISTENER A UN ENSEMBLE D'ELEMENTS DEJA EXISTANTS ***
 Prenons l'exemple de notre liste d'articles, et imaginons qu'après avoir créer plusieurs articles, nous souhaitons en supprimer certains.
 Pour que cela puisse être possible il nous faut alors ajouter une caméra espion(eventListener) sur chacun des articles et indiquer que l'action qui sera effectué lorsque l'on click sur l'article est une suppression(delete).
 
 Tout d'abord, un exemple simple:
 Nous avons déjà quelques articles présents, et nous souhaitons implémenter l'option de suppréssion d'articles.
 On va dans un premier temps, "looper" sur la liste d'articles déjà existante afin d'ajouter à chaque article une caméra espion(eventListener) en précisant que le déclencheur d'action sera un "click" et que l'action sera d'afficher un message(delete).

 Example:
 const listeArticles = document.querySelector("#liste-p"); ciblage de l'ul contenant les articles
 const articles = listeArticles.children; affichage de la liste des articles dans une HTMLCollection.

 for(article of articles){ Pour chaque article de la liste d'articles
   article.addEventListener("click", deleteArticle); ajoute un eventListener de type "click" qui déclenchera l'action "deleteArticle". 
 }

 Bien évidemment il faut définir l'action "deleteArticle" qui est une fonction:
 function deleteArticle() {
  console.log("delete article"); affiche dans la console le message "delete article".
 }
 
 A chaque fois que l'on va click sur un article, le message "delete article" apparaitra dans la console. On peut donc envisager de supprimer un article en appuyant dessus, au lieu d'écrire un message en console.

 Cette Example fonctionne dans le cas où une liste d'article existe déjà et nécéssite l'ajout d'une option "delete". Si l'on souhaite ajouter de nouveau articles et y greffer l'option de suppression, il va falloir utiliser une autre méthode. 
*/

/*** AJOUTER DE NOUVEAUX ELEMENTS AVEC EVENT LISTENERS ***
  Partons du principe que nous n'avons pas d'article sur notre page, et que nous souhaitons pouvoir en ajouter, mais aussi les supprimer à notre convenance.
  Nous savons déjà comment faire pour ajouter un nouvel élément, il simplement falloir ajouter l'option d'ajout de caméra espion(eventListener) sur chaque nouvel article crée pour pouvoir intéragir dessus à notre souhait. Dans le cas présent, nous souhaitons utiliser la caméra espion de sorte que lorsque l'on va click sur un article, celui ci déclenchera une action de suppréssion(deleteArticle).
  
  Example:
  button.addEventListener("click", function () { ajout caméra espion qui déclenche une série d'actions au click.
  const newArticle = document.createElement("li"); création d'une li
  newArticle.classList.add("article"); ajout d'une classe
  newArticle.innerText = `cet article est le n° ${articles.length + 1}`; ajout d'un texte
  listeArticles.appendChild(newArticle); ajout de la "li" et tout ce qu'elle contient
  articlesCount.innerText = articles.length; définition d'un texte à placer à l'endroit défini par articlesCount
  newArticle.addEventListener("click", deleteArticle); ajoute d'une caméra espion sur chaque création de "li" avec évènement déclencheur "click" et ayant pour action de supprimer la "li"(deleteArticle).
  });

  Bien évidemment, cela ne suffit pas, il faut aussi définir la fonction qui va permettre d'effacer l'article. On viens juste de placer une caméra espion(addEventListener), qui pour le moment ne fais rien tant que la fonction suppression n'existe pas.

  logique derrière la fonction:
  Nous savons que lorsque l'on click sur un élément qui possède une caméra espion (eventListener), un évènement est déclenché(event) et fournit des informations sur celui ci. Parmis ces informations se trouve la localisation(target) unique de l'élément ciblé.
  Pour pouvoir visualiser les informations, il nous faut d'abord créer une fonction qui aura pour paramètre l'évènement(e ou event) de sorte à afficher dans la console l'objet correspondant à cet évènement avec la ligne de code => console.log(e);

  Dans notre cas actuel, la fonction que l'on cherche à créer est la fonction supprimer un article(deleteArticle).

  Example:
  function deleteArticle(e) { définition d'une fonction que l'on appel "deleteArticle" et pour laquelle on passe en paramètre l'évènement(e ou event ou click ou hover etc...).
  console.log(e); on affiche en console les information sur l'évènement
  }

  on obtient, en console, l'objet suivant en cliquant sur l'article fraichement crée:

  MouseEvent {isTrusted: true, screenX: 116, screenY: 502, clientX: 116, clientY: 399, …}

  Ce qui nous donne un tas d'infos, dont la localisation unique de l'article(target).
  Etant donné que maintenant on à la localisation unique de l'article, on peut utiliser cette information pour localiser et supprimer cet article lorsqu'on click dessus. Pour cela il suffit simplement de rajouter à notre fonction cette commande.

  function deleteArticle(click) {
  click.target.remove(); cible l'élément qui viens d'être cliqué(click.target) et supprime le(.remove()).
  }
*/

/*** EVENT BUBBLING - SUPERPOSITION D'EVENEMENTS ***
 Nous avons vu qu'il est possible de placer des caméra espion sur autant d'éléments que nous le souhaitons. Cependant, il faut garder à l'esprit qu'un click peut déclencher plusieurs actions à la fois! 
 Par example si une "ul" avec un "eventListener" contient plusieurs "li" avec elles aussi des "eventListener", lorsque l'on va cliquer sur l'une des "li", cela va déclencher à la fois l'évènement de la "ul" et celui de la "li". 
 Il va donc y avoir conflit, et on veux faire en sorte que cela n'arrive pas.
 Il existe pour cela une solution très simple qui consiste à ajouter dans la fonction la commande suivant: 
 click.stopPropagation();
 
 Example:
  function deleteArticle(click) {
  click.stopPropagation();
  click.target.remove();
  }
*/

/*** EVENT.PREVENTDEFAULT() - EMPECHER LE FONCTIONNEMENT NORMAL D'UN EVENT ***
 Annule le comportement par défaut de l'événement Event, seulement si la propriété cancelable de Event vaut true, sinon n'a aucun effet.
 Le comportement par défaut peut être par exemple :
 - l'affichage d'une erreur JavaScript dans la console.
 - la soumission d'un formulaire sur l'événement submit.
 - la non prise en compte d'une frappe de clavier si le caractère n'est pas autorisé.

 Prenons l'example de notre liste d'articles, si au lieu d'ajouter automatiquement un texte indiquant le numéro de l'articles, nous donnions un nom à chaque articles par la soumission de celui ci via un formulaire.
 ---DECLARATION DES CONSTANTES---
 const button = document.querySelector("#submit"); cible le bouton du formulaire
 const nameInput = document.querySelector(".name-input"); cible le champ texte du formulaire
 --AJOUT D'UN ARTICLE-- C'est un bouton qui se trouve dans une formulaire
 button.addEventListener("click", function (e) { 
  e.preventDefault(); au click sure le bouton, on empêche l'action par default du formulaire qui est de refresh la page en envoyant les données. Ce qui aurait pour effet d'effacer l'article crée et de revenir aux informations existantes par defaut, empêchant ainsi tout ajout d'article.
  const newArticle = document.createElement("li");
  newArticle.classList.add("article");
  newArticle.innerText = `cet article est le n° ${articles.length + 1}`;
  listeArticles.appendChild(newArticle);
  articlesCount.innerText = articles.length;
  newArticle.addEventListener("click", deleteArticle);
 });
*/

/*** CREER UN ARTICLE AVEC DU CONTENU VIA UN FORMULAIRE ***
 Nous souhaitons utiliser un champ "input" HTML de type "text" pour entrer du contenu et le valider par l'envoi des informations avec un bouton "add Article" en utilisant un formulaire HTML.
 Nous avons deja vu comment ajouter un article et empêcher le fonctionnement pas défaut résultant de l'envoi d'un formulaire.
 La seule information que nous souhaitons changer ici est le texte que contiendra l'article nouvellement crée.

 Pour cela, il suffit d'ajouter la valeur qui nous est retournée par l'élément input HTML lorsqu'on click sur "Add Article".
 il nous suffit d'indiquer à la commande "newArticle.innerText", la valeur se trouvant dans l'input.
 On s'y prend de la façon suivante:
 newArticle.innerText = nameInput.value; 
 
 ---AJOUT D'UN ARTICLE--- 
  button.addEventListener("click", function (e) {
  e.preventDefault();
  const newArticle = document.createElement("li");
  newArticle.classList.add("article");
  newArticle.innerText = nameInput.value;
  listeArticles.appendChild(newArticle);
  articlesCount.innerText = articles.length;
  newArticle.addEventListener("click", deleteArticle);
  console.log(nameInput); permet de visualiser en console les propriétées contenues dans l'élément HTML "input".
});
*/

/*** EFFACER LE TEXTE D'UN INPUT ***
 on souhaite qu'à chaque fois que l'on click sur notre bouton "Add Article", le champ HTML input soit reset.
 Il suffit pour cela d'attribuer une valeur vide à la propriété de l'élément HTML input, un fois que l'information a été envoyé via le formulaire.
 nous devons donc ajouter la commande suivante:
 nameInput.value = "";
 après les autres commandes qui envoient les données sur le nouvel Article.
 */

/* DECLARATION DES CONSTANTES */
const button = document.querySelector('#submit');
const listeArticles = document.querySelector('#liste-p');
const articles = listeArticles.children;
const articlesCount = document.querySelector('.list-paragraph-count b');
const title = document.querySelector('.list-paragraph-count');
const nameInput = document.querySelector('.name-input');
articlesCount.innerText = articles.length;

/* AJOUT D'UN ARTICLE */
button.addEventListener('click', function (e) {
	e.preventDefault();
	const newArticle = document.createElement('li');
	newArticle.classList.add('article');
	newArticle.innerText = nameInput.value;
	listeArticles.appendChild(newArticle);
	articlesCount.innerText = articles.length;
	nameInput.value = '';
	newArticle.addEventListener('click', deleteArticle);
	console.log(nameInput);
});

for (article of articles) {
	article.addEventListener('click', deleteArticle);
	console.log('ajout event');
}

function deleteArticle(click) {
	click.stopPropagation();
	click.target.remove();
}

/* AJOUT/SUPPRESSION D'UNE CLASSE SUR UN ELEMENT AVEC UN CLICK */
button.addEventListener('click', function () {
	title.classList.toggle('nouvelArticle');
});

/* AJOUT/SUPPRESSION D'saUNE CLASSE SUR UN ELEMENT AVEC UNE TOUCHE CLAVIER */
button.addEventListener('keydown', function (e) {
	console.log(e);
	if (e.keyCode === 65) {
		title.classList.toggle('nouvelArticle');
	}
});

/*** LE WEB STORAGE OU DOM STORAGE ***
 Nous connaissions les cookies et main nous disposons aussi du Web Storage (ou DOM Storage) pour stocker des données locales.
 Web Storage est une solution adaptée aux besoins actuels de stockage de données variées, dans le navigateur. 
 C'est aussi une technique plus puissante que les cookies, qui sont limités en taille (quelques Ko contre plusieurs Mo pour Web Storage) et qui engendrent un trafic HTTP supplémentaire pour chaque requête (que ce soit pour demander la page web, une image, une feuille de styles, un fichier javascript, etc).
 Web Storage met à disposition deux interfaces nommées "sessionStorage" et "localStorage" dont la seule différence concerne la persistance des données(sauvegarde des données dans le temps). 
 Ces dernières ne sont plus véhiculées sur le réseau HTTP et elles sont facilement accessibles (lecture, modifications et suppression) pour la programmation en JavaScript du fait qu'elle soient stockées directement sur l'ordinateur de l'utilisateur qui se connecte au site. 
 Il n'y a pas de partage des données Web Storage entre les différents navigateurs qui peuvent être installés sur une même machine.
*/

/*** SESSION STORAGE ***
 L'interface "sessionStorage" mémorise les données sur la durée d'une session de navigation, et sa portée est limitée à la fenêtre ou l'onglet actif. Lors de sa fermeture, les données sont effacées. 
 Contrairement au cookies, il n'y a pas d'interférence. 
 Chaque stockage de session est limité à un domaine.
*/

/*** LOCAL STORAGE ***
 L'interface localStorage mémorise les données sans limite de durée de vie. Contrairement à sessionStorage, elles ne sont pas effacées lors de la fermeture d'un onglet ou du navigateur. 
 La portée de localStorage est de facto plus large : il est possible de l'exploiter à travers plusieurs onglets ouverts pour le même domaine ou plusieurs fenêtres; à partir du moment où il s'agit bien sûr du même navigateur.
*/

/*** USAGE ET PRECAUTIONS ***
 Le stockage de données dans le navigateur web se prête à différentes applications, particulièrement lorsqu'il s'agit d'exécuter des traitements sans faire intervenir le serveur, ou lorsqu'il faut mémoriser facilement de petites quantités de données pour l'utilisateur pour les faire persister durant sa navigation. Parmi ces avantages :

 1-stocker rapidement des données en cache sans faire intervenir le serveur (par exemple via AJAX),

 2-augmenter la performance ressentie et faciliter les développements,

 3-se passer des cookies et du trafic HTTP supplémentaire qu'ils représentent (un cookie est envoyé à chaque requête effectuée sur un domaine),

 4-exploiter un espace alloué plus important que la limite imposée par les cookies (fixée à 4 Ko),

 5-retrouver des données immédiatement à la reconnexion ou les mémoriser pour éviter la perte s'il y a déconnexion.

 !!!Attention : les données ne sont pas cryptées, accessibles facilement à tout utilisateur ayant accès au navigateur, et modifiables de la même façon. Il ne faut donc pas y placer d'informations sensibles.!!!
 Pour ces raisons et d'autres, certains navigateurs exigent de consulter la page appelant le stockage via un domaine, (c'est-à-dire avec une url en http://, que ce soit localhost ou bien un nom de domaine complet) et non pas en fichier local (adresse file://). 
 Sinon, une exception de sécurité peut être déclenchée. Ceci peut sembler logique car les données sont en théorie attachées à un domaine.
*/

/*** COMMANDES POUR ACCEDER AU WEB STORAGE ***
 Hormis les spécificités concernant la persistance des données, les méthodes d'accès sont communes :

 -setItem(clé,valeur) : stocke une paire clé/valeur
 -getItem(clé) : retourne la valeur associée à une clé
 -removeItem(clé) : supprime la paire clé/valeur en indiquant le nom de la clé
 -key(index): retourne la clé stockée à l'index spécifié
 -clear(): efface toutes les paires

 Pour agrémenter le tout, la propriété .length renvoie le nombre de paires stockées.

 La console Javascript des navigateurs est un outil essentiel pour tester et vérifier le bon fonctionnement de Web Storage.

 Note : Les exemples suivants se basent sur sessionStorage mais fonctionneront de la même façon avec localStorage.

 ---Stockage---
 sessionStorage.setItem("couleur","vert")
 Le premier argument de setItem est la clé (toujours de type String). Elle précise l'endroit où sont stockées les données afin de pouvoir les y retrouver ultérieurement.

 ---Récupération---
 let couleur = sessionStorage.getItem("couleur");
 Grâce à la clé initialement créée avec setItem il est possible de récupérer facilement les données. Ces dernières sont renvoyées sous la forme d'une chaîne de caractère.

 ---Suppression---
 sessionStorage.removeItem("couleur");
 Nous supprimons l'élément de session "couleur".

 ---Suppression totale---
 sessionStorage.clear();
 Suppression complète de toutes les valeurs de session.

 ---Accès direct---
 Dans la plupart des situations, les variables seront accessibles directement en tant que membres de l'interface.

 sessionStorage.couleur = "vert";
 console.log(sessionStorage.couleur);
*/

/*** UTILISATION DE JSON POUR STOCKER ET RECUPERER DES DONNEES DANS LE WEB STORAGE***
 Web Storage est bien pratique pour stocker de simples chaînes de texte. 
 Lorsqu'il s'agit de manipuler des données plus complexes, entre autres des objets / tableaux JavaScript, il faut les linéariser au préalable en chaînes de texte puisque Web Storage n'accepte que ce type de données. 

 Le format JSON (JavaScript Object Notation) est la solution de prédilection. 

 Deux méthodes équipent les navigateurs modernes : 
 1-JSON.stringify() qui prend en paramètre un objet et renvoie une chaîne de texte linéarisée, et son inverse...
 2-JSON.parse() qui reforme un objet à partir de la chaîne linéarisée. 
 
 Des frameworks populaires tels que jQuery sont équipés de fonctions similaires (parseJSON) pour les anciens navigateurs qui ne seraient pas équipés en natifs de telles méthodes de conversion.

 ---Stockage---
 let monObjet  = {
  propriete1 : "valeur1",
  propriete2 : "valeur2"
 };
 let monObjet_json = JSON.stringify(monObjet);
 sessionStorage.setItem("objet",monObjet_json); objet = key / monObjet_json = valeur


 ---Lecture---
 let monObjet_json = sessionStorage.getItem("objet");
 let monObjet = JSON.parse(monObjet_json);
 // Affichage dans la console
 console.log(monObjet);
*/
