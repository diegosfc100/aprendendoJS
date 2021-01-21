/* Usando objetos para pesquisas.

Os objetos podem ser considerados como um armazenamento de chave / valor, como um dicionário.
Se você tiver dados tabulares, poderá usar um objeto para "pesquisar" valores em vez de uma instrução switch
ou uma cadeia if / else. Isso é mais útil quando você sabe que seus dados de entrada estão limitados
a um determinado intervalo.

Aqui está um exemplo de uma pesquisa de alfabeto reverso simples: */

var alpha = {
   1: "Z",
   2: "Y",
   3: "X",
   4: "W",   
   24: "C",
   25: "B",
   26: "A"
};

alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"


/* Converta a instrução switch em um objeto chamado lookup. Use-o para pesquisar val e atribuir a string associada
à variável result. */

function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line

    var lookup = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank"
    }
    result = lookup[val];
    
   /* switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }*/
  
   return result;
  }
  
  phoneticLookup("charlie");