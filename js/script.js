var d1 = "";
var d2 = "";

function printNumber(n) {
    function reset() {
        document.getElementById("numero-tela").value = "";};
    d2 = n.toString()
    d1 = document.getElementById("numero-tela").value;
    document.getElementById("numero-tela").value = d1 + d2;
};



function calc() {
    var digitado = d1 + d2;
    document.getElementById('numero-tela').value = eval(digitado);

}

function reset() {
    document.getElementById("numero-tela").value = "";
};
function limpaTela() {
    document.getElementById("numero-tela").value = "";
};