 // Reduce - reduzir uma coleção de valor em um unico valor.

 var precos = [10, 20, 70, 50, 150];
 console.log(precos)

// Soma com for.
 var soma = 0;
 for(var i = 0;  i < precos.length; i++){
     soma = soma + precos[i];
 }
 console.log(soma)

// Soma com ForEach
soma = 0;
precos.forEach(function(valor){
    return soma += valor;
});
console.log(soma);  


//Reduce
function somar(anterior, atual){
    return anterior + atual;
}

var ret = precos.reduce(somar);
console.log(ret);


// exemplo map/reduce
function adicionarTaxa(valor){
    return valor + 5;
}

var ret = precos.map(adicionarTaxa).reduce(somar);
console.log(ret);


// exemplo filter/map/reduce
function precoMaiorQue50(valor){
    return valor > 50;
}

ret = precos.filter(precoMaiorQue50).map(adicionarTaxa).reduce(somar);
console.log(ret);