/* Crie Strings usando Literais de Template

Um novo recurso do ES6 é o template literal. Este é um tipo especial de string que facilita a criação de strings complexas.
Literais de modelo permitem que você crie strings de várias linhas e use recursos de interpolação de strings para criar
strings.

Considere o código abaixo: */

const person = {
    name: "Zodiac Hasbro",
    age: 56
  };

/* Modelo literal com multi-linha e interpolação de string

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`; 

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old. */

/* Muitas coisas aconteceram lá. Em primeiro lugar, o exemplo usa crases(`), não aspas ('ou"), para envolver a string.
Em segundo lugar, observe que a string é multilinha, tanto no código quanto na saída. Isso economiza a inserção de \n
dentro das strings. A sintaxe ${variable} usada acima é um marcador de posição. Basicamente, você não precisará mais usar
a concatenação com o operador +. 
Para adicionar variáveis ​​a strings, basta soltar a variável em uma string de modelo e envolvê-la com ${e}.
Da mesma forma, você pode incluir outras expressões em seu literal de string, por exemplo ${a + b}. Esta nova maneira de
criar strings oferece mais flexibilidade para criar strings robustas.

Use a sintaxe literal de modelo com crases para criar uma matriz de strings de elemento de lista (li).
O texto de cada elemento da lista deve ser um dos elementos da matriz da propriedade de falha no objeto de resultado
 e ter um atributo de classe com o valor text-warning. A função makeList deve retornar a matriz de strings do item da lista.

Use um método iterador (qualquer tipo de loop) para obter a saída desejada (mostrado abaixo).

[
  '<li class = "text-warning"> no-var </li>',
  '<li class = "text-warning"> var-on-top </li>',
  '<li class = "text-warning"> quebra de linha </li>'
]
*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {

    const resultDisplayArray = [];
     for (var i = 0; i < arr.length; i++) {
      resultDisplayArray.push(`li class="text-warning">${arr[i]}</li>`)
  }
  
    return resultDisplayArray
  }
  
  const failuresList = makeList(result.failure);

  console.log(failuresList)

