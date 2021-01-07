// Forma 1
var rappers = new Array('Nas', 'Jay-Z', 'Andre3000', 'Kendrick Lamar');

// Forma 2
var notas = [10, 5.5, 9, 7, 0]

// array vazio
var dados = [];

//acessando valor de um índice
console.log(rappers[3])

//alterando valor a partir do índice
rappers[3] = "Biggie";
console.log(rappers[3]);

// acrescentar valor em índice vazio.
if(rappers[4] == undefined){
    rappers[4] = "Djonga"
}
console.log(rappers[4])

// inserindo elementos no final do array
var nomes = ['Jo', 'Drin', 'Joyce'];

nomes.push('Dinha');
console.log(nomes);

// tamanho do array
console.log(rappers.length);

// ordernar arrays de strings
nomes.sort();
console.log(nomes);

//ordenando arrays numericos
var precos = [155, 555, 1000, 15.2, 99.9];
precos.sort(function(a,b) {return a - b;})

console.log(precos)

// deletando dados do array
delete rappers[1]; // deletando dessa forma o array ficara com um espaõ vazio onde estava o elemento deletado.
console.log(rappers)

//deletando varios dados - deletando dessa forma o array NAAO ficara com um espaçõ vazio onde estava o elemento deletado.
precos.splice(2, 4); // a partir do item x, delete y itens.
console.log(precos);

//incluindo varios dados
precos.splice(1, 0, 77, 88, 99, 1547); // a partir do item x, nao delete y item, mas adicione z.
console.log(precos);

// deletando e inclundindo dados
precos.splice(0, 6, 30);
console.log(precos);

//iterar num array
for(var i = 0; i < rappers.length; i++){
    console.log(rappers[i]);
}

//deletando elementos da ultima posiçao do array
rappers.pop();
console.log(rappers);

// também é possível retornar o valor removido
var ret = rappers.pop(); 
console.log(ret)

// removendo o primeiro elemento de um array
rappers.shift();
console.log(rappers);

//inserindo elementos no inicio de um array
precos.unshift(77777777);
console.log(precos);

// retornando um novo array a partirdo indice informado
var novo = precos.slice(1);
console.log(novo)

//concatenando arrays
var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares);
console.log(rest);

//arrays dentro de arrays(matrizes) . 3 x 3
var tabuleiro = [[1,2,3],[4,5,6],[7,8,9]];
console.log(tabuleiro)
