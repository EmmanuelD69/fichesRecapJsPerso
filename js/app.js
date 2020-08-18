/* SELECTEURS */
const Menu = document.querySelector(".menu");

/* VALEURS IMPORTANTES */
const htmlChildrenMenu = Menu.children;
// console.log(htmlChildrenMenu);

/* AJOUTS EVENTS */
for (div of htmlChildrenMenu) {
  div.addEventListener("click", detectClick);
}

/* FONCTIONS */
function detectClick(click) {
  const target = click.target.className;
  switch (target) {
    case "section bases":
      console.log("BASES JS");
      window.location.href = "../pages/basesJs.html";
      break;
    case "section tableaux":
      console.log("TABLEAUX");
      window.location.href = "../pages/tableaux.html";
      break;
    case "section objets":
      console.log("OBJETS");
      window.location.href = "../pages/objets.html";
      break;
    case "section dom":
      console.log("DOM");
      window.location.href = "../pages/dom.html";
      break;
  }
}
console.log("LOG des mises à jour:");
console.log("17/07/20: add Notions de base > BOUCLES Part1,");
console.log("18/07/20: add Notions de base > BOUCLES Part2,");
console.log("20/07/20: add Notions de base > Notions de scope,");
console.log('21/07/20: Refonte page d\'accueil + ajout "app.js",');
console.log("22/07/20: add fichiers objet.html/tableaux.html/dom.html,");
console.log("22/07/20: add Intro DOM,");
console.log("22/07/20: add Types de données (primitive/réferents),");
console.log("23/07/20: add High order function,");
console.log("23/07/20: add Méthode map(),");
console.log("23/07/20: add FOOTER > social networks links ,");
console.log("24/07/20: add Méthode find(),");
console.log("24/07/20: add Méthode filter(),");
console.log("25/07/20: add Méthode some(),");
console.log("25/07/20: add Méthode every(),");
console.log("25/07/20: add INTRO Objets,");
console.log("27/07/20: add Méthode sort(),");
console.log("28/07/20: add Création de tableau à partir de string,");
console.log("28/07/20: add Modifier tableau sans changer le référent,");
console.log("29/07/20: add Merge de tableaux,");
console.log("29/07/20: add Fonction ternaire,");
console.log("30/07/20: add Notions de base > Opérateur Ternaire,");
console.log("31/07/20: add Notions de base > Fonction flèche (ES6),");
console.log("01/08/20: add Notions de base > Notions de Hoisting - Levage,");
console.log(
  "03/08/20: add Notions de base > Notions de Contexte Global Execution,"
);
console.log("03/08/20: add DOM > Cibler un élément du DOM,");
console.log("03/08/20: add DOM > HTMLCollection vs NodeList,");
console.log("03/08/20: add Responsive design,");
console.log("04/08/20: add OBJET > THIS - Qu'est-ce que c'est?,");
console.log("05/08/20: add OBJET > BIND - Qu'est-ce que c'est?,");
console.log("06/08/20: add Notions de base >Notion de CALL STACK,");
console.log("07/08/20: add Objets > CALL - Qu'est-ce que c'est?,");
console.log("07/08/20: add Objets > APPLY - Qu'est-ce que c'est?,");
console.log(
  "07/08/20: add Objets > CONSTRUCTOR FUNCTION - Qu'est-ce que c'est?,"
);
console.log("07/08/20: add Objets > PROTOTYPE - Qu'est-ce que c'est?,");
console.log(
  "08/08/20: add Objets > Créer et ajouter un méthode dans prototype,"
);
console.log("10/08/20: add Objets > Héritage du prototype,");
console.log("10/08/20: add Objets > Classes - Qu'est ce que c'est?,");
console.log("12/08/20: add DOM > Boucles avec HTMLCollection & NodeList");
console.log("12/08/20: add DOM > Ajout d'un node élément - HTMLCollection");
console.log("12/08/20: add DOM > Ajout d'un node élément - NodeList");
console.log("12/08/20: add DOM > introduction aux events");
console.log("12/08/20: add DOM > Installer un event listener");
console.log("13/08/20: add DOM > Ajouter un élément");
console.log("13/08/20: add DOM > Modifier CSS avec Javascript");
console.log("13/08/20: add DOM > FUNCTION(EVENT) à quoi sert EVENT?");
console.log("14/08/20: add DOM > Ajouter un eventlistener sur un ensemble");
console.log("14/08/20: add DOM > ajouter nouveaux éléments avec eventlisten");
console.log("15/08/20: add DOM > Event Bubbling");
console.log("15/08/20: add DOM > EVENT.PREVENTDEFAULT()");
console.log("17/08/20: add DOM > Création article via formulaire");
console.log("17/08/20: add DOM > EFFACER LE TEXTE D'UN INPUT");
console.log("17/08/20: add DOM > LE WEB STORAGE OU DOM STORAGE");
console.log("17/08/20: add DOM > Session Storage");
console.log("17/08/20: add DOM > Local Storage");
console.log("17/08/20: add DOM > Usage et Précautions");
console.log("17/08/20: add DOM > Commandes pour accéder au web storage");
console.log("17/08/20: add DOM > UTILISATION DE JSON");
console.log(
  "Bonjour et bienvenue sur mon espace Memo. \nJe rajoute du contenu au quotidien donc ne vous étonnez pas de trouver des parties en cours 'intégration\nBonne lecture!"
);
