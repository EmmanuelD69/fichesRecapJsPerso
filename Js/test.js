const names = ['emmanuel', 'georgia', 'maria', 'nikos', 'roulis'];
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
