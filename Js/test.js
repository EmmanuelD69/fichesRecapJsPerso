const names = ["emmanuel", "georgia", "maria", "nikos", "roulis"];
const user = {
  name: "Emmanuel",
  age: 36,
  suscribers: 200,
  money: "lolno",
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

console.log("break");

do {
  console.log(i);
  i++;
} while (i <= 40);

let greet = console.log("coucou c'est moi");
console.log(greet);

const eD = {
  name: "Emmanuel",
  age: 36,
  married: false,
  greet: function () {
    console.log("hello there!");
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
  let nom = prompt("Quel est ton nom?");
  console.log;
}

const tableau1 = [10, "15", eD, max(10, 50)];
console.log(tableau1);
console.log(tableau1[3]);

const listUsers = ["Sébastien", "Laurence", "Ludovic", "Pauline", "Guillaume"];
listUsers.shift(); // Retire le premier indice et sa valeur: « Sébastien » <br>
listUsers.pop(); // Retire le dernier indice et sa valeur: « Guillaume » <br>
console.log(listUsers); // Affichera « Laurence,Ludovic,Pauline »

console.log(typeof listUsers);
console.log(eD.name.toLocaleUpperCase);

let myFamily = "Pauline Guillaume Clarisse";
console.log(myFamily);
myFamily = myFamily.split(" ");
console.log(myFamily);

myFamily = myFamily.join(" ");
console.log(myFamily);

for (let i = 0; i <= 100; i++) {
  if (i === 20) {
    console.log("Hey, tu as atteint 20!");
    continue;
  }
  if (i === 40) {
    console.log("Hey, tu as atteint 40!");
    break;
  }
  console.log(i);
}

const friendsName = ["emmanuel", "georgia", "maria", "nikos", "roulis"];

for (let name of friendsName) {
  console.log(name);
}

for (let name of friendsName) {
  console.log(friendsName.indexOf(name));
}

const user1 = {
  name: "laurent",
  age: 36,
  suscribers: 200,
  passion: "histoire",
};

for (let key in user1) {
  console.log(key);
}

for (let key in user1) {
  console.log(user1[key]);
}
