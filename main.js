// Chiedo informazioni al passeggero
let agePassenger = parseInt(prompt("Quanti anni hai?"));
let kmToRun = parseInt(prompt("Quanti chilometri dovrai percorrere?"));
console.log(agePassenger + "+" + kmToRun);

// Imposto coefficiente fisso del prezzo per Km
const pricePerKm = 0.21;

// Definisco il prezzo del biglietto moltiplicando i valori ottenuti
let priceTicket = kmToRun * pricePerKm;

// Inserisco il dato nell'HTML
document.getElementById("price").innerHTML = priceTicket;

// Definisco gli sconti
const discountUnderAge = 0.2;
const discountOver65 = 0.4;
// Definisco le età 
const ageAdult = 18;
const ageElderly = 65;

// Definisco una variabile da aggiungere
let priceDiscounted;
let underAgeSavings = priceTicket * discountUnderAge;
let elderlySavings = priceTicket * discountOver65;

// Creo la variabile prima per minorenni poi per anziani
if (agePassenger < ageAdult){
    priceDiscounted = priceTicket - (priceTicket * discountUnderAge); 
    document.getElementById("price").innerHTML = priceDiscounted;
    document.getElementById("wow").innerHTML = `Wow! Hai risparmiato ben ${underAgeSavings}€ grazie al nostro sconto!`;
} else if (agePassenger >= ageElderly) {
    priceDiscounted = priceTicket - (priceTicket * discountOver65); 
    document.getElementById("price").innerHTML = priceDiscounted;
    document.getElementById("wow").innerHTML = `Wow! Hai risparmiato ben ${elderlySavings}€ grazie al nostro sconto!`;
}
