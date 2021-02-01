/* Substituir Loops usando Recursão

Recursão é o conceito de que uma função pode ser expressa em termos de si mesma. Para ajudar a entender isso,
comece pensando na seguinte tarefa: multiplique os primeiros n elementos de um array para criar o produto desses elementos. 
Usando um loop for, você poderia fazer isso: */

   function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }

/* No entanto, observe que multiply (arr, n) == multiply (arr, n - 1) * arr [n - 1]. Isso significa que você pode reescrever
e multiplicar em termos de si mesmo e nunca precisar usar um loop. */

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
 

/* A versão recursiva de multiplicação quebra assim. No caso base, onde n <= 0, ele retorna 1. 
Para valores maiores de n, ele se chama, mas com n - 1. Essa chamada de função é avaliada da mesma forma,
chamando multiply novamente até n <= 0. Neste ponto, todas as funções podem retornar e a multiplicação original retorna 
a resposta.

Observação: as funções recursivas devem ter um caso base quando retornam sem chamar a função novamente 
(neste exemplo, quando n <= 0), caso contrário, nunca poderão terminar a execução.

Escreva uma função recursiva, sum(arr, n), que retorna a soma dos primeiros n elementos de uma matriz arr.*/

function sum(arr, n) {
    if (n <= 0) {
      return arr[0]-1;
    } else if(n==1){
        return ((sum(arr,n-1)+ arr[n]-2))
    }else{
        return ((sum(arr, n-1)+ arr [n]+ (n-1)- n))
    }
}

console.log(sum([2, 3, 4, 5], 5));