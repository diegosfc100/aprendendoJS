/* Use o Console JavaScript para verificar o valor de uma variável

Tanto o Chrome quanto o Firefox têm excelentes consoles de JavaScript, também conhecidos como DevTools,
para depurar seu JavaScript.

Você pode encontrar ferramentas para desenvolvedores no menu do Chrome ou no console da Web no menu do Firefox.
Se você estiver usando um navegador diferente ou um telefone celular, é altamente recomendável mudar para desktop Firefox ou Chrome.

O método console.log(), que "imprime" a saída do que está entre parênteses no console, provavelmente será a ferramenta 
de depuração mais útil. Colocá-lo em pontos estratégicos em seu código pode mostrar os valores intermediários das
variáveis. É uma boa prática ter uma ideia de como deve ser a saída antes de analisá-la. Ter pontos de verificação
para ver o status de seus cálculos em todo o código ajudará a identificar onde está o problema.

Aqui está um exemplo para imprimir 'Olá, mundo!' para o console:

console.log ('Olá, mundo!');

Use o método console.log() para imprimir o valor da variável a onde anotado no código. */

let a = 5;
let b = 1;
a++;

let sumAB = a + b;
console.log(a);