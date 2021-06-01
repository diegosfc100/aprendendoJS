// FUNÇÕES()
	// Funcoes sao blocos de codigo
    // Parametros de uma funcao sao valores que podem ser passados a uma funcao
    function soma(a, b){ // a,b são parametros / // a,b,c, são nomes de argumentos aleatorios, nao representam a posição.
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
   