/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//RECUPERO GLI ELEMENTI DEL DOM E/O DICHIARO LE VARIABILI CHE MI SERVONO
document.addEventListener('DOMContentLoaded', function() {
    const countdown = document.getElementById('countdown');
    const numbersList = document.getElementById('numbers-list');
    const answersForm = document.getElementById('answers-form');
    const button = document.getElementById('button');
    const message = document.getElementById('message');
    let seconds = 30;

    // Funzione per generare numeri casuali
    function generaNumeriCasuali() {
        let numeriCasuali = [];
        for (let i = 0; i < 5; i++) {
            let numero = Math.floor(Math.random() * 50) + 1;
            numeriCasuali.push(numero);
        }
        return numeriCasuali;
    }

    // Numeri generati casualmente da memorizzare
    const numeri = generaNumeriCasuali();
    let numeriIndovinati = [];

    // Mostriamo nel DOM i numeri casuali
    numbersList.innerHTML = '';  // Reset
    numeri.forEach(numero => {
        numbersList.innerHTML += `<li><p>${numero}</p></li>`;
    });

    // Timer 30 secondi
    const timer = setInterval(function() {
        seconds--;
        countdown.innerText = seconds;

        if (seconds <= 0) {
            clearInterval(timer); // Ferma il timer
            countdown.textContent = 'Tempo scaduto!';

            if (numbersList) {
                numbersList.style.display = "none"; // Nascondi numbersList
            }

            if (answersForm) {
                answersForm.classList.remove('d-none'); // Mostra il form per l'inserimento dei numeri
            }
        }

    }, 1000); // Esegui ogni secondo

    // Aggiungi evento al pulsante di conferma
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Previeni il comportamento predefinito del form

        // Recupera i numeri inseriti dall'utente
        const inputs = document.querySelectorAll('.form-control');
        const numeriInseriti = Array.from(inputs).map(input => parseInt(input.value));

        // Confronta i numeri inseriti con quelli generati
        numeriIndovinati = numeriInseriti.filter(numero => numeri.includes(numero));

        // Mostra quanti numeri sono stati indovinati
        const numeriIndovinatiTesto = numeriIndovinati.length > 0
            ? `Hai indovinato ${numeriIndovinati.length} numero/i: ${numeriIndovinati.join(', ')}.`
            : 'Non hai indovinato nessun numero!';

        // Mostra il messaggio
        message.textContent = numeriIndovinatiTesto;

        // Se l'utente ha indovinato tutti i numeri
        if (numeriIndovinati.length === numeri.length) {
            message.textContent += ' Congratulazioni! Hai indovinato tutti i numeri!';
        }
    });
});







