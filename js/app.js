/* SELECTEURS */
const Menu = document.querySelector('.menu');

/* VALEURS IMPORTANTES */
const htmlChildrenMenu = Menu.children;
// console.log(htmlChildrenMenu);

/* AJOUTS EVENTS */
for (div of htmlChildrenMenu) {
	div.addEventListener('click', detectClick);
}

/* FONCTIONS */
function detectClick(click) {
	const target = click.target.className;
	switch (target) {
		case 'section bases':
			console.log('BASES JS');
			window.location.href = '../pages/basesJs.html';
			break;
		case 'section tableaux':
			console.log('TABLEAUX');
			window.location.href = '../pages/tableaux.html';
			break;
		case 'section objets':
			console.log('OBJETS');
			window.location.href = '../pages/objets.html';
			break;
		case 'section dom':
			console.log('DOM');
			window.location.href = '../pages/dom.html';
			break;
	}
}

console.log(
	"Bonjour et bienvenue sur mon espace Memo. \nJe rajoute du contenu au quotidien donc ne vous étonnez pas de trouver des parties en cours d'intégration\nBonne lecture!\n30/07/20: add Notions de base > Opérateur Ternaire."
);
