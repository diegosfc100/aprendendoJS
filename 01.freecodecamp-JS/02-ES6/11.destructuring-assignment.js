/* Use Atribuição de Desestruturação para Extrair Valores de Objetos

A designação de desestruturação é uma sintaxe especial introduzida no ES6, para designar ordenadamente valores retirados
diretamente de um objeto.

Considere o seguinte código ES5: */

const user = { name: 'John Doe', age: 34 };

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34


// Aqui está uma instrução de atribuição equivalente usando a sintaxe de desestruturação ES6:

const {nome, idade} = user;
// nome = 'John Doe', idade = 34

/* Aqui, as variáveis de nome e idade serão criadas e atribuídas aos valores de seus respectivos valores do objeto de usuário.
Você pode ver como isso é muito mais limpo.

Você pode extrair quantos valores quiser do objeto.

Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir às variáveis hoje 
e amanhã os valores de hoje e amanhã do objeto HIGH_TEMPERATURES. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today, tomorrow} = HIGH_TEMPERATURES;
  
  // Only change code above this line

