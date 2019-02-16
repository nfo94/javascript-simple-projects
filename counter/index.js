(function () {
  let minus = document.getElementById('minus');
  let plus = document.getElementById('plus');

  minus.addEventListener('click', minusCounter);
  plus.addEventListener('click', plusCounter);

  function minusCounter() {
    let counter = parseInt(document.getElementById('counter').textContent);
    counter -= 1;
    document.getElementById('counter').innerHTML = counter;
  }

  function plusCounter() {
    let counter = parseInt(document.getElementById('counter').textContent);
    counter += 1;
    document.getElementById('counter').innerHTML = counter;
  }
})();