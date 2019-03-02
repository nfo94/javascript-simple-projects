const fill = document.querySelector('.fill');
const  empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragStart(){

}

function dragEnd(){
  this.className += ' hold'
  this.className = 'invisible';
}