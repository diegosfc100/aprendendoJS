/* Definir parâmetros padrão para suas funções

Para nos ajudar a criar funções mais flexíveis, o ES6 apresenta parâmetros padrão para funções.
Confira este código: */

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous


/* O parâmetro padrão entra em ação quando o argumento não é especificado (é indefinido).
Como você pode ver no exemplo acima, o nome do parâmetro receberá seu valor padrão "Anônimo" quando você não fornecer
um valor para o parâmetro. Você pode adicionar valores padrão para quantos parâmetros desejar.

Modifique o incremento da função adicionando parâmetros padrão para que ele adicione 1 ao número
se o valor não for especificado. */


const increment = (number,  value = 1) => number + value;
