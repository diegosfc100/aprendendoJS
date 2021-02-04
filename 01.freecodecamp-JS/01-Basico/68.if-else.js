/* Apresentando outras declarações.

Quando uma condição para uma instrução if é verdadeira, o bloco de código seguinte é executado. 
E quando essa condição for falsa? Normalmente nada aconteceria. Com uma instrução else, um bloco alternativo 
de código pode ser executado.

if (num > 10) {
   retornar "Maior que 10";
} else {
   retornar "10 ou menos";
}

Combine as instruções if em uma única instrução if / else.
EXERCÍCIO RESOLVIDO ABAIXO: */ 


function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }else{
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}

console.log(testElse(4));

//


function aposento(idade){
  resposta = ""

  if(idade >= 65){
    resposta = "Já pode se aposentar."
  }else{
    resposta = "Aguarde mais um pouco."  
  }
  return resposta;
}

console.log(aposento(64));