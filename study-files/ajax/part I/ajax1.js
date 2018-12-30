/** AJAX stands for Asynchronous JavaScript & XML
 * it's a set of web technologies to send & receive data asynchronously
 * It does note interfere with the currente web page
 * JSON has replaced XML for the most part
 */

/** XmlHttpRequest (XHR) Object
 * API in the form of an object provided by the browser's JS environment
 * It has methods to transfer data between client/server
 */

document.getElementById('button').addEventListener('click', loadText);
function loadText(){
  let xhr = new XMLHttpRequest();
  //open function with 3 parameters - type, url/file, async
  xhr.open('GET', 'sample.txt', true);
  console.log('READYSTATE', xhr.readyState);
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }
  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(xhr.status === 200){
      //console.log(this.responseText);
      document.getElementById('text').innerHTML = this.responseText;
    }
  }
  xhr.onerror = function(){
    console.log('Request error');
  }
  xhr.send();
}
