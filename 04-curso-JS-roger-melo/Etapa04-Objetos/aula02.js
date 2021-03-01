// ESCOPO

    // Variável declarada no escopo global, todos tem acesso á ela.
    
    const age = 35;

    if (true) {
       const age = 20;
       console.log(`1º bloco de código: ${age}`); //20
    

    if (true) {
        // Esse escopo vai acessar a variável "age" mais próxima.
        console.log(`2º bloco de código: ${age}`); // 20
    }
}
    
    // Esse local não tem acesso a variável "age" que tem valor 20
    console.log(`Bloco de fora código: ${age}`); // 19



    // THIS

    // O this em objetos nos auxilia a acessar propriedade e métodos do objeto sem precisar inserir o nome do objeto.

    // O this tem um comportamento diferente em function declarations e arrow functions.

    // O this em functions declarations sempre será objeto que o método está sendo executado.

    // O this em arrow function sempre será em relação onde o objeto está declarado.

    const user = {
    name: "Diego",
    age: 30,
    city: "São Paulo",
    email: "diego.sfc@hotmail.com",
    blogPosts: ["Javascript Moderno", "React a biblioteca famosa"],
    login() {
        console.log("Usuário logado");
    },
    logout() {
        console.log("Usuário deslogado");
    },
    logBlogPosts() {
        // Esse é um caso que podemos utilizar o this,
        // sem precisar colocar user.blogPosts.
        return this.blogPosts;
    },
    logName: () => {
        return this; // Window
    },

    };

    console.log(user);
    console.log(user.logBlogPosts());
    console.log(user.logName());

    /*
   RESUMO/ANOTAÇÕES:
      - O escopo define a área onde uma variável está disponível ou não
      - Variáveis definidas na raiz do documento estão no escopo global, disponível em todo códgio
      - let e const definem escopo de bloco onde foram criadas
      - a palavra var ignora o escopo de bloco
      - Váriaveis declaradas em escopos diferentes podem receber o mesmo nome, pois são tratadas como entidades separadas
      - O this é um objeto de contexto. Ele representa o contexto no qual o código atual está sendo executado
      - O valor do this depende de onde ele foi chamado ou como
      - Na raiz do documento o this referencia o objeto global. Para o navegador o objeto global é o window object
      - Quando o this é usado dentro de um método de um objeto ele vai referênciar o próprio objeto. Isso se o método for definido com function declaration
      - Se o método for uma arrow function o valor do this será o mesmo de onde o método foi invocado. Se for a raiz do documento será o objeto global
*/