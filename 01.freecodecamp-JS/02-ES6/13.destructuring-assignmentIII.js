/* Use Atribuição de Destruturação para Atribuir Variáveis de Objetos Aninhados

Você pode usar os mesmos princípios das duas lições anteriores para desestruturar valores de objetos aninhados.

Usando um objeto semelhante aos exemplos anteriores: */

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

//Veja como extrair os valores das propriedades do objeto e atribuí-los a variáveis com o mesmo nome:

const {johnDoe: {age, email}} = user;

//E aqui está como você pode atribuir os valores das propriedades de um objeto a variáveis com nomes diferentes:

const {johnDoe: {age: userAge, email: userEmail}} = user;

/*Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ele ainda deve atribuir às variáveis
lowToday e highToday os valores de today.low e today.high do objeto LOCAL_FORECAST. */

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
 
  const {today:{low: lowToday, high: highToday}} = LOCAL_FORECAST;

