function somar(num1, num2){ // a função 'somar' receberá 2 parametros de entrada.
    var res = num1 + num2; // oq a função irá fazer ? somar 2 numeros.

    return res; 
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