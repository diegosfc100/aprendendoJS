/* HOISTING(Içamento) é o comportamento de mover as declarações para o topo. */

console.log(nome); // nessa linha o js ainda nao conhece a variavel 'nome', então ele iça a variavel debaixo pra cima para q nao de erro.

var nome = "Diego"; // hoisting acontece somente com var, let e const dá error.

console.log(nome);