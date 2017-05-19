function jsfunction(){
    $("#object5").text($("#valor-selecionado").val())
}

function jsfunction2(){
    $("#object5").text($("#valor-texto").val())
}

$( document ).ready(function() {
    $('input[id=valor-texto]').mask('##,##');
});

function jsPrint(){
  window.print();
}

function jsCalc(valor) {
  let valores = [20, 10, 5, 2];
  let fichas = [];

  for (var i = 0; i < valores.length; i++) {
    while (valor % valores[i] == 0) {
      fichas.push(valores[i]);
      valor = valor - valores[i];
      console.log(valores[i]);
    }
  }

  // if (valor % valorFicha == 0) {
  //   while (valor % valorFicha == 0) {
  //     fichas.push(valorFicha);
  //     valor = valor/valorFicha;
  //   }
  // }

  return fichas;
}
