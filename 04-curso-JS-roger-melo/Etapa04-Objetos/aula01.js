// OBJETOS 

// Criando um objeto literal
    const celular = {
        cor: "preto",
        modelo: "Sansung A50",
        preco: 1249.0,
        anosDeUso: [2020, 2021],
        fazerLigacao: function (numero) {
        return `Chamando ${numero}...`;
        },
        enviarMensagens: function (numero) {
        return `Mensagem sendo enviada para o número ${numero}...`;
        },
    };

        const mensagem = celular.enviarMensagens("(11)968677255");
        console.log(mensagem);

        const ligacao = celular.fazerLigacao("(11)968677255");
        console.log(ligacao);
  
        
    //Acessando uma propriedade com "."
        console.log(celular.cor);
  
    //Alterando o valor de uma propriedade com "."
        celular.cor = 'branco';
  
    //Acessando uma propriedade com []  
        console.log(celular['cor']);
  
    //Alterando o valor de uma propriedade com []
        celular['cor'] = "prata";
  
    //Acessando uma propriedade com variável
        const key = 'cor';  
        console.log(celular[key]); // prata
        console.log(celular.key); // undefined
  
  
        /*
   RESUMO/ANOTAÇÕES:
      - Objetos são representações de algo do mundo real, possuindo propriedades e métodos
      - Objetos são uma das partes mais importantes do JS
      - Praticamente tudo em JavaScript é um objeto
      - Podemos acessar as propriedades de um objeto usando a notação de ponto e de colchetes
      - Podemos reatribuir o valor de uma propriedade
      - Podemos usar uma string ou uma variável que contenha uma string para acessar uma propriedade
*/