function somar(num1, num2){ // a função 'somar' receberá 2 parametros de entrada.
    var res = num1 + num2; // oq a função irá fazer ? somar 2 numeros.

    return res;  // oq a função irá retornar? o resultado da soma.
}

var resultado = somar(11, 9); // chamando a função através de uma variável.
console.log(resultado)

//

function dividir(n1, n2){ 
    console.log(n1 / n2); // oq a função irá fazer ? imprimir a divisão de dois números.
}

dividir(100,50) // chamando a função.

//

function mensagem(){ // função sem parametro.
    console.log("Bom Dia!")
}

mensagem();

//

function parOuImpar(n){
    if(n % 2 === 0){
        return "PAR."
    }else{
        return "IMPAR."
    }
}

parOuImpar(15); // dessa forma o resultado nao será impresso.

console.log(parOuImpar(15)); // dessa forma o resultado será impresso.

res = parOuImpar(15);
console.log(res); // dessa forma o resultado será impresso.


/* Embora a declaração de função acima seja sintaticamente uma declaração,
funções também podem ser criadas por uma expressão de função. 
Tal função pode ser anônima; ele não tem que ter um nome. Por exemplo: */

var exemplo = function(numero) {return numero * numero};
var n = square(4) // x recebe o valor 16.


