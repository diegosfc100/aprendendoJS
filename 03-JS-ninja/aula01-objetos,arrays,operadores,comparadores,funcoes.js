
// OBJETOS {}
    // Objetos tem propriedades e metodos.
    var pessoa = {
        altura: 1.87, //propriedades sao coisas referentes ao objeto, no caso a 'pessoa'.
        peso: 90,
        idade:55
    };
        
    // propriedades podem ser alteradas
    pessoa.altura = 1.95;



// ARRAY []
    // Arrays sao listas, ou vetores, de valores.
    var numeros = []; // array vazio
    var numeros = [1,2,3,4,5];
    var letras = ['a','b','c','d','e']
    
    // indices do Array
    numeros[0] // 1 
    numeros[1]  
    numeros[2] 
    numeros[3] 
    numeros[4] // 5



// OPERADORES E COMPARADORES:

    // var++  incremento, soma + 1
    // var--  decremento, diminui -1

    // +=, -=, *=, /=
    //(var = var + 20) === (var += 20)
    //(var = var * 20) === (var *= 20)

    // =  atribuição
    // ==  igual
    // ===  igual e do mesmo tipo
    // !=  diferente
    // !==  diferente, mas do mesmo tipo



// FUNÇÕES()
	// Funcoes sao blocos de codigo
    // Parametros de uma funcao sao valores que podem ser passados a uma funcao
    function soma(a, b){ // a,b são parametros
        return a + b;
    };

    soma(1, 2); //chamando a funcao


    // variaveis criadas dentro de uma funcao nao podem ser acessadas de fora
    function hello(){
        var mundo = 'mundo';
    };
    

    //somando variavel e função
    function cinco(){
        return 5;
    };

    var y = 4;
    console.log(y + cinco()); // 9
   