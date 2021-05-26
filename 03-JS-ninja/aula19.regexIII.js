// Caracteres Especiais
	// ^ - fora de uma lista verifica o inicio da string
    /^<\w+>/

	// $ - fora da regex verifica o fim da string
		/<\w+>$/

	// flag m - multline, casa com todos os inicios de linha
		/<\w+>/m

	// ? - faz uma captura não gulosa, só casa até determinado ponto
		/(<\w+>).+?(<\/\w+>)/ // nesse caso vai fazer a captura até achar um '<'
	// (?:) - faz somente o agrupamento, sem capturar
		/jun(?:n|l)ho/
	// \1, \2 - referencia dentro da regex
		/(<\w+>).+<\/(\1)>/ // pega a referência da primeira captura
		/(<\w+>)(.+)<\/(\1)(\2)>/ // pega a referência da primeira e da segunda captura
// Métodos
	// match(regex); - retorna um array com o que foi casado, se não encontrar retorna null
		'fernando'.match(/n/g). // ["n", "n"]
		'fernando'.match(/x/g). // null
	// replace(regex, string a ser trocada ou função)
	// split() - quebra as sentenças na regex passada
		'111.222.333-44'.split(/\D/); // ["111", "222", "333", "44"]

	// search() - faz uma busca na string retornando o indice onde o regex foi encontrado, se não encontrar retorna -1. Ele só encontra o primeiro item, não importa se usar a flag g
		'111.222.333-44'.search(/\./); // 3
		'111.222.333-44'.search(/f/); // -1

// Construtor RegExp()
	var regex = new RegExp('nando', 'g');
	'fernando'.match( regex ); // ["nando"]

	// Dentro do construtor você precisa escapar a barra
		regex = new RegExp('\\d', 'i');
		regex = new RegExp('\\.');

	// Métodos 
		// test() - verifica se existe e retorna true ou false
			var name = "fer123nando";
			/\d/.test(name); // true
			/z/.test(name); // false
			regex = new RegExp('f');
			regex.test(name); // true

		// exec() - faz o casamento a cada vez que é executado, até que ele não tenha mais referencia e retorne null, voltando para o inicio do loop
			var regex = /\d/g;
			regex.exec(name); // ["1"]
			regex.exec(name); // ["2"]
			regex.exec(name); // ["3"]
			regex.exec(name); // null
			regex.exec(name); // ["1"]
			// Você pode utilizar no while
				var result;
				while( result = regex.exec(name) !== null ){
					console.log( result );
				}

	// Caracteres especiais dentro da string
		regex = new RegExp('Juliu\'s bar');