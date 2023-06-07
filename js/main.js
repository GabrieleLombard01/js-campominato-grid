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

const number = getUniqueRandomNumber(1, 20, [3, 7]);