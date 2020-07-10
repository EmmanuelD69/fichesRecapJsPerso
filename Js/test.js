const names = ['emmanuel', 'georgia', 'maria', 'nikos', 'roulis'];
const user = {
	name: 'Emmanuel',
	age: 36,
	suscribers: 200,
	money: 'lolno',
};

for (let name in names) {
	console.log(name);
}

for (let name of names) {
	console.log(name);
}
