/* Iterar por meio de todos os itens de uma matriz usando loops for

Às vezes, ao trabalhar com matrizes, é muito útil poder iterar em cada item para encontrar um ou mais elementos 
de que possamos precisar, ou manipular uma matriz com base em quais itens de dados atendem a um determinado conjunto
de critérios. JavaScript oferece vários métodos integrados em que cada itera sobre arrays de maneiras ligeiramente
diferentes para obter resultados diferentes (como every(), forEac(), map(), etc.), porém a técnica que é mais 
flexível e nos oferece o melhor quantidade de controle é um simples loop for. */

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));


/* Usando um loop for, essa função itera e acessa cada elemento do array e o submete a um teste simples que criamos. 
Dessa forma, determinamos de maneira fácil e programática quais itens de dados são maiores que 10 e retornamos um
novo array, [12, 14, 80], contendo esses itens.

Definimos uma função, FilterArray, que recebe arr, um array aninhado e elem como argumentos, e retorna um novo array.
elem representa um elemento que pode ou não estar presente em uma ou mais matrizes aninhadas em arr. 
Modifique a função, usando um loop for, para retornar uma versão filtrada do array passado de forma que qualquer
array aninhado em arr contendo elem tenha sido removido.

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

*/

function filteredArray(arr, elem) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) == -1){
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) );