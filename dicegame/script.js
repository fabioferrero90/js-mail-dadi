/* SECONDA PARTE - DICE GAME

  1.Genera due numeri random da 1 a 6, uno per il giocatore e uno per il computer
  2.Stabilisci il vincitore in base a chi fa il punteggio più alto

*/

alert("Premi OK per lanciare i dadi")
//Lancio i dadi
const playerDice = Math.ceil(Math.random()*6);
const computerDice = Math.ceil(Math.random()*6);

//Stabilisco il vincitore
let winner = "Il Computer ha vinto!";
if (playerDice == computerDice) {
  winner = "Nessuno dei due ha vinto";
} else if (playerDice > computerDice){
  winner = "Hai vinto contro il computer!";
}

//Invio il messaggio
let message = `Il tuo numero è: ${playerDice}\nIl numero del Computer è: ${computerDice}\n\n${winner}`;
alert(message);