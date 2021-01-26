/* Acessando propriedades de objetos com notação de colchetes.

A segunda forma de acessar as propriedades de um objeto é a notação de colchetes ([]).
Se a propriedade do objeto que você está tentando acessar tiver um espaço em seu nome, 
você precisará usar a notação de colchetes.

No entanto, você ainda pode usar a notação de colchetes nas propriedades do objeto sem espaços.

Aqui está um exemplo de como usar a notação de colchetes para ler a propriedade de um objeto: */

var myObj = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  myObj["Space Name"]; // Kirk
  myObj['More Space']; // Spock
  myObj["NoSpace"];    // USS Enterprise
  

/* Observe que os nomes das propriedades com espaços devem estar entre aspas (simples ou duplas).

Leia os valores das propriedades "an entree" e "the drink" de testObj usando a notação de colchetes
e atribua-os a entreeValue e drinkValue, respectivamente.

EXERCÍCIO RESOLVIDO ABAIXO: */

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    thedrink: "water"
  };
  
  
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["thedrink"];   

  //

  var park = {
    ford: "Fusion",
    fiat: "Uno",
    gm: "Corsa",
    citroen: "C3"
  }

  var park2 = park["fiat"];
  console.log(park2)