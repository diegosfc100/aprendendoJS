/* Use uma Array para armazenar uma coleção de dados

A seguir está um exemplo da implementação mais simples de uma estrutura de dados de array. Isso é conhecido como array 
unidimensional, o que significa que tem apenas um nível ou que não possui outros arrays aninhados dentro dele.
Observe que ele contém booleanos, strings e números, entre outros tipos de dados JavaScript válidos:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
// logs 7

Todos os arrays têm uma propriedade de comprimento, que conforme mostrado acima, pode ser acessada facilmente com a
sintaxe Array.length. Uma implementação mais complexa de um array pode ser vista abaixo. Isso é conhecido como uma 
matriz multidimensional ou uma matriz que contém outras matrizes. Observe que esse array também contém objetos
JavaScript, que examinaremos bem de perto na próxima seção, mas, por enquanto, tudo o que você precisa saber é que
os arrays também são capazes de armazenar objetos complexos.

let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];

Definimos uma variável chamada yourArray. Conclua a instrução atribuindo uma matriz de pelo menos 5 elementos de
comprimento à variável yourArray. Seu array deve conter pelo menos uma string, um número e um booleano. */

let yourArray = ['Diego', 1990, true, 2021, 'bomdia'];