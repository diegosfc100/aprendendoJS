// Js no Browser
	// Incluindo no HTML, forma não aconselhada
	<script>
		console.log( 'Escreva seu código aqui' );
	</script>
	// Arquivo externo, aconselhado pois o navegador faz cache do arquivo sem ter que ficar carregando toda vez que carrega a página
	<script src='seu_arquivo.js' ></script>

	// Escopo
		// O melhor jeito de trabalhar é com IIFE sempre com escopos locais, pois escopos globais podem atrapalhar, principalmente com as variáveis.

// This
	// Um método de objetos usado para referenciá-los. Ele aponta para o objeto onde está dentro.
	var myObject = {
		myProperty: 1,
		init: function init(){
			return this;
		}
	};
	console.log( myObject ); // Object { myProperty: 1, init: init() }
	console.log( myObject.init() ); // Object { myProperty: 1, init: init() }
	// Ou seja ele referencia o objeto, podendo acessar propriedades do objeto dentro do método.
	var myObject = {
		myProperty: 1,
		init: function init(){
			return this.myProperty;
		}
	};
	console.log( myObject.init() ); // 1

	// This em funções pode ter dois valores, referencia ao objeto global, no browser window e no node global.
	function myFunction() {
		return this;
	}
	console.log( myFunction() ); // window
	console.log( myFunction() === window ); // true
	prop1 = 'propriedade 1'; // variável global pois não foi utilizado o 'var'
	console.log( prop1 ); //'propriedade 1'
	console.log( window.prop1 ); //'propriedade 1'

	// Ou referencia a objetos instanciados
	// construtores de objetos padrão
	var newObject = new Object();
	console.log( 'newObject', newObject ); // newObject Object { }

	// criando seus construtores, primeira letra sempre maiúscula
	function MyConstructor() {
		this.prop1 = 'prop1';
		this.prop2 = 'prop2';
	}
	console.log( MyConstructor() ); // undefined
	// para chamar, basta usar a palavra chave new
	console.log( new MyConstructor() ); // Object { prop1: "prop1", prop2: "prop2" }

	var constructor = new MyConstructor();
	console.log( constructor ); // Object { prop1: "prop1", prop2: "prop2" }
	// Criamos um novo objeto usando o MyConstructor chamado constructor e o this irá apontar para oq tiver em constructor
	console.log( constructor.prop1 ); // "prop1"
	console.log( constructor.prop2 ); // "prop2"
	console.log( prop1 ); // Chamando o prop1 sem o constructor ele irá refenciar o this ao objeto window que lá em cima está como 'propriedade 1'

// Arguments
	// É um objeto 'array like', é parecido como array, funciona como array, mas não é um Array. É implícito em funções.
	function myFunction(){
		return arguments;
	}
	console.log(myFunction()); // []
	// ele retorna em um array os argumentos utilizados na função
	function myFunction(arg1, arg2){
		return arguments;
	}
	console.log(myFunction(1, 2)); // [ 1, 2 ]
	// e se comporta como array, podendo ser chamado, como um
	function myFunction(arg1, arg2){
		return arguments[0];
	}
	console.log(myFunction(1, 2)); // 1