/* Comparação com o operador de igualdade.

Existem muitos operadores de comparação em JavaScript. Todos esses operadores retornam um valor booleano verdadeiro ou falso.

O operador mais básico é o operador de igualdade ==. O operador de igualdade compara dois valores e retorna verdadeiro
se eles forem equivalentes ou falso se não forem. Observe que a igualdade é diferente da atribuição (=),
que atribui o valor à direita do operador a uma variável à esquerda. */

function EquityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}

/* Se myVal for igual a 10, o operador de igualdade retornará true, então o código entre chaves será executado e a função
retornará "Equal". Caso contrário, a função retornará "Diferente". Para que o JavaScript compare dois tipos de dados diferentes
(por exemplo, números e strings), ele deve converter um tipo em outro. Isso é conhecido como "Tipo de coerção".
Depois de fazer isso, no entanto, ele pode comparar os termos da seguinte forma:

1 == 1 // verdadeiro
1 == 2 // falso
1 == '1' // verdadeiro
"3" == 3 // verdadeiro

Adicione o operador de igualdade à linha indicada para que a função retorne "Equal" quando val for equivalente a 12.
EXERCÍCIO RESOLVIDO ABAIXO: */ 

// Setup
function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);