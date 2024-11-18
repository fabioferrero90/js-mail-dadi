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
let isAllowed;

//Inizio il ciclo
while (!isAllowed) {
  // Mostro un prompt dove inserire la mail
  let promptedEmail = prompt("Inserisci il tuo indirizzo mail");

  // Controllo che nel prompt sia stata inserita una mail
  if (promptedEmail && promptedEmail.includes('@') && promptedEmail.includes('.')){

      // Controllo che la mail inserita sia nella lista (BONUS: e che sia una mail), e se si, procedo con il gioco dei dadi
    for( let i = 0 ; i < allowedEmails.length; i++) {
      if (promptedEmail.toLowerCase() == allowedEmails[i]){
        isAllowed = true;
        alert("La tua mail ha accesso a questo gioco, premi OK per lanciare i dadi!");

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
      }
    }
  } else if (!promptedEmail || !(promptedEmail.includes('@') && promptedEmail.includes('.'))){
    alert("Devi inserire una mail valida per giocare!");
  } else {
    alert("Questa non è una mail valida per giocare!");
  }
}