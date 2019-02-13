// to create a new element on html 
function newElement(tagName, className){
  // create element of the passed tag 
  const elem = document.createElement(tagName);
  // adding class to the new tag 
  elem.className = className;
  // returnig the element 
  return elem;
}

// creating the barriers 
function Barrier(reverse = false){
  // using the function we created, a new div with class barrier
  this.element = newElement('div', 'barrier');

  // creating the border and the body of the barrier
  const border = newElement('div', 'barrier__border');
  const body = newElement('div', 'barrier__body');
  // setting if it's a top barrier...
  this.element.appendChild(reverse ? body : border);
  // ... or a bottom barrier
  this.element.appendChild(reverse ? border : body);
  
  // to change the barrier height
  this.setHeight = height => body.style.height = `${height}px`;
}

// 
function Barriers(height, width, x){
  this.element = newElement('div', 'barriers'); // this is the pair!
  this.topBarrier = new Barrier(true); // top barrier
  this.bottomBarrier = new Barrier(false); // bottom barrier
    // inserting in the pair
  this.element.appendChild(this.topBarrier.element); 
  this.element.appendChild(this.bottomBarrier.element);
}



// const b = new Barrier(false);
// console.log(b);
// b.setHeight(200);
// document.querySelector('.screen').appendChild(b.element);