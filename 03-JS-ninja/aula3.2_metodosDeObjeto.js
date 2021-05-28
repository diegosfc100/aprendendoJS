// FUNÇÕES ANONIMAS(sem nome)
    //só é possível quando uma função está atribuida a uma variável.
    var myvar = function(){
        return 'Retorno de uma Função Anônima.';
    };

   console.log(myvar());

   /* 
   A finalidade de uma FUNÇÃO ANONIMA é exatamente a de permitir passá-la como se fosse um objeto qualquer,
   que você pode atribuir a uma variável, independentemente de haver um nome para a função.
   Armazenar uma variável em uma função que pode ter parâmetros ou não. Ela pode retornar um valor e torna-lo imutável,
   ou então apenas realizar comandos sem retorno.
   */


// MÉTODO DE OBJETO
   // quando você usa funções como propriedades dentro de um objeto.
   pessoa.aniversario = function() { // aniversário agora é um método do objeto pessoa.
       pessoa.idade++;
   };

   pessoa.nomeCompleto = function() {
       return pessoa.nome + " " + pessoa.sobrenome;
   };


   // Chamando métodos
   console.log(pessoa.nomeCompleto());

   console.log(pessoa.idade); //30

   pessoa.aniversario(); // +1ano
   console.log(pessoa.idade); //31
   
   pessoa.aniversario(); // +1ano
   console.log(pessoa.idade); //32


   //Resumindo

   var objeto2 = {
       propriedade: 'valor', // propriedade tem valor
       metodo: function(){}  // método tem função
   }