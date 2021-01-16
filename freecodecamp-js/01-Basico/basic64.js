/* Comparação com o menos que o operador.

O operador menor que (<) compara os valores de dois números. Se o número à esquerda for menor que o número à direita,
ele retorna verdadeiro. Caso contrário, retorna falso. Como o operador de igualdade, o operador menor que converte os
tipos de dados durante a comparação.

2 < 5 // verdadeiro
'3' < 7 // verdadeiro
5 < 5 // falso
3 < 2 // falso
'8' < 4 // falso

Adicione o operador menor que às linhas indicadas para que as instruções de retorno façam sentido.

EXERCÍCIO RESOLVIDO ABAIXO: */ 


function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);