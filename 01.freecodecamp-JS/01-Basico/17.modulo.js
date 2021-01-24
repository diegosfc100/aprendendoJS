/* Encontrar um resto em JavaScript

O operador restante % fornece o restante da divisão de dois números.

Exemplo:

     5 % 2 = 1 
     Math.floor (5/2) = 2 (Quociente)
     2 * 2 = 4
     5 - 4 = 1 (restante)

Uso:
Em matemática, um número pode ser verificado para ser par ou ímpar verificando o restante da divisão do número por 2.

     17 % 2 = 1 (17 é ímpar)
     48 % 2 = 0 (48 é par)

Nota:
O operador restante às vezes é chamado incorretamente de operador de "módulo". É muito semelhante ao módulo,
mas não funciona corretamente com números negativos.

Defina o restante igual ao restante de 11 dividido por 3 usando o operador de restante (%).

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var remainder = 11 % 3;

//

var impar = 3 % 2; // se tem resto 1 é impar.
console.log("resto", impar);

var par = 10 % 2;
console.log("resto", par); // se tem resto 0 é par.