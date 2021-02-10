/* Escreva funções declarativas concisas com ES6

Ao definir funções dentro de objetos no ES5, temos que usar a função de palavra-chave da seguinte maneira: */

const person = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };
  

//Com o ES6, você pode remover a palavra-chave da função e dois pontos ao definir funções em objetos. 

const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };
  

//Refatore a função setGear dentro do objeto bicicleta para usar a sintaxe abreviada descrita acima.

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);