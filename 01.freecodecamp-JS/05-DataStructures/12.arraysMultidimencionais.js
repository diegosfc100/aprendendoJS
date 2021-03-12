/* Crie arrays multidimensionais complexas

Impressionante! Você acabou de aprender muito sobre matrizes! Esta foi uma visão geral de alto nível e há muito mais
para aprender sobre como trabalhar com arrays, muitos dos quais você verá em seções posteriores. Mas antes de 
prosseguirmos para a análise de Objetos, vamos dar mais uma olhada e ver como os arrays podem se tornar um pouco mais 
complexos do que o que vimos nos desafios anteriores.

Um dos recursos mais poderosos quando se pensa em arrays como estruturas de dados, é que os arrays podem conter,
ou mesmo ser completamente compostos por outros arrays. Vimos arrays que contêm arrays em desafios anteriores, 
mas bastante simples. No entanto, os arrays podem conter uma profundidade infinita de arrays que podem conter outros 
arrays, cada um com seus próprios níveis arbitrários de profundidade e assim por diante. Dessa forma, uma matriz pode 
rapidamente se tornar uma estrutura de dados muito complexa, conhecida como uma matriz multidimensional ou aninhada. 
Considere o seguinte exemplo: */

let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

  

/* A arrays 'profunda' está aninhada em 2 níveis de profundidade. As matrizes 'mais profundas' têm 3 níveis de 
profundidade. As matrizes mais profundas têm 4 níveis e as mais profundas? é 5.

Embora este exemplo possa parecer complicado, esse nível de complexidade não é inédito, ou mesmo incomum,
ao lidar com grandes quantidades de dados. No entanto, ainda podemos acessar facilmente os níveis mais profundos
de uma matriz deste complexo com a notação de colchetes:

console.log (nestedArray [2] [1] [0] [0] [0]);

Isso registra a string deepest-est ?. E agora que sabemos onde esse dado está, podemos redefini-lo se precisarmos:

nestedArray [2] [1] [0] [0] [0] = 'deeper still';

Agora ele registra ainda mais profundamente.

Definimos uma variável, myNestedArray, igual a um array. Modifique myNestedArray, usando qualquer combinação de
strings, números e booleanos para elementos de dados, de modo que tenha exatamente cinco níveis de profundidade 
(lembre-se de que o array mais externo é o nível 1). Em algum lugar no terceiro nível, inclua a string deep,
no quarto nível, inclua a string deeper, e no quinto nível, inclua a string deepest. 

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];

*/

let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', ['deep', ['deeper', ['deepest']]]],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];