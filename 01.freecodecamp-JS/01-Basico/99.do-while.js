/* Iterar com JavaScript Do...While Loops

O próximo tipo de loop que você aprenderá é chamado de loop do...while. É chamado assim porque fará primeiro uma
passagem do código dentro do loop, não importa o que aconteça, e então continuará a executar o loop enquanto a condição
especificada for avaliada como verdadeira.

var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);


O exemplo acima se comporta de maneira semelhante a outros tipos de loops, e a matriz resultante será semelhante a
[0, 1, 2, 3, 4]. No entanto, o que faz do...while diferente de outros loops é como ele se comporta quando a condição 
falha na primeira verificação. Vamos ver isso em ação: Aqui está um loop while regular que executará o código no loop 
enquanto i <5:

var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}

Neste exemplo, inicializamos o valor de ourArray para um array vazio e o valor de i para 5.
Quando executamos o loop while, a condição é avaliada como falsa porque i não é menor que 5,
então não executamos o código dentro o laço. O resultado é que nossoArray terminará sem nenhum valor adicionado
a ele e ainda se parecerá com [] quando todo o código no exemplo acima tiver concluído a execução.
Agora, dê uma olhada em um loop do...while:

var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);


Nesse caso, inicializamos o valor de i para 5, assim como fizemos com o loop while. Quando chegamos à próxima linha, 
não há condição para avaliar, então vamos para o código dentro das chaves e o executamos. 
Vamos adicionar um único elemento ao array e, em seguida, incrementar i antes de chegarmos à verificação de condição. 
Quando finalmente avaliamos a condição i < 5 na última linha, vemos que agora i é 6, o que falha na verificação condicional,
saímos do loop e terminamos. No final do exemplo acima, o valor de ourArray é [5]. Essencialmente, um loop do...while
garante que o código dentro do loop será executado pelo menos uma vez. Vamos tentar fazer um loop do...while funcionar, 
empurrando valores para um array.

Altere o loop while no código para um loop do... while para que o loop empurre apenas o número 10 para
 myArray e i será igual a 11 quando seu código terminar de ser executado. 
 
 // Setup
var myArray = [];
var i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}

*/


var myArray = [];
var i = 10;

do{myArray.push(i);
  i++;
}while (i <= 10); 

console.log(myArray)