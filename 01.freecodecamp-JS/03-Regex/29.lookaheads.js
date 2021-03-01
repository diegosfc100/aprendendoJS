/* Lookahead positivo e negativo

Lookaheads são padrões que dizem ao JavaScript para olhar adiante em sua string para verificar se há padrões mais adiante.
Isso pode ser útil quando você deseja pesquisar vários padrões na mesma string.

Existem dois tipos de antevisão: antevisão positiva e antevisão negativa.
Um lookahead positivo verificará se o elemento no padrão de pesquisa está lá, mas não corresponderá realmente a ele. 
Um lookahead positivo é usado como (?=...) onde o ... é a parte necessária que não é correspondida.

Por outro lado, um lookahead negativo verificará se o elemento no padrão de pesquisa não está lá.
Um lookahead negativo é usado como (?!...) onde o ... é o padrão que você não quer que esteja lá.
O resto do padrão é retornado se a parte de antevisão negativa não estiver presente.

Lookaheads é um pouco confuso, mas alguns exemplos podem ajudar. */

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]


/* Um uso mais prático de lookaheads é verificar dois ou mais padrões em uma string. 
Aqui está um verificador de senha simples (ingenuamente) que procura entre 3 e 6 caracteres e pelo menos um número:  */

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true


// Use lookaheads no pwRegex para fazer a correspondência de senhas com mais de 5 caracteres e dois dígitos consecutivos.