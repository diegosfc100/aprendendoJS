/* Combine uma string literal com diferentes possibilidades

Usando regexes como /coding/, você pode procurar o padrão "coding" em outra string.

Isso é poderoso para pesquisar strings únicas, mas é limitado a apenas um padrão. Você pode pesquisar vários padrões
usando a alternância ou operador OR: |.

Este operador corresponde a padrões antes ou depois dele. Por exemplo, se você deseja corresponder a "sim" ou "não",
a regex desejada é /sim|não/.

Você também pode pesquisar mais do que apenas dois padrões. Você pode fazer isso adicionando mais padrões com mais
operadores OR separando-os, como /sim|não|talvez/

Preencha o regex petRegex para corresponder aos animais de estimação "cachorro", "gato", "pássaro" ou "peixe". */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/
let result = petRegex.test(petString);