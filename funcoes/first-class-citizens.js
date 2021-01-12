// Em Javascript Funções funcionam como cidadões de primeira classe, ou seja, podemos utiliza-la como tipo de dado.

function soma(n1, n2){
    return n1 + n2;
}

let executar = soma(10, 90); // função sendo chamada dentro da variavel;
console.log(executar);

// 

console.log(soma(55, 55)) // função sendo chamada dentro do console.log


//Exemplo 2

function subtrair(num1, num2){
    return num1 - num2;
}

function faz_algo(num1, num2, funcao){
    return funcao(num1, num2);
}

console.log(faz_algo(100, 50, soma));
console.log(faz_algo(300, 50, subtrair));


//Exemplo3

function outra(outraFuncao){ // função que recebe como parametro outra função e que irá retornar essa outra função.
    return outraFuncao;
}

const ret = outra(soma);
console.log(ret(15, 35));


//Exemplo 4 - função dentro de um array

let valores = ["Diego", 30, 1.73, true, soma];

for(let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i]));
}
