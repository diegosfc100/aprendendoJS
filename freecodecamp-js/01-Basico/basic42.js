/* Manipular matrizes com push()

Uma maneira fácil de anexar dados ao final de uma matriz é por meio da função push().
.push() pega um ou mais parâmetros e os "empurra" para o final do array.

Exemplos: */

var arr1 = [1,2,3];
arr1.push(4);
// arr1 agora é [1,2,3,4]

var arr2 = ["Stimpson", "J", "gato"];
arr2.push (["feliz", "alegria"]);
// arr2 agora é igual a ["Stimpson", "J", "gato", ["feliz", "alegria"]] 

/* Empurre ["dog", 3] no final da variável myArray.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])
