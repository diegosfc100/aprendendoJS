/* Retorne os maiores números em matrizes

Retorne uma matriz que consiste no maior número de cada submatriz fornecida. 
Para simplificar, a matriz fornecida conterá exatamente 4 submatrizes.

Lembre-se de que você pode iterar por meio de uma matriz com um loop for simples e acessar cada membro com a sintaxe
de matriz arr [i]. 

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

*/

function largestOfFour(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (max < arr[i][j]) {
                max = arr[i][j];
            }
        }
        newArr.push(max);
    }
    return newArr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);