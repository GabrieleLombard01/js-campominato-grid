//JS RESET
console.log('JS OK');

//* FUNZIONI:

// Funzione che mi restituisce un numero rando ma non uno presente nella blacklist
const getUniqueRandomNumber = (min, max, blacklist) => {
    let randomNumber;

    // Continua a pescare finchè il numero random è presente nella blacklist
    do {
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
    }   while (blacklist.includes(randomNumber))
    return randomNumber;
}

//todo ---OPERAZIONI INIZIALI---

// Recupero gli elementi dal dom
const grid = document.getElementById('grid');

// Preparo i miei dati iniziali
const rows = 8;
const cols = 8;
const totalCells = cols * rows;

// Renderizzo le celle


//todo ---LOGICA---
