/* Comparação com o operador menor ou igual a.

O operador menor ou igual a (<=) compara os valores de dois números.
Se o número à esquerda for menor ou igual ao número à direita, ele retorna verdadeiro. 
Se o número à esquerda for maior que o número à direita, ele retornará falso.
Como o operador de igualdade, menor ou igual a converte tipos de dados.

4 <= 5 // verdadeiro
'7' <= 7 // verdadeiro
5 <= 5 // verdadeiro
3 <= 2 // falso
'8' <= 4 // falso

Adicione o operador menor ou igual a às linhas indicadas para que as instruções de retorno façam sentido.

EXERCÍCIO RESOLVIDO ABAIXO: */ 


function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);