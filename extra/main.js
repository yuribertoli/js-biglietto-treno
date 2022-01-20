//Spiegazione gioco
alert("Voglio fare un gioco: scegli un numero e scommetti se sommato al numero scelto dal computer darà un risultato pari o dispari");

//prompt numero
let sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 100"));

//prompt iniziale
let pariDispari = prompt("Scegli pari o dispari?");

//se il numero inserito non è corretto, fornisco numero errore e numero standard
if (sceltaNumero < 1 || sceltaNumero > 100) {
    sceltaNumero = 50;
    alert(`Il numero scelto non è corretto, per giocare quindi ti verrà assegnato il numero ${sceltaNumero}`);
}

/*Utilizzo math.floor per avere numeri interi, 
all'interno di esso moltiplico il numero casuale 
compreso tra 0(incluso) e 1(escluso) per 10, in questo
modo otterro' un numero compreso tra 0 e 9.
Aggiungo 1 per ottenere un numero compreso tra 1 e 10.
Moltiplico il risultato per un altro numero random
con le stesse caratteristiche e posso cosi' ottenere
un numero casuale tra 1 e 100 */
let numeroComputer = (Math.floor(Math.random() * 10) + 1) * (Math.floor(Math.random() * 10) + 1);

//sommo i numeri del pc e dell'utente
let risultato = numeroComputer + sceltaNumero;

//rendo le scritture di pari e dispari più comuni giocabili
switch (pariDispari) {                  //if (pariDispari)
    case "Pari":                          // = "Pari"
        pariDispari = "pari";               // pariDispari = "pari"   
        break;                              
    case "PARI": 
        pariDispari = "pari";
        break;
    case "Dispari": 
        pariDispari = "dispari";
        break;
    case "DISPARI": 
        pariDispari = "dispari";
        break;
}

//controllo se è un numero pari o dispari
if (risultato % 2 == 0 && pariDispari == "pari") {
    document.getElementById("fine").innerHTML = `Il numero che hai scelto era ${sceltaNumero} e il numero scelto dal computer era ${numeroComputer}, visto che hai scelto ${pariDispari}, HAI VINTO!!`;
}   else if (risultato % 2 == 0 && pariDispari == "dispari") {
    document.getElementById("fine").innerHTML = `Il numero che hai scelto era ${sceltaNumero} e il numero scelto dal computer era ${numeroComputer}, visto che hai scelto ${pariDispari}, HAI PERSO!!`;
}   else if (risultato % 2 != 0 && pariDispari == "pari") {
    document.getElementById("fine").innerHTML = `Il numero che hai scelto era ${sceltaNumero} e il numero scelto dal computer era ${numeroComputer}, visto che hai scelto ${pariDispari}, HAI PERSO!!`;
}   else if (risultato % 2 != 0 && pariDispari == "dispari") {
    document.getElementById("fine").innerHTML = `Il numero che hai scelto era ${sceltaNumero} e il numero scelto dal computer era ${numeroComputer}, visto che hai scelto ${pariDispari}, HAI VINTO!!`;
}   else {
    document.getElementById("fine").innerHTML = "C'è stato un errore di sintassi, riprova riscrivendo solo pari o dispari alla seconda domanda";
}




