
// TYPEOF
	// Typeof, é um operador unário, que te retorna o tipo do valor passado
	typeof undefined; // 'undefined'
	typeof function(){}; // 'function'
	typeof true; // 'Boolean'
	typeof 10; // 'number'
	typeof 'JS Ninja'; // 'string'

	// Qualquer outro objeto que não seja uma function ele vai retornar Object
	typeof {}; // 'object'
	typeof []; // 'object'
	typeof null; // Retorna 'object' pois é um erro na implementação do javascript

	// Confie em typeof somente para valores primitivos!

	// Testando valores null
	function test(x) {
		if ( x === null ){
			return 'Valor Nulo!';
		}
	}