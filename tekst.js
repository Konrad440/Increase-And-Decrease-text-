// 1. pobieramy wszystkie potrzebne elementy z DOM

const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');

const tekst = document.querySelector('p');

//1b. określamy potrzebne dane

let textSize = 20;  // początkowa wielkość font-size

// 1c. parametry początkowe
tekst.style.fontSize=textSize + "px";


// 2. ustawienie nasłuchiwania na przyciskach

btnIncrease.addEventListener('click', textIncrease);
btnDecrease.addEventListener('click',textDecrease);



// 3. określenie akcji - napisanie funkcji

function textIncrease(){
    textSize++;
    tekst.style.fontSize = textSize + "px";
}

function textDecrease(){
    textSize--;
    tekst.style.fontSize = textSize + "px";
}