var d1 = ""
var d2 = ""
var d4 = ""
var d5 = ""
var d6 = ""
var d7 = ""
var d8 = ""
var d9 = ""
var d10 = ""
function printNumber(n) {
    d2 = n
    d1 = document.getElementById("numero-tela").value;
    document.getElementById("numero-tela").value = d1 + d2;
    totalDigitado = d1 + d2;
    
    
};

function reset() {
    document.getElementById("numero-tela").value = "0";};
function limpaTela() {
    document.getElementById("numero-tela").value = "0";};