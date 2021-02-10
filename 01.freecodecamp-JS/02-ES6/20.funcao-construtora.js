/* Use a sintaxe de classe para definir uma função de construtor

ES6 fornece uma nova sintaxe para criar objetos, usando a palavra-chave class.
Deve-se notar que a sintaxe da classe é apenas sintaxe, e não uma implementação completa baseada em classe
de um paradigma orientado a objetos, ao contrário de linguagens como Java, Python, Ruby, etc.

No ES5, geralmente definimos uma função construtora e usamos a nova palavra-chave para instanciar um objeto. *///

var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');
  

//A sintaxe da classe simplesmente substitui a criação da função do construtor:

/*class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter');*/
  

/*Deve-se notar que a palavra-chave class declara uma nova função, à qual um construtor é adicionado.
Este construtor é chamado quando new é chamado para criar um novo objeto.
Notas:
    UpperCamelCase deve ser usado por convenção para nomes de classe ES6, como no SpaceShuttle usado acima.
    O método construtor é um método especial para criar e inicializar um objeto criado com uma classe.
    Você aprenderá mais sobre isso na seção Programação Orientada a Objetos da Certificação de Algoritmos
    e Estruturas de Dados JavaScript.

Use a palavra-chave class e escreva um construtor para criar a classe Vegetable.
A classe Vegetable permite que você crie um objeto vegetal com um nome de propriedade que é passado para o construtor. */

// Only change code below this line
class Vegetable{
    constructor(name){
        this.name = name
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'csd