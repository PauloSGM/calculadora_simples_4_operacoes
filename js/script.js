
function printNumber(n) {
    if (typeof gvisor == 'undefined') {
       ddocument.getElementById("numero-tela") = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + n;
    gvisor = 1;
};
function calcOper(oper, valor1, valor2) {
    if (oper == "somar") {
       var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
       if (oper == "subtrair") {
          var valor = valor1 - valor2;
       } else {
          if (oper == "multiplicar") {
             var valor = valor1 * valor2;
          } else {
             var valor = valor1 / valor2;
          }
       }
    }
 
    return(valor);




function reset() {
    document.getElementById("numero-tela").innerHTML = "0";};
function limpaTela() {
    document.getElementById("numero-tela").innerHTML = "0";};