/* Reverter uma string

Inverta a string fornecida.

Você pode precisar transformar a string em uma matriz antes de poder invertê-la.

Seu resultado deve ser uma string. 

function reverseString(str) {
  return str;
}

reverseString("hello"); 

*/

function reverseString(str) {
    str = str.split("");
    str = str.reverse();
    str = str.join("");
    
    return str;
  }
  
  reverseString("hello");