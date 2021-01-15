/* Manipular matrizes com unshift()

Você pode não apenas deslocar elementos do início de uma matriz, mas também remover elementos do início de uma matriz, 
ou seja, adicionar elementos na frente da matriz.

.unshift() funciona exatamente como .push(), mas em vez de adicionar o elemento no final do array,
unshift() adiciona o elemento no início do array.

Exemplo: */

var ourArray = ["Stimpson", "J", "gato"];
ourArray.shift(); // ourArray agora é igual a ["J", "cat"]
ourArray.unshift("Happy");
// ourArray agora é igual a ["Happy", "J", "cat"]

/* Adicione ["Paul", 35] ao início da variável myArray usando unshift().

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);