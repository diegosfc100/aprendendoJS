/* Escrever declarações literais concisas de objetos usando atalhos de propriedades de objetos

ES6 adiciona um bom suporte para definir facilmente literais de objeto.

Considere o seguinte código: */

const getMousePosition = (x, y) => ({
  x: x,
  y: y
});


/*getMousePosition é uma função simples que retorna um objeto contendo duas propriedades. 
ES6 fornece o açúcar sintático para eliminar a redundância de ter que escrever x: x.
Você pode simplesmente escrever x uma vez e ele será convertido em tox: x (ou algo equivalente) sob o capô.
Aqui está a mesma função acima reescrita para usar esta nova sintaxe: */

const getMousePosition = (x, y) => ({x, y});

/*Use a abreviação de propriedade de objeto com literais de objeto para criar e retornar um objeto
com propriedades de nome, idade e gênero. */


const createPerson = (name, age, gender) =>  ({name, age,gender});
    // Only change code above this line
  