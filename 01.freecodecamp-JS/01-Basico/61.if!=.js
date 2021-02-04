/* Comparação com o operador de desigualdade.

O operador de desigualdade (!=) É o oposto do operador de igualdade. Significa "Diferente" e retorna falso,
onde a igualdade retornaria verdadeiro e vice-versa. Como o operador de igualdade, o operador de desigualdade
converterá tipos de dados de valores durante a comparação.

1 != 2 // verdadeiro
1 != "1" // falso
1 != '1' // falso
1 != true // falso
0 != 0 // falso

Adicione o operador de desigualdade != Na instrução if para que a função retorne "Not Equal" quando val não for
equivalente a 99.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);