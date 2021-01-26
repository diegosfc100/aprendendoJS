/* Comparação com o maior ou igual ao operador.

O operador maior ou igual a (>=) compara os valores de dois números. Se o número à esquerda for maior ou igual
ao número à direita, ele retorna verdadeiro. Caso contrário, retorna falso.

Como o operador de igualdade, maior ou igual ao operador converterá os tipos de dados durante a comparação.

Exemplos

6 >= 6 // verdadeiro
7 >= '3' // verdadeiro
2 >= 3 // falso
'7'>= 9 // falso

Adicione o operador maior ou igual a às linhas indicadas para que as instruções de retorno façam sentido. 

EXERCÍCIO RESOLVIDO ABAIXO: */ 

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);