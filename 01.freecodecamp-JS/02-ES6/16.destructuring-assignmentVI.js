/* Use a atribuição de desestruturação para passar um objeto como parâmetros de uma função

Em alguns casos, você pode desestruturar o objeto em um argumento de função.

Considere o código abaixo: */

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}


// Isso destrói efetivamente o objeto enviado para a função. Isso também pode ser feito no local:

const profileUpdate = ({name, age, nationality, location}) => {
   // * fazer algo com esses campos * 
}

/* Quando profileData é passado para a função acima, os valores são desestruturados do parâmetro de função para uso dentro
da função.
Use a atribuição de desestruturação dentro do argumento para a metade da função para enviar apenas max e min
dentro da função. */

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max, min}) => (max + min) /2  // Only change code above this line