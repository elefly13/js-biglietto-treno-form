// Creiamo un finto biglietto del treno con:
var btnGenera = document.getElementById('calcolaPrezzo');

btnGenera.addEventListener('click',
    function() {
        var nome = document.getElementById('nome').value;

        // Nome passeggero
        document.getElementById('nome-passeggero').innerHTML = nome;

        var km = document.getElementById('km').value;
        var fasciaEta = document.getElementById('fascia-eta').value;

        // Categoria selezionata dall'utente
        if (fasciaEta == "maggiorenne") {
            document.getElementById('offerta').innerHTML = "Tariffa Standard";
        }
        else {
            document.getElementById('offerta').innerHTML = "Sconto " + fasciaEta;
        }
        
        

        
        // calcolo prezzo biglietto 
        var prezzokm = 0.21;
        var costoBiglietto = prezzokm * km;
        var scontoMinorenne = 20;
        var scontoOver65 = 40;

        if (fasciaEta == "minorenne") {
            costoBiglietto = costoBiglietto - (costoBiglietto * scontoMinorenne / 100);
            console.log(costoBiglietto);
        }
        else if (fasciaEta == "over65") {
            costoBiglietto = costoBiglietto - (costoBiglietto * scontoOver65 / 100);
        }
        else if (fasciaEta == "maggiorenne") {
            costoBiglietto = costoBiglietto;
        }
        console.log(costoBiglietto);
        document.getElementById('prezzo-biglietto').innerHTML = costoBiglietto.toFixed(2);
        
        // Numero carrozza
        var totaleCarrozze = [];
        var max = 10;
        var min = 1;
        var numeroCarrozza = [Math.floor(Math.random() * (max - min + 1) + min)];
        console.log(numeroCarrozza);
        document.getElementById('numero-carrozza').innerHTML = numeroCarrozza;

        // Codice treno (numero casuale tra 90000 e 100000 escluso)
        var codiceTreno = [];
        var max = 100000;
        var min = 90000;
        var codiceCp = [Math.floor(Math.random() * (max - min) + min)];
        console.log(codiceCp);
        document.getElementById('codiceCp').innerHTML = codiceCp;
       
        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = 'block';

    }
     
)
// se clicchiamo su annulla dobbiamo ripulire il form.
// bottone annulla 
var btnAnnulla = document.getElementById('annulla');

btnAnnulla.addEventListener('click',
    function() {
        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = "none";

        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia-eta').value = '';
        }

)


// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", 