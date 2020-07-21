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
      alert("En cours d'intégration!");
      break;
    case "section objets":
      console.log("OBJETS");
      alert("En cours d'intégration!");
      break;
    case "section dom":
      console.log("DOM");
      alert("En cours d'intégration!");
      break;
  }
}

console.log(
  'Bonjour et bienvenue sur mon espace Memo. \nLa partie "notions de base" est la seule accessible pour l\'instant. \nLes autres parties seront rajoutées progressivement. \nBonne lecture!'
);
