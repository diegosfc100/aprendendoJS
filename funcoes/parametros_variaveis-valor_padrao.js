// Funções que não recebem nenhum argumento de entrada mas durante a execução podem receber quantos argumento quiser.

// Por padrão, mesmo que a função nao receba nada, Js cria um array chamado arguments que são os argumentos da função.

function somar1(){ 
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}
console.log(somar1()); 
console.log(somar1(5)); 
console.log(somar1(5, 5)); 
console.log(somar1(5, 5, 5)); 
console.log(somar1(5, 5, 5, 110)); 
console.log("========================")



function imprime_valores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

imprime_valores(); 
imprime_valores(0); 
imprime_valores(1, 2);
imprime_valores(3, 4, 5);
// por padrão sómente 2 valores seriam utilizados, mas através do arguments temos acesso a todos deles.
imprime_valores(6, 7, 8, 9, 10);
console.log("========================")

// Gambiarra 1

function somar2(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3;
}

//console.log(somar2(4, 5, 6)); // 15
//console.log(somar2()); // 6
//console.log(somar2(2)); // 7
//console.log(somar2(2, 2)); // 7
//console.log(somar2(2, 2, 2)); // 6
//console.log(somar2(2, 2, 2, 2)); // 6

//console.log(somar2(0, 0, 0)); // era pra ser 0, mas ele retorna 6

// Gambiarra 2

function somar3(num1, num2, num3){
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 2 : num2;
    num3 = isNaN(num3) ? 3 : num3;

    return num1 + num2 + num3;
}

// console.log(somar3(4, 5, 6)); // 15
// console.log(somar3()); // 6
// console.log(somar3(2)); // 7
// console.log(somar3(2, 2)); // 7
// console.log(somar3(2, 2, 2)); // 6
// console.log(somar3(2, 2, 2, 2)); // 6

// console.log(somar3(0, 0, 0)); // 0


// Forma atual - recomendada
function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

// console.log(somar4(4, 5, 6)); // 15
// console.log(somar4()); // 6
// console.log(somar4(2)); // 7
// console.log(somar4(2, 2)); // 7
// console.log(somar4(2, 2, 2)); // 6
// console.log(somar4(2, 2, 2, 2)); // 6
// console.log(somar4(0, 0, 0)); // 0

//console.log(somar4('a', 'b', 'c')); // 'abc'
//console.log(somar4(true, false, 'c')); // '1c'
//console.log(somar4(2, true, false)); // 3

/*
 Em JavaScript, 1 é considerado true e 0 é considerado false
*/


/*

function somar5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return -1;
    }
}


console.log(somar5(4, 5, 6)); // 15
console.log(somar5()); // 6
console.log(somar5(2)); // 7
console.log(somar5(2, 2)); // 7
console.log(somar5(2, 2, 2)); // 6
console.log(somar5(2, 2, 2, 2)); // 6
console.log(somar5(0, 0, 0)); // 0

console.log(somar5('a', 'b', 'c')); // 'abc'
console.log(somar5(true, false, 'c')); // '1c'
console.log(somar5(2, true, false)); // 3


*/