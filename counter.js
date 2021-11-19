let count = 0;

let display = document.querySelector("#counterDisplay");
let up = document.querySelector("#upButton");
let down = document.querySelector("#downButton");

up.addEventListener("click",() => {
    count++;
    display.innerHTML = count;
});

down.addEventListener("click",() => {
    count--;
    display.innerHTML = count;
});