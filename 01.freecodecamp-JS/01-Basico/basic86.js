/* Excluir propriedades de um objeto JavaScript.

Também podemos excluir propriedades de objetos como este:

delete ourDog.bark;

Exemplo: */

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };

delete ourDog.bark;

/* Após a última linha mostrada acima, nosso cachorro se parece com:

{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}


Exclua a propriedade "tails" de myDog. Você pode usar a notação de ponto ou colchete. */

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };

  delete myDog.tails;