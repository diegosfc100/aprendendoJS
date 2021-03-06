/* Acessar dados de matriz com índices

Podemos acessar os dados dentro de arrays usando índices.
Os índices de array são escritos na mesma notação de colchetes que as strings usam, exceto que, em vez de especificar
um caractere, eles especificam uma entrada na array. Assim como as strings, os arrays usam indexação baseada em zero,
portanto, o primeiro elemento em um array tem um índice 0.

Exemplo: */

var array = [50,60,70];
array[0]; // é igual a 50
var data = array [1]; // é igual a 60 */

/* Nota:
Não deve haver nenhum espaço entre o nome da matriz e os colchetes, como array [0].
Embora o JavaScript seja capaz de processar isso corretamente, isso pode confundir outros programadores que estejam lendo
seu código.

Crie uma variável chamada myData e defina-a para ser igual ao primeiro valor de myArray usando a notação de colchetes.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myArray = [50,60,70];
var myData = myArray[0];

//

var anos = [1990, 1969, 2012, 2000, 2001, 2012, 2020];

console.log(anos[0]);//1990
console.log(anos[1]);
console.log(anos[2]);
console.log(anos[3]);
console.log(anos[4]);
console.log(anos[5]);
console.log(anos[6]);//2020