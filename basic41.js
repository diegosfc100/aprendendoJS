/* Acesse Arrays multidimensionais com índices

Uma maneira de pensar em um array multidimensional é como um array de arrays.
Quando você usa colchetes para acessar sua matriz, o primeiro conjunto de colchetes
se refere às entradas na matriz mais externa (o primeiro nível) e cada par adicional de colchetes
se refere ao próximo nível de entradas dentro.

Exemplo: */ 

var arr = [
   [1,2,3],
   [4,5,6],
   [7,8,9],
   [[10,11,12], 13, 14]
];
arr [3]; // é igual a [[10,11,12], 13, 14]
arr [3][0]; // é igual a [10,11,12]
arr [3][0][1]; // é igual a 11

/*Nota
Não deve haver nenhum espaço entre o nome do array e os colchetes,
como array [0][0] e mesmo este array [0] [0] não é permitido. Embora o JavaScript
seja capaz de processar isso corretamente, isso pode confundir outros programadores que estejam lendo seu código.

Usando a notação de colchetes, selecione um elemento de myArray de forma que myData seja igual a 8. 
EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];



