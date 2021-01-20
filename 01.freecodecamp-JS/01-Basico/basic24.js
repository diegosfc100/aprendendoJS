/* Citando Strings com aspas simples

Os valores de string em JavaScript podem ser escritos com aspas simples ou duplas,
contanto que você comece e termine com o mesmo tipo de aspas. Ao contrário de algumas 
outras linguagens de programação, as aspas simples e duplas funcionam da mesma forma em JavaScript. */

doubleQuoteStr = "Esta é uma string";
singleQuoteStr = 'Esta também é uma string';

/*
O motivo pelo qual você pode querer usar um tipo de citação em vez de outro é se você deseja usar ambos
em uma string. Isso pode acontecer se você quiser salvar uma conversa em uma string e colocá-la entre aspas.
Outro uso para isso seria salvar uma tag <a> com vários atributos entre aspas, tudo dentro de uma string. */

conversação = 'Finn exclama para Jake, "Algébrico!"';

/*
No entanto, isso se torna um problema se você precisar usar as aspas externas dentro dele.
Lembre-se de que uma string tem o mesmo tipo de aspas no início e no final. 
Mas se você tiver a mesma citação em algum lugar no meio, a string irá parar mais cedo e gerar um erro. */

goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
badStr = 'Finn responds, "Let's go!"'; // Lança um erro


/*
No goodStr acima, você pode usar ambas as aspas com segurança usando a barra invertida \ como um caractere de escape.
Nota:
A barra invertida \ não deve ser confundida com a barra /. Eles não fazem a mesma coisa.

Altere a string fornecida para uma string com aspas simples no início e no final e sem caracteres de escape.

No momento, a tag <a> na string usa aspas duplas em todos os lugares.
Você precisará alterar as aspas externas para aspas simples para poder remover os caracteres de escape.

var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";

EXERCÍCIO RESOLVIDO ABAIXO: */ 

var myStr = '<a href="http://www.example.com"target="_blank">Link</a>';
