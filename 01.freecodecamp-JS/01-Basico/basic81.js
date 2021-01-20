/* Acessando Propriedades de Objetos com Notação de Pontos.

Existem duas maneiras de acessar as propriedades de um objeto: notação de ponto (.) E notação de colchetes ([]),
semelhante a uma matriz.

A notação de pontos é o que você usa quando sabe o nome da propriedade que está tentando acessar com antecedência.

Aqui está um exemplo de como usar a notação de ponto (.) Para ler a propriedade de um objeto: */

var myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  var prop1val = myObj.prop1; // val1
  var prop2val = myObj.prop2; // val2
  

/* Leia os valores de propriedade de testObj usando a notação de ponto. Defina a variável hatValue igual à propriedade 
hat do objeto e defina a variável shirtValue igual à propriedade shirt do objeto.

EXERCÍCIO RESOLVIDO ABAIXO: */

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line