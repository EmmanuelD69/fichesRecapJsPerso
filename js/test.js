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
