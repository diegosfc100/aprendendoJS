/* Atualizando Propriedades do Objeto.

Depois de criar um objeto JavaScript, você pode atualizar suas propriedades a qualquer momento, 
da mesma forma que atualizaria qualquer outra variável. Você pode usar a notação de ponto ou colchete para atualizar.

Por exemplo, vamos dar uma olhada em nosso cachorro: */ 

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  

/* Como ele é um cão particularmente feliz, vamos mudar seu nome para "Happy Camper". Veja como atualizamos a propriedade
de nome de seu objeto: ourDog.name = "Happy Camper"; ou ourDog ["name"] = "Happy Campper"; Agora, quando avaliamos nosso 
Cachorro.nome, em vez de pegar "Camper", obteremos seu novo nome, "Happy Camper".

Atualize a propriedade de nome do objeto myDog. Vamos mudar o nome dela de "Coder" para "Happy Coder".
Você pode usar a notação de ponto ou colchete. */

// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.name = "Happy Coder"
  console.log(myDog.name)
  // Only change code below this line