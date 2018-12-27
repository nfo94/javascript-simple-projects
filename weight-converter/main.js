/*
  *Weight converter project
  */

//hidding the outputs
document.getElementById('output').style.visibility= 'hidden';
//selecting the input ang triggering event listener (input and function)
document.getElementById('lbsInput').addEventListener('input', function(e){
  //making outputs visible
  document.getElementById('output').style.visibility= 'visible';
  //picking the value of the target 'e' that we setted as the function's parameter
  var lbs = e.target.value;
  //showing results in html, id by id
  document.getElementById('gramsOutput').innerHTML = lbs / 0.0022046;
  document.getElementById('kgOutput').innerHTML = lbs / 2.2046;
  document.getElementById('ozOutput').innerHTML = lbs / lbs * 16;
});