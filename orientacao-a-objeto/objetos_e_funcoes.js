
const curso = {
    nome: 'Programação em JavaScript',
    horas: 25,
    preco: 27.99
}

console.log(curso);
console.log(typeof(curso));

console.log(Object.keys(curso)); // imprimindo as chaves do objeto.
console.log(Object.values(curso)); //imprimindo os valores do objeto.
console.log(Object.entries(curso)); // imprimindo chave e valor.

Object.entries(curso).forEach(par => {
console.log(`${par[0]}: ${par[1]}`);
});

// outra forma.
Object.entries(curso).forEach(([chave, valor]) => {
console.log(`${chave}: ${valor}`);
});

//alterando nome do curso.
curso.nome = 'Criação de APIs Rest com Django Rest Framework';
console.log(curso);

// dessa forma não é possivel alterar.
Object.defineProperty(curso, 'publicacao', {
enumerable: true,
writable: false, // ninguem pode alterar.
value: '07/12/2019'
});

curso.publicacao = '01/01/2020'; // nao ira alterar devido o writable.
console.log(curso); 
console.log(curso.publicacao);


const outro = {} // objeto vazio
Object.defineProperty(outro, '', {
    
});


Object.freeze(curso); // não permite escrita.
curso.nome = 'Dança da Garrafa';

console.log(curso);


const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Geek University'},
    {nome: 'Ricardo Brandão', empresa: 'Google'},
    {nome: 'Felipe Xavier', empresa: 'Sony'}
]

console.log(usuarios);
console.table(usuarios); // imprimindo em forma de tabela.

console.table(curso);