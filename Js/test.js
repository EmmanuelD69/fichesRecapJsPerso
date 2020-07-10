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
