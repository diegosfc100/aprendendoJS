/* Escopo e funções locais.

As variáveis que são declaradas dentro de uma função, bem como os parâmetros da função, têm escopo local.
Isso significa que eles são visíveis apenas dentro dessa função.

Aqui está uma função myTest com uma variável local chamada loc.

function myTest () {
   var loc = "foo";
   console.log (loc);
}
myTest(); 
console.log(loc); // loc não está definido

loc não é definido fora da função.

O editor tem dois console.logs para ajudá-lo a ver o que está acontecendo. Verifique o console enquanto você codifica
para ver como ele muda. Declare uma variável local myVar dentro de myLocalScope e execute os testes.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

function myLocalScope(){
    var myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);