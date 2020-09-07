const names = ['georgia2', 'nikos', 'emmanuel', 'georgia', 'roulis'];
const user = {
	name: 'Emmanuel',
	age: 36,
	suscribers: 200,
	money: 'lolno',
};

/* for (let x of user) {
	console.log(x);
} */

for (let x in user) {
	console.log(x);
}

let i = 20;
while (i < 30) {
	console.log(i);
	i++;
}

console.log('break');

do {
	console.log(i);
	i++;
} while (i <= 40);

let greet = console.log("coucou c'est moi");
console.log(greet);

const eD = {
	name: 'Emmanuel',
	age: 36,
	married: false,
	greet: function () {
		console.log('hello there!');
	},
};

console.log(eD);

function max(nr1, nr2) {
	if (nr1 > nr2) {
		return nr1;
	} else {
		return nr2;
	}
}

function askName() {
	let nom = prompt('Quel est ton nom?');
	console.log;
}

const tableau1 = [10, '15', eD, max(10, 50)];
console.log(tableau1);
console.log(tableau1[3]);

const listUsers = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
listUsers.shift(); // Retire le premier indice et sa valeur: « Sébastien » <br>
listUsers.pop(); // Retire le dernier indice et sa valeur: « Guillaume » <br>
console.log(listUsers); // Affichera « Laurence,Ludovic,Pauline »

console.log(typeof listUsers);
console.log(eD.name.toLocaleUpperCase);

let myFamily = 'Pauline Guillaume Clarisse';
console.log(myFamily);
myFamily = myFamily.split(' ');
console.log(myFamily);

myFamily = myFamily.join(' ');
console.log(myFamily);

for (let i = 0; i <= 100; i++) {
	if (i === 20) {
		console.log('Hey, tu as atteint 20!');
		continue;
	}
	if (i === 40) {
		console.log('Hey, tu as atteint 40!');
		break;
	}
	console.log(i);
}

const friendsName = ['emmanuel', 'georgia', 'maria', 'nikos', 'roulis'];

for (let name of friendsName) {
	console.log(name);
}

for (let name of friendsName) {
	console.log(friendsName.indexOf(name));
}

const user1 = {
	name: 'laurent',
	age: 36,
	suscribers: 200,
	passion: 'histoire',
};

for (let key in user1) {
	console.log(key);
}

for (let key in user1) {
	console.log(user1[key]);
}

function store() {
	let food = prompt('Quel est le fruit choisi?');
	let fruits = 50;
	if (food === 'banane') {
		console.log(`vous avez ${fruits} bananes`);
	}
}

/* const userName = 'Paul'; */
/* let fruitFavorie = prompt('Quel est ton fruit préféré?'); */
function info() {
	console.log(`${userName} aime les ${fruitFavorie}s`);
	if (fruitFavorie === 'pomme') {
		console.log(`Mangez des ${fruitFavorie}s`);
	}
}

/* const test = document.querySelector('.menu');
const test1 = test.children;
console.log(test1);
// test.addEventListener("click", detectClick);

for (div of test1) {
	div.addEventListener('click', detectClick);
}

function detectClick(click) {
	const target = click.target.className;
	//   console.log(target);
	switch (target) {
		case 'section bases':
			console.log('BASES JS');
			window.location.href = '../pages/basesJs.html';
			break;
		case 'section tableaux':
			console.log('TABLEAUX');
			break;
		case 'section objets':
			console.log('OBJETS');
			break;
		case 'section dom':
			console.log('DOM');
			break;
	}
} */

const bank = 250;
// bank = 100;

function repeater(fn) {
	fn();
	fn();
	fn();
}

function sayHello() {
	console.log('Hello There!');
}

repeater(sayHello);

console.log(names);
const newNames = names.map(function (name) {
	return name.toUpperCase();
});
console.log(`contenu du tableau d'origine: ${names}`);
console.log(`contenu du tableau après map: ${newNames}`);

newNames.push('Didier');
console.log(`contenu du tableau d'origine: ${names}`);
console.log(`contenu du tableau après map: ${newNames}`);
const test1 = ['Emmanuel'];
const test2 = test1.map(function (toto) {
	return toto.toUpperCase();
});
console.log(test2);

const searchName = names.filter(function (name) {
	return name.length > 7;
});
console.log(searchName);

const games = [
	{ title: 'Mass Effect', rating: 9.5 },
	{ title: 'League of Legends', rating: 5 },
	{ title: 'Last of Us', rating: 10 },
	{ title: 'God of War', rating: 10 },
	{ title: 'WWE 2k20', rating: 4 },
];

const highRates = games.some(function (item) {
	return item.title.length > 8;
});

console.log(highRates);

const mixes = ['Techno', 'House Music', 'Disco House', 'Funk'];
console.log(mixes);
mixes.sort();
console.log(mixes);

let tutu = 'Emmanuel';
console.log(tutu);

const userX = {
	name: 'emmanueldev',
};

const userY = {
	name: 'admin',
};

// userX.fn = sayHi;
// console.log(userX);
// userX.sayHi;
// sayHi();

const userZ = {
	name: 'emmanueldev',
	videos: ['html', 'css', 'javascript', 'react'],
	greet() {
		console.log(`Hello there ${this.name}`);
		//add function
		const getVideos = () => {
			console.log(this);
		};
		getVideos();
	},
};

function sayHi() {
	console.log(this);
}

const person = {
	firstName: 'emmanuel',
	lastName: 'dev',
	getFullName() {
		console.log(`hello my name is ${this.firstName} ${this.lastName}`);
	},
};

function registerUser() {
	//fonctionnalitées additionnelles....
	console.log(this);
	this.getFullName();
}

const linkedFunction = registerUser.bind(person);
linkedFunction();

console.log(linkedFunction);

function USER(name, surname) {
	this.name = name;
	this.surname = surname;
}
USER.prototype.getName = function () {
	console.log(`${this.name} ${this.surname}`);
};
const newUser1 = new USER('Emmanuel', 'Dev');
console.log(newUser1);
console.log(typeof newUser1);
newUser1.getName();
const newUser2 = {
	name: 'emmanuel',
	surname: 'Durouge',
};
console.log(Object.keys(newUser1).length);

const listeArticles = document.querySelector('#liste-articles');
console.log(listeArticles);
// const collectionArticles = listeArticles.children;
// const collectionArticles = document.querySelectorAll('.articletest');
// console.log(collectionArticles);
// const articlesCount = document.querySelector('.articles-count');
// console.log(articlesCount);

// const newArticleTest = document.createElement('li');
// newArticleTest.classList.add('articletest');
// newArticleTest.innerText = 'article 4';
// listeArticles.appendChild(newArticleTest);

// articlesCount.innerText = collectionArticles.length;

const véhicules = [
	'peugeot',
	' renault',
	'citroen',
	'fiat',
	'mercedes',
	'honda',
	'skoda',
];
const [véhicule1, véhicule2, véhicule3, ...rest] = véhicules;
console.log(véhicule2);

/* Asynchrone Javascript And Xml - AJAX*/
/* Qu'est ce que le Javascript Asynchrone?
Synchrone = une action se déroulant en direct, quelque chose qui se passe en même temps, une action synchrone.
Asynchrone = une action qui se déroule en différé, quelque chose qui se passe après une période de temps, un action asynchrone.

*/
//Sync code example:

/* 1- Javascript read the function and memorize it */
function synchrone() {
	console.log('we are in another function');
	console.log('do some stuff');
}

/* 2- Javascript execute the console.log */
console.log('start');
/* 3- Javascript execute the function and show its content in console */
synchrone();
/* 4- Javascript execute the console.log */
console.log('end');
/* console log:
test.js:325 start
test.js:320 we are in another function
test.js:321 do some stuff
test.js:329 end
*/

//Async code example:
/* Nous allons utiliser la fonction "setTimout" qui permet de mettre en place une temporisation au bout de laquelle les actions qu'elle contient vont s'exécuter. */

/* 1- Javascript execute the console.log */
console.log('start');
/* 2- Javascript read the setTimout function and transfer it to the web API because a timer (asynchrone action) has been found. */
setTimeout(() => {
	console.log('we are in the timeout');
}, 2000);
/* 3- Javascript execute the console.log */
console.log('end');
/* 4- Javascript execute the _setTimout_ function */
/* console log:
test.js:342 start
test.js:348 end
test.js:345 we are in the timeout
*/

/* Javascript est très mauvais pour faire du multitasking, il lit le code ligne par ligne et exécute une action à la fois. lorsqu'il tombe sur une action asynchrone plutot que de patienter le temps indiqué dans le "timeout" il va transférer l'action au browser (navigateur) qui contient un système de gestion (Web API) de ces actions asynchrone et poursuivre l'exécution du code. Lorsque le timeout s'achève, le navigateur renvoi l'action asynchrone pour que javascript puisse l'exécuter. */

/* Il existe d'autres actions asynchrones comme par exemple les EVENTLISTENERS, Lorsqu'on place un event listener sur un élément, javascript confie la gestion de celui ci au navigateur. il ne va pas attendre qu'une action se produise pour continuer de lire le code, il va transférer la charge de cette action au browser qui va patientez qu'un clic s'effectue avant d'en informer javascript pour executer le code de la fonction contenant l'event.  */
