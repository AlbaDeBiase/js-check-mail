// Creare un array con un insieme di indirizzi email.
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)
var email = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "topolino@gmail.com"];
console.log(email[0]);
console.log(email[1]);
console.log(email[2]);
console.log(email[3]);
var tuaEmail = prompt ("inserire indirizzo mail");
console.log(tuaEmail);
email.push(tuaEmail);
