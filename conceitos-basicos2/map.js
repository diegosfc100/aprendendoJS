// Utilizamos o map para realizar transformações num Array.

var valores = [2, 4, 6, 8, 10];
console.log(valores);

// 2 formas de se fazer a mesma coisa.
//forma 1
var dobro = valores.map(function(valor){ //o map assim como forEach também é uma estrutura de repetição mais moderna.
    return valor * 2;
})
console.log(dobro);


//forma 2
function dobrar(valor){
    return valor * 2
}

dobro = valores.map(dobrar);
console.log(dobro);


// encadeando maps para realizar multiplas funções
function soma_5(valor){
    return valor + 5;
}

function dividir_2(valor){
    return valor / 2;
}

var resultado = valores.map(dobrar).map(soma_5).map(dividir_2);
console.log(resultado);