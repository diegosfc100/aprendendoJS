/* Acessando Propriedades de Objetos com Variáveis.

Outro uso da notação de colchetes em objetos é acessar uma propriedade que é armazenada como o valor de uma variável. 
Isso pode ser muito útil para iterar pelas propriedades de um objeto ou ao acessar uma tabela de pesquisa.

Aqui está um exemplo de uso de uma variável para acessar uma propriedade: */

var dogs = {
    Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
  };
  var myDog = "Hunter";
  var myBreed = dogs[myDog];
  console.log(myBreed); // "Doberman"
  

/* Outra maneira de usar esse conceito é quando o nome da propriedade é coletado dinamicamente durante a execução
do programa, da seguinte maneira: */

var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str;
  }
  var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
  console.log(someObj[someProp]); // "John"
  

/* Observe que não usamos aspas em torno do nome da variável ao usá-lo para acessar a propriedade porque estamos usando
o valor da variável, não o nome.

Defina a variável playerNumber como 16. Em seguida, use a variável para pesquisar o nome do jogador e atribuí-lo ao jogador. */

var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  
  var playerNumber = 16;       
  var player = testObj[playerNumber];   