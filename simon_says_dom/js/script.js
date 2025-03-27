/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//RECUPERO GLI ELEMENTI DEL DOM E/O DICHIARO LE VARIABILI CHE MI SERVONO
const countdown = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list');
const numbersRandom = document.querySelectorAll('form-control');
const button = document.getElementById('button');
let guessedNumber = [];
let seconds = 30;

//CORPO PROGRAMMA
//Generiamo 5 numeri casuali compresi tra 1 e 50
// Funzione per generare numeri casuali
function generaNumeriCasuali() {
    let numeriCasuali = [];
    
    for (let i = 0; i < 5; i++) {
        // Genera un numero casuale tra 1 e 50 (incluso)
        let numero = Math.floor(Math.random() * 50) + 1;
        numeriCasuali.push(numero);
    }

    return numeriCasuali;
}

// Eseguiamo la funzione e mostriamo i numeri casuali
const numeri = generaNumeriCasuali();

numbersList.innerHTML += '<li><p>'+numeri+'</p></li>' ;




