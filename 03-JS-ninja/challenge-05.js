/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var feira = ['banana', 'uva', 'laranja', 'mamão', 'açai'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction1(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction1(feira)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFuntion2(arr1, num){
    return arr1[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrX = ['Diego', 30, 1.75, true, null]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último  / !!!!!!!!!!!!!
array criado.
*/
console.log(myFuntion2(arrX,0));
console.log(myFuntion2(arrX,1));
console.log(myFuntion2(arrX,2));
console.log(myFuntion2(arrX,3));
console.log(myFuntion2(arrX,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.    !!!!!!!!!!!!!!!!!!!!!
- Se o parâmetro não for passado, a função deve retornar o objeto com todos  - !!!!!!!!!!!!!!!!!!!!!
os livros.
*/
function book(name){

    var obj = {
        'biblia':{
            qtddDePag: 900,
            autor:  'José',
            editora: 'vidanova'
        },
        'turmaDaMonica':{
            qtddDePag: 100,
            autor:  'Mauricio de Souza',
            editora: 'Vida'
        } ,
        'Dicionario':{
            qtddDePag: 2000,
            autor:  'aurélio',
            editora: 'flutter'
        }   
    }

    //return obj[name]; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    return !name ? obj : obj[name];  // Se o parâmetro não for passado, a função deve retornar o objeto com todos

}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('biblia'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,  !!!!!!!!!!!!!!!!!!!!!! 
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Dicionario tem ' + book('Dicionario').qtddDePag + ' páginas.' )


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando ????????????????
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro turmaDaMonica é '+ book('turmaDaMonica').autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando ??????????
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookname = 'turmaDaMonica'
console.log('O livro ' + bookname + ' foi publicado pela editora ' + book(bookname).editora)