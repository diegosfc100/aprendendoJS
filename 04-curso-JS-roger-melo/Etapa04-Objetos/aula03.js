//OBJETOS EM ARRRAYS

    const filmes = {
        acao: [
             { title: 'Rambo', visualizacoes: 25 },
             { title: '007', visualizacoes: 55 }
        ],
        logFilmesAcao() {
            console.log('Esses são os filmes de ação mais assistidos: ');
            
        this.acao.forEach(filme => 
            console.log(`${filme.title} tem ${filme.visualizacoes} visualizações.`))
        }
    }

    filmes.logFilmesAcao();



// TIPOS PRIMITIVOS

    let pontoUm = 50;
    let pontoDois = pontoUm;
    /* Apesar de "pontoDois" estar atribuindo o valor da variável "pontoUm" para ele, nesse momento está
       sendo feito uma copia do valor, mas com um novo lugar na memória. */
       
    console.log(`pontoUm: ${pontoUm} | pontoDois: ${pontoDois}`);


    pontoUm = 100;  // Vai ser alterado somente o valor de "pontoUm"
    console.log(`pontoUm: ${pontoUm} | pontoDois: ${pontoDois}`);
    


    // Tipos de referência

    /* Apesar de "pontoDois" aparentemente receber um valor, na verdade, ele está recebendo o mesmo ponteiro para
       o objeto, ou seja, é o mesmo objeto na memória. Sendo assim, se eu alterar uma das propriedades do objeto 
       em uma das variáveis, eu estaria alterando para as duas variáveis. */

    pontoUm = { nome: "Bernardo", idade: 19 };
    pontoDois = pontoUm;

    console.log(pontoUm, pontoDois);

    pontoUm.idade = 20;

    console.log(pontoUm, pontoDois);
