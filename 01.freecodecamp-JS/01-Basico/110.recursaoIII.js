/* Use a recursão para criar um intervalo de números

Continuando com o desafio anterior, oferecemos a você outra oportunidade de criar uma função recursiva para resolver
um problema.

Definimos uma função chamada rangeOfNumbers com dois parâmetros. A função deve retornar uma matriz de inteiros
que começa com um número representado pelo parâmetro startNum e termina com um número representado pelo parâmetro endNum.
O número inicial será sempre menor ou igual ao número final. Sua função deve usar recursão chamando a si mesma e não usar
loops de nenhum tipo. Também deve funcionar para casos em que startNum e endNum são iguais. */

function rangeOfNumbers(startNum, endNum) {
   var results = [];
   if(startNum == endNum){
       return [startNum];
   }else{
       var numbers = rangeOfNumbers(startNum, endNum - 1);
       numbers.push(endNum);
       return numbers;
   }
  };