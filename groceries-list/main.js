/*
  *Groceries list project
  */
 
//pegando o form do "Add items"
const form = document.getElementById('addForm');
//pegando a ul do "Add items"
const itemList = document.getElementById('items');
//pegando o input de filtrar
const filter = document.getElementById('filter');
//evento do form submit
form.addEventListener('submit', addItem);
//evento no itemList pra deletar
itemList.addEventListener('click', removeItem);
//evento do input de filtrar
filter.addEventListener('keyup', filterItems);


//função de deletar
function removeItem(e){
  //se o target contém uma class "delete"...
  if(e.target.classList.contains('delete')){
    //cria a constante do li que tem "delete"
    const li = e.target.parentElement;
    //remove o filho da itemList, o li que tem o delete que foi apertado
    itemList.removeChild(li);
  }
}
//função de adicionar item
function addItem(e){
  e.preventDefault();
  //pegar o valor do input
  const newItem = document.getElementById('item').value;
  //criando nova li
  const li = document.createElement('li');
  //adicionando classe
  li.className = 'list-group-item';
  //criando a li que recebe o novo item
  const newLi = document.createTextNode(newItem);
  //adicionando node com input value
  li.appendChild(newLi);
  //criando botão de deletar
  const deleteBtn = document.createElement('button');
  //adicionando as classes bootstrap para o botão
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //criando o text node do botão
  deleteBtn.appendChild(document.createTextNode('X'));
  //adicionando o botão 
  li.appendChild(deleteBtn);
  //adicionando li pra lista
  itemList.appendChild(li);
  clearInput(item);
}
//função para limpar input
function clearInput(item){
  //retorna o value do item como vazio
  return item.value = '';
}
//função para filtrar lista
function filterItems(e){
  //colocando em lowercase pra não ter discrepâncias
  const text = e.target.value.toLowerCase();
  //selecionando lis da ul (itemList)
  const items = itemList.getElementsByTagName('li');
  //convertendo em array e fazendo o loop de forEach
  Array.from(items).forEach(function(item){
    //criando constante pro nome 
    const itemName = item.firstChild.textContent;
    //se o itemName for igual ao text que tá no índice...
    if(itemName.toLowerCase().indexOf(text) != -1){
      //mostre
      item.style.display = 'block';
      //se não for igual...
    }else{
      //não mostre
      item.style.display = 'none';
    }
  })
}