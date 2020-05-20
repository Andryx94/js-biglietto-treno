alert("Calcola il prezzo del tuo viaggio inserendo i chilometri e la tua data di nascita!");

var data = new Date();
var annoCorrente = data.getFullYear();
document.getElementById('chilometri').innerHTML =  chilometri = parseInt(prompt("Dimmi i chilometri del tuo viaggio"));
document.getElementById('annoNascita').innerHTML =  annoNascita = parseInt(prompt("Dimmi la tua data di nascita"));
var prezzo = (chilometri * 0.21);
var differenzaAnni = annoCorrente - annoNascita;

if (isNaN(chilometri) || isNaN(annoNascita)) {
  alert("Inserisci correttamente i dati!")
}
else {
  if (differenzaAnni < 18) {
    var prezzo = prezzo - (prezzo * 0.2); // applica lo sconto del 20% per i minorenni
    document.getElementById('prezzo').innerHTML =  prezzo.toFixed(2);
  }

  else if (differenzaAnni > 65){
    var prezzo = prezzo - (prezzo * 0.4); // applica lo sconto del 40% per i maggiorenni
    document.getElementById('prezzo').innerHTML =  prezzo.toFixed(2);
  }

  else {
    document.getElementById('prezzo').innerHTML =  prezzo.toFixed(2);
  }
}
