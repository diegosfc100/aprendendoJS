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


    /*
   RESUMO/ANOTAÇÕES:
      - Arrays também podem recer objetos como itens
      - É possível iterar por um array de objetos e acessar cada propriedade desse objeto
      - JS possue diversos obejets embutidos, entre eles o Math, que fornece uma série de propriedades e métodos para realizar operações matemáticas
      - Valores primitivos e valores de referência são armazenados em lugares diferentes na memória
      - Valores primitivos são armazenados na stack, onde o valor é armazenado e pode ser acessado por um identificador(variável)
      - Valores de referência são armazenados no heap, porém quando isso é feito o identificador desse valor é criado na stack e armazena um ponteiro para o valor que está no heap. Dessa forma o valor só é criado apenas uma vez
      - Quando copiamos um valor de referência para outro, aquele valor não é duplicado. Ele continua sendo armazenado apenas uma vez no heap. Porém o ponteiro que aponta para ele é duplicado na stack, portanto os dois identificadores armazenam um ponteiro para o mesmo valor.
      - Por isso, ao alterar um valor de referência a sua cópia também reflete as alterações
      - Isso não acontece com valores primitivos, pois quando um valor é duplicado ele realmente é duplicado na stack. 
      - stack é menor que o heap, porém mais rápida
*/