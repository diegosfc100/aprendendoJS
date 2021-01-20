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
    for(tarefa of tarefas){
        // criando o item da lista
        let itemLista = document.createElement('li');

        //adicionando classes no item da lista
        itemLista.setAttribute('classe', 'list-group-item list-group-item-action');

        // criando um texto
        let itemTexto = document.createTextNode(tarefa);

        // adicionando o texto no item da lista
        itemLista.appendChild(itemTexto);

        // adicionando o item da lista na lista
        lista.appendChild(itemLista);


    }
}

renderizarTarefas();