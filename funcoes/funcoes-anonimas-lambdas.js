// Funções que não tem nome.

let numbers = [3, 6, 9, 12, 15];

function dobrar(valor){
    return valor * 2;
}

let res = numbers.map(dobrar);

console.log(numbers);
console.log(res);


// Lambda
let res2 = numbers.map(function(valor){
    return valor * 2;
});

console.log(res2);