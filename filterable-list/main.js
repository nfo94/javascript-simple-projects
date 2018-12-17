//pegar o input
var filterInput = document.getElementById('filterInput');
//adicionar o event listener
filterInput.addEventListener('keyup', filterNames);
//FUNÇÃO de filtrar nomes
function filterNames(){
  //criando variável para salvar o valor filtrado no filterInput
  var filterValue = document.getElementById('filterInput').value.toUpperCase();
  console.log(filterValue);
  var ul = document.getElementById('names');
  var li = ul.querySelectorAll('li.collection-names'); 
  for(var i = 0; i < li.length; i++){
    var a = li[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
      li[i].style.display = '';
    }else{
      li[i].style.display = 'none';
    }
  };
}