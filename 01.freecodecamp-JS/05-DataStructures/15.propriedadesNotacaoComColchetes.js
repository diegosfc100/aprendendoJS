/* Acessar nomes de propriedades com notação de colchetes

No primeiro desafio do objeto mencionamos o uso da notação de colchetes como forma de acessar os valores das propriedades
usando a avaliação de uma variável. Por exemplo, imagine que nosso objeto alimentos está sendo usado em um programa
para uma caixa registradora de supermercado. Temos alguma função que define o alimento selecionado e queremos 
verificar nosso objeto alimentos quanto à presença desse alimento. Isso pode ser parecido com:

let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];

Este código avaliará o valor armazenado na variável selectedFood e retornará o valor dessa chave no objeto alimentos,
 ou indefinido se não estiver presente. A notação de colchetes é muito útil porque às vezes as propriedades do objeto
 não são conhecidas antes do tempo de execução ou precisamos acessá-las de uma maneira mais dinâmica.

Definimos uma função, checkInventory, que recebe um item digitalizado como um argumento.
Retorna o valor atual da chave scannedItem no objeto alimentos. Você pode presumir que apenas as chaves válidas
serão fornecidas como um argumento para checkInventory. 

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));

*/