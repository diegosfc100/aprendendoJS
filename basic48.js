/* Passando Valores para Funções com Argumentos.

Parâmetros são variáveis que agem como marcadores para os valores que devem ser inseridos em uma função
quando ela é chamada. Quando uma função é definida, normalmente ela é definida junto com um ou mais PARÂMETROS.
Os valores reais que são inseridos (ou "passados") em uma função quando ela é chamada são conhecidos como ARGUMENTOS.

Aqui está uma função com dois parâmetros, param1 e param2: */

function testFun(param1, param2) {
   console.log (param1, param2);
}

/* Então, podemos chamar testFun: testFun("Hello", "World"); Passamos dois argumentos, "Hello" e "World". 
Dentro da função, param1 será igual a "Hello" e param2 será igual a "World".
Observe que você poderia chamar testFun novamente com argumentos diferentes e os parâmetros assumiriam
o valor dos novos argumentos.

Crie uma função chamada functionWithArgs que aceita dois argumentos e envia sua soma para o console dev.
Chame a função com dois números como argumentos.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

function functionWithArgs(param1, param2){
    console.log(param1 + param2);
}

functionWithArgs(10, 20);