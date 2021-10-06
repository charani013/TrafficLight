let messageJsRed = document.getElementById("stopLight");
let messageJsYellow = document.getElementById("readyLight");
let messageJsGreen = document.getElementById("goLight");
let buttonsJsRed = document.getElementById("stopButton");
let buttonsJsYellow = document.getElementById("readyButton");
let buttonsJsGreen = document.getElementById("goButton");

function buttonJsRed() {
    messageJsRed.style.backgroundColor = "#cf1124";
    messageJsYellow.style.backgroundColor = "#4b5069";
    messageJsGreen.style.backgroundColor = "#4b5069";
    buttonsJsRed.style.backgroundColor = "#cf1124";
    buttonsJsYellow.style.backgroundColor = "#1f1d41";
    buttonsJsGreen.style.backgroundColor = "#1f1d41";

}

function buttonJsYellow() {
    messageJsRed.style.backgroundColor = "#4b5069"
    messageJsYellow.style.backgroundColor = "#f7c948"
    messageJsGreen.style.backgroundColor = "#4b5069"
    buttonsJsRed.style.backgroundColor = "#1f1d41"
    buttonsJsYellow.style.backgroundColor = "#f7c948"
    buttonsJsGreen.style.backgroundColor = "#1f1d41"
}

function buttonJsGreen() {
    messageJsRed.style.backgroundColor = "#4b5069"
    messageJsYellow.style.backgroundColor = "#4b5069"
    messageJsGreen.style.backgroundColor = "#199473"
    buttonsJsRed.style.backgroundColor = "#1f1d41"
    buttonsJsYellow.style.backgroundColor = "#1f1d41"
    buttonsJsGreen.style.backgroundColor = "#199473"
}