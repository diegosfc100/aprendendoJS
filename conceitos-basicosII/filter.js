// Filter - filtra e retorna um novo array.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

function filtrarPares(n){
    return n % 2 === 0;
}

function filtrarImpares(n){
    return n % 2 !== 0;
}

function filtrarMultiplos5(n){
    return n % 5 ===0
}

var ret = numeros.filter(filtrarPares);
console.log(ret);

ret = numeros.filter(filtrarImpares);
console.log(ret);

ret = numeros.filter(filtrarMultiplos5);
console.log(ret);


//

var alunos = [
    {nome: 'Neymar', nota:10},
    {nome: 'Pelé', nota:10},
    {nome: 'Diego', nota:8},
    {nome: 'Ganso', nota:7},
    {nome: 'Zé Love', nota:6}
]
console.log(alunos)

function filtrar_notas10(aluno){
    return aluno.nota === 10;
}

var filtrados = alunos.filter(filtrar_notas10);
console.log(filtrados);