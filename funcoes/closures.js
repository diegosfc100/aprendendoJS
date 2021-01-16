/* Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico
mesmo quando ela está sendo executada fora de seu escopo léxico. */

var a = 2;
function soma() {
    var b = 3;
    return a + b;
}
console.log(soma());    // 5

/* Neste caso, temos dois escopos, o definido pela função soma e o global.
Ao chamar a função, a engine encontra dentro do escopo da função soma apenas a variável b,
como ela também necessita do valor da variável a, uma busca é feita no escopo externo,
no caso, o global. Encontrado o valor, a operação segue normalmente, retornando o valor da soma das variáveis. */

//


let xuxa = 'global'; // pode ser acessada globalmente no nosso projeto

function imprimir(){
    console.log(xuxa);
}

function outra(){ // variaveis locais tem precedencia sobre as globais, ou seja, serão executadas primeiro em caso de terem o mesmo nome.
    let xuxa = 'local'; // pode ser acessada localmente no bloco/contexto
    imprimir();
    console.log(xuxa); // local
}
outra(); // ??


// Novo exemplo
let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel; // local
    }

    return interna;
}

let executa = externa();

console.log(executa()); // local

