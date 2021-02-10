/* Criar um substituto de exportação com padrão de exportação

Na lição de exportação, você aprendeu sobre a sintaxe conhecida como exportação nomeada.
Isso permitiu que você disponibilizasse várias funções e variáveis para uso em outros arquivos.

Existe outra sintaxe de exportação que você precisa conhecer, conhecida como padrão de exportação.
Normalmente, você usará essa sintaxe se apenas um valor estiver sendo exportado de um arquivo. 
Ele também é usado para criar um valor de fallback para um arquivo ou módulo. */

// função nomeada
export default function add(x, y) {
  return x + y;
}

// função anônima
export default function(x, y) {
    return x + y;
  }

/* Como o padrão de exportação é usado para declarar um valor de fallback para um módulo ou arquivo, 
você só pode ter um valor como exportação padrão em cada módulo ou arquivo. Além disso, você não pode usar o padrão
de exportação com var, let ou const.

A função a seguir deve ser o valor de fallback para o módulo. Adicione o código necessário para fazer isso. */

export default function subtract(x, y) {
    return x - y;
  }