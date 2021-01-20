// 1. Referenciando input

let input = document.querySelector('input[name=tarefa]');

// 2. Referenciando button

let btn = document.querySelector('#botao');

// 3. Referenciando a list
let lista = document.querySelector('#lista');


let tarefas = [
    'Comer',
    'Dormir',
    'Rezar',
    'Estudar',
    'Trabalhar'
]

function renderizarTarefas(){
    // limpando a listagem de itens antes de renderizar a tela
    lista.innerHTML = '';

    for(tarefa of tarefas){
        // criando o item da lista
        let itemLista = document.createElement('li');

        // adicionando classes no item da lista
        itemLista.setAttribute('classe', 'list-group-item list-group-item-action');

        // adicionando evento de clique no item da lista
        itemLista.onclick = function(){
            deletarTarefa(this);
        }

        // criando um texto
        let itemTexto = document.createTextNode(tarefa);

        // adicionando o texto no item da lista
        itemLista.appendChild(itemTexto);

        // adicionando o item da lista na lista
        lista.appendChild(itemLista);


    }
}

renderizarTarefas();


//1."escutando" o evendo de click no botão
btn.onclick = function(){
    //2.capturando o valor digitado no input
    let novaTarefa = input.value;

    if(novaTarefa !== ""){
    //3.atualizando a nova tarefa na lista de tarefas
    tarefas.push(novaTarefa);
    //4.renderizando tarefas
    renderizarTarefas();
    // limpar o input
    input.value = '';

    // limpar msgs de erro(spans)
    removerSpans();

    }else{
        removerSpans();

        let card = document.querySelector('.card');

        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-warning');

        let msg = document.createTextNode('Você precisa informar a tarefa!')

        span.appendChild(msg);

        card.appendChild(span);
    }
}

function removerSpans(){
    let spans = document.querySelectorAll('span');

    let card = document.querySelector('.card');

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarTarefa(tar){
    //removendo tarefas do array
    tarefas.splice(tarefas.indexOf(tar.textContent), 1);

    //renderiza novamente a tela
    renderizarTarefas();
}

