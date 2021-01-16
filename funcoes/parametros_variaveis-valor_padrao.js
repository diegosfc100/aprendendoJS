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


// VALOR PADRÃO - Forma atual (recomendada)
function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

console.log(somar4(4, 5, 6)); 
console.log(somar4()); 
console.log(somar4(2)); 
console.log(somar4(2, 2)); 
console.log(somar4(2, 2, 2)); 
console.log(somar4(2, 2, 2, 2)); 
console.log(somar4(0, 0, 0));
console.log("========================")

console.log(somar4('a', 'b', 'c')); 
console.log(somar4(true, false, 'c')); 
console.log(somar4(2, true, false)); 
console.log("========================")

//

function somar5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){ 
        // se os valores forem numeros faça a soma, se não retorne que a mensagem não foi possivel.
        return num1 + num2 + num3;
    }else{
        return "Não foi possível efetuar a soma.";
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
