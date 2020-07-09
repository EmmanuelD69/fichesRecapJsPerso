/* 
1-Generate a random number
2-Give the user ability to guess the number
3-If the guess is wrong, ask again and give a hint to find out
4-If the guess is right, say that it's a win
*/

function guessGame() {
  let randomNr = Math.floor(Math.random() * 11); /* part 1 done */
  console.log(randomNr);
  let userNr;
  do {
    /* Part 3 done */
    userNr = prompt("Entrez un nombre compris entre 0 et 10"); /* Part 2 done */
    if (userNr < randomNr) {
      console.log("Tu as choisi un nombre trop petit. essai encore une fois!");
    } else if (userNr > randomNr) {
      console.log("Tu as choisi un nombre trop grand. essai encore une fois!");
    }
  } while (userNr != randomNr); /* Part 4 done */
  console.log("Tu as trouvé le bon numéro, Bravo!");
}

guessGame();
