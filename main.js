// Creare un array con un insieme di indirizzi email.
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)

// Creare un array con un insieme di indirizzi email.
var email = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "paperino@gmail.com"];
// console.log(email[0]);
// console.log(email[1]);
// console.log(email[2]);
// console.log(email[3]);

// Chiedere all'utente il suo indirizzo email
var tuaEmail = prompt ("inserire indirizzo mail");
console.log(tuaEmail);

// verificare se è nella lista

var isFound = false;
for(var i = 0; i < email.length; i++) {
    console.log(email[i]);
// var elementoArray = email[i];

if (tuaEmail == email[i]) {
// console.log("tuaEmail è presente");
isFound = true;

    }
}
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)

if (isFound == true) {
alert("tuaEmail è stata trovata");

} else {
alert("tuaEmail NON è stata trovata");
}
