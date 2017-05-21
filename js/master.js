function jsfunction() {
  $("#object5").text($("#valor-selecionado").val())
}

function jsfunction2() {
  $("#object5").text($("#valor-texto").val())
}

function jsPrint(){
  window.print();
}

//TODO
function jsCalc(valor) {
  let valores = [20, 10, 5, 2];
  let fichas = [];
  let aux = 0;

  for (var i = 0; i < valores.length; i++) {
    while (valor % valores[i] == 0 && valor != 0 && aux < 3) {
      fichas.push(valores[i]);
      valor = valor / valores[i];
      aux++;
    }
    aux=0;
  }

  return fichas;
}

$(document).ready(function() {
  //  $('input[id=valor-texto]').mask('#,##');
});