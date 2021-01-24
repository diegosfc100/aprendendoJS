/* Acessando matrizes aninhadas.

Como vimos em exemplos anteriores, os objetos podem conter objetos aninhados e matrizes aninhadas.
Semelhante ao acesso a objetos aninhados, a notação de colchetes Array pode ser encadeada para acessar arrays aninhados.

Aqui está um exemplo de como acessar uma matriz aninhada: */

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"


 /* Recupere a segunda árvore da variável myPlants usando ponto de objeto e notação de colchetes de array.*/

 