/* Nesting For Loops

Se você tiver uma matriz multidimensional, poderá usar a mesma lógica do waypoint anterior para percorrer
tanto a matriz quanto quaisquer submatrizes. Aqui está um exemplo: */

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}


/*Isso produz cada subelemento em arr, um de cada vez. Observe que, para o loop interno, estamos verificando o
comprimento de arr[i], uma vez que arr[i] é em si um array.

Modifique a função multiplyAll para que ela retorne o produto de todos os números nas submatrizes de arr. 

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

*/

function multiplyAll(arr) {
    var product = 1;
    
    for(var i = 0; i < arr.length; i++) {
      for(var j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
  
    return product;
  }

  multiplyAll([[1,2],[3,4],[5,6,7]]);