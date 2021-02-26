/* Restringir nomes de usuário possíveis

Os nomes de usuário são usados em qualquer lugar na Internet. São eles que dão aos usuários uma identidade única
em seus sites favoritos.

Você precisa verificar todos os nomes de usuário em um banco de dados. Aqui estão algumas regras simples que os usuários
devem seguir ao criar seu nome de usuário.

    - Os nomes de usuário podem usar apenas caracteres alfanuméricos.
    - Os únicos números no nome de usuário devem estar no final. Pode haver zero ou mais deles no final.
    - O nome de usuário não pode começar com o número.
    - As letras do nome de usuário podem ser minúsculas e maiúsculas.
    - Os nomes de usuário devem ter pelo menos dois caracteres.
    - Um nome de usuário de dois caracteres só pode usar letras do alfabeto como caracteres.

Altere o regex userCheck para se ajustar às restrições listadas acima. */

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i
let result = userCheck.test(username);

