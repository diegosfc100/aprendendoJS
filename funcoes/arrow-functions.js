// Forma simplificada de escrever funções.

// Forma 1 
function somar1(num1, num2){
    return num1 + num2;
}
console.log(somar1(5, 50));


// Forma 2 
let somar2 = function(n1, n2){
    return n1 + n2;
}
console.log(somar2(7, 70));


// Forma 3
let somar3 = somar1;
console.log(somar3(10, 20));


// Arrow Function ( => )
let somar4 = (a1, a2) => {
    return a1 + a2;
}