//Creare un oggetto che descriva uno studente,
//con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso un ciclo for-in
//tutte le proprietà dell'oggetto.
//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
//Dare la possibilità all’utente, attraverso 3 prompt(), 
//di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


let studente = {
    nome : "Sofia",
    cognome : "Papa",
    eta : 24
}

for (let proprieta in studente){
    console.log(proprieta);
    console.log(studente[proprieta]);
}

let studenti = [
    {
        "nome" : "Beatrice",
        "cognome" : "Gatta",
    },
    {
        "nome" : "Francesca",
        "cognome" : "Neri",
    },
    {
        "nome" : "Lorenzo",
        "cognome" : "Sambri",
    },
    {
        "nome" : "Chiara",
        "cognome" : "Pozzato",
    },
];

for (let i = 0; i < studenti.length; i++){
    let studentiArray = studenti[i];
    /* console.log(studentiArray); */

    let nomeStudente = studentiArray["nome"];
    let cognomeStudente = studentiArray["cognome"];

    console.log(nomeStudente);
    console.log(cognomeStudente);
}

let nomeNuovoStudente = {
    "nome" : prompt("inserisci il tuo nome"),
    "cognome" : prompt("inserisci il tuo cognome"),
    "eta" : prompt("inserisci la tua eta"),
} 

studenti.push(nomeNuovoStudente);
console.log(studenti);