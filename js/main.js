//JS RESET
console.log('JS OK');

//* FUNZIONI:

// Funzione random number da min a max
const getRandomNumber = (min,max) => Math.floor(Math.random() * (max - min)) + min;

// Funzione che mi restituisce un numero rando ma non uno presente nella blacklist
const getUniqueRandomNumber = (min, max, blacklist) => {
    let randomNumber;

    // Continua a pescare finchè il numero random è presente nella blacklist
    do {
        randomNumber = Math.floor(Math.random() * (max - min)) + min;
    }   while (blacklist.includes(randomNumber))
    return randomNumber;
}
// Funzione per creare una cella
const createCell = (cellNumber) => {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerText = cellNumber;

    return cell;
}

//todo ---OPERAZIONI INIZIALI---

// Recupero gli elementi dal dom
const grid = document.getElementById('grid');

// Preparo i miei dati iniziali
const rows = 10;
const cols = 10;
const totalCells = cols * rows;

// Renderizzo le celle
for (let i = 1; i <= totalCells; i++) {

    const randomNumber = getRandomNumber(1, 100)

    const cell = createCell(randomNumber);

    cell.addEventListener('click', () => {
        cell.classList.add('clicked');
    });
    grid.appendChild(cell);
}

//todo ---LOGICA---
