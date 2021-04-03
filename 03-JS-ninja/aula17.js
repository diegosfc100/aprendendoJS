// Regex - Expressões regulares
	// Servem para manipular strings 
	// regex101.com
    var texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis natus reprehenderit harum magni asperiores corporis saepe repudiandae facilis vel quibusdam qui libero enim, a necessitatibus nesciunt, minima assumenda eos! Maiores.";
	// .match() para utilizar o match deve colocar a expressão que deseja entre / /, por exemplo: /coloque a expressão/
		texto.match(/m/); // pega o primeiro 'm' e retorna um array
		texto.match(/m/g); // retorna um array com todos os 'm' minusculos do texto, pois g quer dizer global
		texto.match(/m/i); // retorna um array com todos os 'm' minusculos ou maiusculos do texto, pois i ignora o sensitive case
	// Sempre que o match não conseguir achar vai retornar null
	
	//Termos
		// \w - casa com alfanuméricos e _
			texto.match(/\w/); //retorna a primeira letra
			texto.match(/\w/g); //retorna um array com todas as letras do texto.	

		// \d - números, dígitos
			texto.match(/\d/); //retorna o primeiro numero
			texto.match(/\d/g); //retorna um array com todos os números do texto.

	// Classes de caracteres ou listas
		// Você pode usar o 'ou' | para pesquisar
			texto.match(/de|da/g); // procura globalmente 'de' ou 'da'.

		// Você pode usar o [] para fazer esse ou
			texto.match(/[12345]/g); // procura globalmente os números 1, 2, 3, 4 e 5;

		// Para agrupar caracteres usasse ()
			texto.match(/(1875)|(1817)/g); // procura o número 1875 ou 1817

		// Sequencia de caracteres
			texto.match(/[0-9]/g); // procura globalmente os números de 0 a 9;
			texto.match(/[a-z]/g); // procura globalmente os caracteres de 'a' a 'z';
			texto.match(/[A-Za-z0-9]/g); // procura globalmente TODOS os caracteres, maiusculos, minusculos, numeros;

	//.replace(); Substitui as sentenças
		texto.replace(/de/g, 'DE'); // Troca o 'de' pelo 'DE'

	// captura $1, $2, $&
		// $1 primeira captura
			texto.replace(/{de}/g, '--$1--'); // Troca os 'de' pelo '--de--'
			texto.replace(/(d)(e)/g, '$1$1'); // Troca os 'de' por 'dd'
		// $2 segunda catura
			texto.replace(/(d)(e)/g, '$2$2'); // Troca os 'de' por 'ee'		
		// $& todas as caturas
			texto.replace(/(d)(e)/g, '$&'); // Troca os 'de' por 'de'

		// o replace quando utilizado com regex você pode usar uma function
			texto.replace(/(d)(e)/g, function(capturaTotal, cap1, cap2){
				return (cap1 + cap2).toUpperCase();
			}); // troca todos os 'de' por 'DE'

			'clara'.replace(/(\w)/g, function(capturaTotal, letra){
				return letra.toUpperCase();
			}); // coloca tudo em caixa alta			

			'clara'.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2){
				return letra1.toUpperCase() + letra2.toLowerCase();
			}); // ClArA