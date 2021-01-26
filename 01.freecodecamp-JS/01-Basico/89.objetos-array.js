/* Manipulando objetos complexos

Às vezes, você pode querer armazenar dados em uma estrutura de dados flexível. 
Um objeto JavaScript é uma maneira de lidar com dados flexíveis. 
Eles permitem combinações arbitrárias de strings, números, booleanos, arrays, funções e objetos. */

/*

var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
*/

/* Este é um array que contém um objeto dentro. O objeto contém vários metadados sobre um álbum. 
Ele também tem uma matriz de "formatos" aninhada. Se quiser adicionar mais registros de álbum,
você pode fazer isso adicionando registros à matriz de nível superior.
Os objetos contêm dados em uma propriedade, que tem um formato de valor-chave.
No exemplo acima, "artist": "Daft Punk" é uma propriedade que tem a chave "artist" e o valor "Daft Punk".
JSON é um formato de intercâmbio de dados relacionado usado para armazenar dados. */
/*
{
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD",
      "Cassette",
      "LP"
    ],
    "gold": true
  } 

/* Adicione um novo álbum ao array myMusic. Adicione strings de artist e title, número release_year
e uma array de formats de strings. */

var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true,
    },
    
   { "artist":"BK",
    "title":"OLEM",
    "release_year": 2020,
    "formats": ["Streaming", "CD"]

    } 
  ];


  //

  var bestAlbuns = [
    {
    BK: "Castelos e Ruínas",
    ano: 2018
  },
 // não esquecer dessa virgula.
  
  {
    Djonga: "O menino que queria ser Deus",
    ano: 2018
  }
]

console.log(bestAlbuns);