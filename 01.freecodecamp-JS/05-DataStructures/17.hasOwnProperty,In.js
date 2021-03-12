/* Verifique se um objeto tem uma propriedade

Agora podemos adicionar, modificar e remover chaves de objetos. Mas e se apenas quiséssemos saber se um objeto tem
uma propriedade específica? JavaScript nos fornece duas maneiras diferentes de fazer isso.
Um usa o método hasOwnProperty() e o outro usa a palavra-chave in. Se tivermos usuários de um objeto com uma
propriedade de Alan, poderíamos verificar sua presença de uma das seguintes maneiras:

users.hasOwnProperty('Alan');
'Alan' in users;

Ambos retornariam verdadeiros.

Criamos um objeto, usuários, com alguns usuários e uma função isEveryoneHere, para a qual passamos o objeto de usuários
como um argumento. Termine de escrever esta função para que ela retorne verdadeiro apenas se o objeto de usuários
contiver todos os quatro nomes, Alan, Jeff, Sarah e Ryan, como chaves, e falso caso contrário. 

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(isEveryoneHere(users));

*/