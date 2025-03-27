/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//RECUPERO GLI ELEMENTI DEL DOM E/O DICHIARO LE VARIABILI CHE MI SERVONO
const countdown = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list'); // Assicurati che l'elemento esista nel DOM
const numbersRandom = document.querySelectorAll('.form-control'); // Sembra che tu voglia selezionare degli input, ma qui non c'è bisogno
const button = document.getElementById('button');
let guessedNumber = [];
let seconds = 30;


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

// Mostriamo nel DOM i numeri casuali
numbersList.innerHTML = '';
numeri.forEach(numero => {
    numbersList.innerHTML += `<li><p>${numero}</p></li>`; // Aggiungi numeri generati al DOM
});

// Timer 30 secondi
const timer = setInterval(function() {
    // Decrementa il tempo
    seconds--;

    // Aggiorniamo il contenuto dell'elemento con il tempo rimanente
    countdown.innerText = seconds;

    // Quando il timer arriva a 0, fermalo
    if (seconds <= 0) {
        clearInterval(timer); // Ferma il timer
        countdown.textContent = 'Tempo scaduto!';

        // Controlla se l'elemento esiste prima di nasconderlo
        if (numbersList) {
            numbersList.style.display = "none"; // Nascondi numbersList
        } else {
            console.log('Elemento numbersList non trovato!');
        }
    }

}, 1000); // Esegui ogni secondo





