/* Remover itens usando splice()

Ok, então aprendemos como remover elementos do início e do final de matrizes usando shift() e pop(), mas e se quisermos
remover um elemento de algum lugar no meio? Ou remover mais de um elemento de uma vez? Bem, é aí que entra o splice().

Splice() nos permite fazer exatamente isso: remover qualquer número de elementos consecutivos de qualquer lugar em um
array.

splice() pode ter até 3 parâmetros, mas por agora, vamos nos concentrar apenas nos primeiros 2. Os primeiros dois 
parâmetros de splice() são inteiros que representam índices, ou posições, do array que splice() está sendo chamado.
E lembre-se, os arrays são indexados por zero, então para indicar o primeiro elemento de um array, usaríamos o primeiro
parâmetro de 0. splice() representa o índice do array a partir do qual começar a remover elementos, enquanto o segundo 
parâmetro indica o número de elementos a serem excluídos. Por exemplo:

let array = ['hoje', 'era', 'não', 'então', 'ótimo'];

array.splice(2, 2);
// remove 2 elementos começando com o terceiro elemento
// array agora é igual a ['hoje', 'era', 'ótimo']

splice() não apenas modifica a matriz em que está sendo chamada, mas também retorna uma nova matriz contendo o valor
dos elementos removidos:

let array = ['Eu', 'sou', 'sentindo', 'realmente', 'feliz'];

let newArray = array.splice(3, 2);
// newArray é igual a ['realmente', 'feliz']

Inicializamos um array arr. Use splice() para remover elementos de arr, de modo que contenha apenas elementos que somam
o valor de 10 : 

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);

*/

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,1);
console.log(arr);

arr.splice(3,4);
console.log(arr);

