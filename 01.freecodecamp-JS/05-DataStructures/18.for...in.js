/* Iterar pelas chaves de um objeto com uma instrução for...in

Às vezes, você pode precisar iterar por todas as chaves de um objeto. Isso requer uma sintaxe específica em JavaScript
chamada de instrução for...in. Para o nosso objeto de usuários, isso poderia ser assim:

for(let user in users) {
  console.log(user);
}

Isso registraria Alan, Jeff, Sarah e Ryan - cada valor em sua própria linha.

Nessa instrução, definimos uma variável user e, como você pode ver, essa variável foi redefinida durante cada iteração
para cada uma das chaves do objeto à medida que a instrução percorria o objeto, resultando na impressão do nome de cada
usuário no console.

NOTA: Os objetos não mantêm uma ordem para as chaves armazenadas como os arrays fazem; assim, a posição de uma chave
em um objeto, ou a ordem relativa em que ela aparece, é irrelevante ao fazer referência ou acessar essa chave.

Definimos uma função countOnline que aceita um argumento (um objeto de usuários). Use um for...in instrução dentro 
desta função para percorrer o objeto de usuários passado para a função e retornar o número de usuários cuja propriedade
online está definida como true. Um exemplo de um objeto de usuários que pode ser passado para countOnline é mostrado
abaixo. Cada usuário terá uma propriedade online com um valor verdadeiro ou falso.

{
  Alan: {
    online: falso
  },
  Jeff: {
    online: verdadeiro
  },
  Sarah: {
    online: falso
  }
}

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

*/