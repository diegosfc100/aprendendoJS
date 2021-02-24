// TEMPLATE STRING
    const postTitle = 'Biscoito ou Bolacha?';
    const postAutor = 'Diego Rodrigues';
    const comentarios = 20;
    const idade = 30;

    //Concatenação no ES5

    /* para inserir literalmente aspas em uma string, temos que utilizar o sinal oposto da abertura
    e fechamento que declara a string, ou seja, utilizar, nesse caso, aspas duplas. */

    const concatenacaoES5Forma1 = 'O post "' + postTitle + '", do ' + postAutor + ', recebeu ' + comentarios + ' comentários'
    //O post "Biscoito ou Bolacha?", do Diego Rodrigues, recebeu 20 comentários.


    // Utilizando template string

    // para declarar uma template string utilizamos crase.
    // podemos quebrar linhas, sem quebrar o código.
    // podemos utilizar aspas simples ou dublas sem problemas no decorrer da string
    const templateString1 = `O post "${postTitle}", do ${postAutor}, recebeu ${comentarios} comentários`;
    console.log(templateString1);


    const templateString3 = `
        O post ${postTitle}
        Autor: ${postAutor}
        Recebeu ${comentarios} comentários.`;

    console.log(templateString3);
    