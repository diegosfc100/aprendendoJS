/* Construir objetos JavaScript.

Os objetos são semelhantes aos arrays, exceto que, em vez de usar índices para acessar e modificar seus dados,
você acessa os dados nos objetos por meio do que são chamadas de propriedades.

Os objetos são úteis para armazenar dados de forma estruturada e podem representar objetos do mundo real, como um gato.

Aqui está um exemplo de objeto gato: */

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};


/* Neste exemplo, todas as propriedades são armazenadas como strings, como - "nome", "pernas" e "caudas". 
No entanto, você também pode usar números como propriedades. Você pode até omitir as aspas para propriedades
de string de palavra única, como segue: */

var anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };
  

/* No entanto, se o seu objeto tiver quaisquer propriedades que não sejam de string, o JavaScript irá modelá-las 
automaticamente como strings.

Faça um objeto que represente um cachorro chamado myDog que contém as propriedades "nome" (uma string), "pernas", "caudas"
e "amigos".

Você pode definir essas propriedades de objeto com os valores que desejar, desde que "nome" seja uma string,
"pernas" e "caudas" sejam números e "amigos" seja uma array. */

var myDog = {
    name: "Marley",
    legs: 4,
    tails: 1,
    friends: ["Pluto", "Pantera", "Zulu"]
}