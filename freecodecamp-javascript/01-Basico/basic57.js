/* Use lógica condicional com instruções If.

As instruções If são usadas para tomar decisões no código. A palavra-chave if diz ao JavaScript para executar o código
entre chaves sob certas condições, definidas entre parênteses. Essas condições são conhecidas como condições booleanas
e só podem ser verdadeiras ou falsas.

Quando a condição é avaliada como verdadeira, o programa executa a instrução dentro das chaves. 
Quando a condição booleana for avaliada como falsa, a instrução dentro das chaves não será executada. */

function test(myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"


/* Quando test é chamado com um valor true, a instrução if avalia myCondition para ver se ela é verdadeira ou não.
Como é verdade, a função retorna "Era verdade". Quando chamamos test com um valor false, myCondition não é true 
e a instrução entre chaves não é executada e a função retorna "It was false".

Crie uma instrução if dentro da função para retornar "Yes, that was true" se o parâmetro wasThatTrue for verdadeiro
e retornar "No, that was false" caso contrário.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
        return "Yes, that was true"
    }
    return "No, that was false"
}