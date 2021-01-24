/* Atribuição composta com adição aumentada

Na programação, é comum usar atribuições para modificar o conteúdo de uma variável. 
Lembre-se de que tudo à direita do sinal de igual é avaliado primeiro, então podemos dizer:

minhaVar = minhaVar + 5;

para adicionar 5 a myVar. Uma vez que este é um padrão tão comum, existem operadores que realizam
uma operação matemática e uma atribuição em uma única etapa.

Um desses operadores é o operador +=

var myVar = 1;
minhaVar += 5;
console.log (myVar); // Retorna 6

Converta as atribuições de a, b e c para usar o operador +=.

var a = 3;
var b = 17;
var c = 12;

// Only change code below this line


EXERCÍCIO RESOLVIDO ABAIXO: */ 

var a = a + 12;
var b = 9 + b;
var c = c + 7;

a += 12;
b += 9 ;
c += 7 ;

//

var idade = 30

idade += 10;
console.log(idade);

// 

var ano = 2021

ano += 29;
console.log(ano);