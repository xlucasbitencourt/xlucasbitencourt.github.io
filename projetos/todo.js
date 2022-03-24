const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');
const salvarTarefas = document.getElementById('salvar-tarefas');
const removerSelecionado = document.getElementById('remover-selecionado');

function carregaLista() { // Requisito 12
  listaTarefas.innerHTML = localStorage.getItem('tarefasSalvas');
}

window.onload = carregaLista;

function adicionaTarefa() { // Requisito 5 e 6
  const item = textoTarefa.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = item;
  novaTarefa.classList = 'tarefa';
  novaTarefa.addEventListener('click', selecionaTarefa);
  novaTarefa.addEventListener('dblclick', completaTarefa);
  listaTarefas.appendChild(novaTarefa);
  textoTarefa.value = '';
}

criarTarefa.addEventListener('click', adicionaTarefa);

// Requisito 7 e 8

function selecionaTarefa(alvo) {
  const tarefa = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefa.length; index++) { // Requisito 8
    tarefa[index].classList.remove('selected'); // Adicona pro requisito 14
  }
  alvo.target.classList.add('selected'); // Adiciona pro requisito 14
}

function completaTarefa(alvo) { // Requisito 9
  if (alvo.target.className.includes('completed')) {
    alvo.target.classList.remove('completed');
  } else {
    alvo.target.classList.add('completed');
  }
}

function apagarLista() { // Requisito 10
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}

apagaTudo.addEventListener('click', apagarLista);

function apagarFinalizados() { // Requisito 11
  const tarefas = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefas.length; index++) {
    if (tarefas[index].classList.contains('completed')) {
      tarefas[index].remove();
    }
  }
}

removerFinalizados.addEventListener('click', apagarFinalizados);

function SalvarListaTarefas() { // Requisito 12
  localStorage.setItem('tarefasSalvas', listaTarefas.innerHTML);
}

salvarTarefas.addEventListener('click', SalvarListaTarefas);

function removeItemSelecionado() { // Requisito 14
  const tarefas = document.querySelectorAll('.tarefa');
  for (let index = 0; index < tarefas.length; index++) {
    if (tarefas[index].classList.contains('selected')) {
      tarefas[index].remove();
    }
  }
}

removerSelecionado.addEventListener('click', removeItemSelecionado);
