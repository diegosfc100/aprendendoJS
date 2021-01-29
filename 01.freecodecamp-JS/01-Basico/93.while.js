/* Iterar com JavaScript While Loops.

Você pode executar o mesmo código várias vezes usando um loop.

O primeiro tipo de loop que aprenderemos é chamado de loop while porque é executado "enquanto" 
uma condição especificada é verdadeira e para quando essa condição não é mais verdadeira. */

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

console.log(ourArray);

/* No exemplo de código acima, o loop while será executado 5 vezes e acrescentará os números de 0 a 4 ao ourArray.

Vamos tentar fazer com que um loop while funcione enviando valores para um array.
Adicione os números de 5 a 0 (inclusive) em ordem decrescente para myArray usando um loop while. */

var myArray = [];

var i = 5;

while(i > -1) {
  myArray.push(i);
  i--;
}

console.log(myArray)