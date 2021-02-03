/* Transformar um array declarado com const

A declaração const tem muitos casos de uso em JavaScript moderno.
Alguns desenvolvedores preferem atribuir todas as suas variáveis ​​usando const por padrão, a menos que saibam que precisarão
reatribuir o valor. Só nesse caso, eles usam let.

No entanto, é importante entender que os objetos (incluindo matrizes e funções) atribuídos a uma variável usando const 
ainda são mutáveis. Usar a declaração const apenas evita a reatribuição do identificador da variável. */

const n = [5, 6, 7];
n = [1, 2, 3]; // throws error, trying to assign a const
n[2] = 45; // works just as it would with an array declared with var or let
console.log(n); // returns [5, 6, 45]


/* Como você pode ver, você pode transformar o próprio objeto [5, 6, 7] e a variável s ainda apontará para o array alterado
[5, 6, 45]. Como todos os arrays, os elementos do array em s são mutáveis, mas como const foi usado, você não pode usar
o identificador de variável s para apontar para um array diferente usando o operador de atribuição.

Uma matriz é declarada como const s = [5, 7, 2]. Altere a matriz para [2, 5, 7] usando várias atribuições de elemento. */

const s = [5, 7, 2];
function editInPlace() {
    "use strict";

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
console.log(editInPlace());


