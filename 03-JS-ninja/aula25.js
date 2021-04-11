// Eventos
// developer.mozilla.org/en-US/docs/Web/Events#Categories
var $a = document.querySelector('[data-js="link"]'); // Faz referencia ao elemento com o data-js="link" em sua tag
document.querySelector('[data-js="link"]').addEventListener('click', function(event){
    alert('Clicou na div');
}, false); // false é o parametro useCapture

$a.addEventListener('click', function(event){ // adiciona um evento click ao elemento $a
    event.preventDefault(); //previne a ação padrão
    alert('Clicou no a'); // faz um alert 
}, false);

// O parametro useCapture(true/false) determina como o evento vai ser propagado.
//false - começa pelo elemento acionado e vai propagando para os elementos externos. Neste caso como o a está dentro da div, primeiro vai ser chamado o evento de a e depois da div.

//true - começa pelo elemento pai(mais externo) e vai propagando para os elementos internos. Neste caso como o a está dentro da div, primeiro vai ser chamado o evento da div e depois do a.

// Função Genérica para acionar eventos
// Cria um evento que pode ser reaproveitado por outras funções, apenas passando como paramêtro o elemento que aciona o evento, o tipo do evento e a função de callback.
function on(element, event, callback) {
    document.querySelector(element).addEventListener(event, callback, false);
}

on('[data-js="link"]', event, function(event){
    event.preventDefault();
    alert('Clicou no a'); 
});

on('[data-js="link"]', 'click', function(){
    alert('Clicou na div');
});

on('[data-js="span"]', 'click', function(){
    alert('Clicou no span');
});

// Eventos usando o eventListener são cumulativos
on('[data-js="span"]', 'click', function(){
    alert('Novo clique no Span'); // Vai acionar o evento "clicou no span" e depois o "novo clique no Span"
});

// Setando eventos para elementos
// Você pode setar eventos para elementos, porém se você quiser utilizar mais de um evento ele não é cumulativo, ele sobrescreve os eventos
var $a = document.querySelector('[data-js="link"]');
$a.onclick = function(event){
    event.preventDefault();
    alert('clique no a')
};
$a.onclick = function(event){
    event.preventDefault();
    alert('Novo clique no a') // Executará apenas este evento
};

// Removendo eventos
function off(element, event, callback) {
    document.querySelector(element).removeEventListener(event, callback, false);
}
// Extraimos a função anônima para poder adicionar e remover eventos
function handleClick(event){
    event.preventDefault();
    alert('clique no a')
};
on('[data-js="link"]', 'click', handleClick); // Adiciona o evento
off('[data-js="link"]', 'click', handleClick); // Remove o evento

// Eventos de Formulário 
// Input - Acionado quando se digita dentro de um input no form
on('[data-js="input"]', 'input', function(event){
    console.log(this.value); 
});

// Keyup - Acionado quando se pressiona uma tecla e solta, precisa que a tecla seja 'solta' para ser acionado
on('[data-js="input"]', 'keyup', function(event){
    console.log(this.value); 
});

// Keydown - Acionado quando se pressiona uma tecla, apenas o fato de abaixar a tecla já aciona
on('[data-js="input"]', 'keyup', function(event){
    console.log(this.value); 
});

// Change - Acionado quando muda a opção do select
on('[data-js="select"]', 'change', function(event){
    console.log(this.value); 
});

on('[data-js="select"]', 'change', function(event){
    document.querySelector('[data-js="select"]').value = this.value; // Quando mudar o valor do select vai colocar esse mesmo valor escolhido dentro do input
});