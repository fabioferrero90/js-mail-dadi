/* PRIMA PARTE - ACCESSO VIA MAIL
  
  1.Chiedere all'utente la sua email
  2.Controlla che la mail inserita sia nella lista degli utenti che possono accedere
  3.Stampa un messaggio appropriato dopo aver effettuato il controllo

  BONUS: Effettua la validazione della mail

*/

// Scrivo una lista di mail consentite
const allowedEmails = [
  "fabio@boolean.it",
  "giorgio@boolean.it",
  "marco@boolean.it",
  "luca@boolean.it",
  "ugo@boolean.it",
  "stefano@boolean.it",
]

// Mostro un prompt dove inserire la mail
let userEmail = prompt("Inserisci il tuo indirizzo mail");

// Controllo che la mail inserita sia nella lista, e se si, procedo con il gioco dei dadi
if (userEmail && allowedEmails.includes(userEmail.toLowerCase())) {
  alert("La tua mail ha accesso a questo gioco!");
  console.log("Inizio il gioco dei dadi");

  /* SECONDA PARTE - DICE GAME

    1.Genera due numeri random da 1 a 6, uno per il giocatore e uno per il computer
    2.Stabilisci il vincitore in base a chi fa il punteggio più alto

  */

  //Lancio i dadi
  const playerDice = Math.ceil(Math.random()*6);
  const computerDice = Math.ceil(Math.random()*6);

  //Stabilisco il vincitore
  let winner = "Il Computer ha vinto!"
  if (playerDice == computerDice) {
    winner = "Nessuno dei due ha vinto";
  } else if (playerDice > computerDice){
    winner = "Hai vinto contro il computer!";
  }

  //Invio il messaggio
  let message = `Il tuo numero è: ${playerDice}\nIl numero del Computer è: ${computerDice}\n\n${winner}`;
  alert(message);

} else if (!userEmail){
  alert("Devi inserire una mail per giocare!");
} else {
  alert("La tua mail non ha accesso a questo gioco!");
}