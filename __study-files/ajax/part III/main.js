/**
 * XMLHttpRequest é um objeto que fornece funcionalidade ao cliente para transferir 
 * dados entre um cliente e um servidor. Ele fornece uma maneira fácil de recuperar 
 * dados de um URL sem ter que fazer uma atualização de página inteira. Isso permite 
 * que uma página da Web atualize apenas uma parte do conteúdo sem interromper o que 
 * o usuário esteja fazendo. XMLHttpRequest é usado constantemente na programação de 
 * AJAX.
 */

const btn = document.querySelector('#btn');
const response = document.querySelector('#response');
let pageCounter = 1;

btn.addEventListener('click', function(){
  const ourRequest = new XMLHttpRequest();
  //get or post
  ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
  ourRequest.onload = function(){
    //parsing the text to be interpreted as json
    let ourData = JSON.parse(ourRequest.responseText);
    renderHTLM(ourData);
  }
  ourRequest.send();
  pageCounter++;
  if(pageCounter > 3) {
    btn.style.display = 'none';
  }
})

function renderHTLM(data){
  let htmlString = '';
  for(let i = 0; i < data.length; i++){
    htmlString += `<p>${data[i].name} is a ${data[i].species}</p>`;
  }
  response.insertAdjacentHTML('beforeend', htmlString);
}
