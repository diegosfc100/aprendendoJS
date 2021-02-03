/* Impedir mutação de objeto

Como visto no desafio anterior, a declaração const sozinha realmente não protege seus dados contra mutações.
Para garantir que seus dados não mudem, o JavaScript fornece uma função Object.freeze para evitar a mutação dos dados.

Depois que o objeto estiver congelado, você não poderá mais adicionar, atualizar ou excluir propriedades dele.
Qualquer tentativa de mudar o objeto será rejeitada sem erro. */

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}


/* Neste desafio, você usará Object.freeze para evitar que as constantes matemáticas mudem.
Você precisa congelar o objeto MATH_CONSTANTS para que ninguém possa alterar o valor de PI,
adicionar ou excluir propriedades. */

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();