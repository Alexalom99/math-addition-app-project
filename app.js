// Buena suerte!

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let num1 = getRandomInt(10);
let num2 = getRandomInt(10);

let result = num1 + num2;

document.querySelector("#primary-number").textContent = num1;
document.querySelector("#secondary-number").textContent = num2;

let btn = document.querySelector("#btn");
let guess = document.querySelector("#guess");
let message = document.querySelector("#message");

btn.addEventListener("click", function () {
    if (guess.value == result) {
        message.textContent = "¡La suma es correcta!";
    }
    else {
        message.textContent = "aaaaaaaa"
    }
})
