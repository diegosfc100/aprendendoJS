/* Use Atribuição de Destruturação para Atribuir Variáveis de Objetos

A desestruturação permite que você atribua um novo nome de variável ao extrair valores. Você pode fazer isso colocando
o novo nome após dois pontos ao atribuir o valor.

Usando o mesmo objeto do último exemplo: */

const user = { name: 'John Doe', age: 34 };

// Veja como você pode dar novos nomes de variáveis na atribuição:

const {name: userName, age: userAge} = user;
// userName = 'John Doe', userAge = 34

/* Você pode ler como "obter o valor de user.name e atribuí-lo a uma nova variável chamada userName" e assim por diante.

Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir às variáveis 
highToday e highTomorrow os valores de hoje e amanhã do objeto HIGH_TEMPERATURES. */

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

//new way
const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES 