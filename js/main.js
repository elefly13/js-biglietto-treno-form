// Creiamo un finto biglietto del treno con:
var btnGenera = document.getElementById('calcolaPrezzo');

btnGenera.addEventListener('click',
    function() {
        var nome = document.getElementById('nome').value;
        var km = document.getElementById('km').value;
        var fasciaEta = document.getElementById('fascia-eta').value;
        console.log(nome);
        console.log(km);
        console.log(fasciaEta);

        var biglietto = document.getElementById('biglietto');
        biglietto.style.display = 'block';

        
        // Nome passeggero
        document.getElementById('nome-passeggero').innerHTML = nome;
        

        document.getElementById('offerta').innerHTML = "Sconto " + fasciaEta;
        document.getElementById('numero-carrozza').innerHTML = numeroCarrozza;
        document.getElementById('codiceCp').innerHTML = codiceCp;
       
    }
     
)

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


// Codice treno (numero casuale tra 90000 e 100000 escluso)
var codiceTreno = [];
var max = 100000;
var min = 90000;
var codiceCp = [Math.floor(Math.random() * (max - min) + min)];
console.log(codiceCp);


// Numero carrozza
var totaleCarrozze = [];
var max = 50;
var min = 1;
var numeroCarrozza = [Math.floor(Math.random() * (max - min + 1) + min)];
console.log(numeroCarrozza);



// Prezzo calcolato
var km = document.getElementById('km').value;
var fasciaEta = document.getElementById('fascia-eta').value;
var prezzoBiglietto = km * 0.21;
console.log(prezzoBiglietto);


if (fasciaEta == "minorenne")
{
    var sconto_18 = Math.round((prezzoBiglietto * 0.80) * 100) / 100;
    document.getElementById('prezzo-biglietto').innerHTML = sconto_18.toFixed( 2 );
    console.log("Il tuo biglietto scontato under 18 costa Euro " + sconto_18.toFixed( 2 ) );
}
else if (fasciaEta == "over65")
{
    var sconto_65 = Math.round((prezzoBiglietto * 0.60) * 100) / 100;
    document.getElementById('prezzo-biglietto').innerHTML = sconto_65.toFixed( 2 );
    console.log("Il tuo biglietto scontato over 65 costa Euro " + sconto_65.toFixed( 2 ) );
}
else if (fasciaEta == "maggiorenne")
{
    var prezzoPieno = prezzoBiglietto;
    document.getElementById('prezzo-biglietto').innerHTML = prezzoPieno.toFixed( 2 );
    console.log("Il tuo biglietto costa Euro " + prezzoPieno.toFixed( 2 ));
}


// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.