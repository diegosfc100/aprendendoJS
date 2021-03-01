## Expressões regulares

Expressões regulares, frequentemente abreviadas para "regex" ou "regexp", são padrões que ajudam os programadores a encontrar, pesquisar e substituir texto. As expressões regulares são muito poderosas, mas podem ser difíceis de ler porque usam caracteres especiais para fazer correspondências mais complexas e flexíveis.

Neste curso, você aprenderá como usar caracteres especiais, grupos de captura, lookaheads positivos e negativos e outras técnicas para corresponder a qualquer texto que você deseja.
<hr>

Padrões usados para resolver os desafios:

01.Match Literal Strings:/string/

02.Match a Literal String with Different Possibilities:operator OR

03.Ignore Case While Matching:flag "i"

04.Extract Matches:match()

05.Find More Than the First Match:flag "g"; flag "i"

06.Match Anything with Wildcard Period:using he wildcard character "."

07.Match Single Character with Multiple Possibilities:group of characters [ and ]

08.Match Letters of the Alphabet:range of characters [a-e]

09.Match Single Characters Not Specified:character [^]

10.Match Characters that Occur One or More Times:sign (+)

11.Match Characters that Occur Zero or More Times:character (*)

12.Find Characters with Lazy Matching:character (?)

13.Find One or More Criminals in a Hunt:sign (+)

14.Match Beginning String Patterns:character /^/

15.Match Ending String Patterns:character /$/

16.Match All Letters and Numbers:character /\w/

17.Match Everything But Letters and Numbers:character /\W/

18.Match All Numbers:character /\d/

19.Match All Non-Numbers:character /\D/

20.Restrict Possible Usernames:/^[a-z]{2,}\d*$/i

21.Match Whitespace:character /\s/

22.Match Non-Whitespace Characters:character /\S/

23.Specify Upper and Lower Number of Matches:{n1,n2}

24.Specify Only the Lower Number of Matches:{n,}

25.Specify Exact Number of Matches:{n}

26.Check for All or None:symbol /?/

27.Positive and Negative Lookahead:/(?=...)/

28.Reuse Patterns Using Capture Groups:/\string\1/

29.Use Capture Groups to Search and Replace:.replace();($)

30.Remove Whitespace from Start and End:.replace();($)

31.Remove Whitespace from Start and End:/\s/