alert("Calcola il prezzo del viaggio inserendo la distanza e la tua età!");

document.getElementById('chilometri').innerHTML =  chilometri = Math.abs(parseInt(prompt("Dimmi i chilometri del tuo viaggio")));
document.getElementById('anni').innerHTML =  anni = Math.abs(parseInt(prompt("Dimmi quanti anni hai")));
var prezzo = (chilometri * 0.21);

if (isNaN(chilometri) || isNaN(anni)) {
  alert("Inserisci correttamente i dati!")
}
else {
  if (anni < 18) {
    var prezzo = prezzo - (prezzo * 0.2); // applica lo sconto del 20% per i minorenni
    document.getElementById('prezzo').innerHTML =  prezzo.toFixed(2);
  }

  else if (anni > 65){
    var prezzo = prezzo - (prezzo * 0.4); // applica lo sconto del 40% per i maggiorenni
    document.getElementById('prezzo').innerHTML =  prezzo.toFixed(2);
  }

  else {
    document.getElementById('prezzo').innerHTML =  prezzo.toFixed(2);
  }
}
