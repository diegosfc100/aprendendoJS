/* Adicionar pares de valores-chave a objetos JavaScript

Basicamente, os objetos são apenas coleções de pares de valores-chave. Em outras palavras, eles são pedaços de dados
(valores) mapeados para identificadores exclusivos chamados propriedades (chaves). Dê uma olhada em um exemplo:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

O código acima define um objeto de personagem de videogame Tekken chamado tekkenCharacter. Ele possui três propriedades,
cada uma delas mapeada para um valor específico. Se você quiser adicionar uma propriedade adicional, como "origem",
pode ser feito atribuindo origem ao objeto:

tekkenCharacter.origin = 'Coreia do Sul';

Isso usa notação de ponto. Se você observar o objeto tekkenCharacter, ele agora incluirá a propriedade origin. 
Hwoarang também tinha um cabelo laranja distinto. Você pode adicionar essa propriedade com a notação de colchetes 
fazendo:

tekkenCharacter['cor do cabelo'] = 'tingido de laranja';

A notação de colchetes é necessária se sua propriedade tiver um espaço ou se você quiser usar uma variável para nomear
a propriedade. No caso acima, a propriedade é colocada entre aspas para denotá-la como uma string e será adicionada 
exatamente como mostrado. Sem aspas, ela será avaliada como uma variável e o nome da propriedade será o valor da 
variável. Aqui está um exemplo com uma variável:

const olhos = 'cor dos olhos';

tekkenCharacter[olhos] = 'castanho';

Depois de adicionar todos os exemplos, o objeto ficará assim:

{
  jogador: 'Hwoarang',
  estilo de luta: 'Tae Kwon Doe',
  humano: true,
  origem: 'Coreia do Sul',
  'cor do cabelo': 'tingido de laranja',
  'cor dos olhos': 'castanho'
};

Um objeto de alimentos foi criado com três entradas. Usando a sintaxe de sua escolha, adicione mais três entradas 
a ela: bananas com valor de 13, uvas com valor de 35 e morangos com valor de 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);

*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);