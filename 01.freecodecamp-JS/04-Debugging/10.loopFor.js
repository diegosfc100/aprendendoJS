/* Erros de catch off by one ao usar indexação

Erros de desativação por um (às vezes chamados de OBOE) surgem quando você está tentando atingir um índice específico 
de uma string ou array (para cortar ou acessar um segmento), ou ao fazer um loop sobre os índices deles. 
A indexação do JavaScript começa em zero, não um, o que significa que o último índice é sempre um a menos que o 
comprimento do item. Se você tentar acessar um índice igual ao comprimento, o programa pode lançar um erro de referência
"índice fora do intervalo" ou imprimir indefinido.

Quando você usa métodos de string ou array que usam intervalos de índice como argumentos, ajuda a ler a documentação
e entender se eles são inclusivos (o item no índice fornecido é parte do que é retornado) ou não.
Aqui estão alguns exemplos de erros off por um:

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  // faz loops muitas vezes no final
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // faz loops poucas vezes e perde o primeiro caractere no índice 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // OK
  console.log(alphabet[k]);
}


Corrija os dois erros de indexação na função a seguir para que todos os números de 1 a 5 sejam impressos no console. */

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();