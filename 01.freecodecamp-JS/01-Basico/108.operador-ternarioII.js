/* Use vários operadores condicionais (ternários)

No desafio anterior, você usou um único operador condicional. Você também pode encadear os dois para verificar várias
condições.

A função a seguir usa instruções if, else if e else para verificar várias condições: */

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}


// A função acima pode ser reescrita usando vários operadores condicionais:

function findGreaterOrEqual (a, b) {
  return (a === b)? "a e b são iguais"
    : (a > b)? "a é maior"
    : "b é maior";
}

/* É considerada prática recomendada formatar vários operadores condicionais de forma que cada condição esteja
em uma linha separada, conforme mostrado acima. O uso de vários operadores condicionais sem indentação adequada
pode tornar seu código difícil de ler. Por exemplo: */

function findGreaterOrEqual (a, b) {
  return (a === b)? "a e b são iguais": (a > b)? "a é maior": "b é maior";
}

/* Na função checkSign, use vários operadores condicionais - seguindo o formato recomendado usado em findGreaterOrEqual
para verificar se um número é positivo, negativo ou zero. A função deve retornar "positive", "negative" ou "zero". */

function checkSign(num) {
    return(num === 0)? "zero"
    : (num < 0)? "negative":"positive"
}

checkSign(10);