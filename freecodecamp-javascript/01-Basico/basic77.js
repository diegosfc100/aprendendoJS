/* Retornando valores booleanos de funções.

Você deve se lembrar de Comparison with the Equality Operator que todos os operadores de comparação retornam um valor
booleano verdadeiro ou falso.

Às vezes, as pessoas usam uma instrução if / else para fazer uma comparação, como esta: */

function isEqual(a,b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
  

// Mas existe uma maneira melhor de fazer isso. Como === retorna verdadeiro ou falso, podemos retornar o resultado da comparação:

function isEqual(a, b) {
   return a === b;
}

//Corrija a função isLess para remover as instruções if / else.
//EXERCÍCIO RESOLVIDO ABAIXO: 

function isLess(a, b) {
    // Only change code below this line
    return a < b;
        // Only change code above this line
  }
  
  isLess(10, 15);