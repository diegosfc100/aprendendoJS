/* Retornar o padrão inicial para funções

Quando uma instrução de retorno é alcançada, a execução da função atual para e o controle retorna ao local de chamada.

Exemplo: */

function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye"); // nessa função "byebye" nunca será gerado devido o return vir antes,
  }
  myFun();
  

/* A saída acima é "Hello" para o console, retorna "World", mas "byebye" nunca é gerado, porque a função sai na instrução 
return.

Modifique a função abTest para que se a ou b forem menores que 0, a função sairá imediatamente com um valor de indefinido.

Dica
Lembre-se de que undefined é uma palavra-chave, não uma string. */
//EXERCÍCIO RESOLVIDO ABAIXO: 


// Setup
function abTest(a, b) {
    // Only change code below this line
        if(a < 0 || b < 0){
            return undefined;
        }  

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(-1,5));