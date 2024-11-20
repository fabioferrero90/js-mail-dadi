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
const emailRegex = /[-_a-zA-Z.+!%0-9]{2,}@[a-zA-Z0-9]{2,}\.[a-zA-Z.]{2,}/;
let isAllowed;

//Inizio il ciclo
while (!isAllowed) {

  // Mostro un prompt dove inserire la mail
  let promptedEmail = prompt("Inserisci il tuo indirizzo mail");
  let message = "La tua mail non ha accesso a questa pagina!";

  // Controllo che nel prompt sia stata inserita una mail
  if (promptedEmail && emailRegex.test(promptedEmail)){

      // Controllo che la mail inserita sia nella lista (BONUS: e che sia una mail), e se si, procedo con il gioco dei dadi
    for(const element of allowedEmails) {
      if (promptedEmail.toLowerCase() == element){
        isAllowed = true;
        message = "La tua mail ha accesso a questa pagina!";
      }
    }
  } else if (!promptedEmail || !(emailRegex.test(promptedEmail))){
    message = "Devi inserire una mail valida!";
  }
  alert(message)
}