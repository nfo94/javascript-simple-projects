// guardando o slider com as imagens
let sliderImages = document.querySelectorAll('.slide');
// guardando o arrow left
let arrowLeft = document.querySelector('#arrow-left');
// guardando o arrow right
let arrowRight = document.querySelector('#arrow-right');
// iniciando contador com 0
let current = 0;

// set todos os slides para não aparecem
function reset(){
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

function slideLeft(){
  // dispare o reset para sumir tudo
  reset();
  // set a slideImage do índice [current - 1] e mostre
  sliderImages[current - 1].style.display = 'block';
  // diminua o current
  current--;  
}

function slideRight(){
  // dispare o reset para sumir tudo
  reset();
  // set a slideImage do índice [current + 1] e mostre
  sliderImages[current + 1].style.display = 'block'; 
  // adicione o current
  current++;
}

// event listener do arrow left
arrowLeft.addEventListener('click', function(){
  // clickou no arrow left. o current atual é igual a 0?
  if(current === 0){
    // se sim, então atualize o current com 4
    current = sliderImages.length;
  }
  // dispare o left
  slideLeft();
})

// event listener do arrow right
arrowRight.addEventListener('click', function(){
  // se o current atual for o último índice...
  if(current === sliderImages.length - 1){
    // então atualize o current para -1
    current = -1;
  }
  // dispare o right
  slideRight();
})