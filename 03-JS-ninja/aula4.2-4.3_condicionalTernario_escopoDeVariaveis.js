// CONDICIONAL TERNÁRIO
   // condição ? true : false
   //exemplo1:
   1 === '1' ? true : false; //false
    
   //exemplo2:
   var pessoa = {
       sexo: 'Masculino'
   }

   var sexo = pessoa.sexo === 'Masculino' ? 'o' : 'a';


// ESCOPO DE VARIÁVEIS
    // Global
        // Variáveis declaradas fora, podendo acessá-las em ambientes locais
        // Não utilizando a palavra chave "var" a variável será considerada Global mesmo sendo declarada localmente 
    
    // Local
        // Variáveis declaradas dentro, só estando disponível localmente
        // Variáveis locais são melhores que as globais pois ocupam menos memória.
        // Parametros de função são variáveis Locais