/* Verifique se há agrupamento misto de caracteres

Às vezes, queremos verificar grupos de caracteres usando uma Expressão Regular e, para isso, usamos parênteses ().
Se quiser encontrar Penguin ou Pumpkin em uma string, você pode usar a seguinte Expressão Regular: /P(engu|umpk)in/g

Em seguida, verifique se os grupos de strings desejados estão na string de teste usando o método test().

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Returns true


/* Corrija o regex para que verifique os nomes de Franklin Roosevelt ou Eleanor Roosevelt de maneira sensível
a maiúsculas e minúsculas e faça concessões para nomes do meio.

Em seguida, corrija o código para que a regex que você criou seja verificada em relação a myString
e true ou false seja retornado, dependendo da correspondência da regex. */

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/
let result = myRegex.test(myString)

