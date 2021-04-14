/* Fatorializar um número

Retorna o fatorial do inteiro fornecido.

Se o inteiro for representado pela letra n, um fatorial é o produto de todos os inteiros positivos menores ou iguais] a n.

Os fatoriais são frequentemente representados com a notação abreviada n!

Por exemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Somente inteiros maiores ou iguais a zero serão fornecidos para a função.  

function factorialize(num) {
  return num;
}

factorialize(5);
*/

function factorialize(num) {
  if (num == 0) {
      return 1;
  }

  return factorialize(num - 1) * num;
}

console.log(factorialize(5));