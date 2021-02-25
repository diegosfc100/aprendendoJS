/* Corresponder números e letras do alfabeto

O uso do hífen (-) para corresponder a um intervalo de caracteres não se limita a letras.
Também funciona para corresponder a um intervalo de números.

Por exemplo, /[0-5]/ corresponde a qualquer número entre 0 e 5, incluindo 0 e 5.

Além disso, é possível combinar uma série de letras e números em um único conjunto de caracteres. */

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);


/* Crie uma única regex que corresponda a um intervalo de letras entre 'h' e 's' e a um intervalo de números
entre 2 e 6. Lembre-se de incluir os sinalizadores apropriados na regex. */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 

