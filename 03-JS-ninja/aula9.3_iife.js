// IIFE Funções auto executáveis ()
function sum(){
    return 1 + 3;
}
console.log( sum() ); // 4


var sum2 = function(){
    return 3 + 2;
};
console.log( sum2() ); // 5


var sum3 = function otherSum(){
    return 5 + 8;
};
//console.log(otherSum() ); // Erro , não consegue executá-la pois ela está no escopo da variável


// Não há como executar funções anônimas chamando-as, deve-se chama-las usando '()', desta forma:
    (function(){
        console.log( 20 + 2 );
    })();  