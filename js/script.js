// ACQUISIRE I DATI DELL'UTENTE

//chiedere all'utente il nome
let userName = prompt('Ciao! Puoi dirmi il tuo nome?');
//console.log(userName);

//chiedere all'utente cognome
let userLastname = prompt('Mi servirebbe anche il cognome');
//console.log(userLastname);

//chidere all'utente il colore preferito
let userColor = prompt('Qual è il tuo colore preferito?')
//console.log(userColor);

//stampare la pw
let userPassword = `La tua nuova password è: ${userName}${userLastname}${userColor}23`
document.getElementById('message').innerHTML = userPassword;
console.log(userPassword);