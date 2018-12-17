//FUNÇÃO de salvar bookmark
function saveBookmark(){
  //salvando o value do form na variável siteName
  let siteName = document.getElementById('siteName').value;
  //salvando o value do form na variável siteUrl
  let siteUrl = document.getElementById('siteUrl').value;
  
  //para não deixar criar algo vazio ao clicar em submit
  if(!validateForm(siteName, siteUrl)){
    return false;
  }
  
  //com as variáveis acima, cria-se um objeto chamado bookmark
  let bookmark = {
    name: siteName,
    url: siteUrl
  };
  //testando se o array bookmarks está vazio
  if(localStorage.getItem('bookmarks') === null){
    //iniciando o array
    let bookmarks = [];
    //adicionando bookmark ao array de bookmarks
    bookmarks.push(bookmark);
    //setando para o local storage, caso esteja vazio, e salvando como json
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else{
    //não está vazio, agora vamos adicionar
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //salvando no array bookmarks
    bookmarks.push(bookmark);
    //setando novamente de volta ao localstorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  //pegando as bookmarks existentes
  fetchBookmarks();
}

//FUNÇÃO para deletar os bookmarks
function deleteBookmark(url){
  //pegando os bookmarks e parseando pra JSON
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //loop nas bookmarks existentes
  for(let i = 0; i < bookmarks.length; i++){
    //verificando se a url digitado confere com uma já existente do loop
    if(bookmarks[i].url == url){
      //tirando a url com splice
      bookmarks.splice(i, 1);
    }
  }
  //setando novamente ao localstorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  //fetching boookmarks novamente
  fetchBookmarks();
}

//FUNÇÃO para mostrar os bookmarks salvos
function fetchBookmarks(){ 
  //parseando as bookmarks pra JSON
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //pegando a div com os recultados de bookmarks
  let bookmarksResults = document.getElementById('bookmarksResults');
  //inicializando uma string a ser colocada na div de resultados
  bookmarksResults.innerHTML = '';
  for(let i = 0; i < bookmarks.length; i++){
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;
    bookmarksResults.innerHTML += '<div class="gray-box">'+ 
                                  '<h3>'+name+ 
                                  '<br>' +
                                  '<br>' +
                                  ' <a class="visit" target="_blank" href="'+addhttp(url)+'">Visitar</a> '+
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="delete" href="#">Deletar</a> '+
                                  '</h3>'+
                                  '</div>';
  }
}

//FUNÇÃO para validar o formulário
function validateForm(siteName, siteUrl){
  if(!siteName || !siteUrl){
    alert('Preencha o formulário!');
    return false;
  }
  //expressão regular de http
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)){
    alert('Coloque a URL completa e válida!');
    return false;
  }

  return true;
}

//FUNÇÃO para adicionar http
function addhttp(url){
  if(!/^(?:f|ht)tps?\:\/\//.test(url)){
    url = "http://"+url;
  }
  return url;
}

//para pegar o evento de submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);