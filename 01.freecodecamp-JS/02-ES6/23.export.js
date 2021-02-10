/* Use a exportação para compartilhar um bloco de código

Imagine um arquivo chamado math_functions.js que contém várias funções relacionadas a operações matemáticas.
Um deles é armazenado em uma variável, add, que pega em dois números e retorna sua soma. Você deseja usar esta função
em vários arquivos JavaScript diferentes. Para compartilhá-lo com esses outros arquivos, primeiro você precisa exportá-lo. */

export const add = (x, y) => {
  return x + y;
}

// O exemplo acima é uma maneira comum de exportar uma única função, mas você pode conseguir o mesmo desta forma:

const add = (x, y) => {
    return x + y;
  }
  
  export {add};
  

/* Ao exportar uma variável ou função, você pode importá-la em outro arquivo e usá-la sem ter que reescrever o código.
Você pode exportar várias coisas repetindo o primeiro exemplo para cada coisa que deseja exportar ou colocando-as 
todas na instrução de exportação do segundo exemplo, assim: */

export { add, subtract };

// Existem duas funções relacionadas a strings. Exporte ambos usando o método de sua escolha.

const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  export{uppercaseString};
  
const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  export{lowercaseString};
