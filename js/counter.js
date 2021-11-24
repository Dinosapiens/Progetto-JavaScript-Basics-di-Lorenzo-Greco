let count = 0;
// Il contatore parte mostrando il valore 0 sul counterDisplay
let display = document.querySelector("#counterDisplay");
let up = document.querySelector("#upButton");
let down = document.querySelector("#downButton");
//Le variabili up e down sono collegate ai bottoni + e -

function add(){
    count++;
    display.innerHTML = count;
} //Funzione che si occupa di incrementare di 1 il valore di "count"


function subtract() {
    count--;
    display.innerHTML = count;
} //Funzione che si occupa di decrementare di 1 il valore di "count"

up.addEventListener("click", add);
down.addEventListener("click", subtract);