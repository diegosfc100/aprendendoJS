/* Comparação com o operador maior que.

O operador maior que (>) compara os valores de dois números. Se o número à esquerda for maior que o número à direita,
ele retornará verdadeiro. Caso contrário, retorna falso.

Como o operador de igualdade, o operador maior que converterá tipos de dados de valores durante a comparação.

Exemplos

5 > 3 // verdadeiro
7 > '3' // verdadeiro
2 > 3 // falso
'1'> 9 // falso

Adicione o operador maior que às linhas indicadas para que as instruções de retorno façam sentido.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);