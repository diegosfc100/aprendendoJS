// WRAPPER OBJECTS
	/*Valores primitivos não são objetos, mas possuem propriedades, pois o Javascript cria envoltótios para o tipo,
	no caso string, usando os construtores, para que você possa acessar algumas propriedades e após o uso ele descarta. */
	
	var nome = 'DIEGO'; // Converte para um objeto
	console.log(nome.length); // 5


	// Construtores criam novos objetos. Para utilizar construtores, basta utilizar a palavra chave 'new'
	var nome = new String('DIEGO'); // String: 'DGO'
	var age = new Number(30); // Number: 31
	var ninja = new Boolean(false); // Boolean: False


	// Conversores. sem utilizar a palavra chave 'new', converte-se o tipo da variável.
	var nome = String(30); // '30'
	var age = Number('150'); // 150
	var ninja = Boolean(0); // false

	var concat = String(10 + 10); // 20
	console.log(concat)

	// A atribuição é sempre a última coisa a ser feita. A expressão começa a ser interpretada da direita para a esquerda.
	// Então primeiro é feita a soma de 10 + 10. Depois, esse valor é passado como parâmetro para o objeto String, 
	// ficando String(20). O resultado aqui deveria ser 1010.

	var concat = String(10) + String(10); // 1010
	console.log(concat)
