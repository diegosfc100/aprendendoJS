/* Escopo e funções globais.

Em JavaScript, o escopo se refere à visibilidade das variáveis. Variáveis que são definidas
fora de um bloco de função têm escopo global. Isso significa que eles podem ser vistos em qualquer lugar
em seu código JavaScript.

Variáveis que são usadas sem a palavra-chave var são criadas automaticamente no escopo global.
Isso pode criar consequências não intencionais em outras partes do código ou ao executar uma função novamente.
Você sempre deve declarar suas variáveis com var.

Usando var, declare uma variável global chamada myGlobal fora de qualquer função. Inicialize-o com um valor de 10.

Dentro da função fun1, atribua 5 a oopsGlobal sem usar a palavra-chave var.

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myGlobal = 10;


function fun1(){
    oopsGlobal = 5;
  }

  


  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }

  fun2();


  //

  var idade = 15 
  console.log("a var idade é uma variavel do tipo " + typeof(idade))


  function numPrimo(){
    num = 7;
  }
  console.log("num é uma variavel do tipo " + typeof(num))



  function teste(){
    var resultado = "";
    if(typeof idade != "undefined"){
      resultado += "a var idade é uma variavel do tipo " + typeof(idade)
    } if(typeof num == "undefined"){
      resultado += " num é uma variavel do tipo " + typeof(num)
    }
    console.log(resultado);
  }

  teste();
