/* Use as funções de seta para escrever funções anônimas concisas

Em JavaScript, geralmente não precisamos nomear nossas funções, especialmente ao passar uma função como um argumento para
outra função. Em vez disso, criamos funções embutidas. Não precisamos nomear essas funções porque não as reutilizamos
em nenhum outro lugar.

Para conseguir isso, costumamos usar a seguinte sintaxe: */

const myFunc = function() {
    const myVar = "value";
    return myVar;
  }
  

/* ES6 nos fornece o açúcar sintático para não ter que escrever funções anônimas dessa maneira. 
Em vez disso, você pode usar a sintaxe da função de seta(arrow function): */

const myFunc2 = () => {
  const myVar2 = "valor";
  return myVar2;
}

/* Quando não há corpo de função e apenas um valor de retorno, a sintaxe da função de seta permite que você omita
a palavra-chave return, bem como os colchetes ao redor do código. Isso ajuda a simplificar funções menores em instruções 
de uma linha: */

const myFunc = () => "valor";

// Este código ainda retornará o valor da string por padrão.

/*Reescreva a função atribuída à variável magic que retorna um novo Date() para usar a sintaxe da função de seta.
Além disso, certifique-se de que nada esteja definido com a palavra-chave var. */

const magic = () => {
    return new Date();
  };