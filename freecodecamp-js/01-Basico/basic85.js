/* Adicionar novas propriedades a um objeto JavaScript

Você pode adicionar novas propriedades a objetos JavaScript existentes da mesma forma que os modificaria.

Veja como adicionaríamos uma propriedade "bark" ao nosso cachorro: */

ourDog.bark = "bow-wow";

// ou

ourDog ["bark"] = "arco-uau";

// Agora, quando avaliarmos ourDog.bark, obteremos seu latido, "bow-wow".

var ourDog = {
   "nome": "Camper",
   "pernas": 4,
   "caudas": 1,
   "amigos": ["tudo!"]
};

ourDog.bark = "bow-wow";

// Adicione uma propriedade "bark" a myDog e defina-a como um som de cachorro, como "woof". 

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";
