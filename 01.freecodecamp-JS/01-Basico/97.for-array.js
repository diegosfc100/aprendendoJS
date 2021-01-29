/* Iterar por meio de uma matriz com um loop for.

Uma tarefa comum em JavaScript é iterar pelo conteúdo de um array. 
Uma maneira de fazer isso é com um loop for. Este código produzirá cada elemento da matriz para o console:

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}


Lembre-se de que os arrays têm indexação baseada em zero, o que significa que o último índice do array é length - 1.
Nossa condição para este loop é i <arr.length, que interrompe o loop quando i é igual a length.
Neste caso, a última iteração é i === 4, ou seja, quando i se torna igual a arr.length e produz 6 para o console.

Declare e inicialize um total de variável para 0. Use um loop for para adicionar o valor de cada elemento da matriz
myArr ao total. */


var myArr = [2, 3, 4, 5, 6];

var total = 0;

for(var i = 0; i < myArr.length; i++){
  total = total + myArr[i];
}


