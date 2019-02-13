// to create a new element on html 
function newElement(tagName, className) {
  // create element of the passed tag 
  const elem = document.createElement(tagName);
  // adding class to the new tag 
  elem.className = className;
  // returnig the element 
  return elem;
}

// creating new barrier
function Barrier(reverse = false) {
  // using the function "newElement" that we created, a new div with class barrier
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

// create new obstacle and the opening space;
// "gameHeight" is the screen, "opening" is the space for the bird 
// to pass through and "x" is for the x axis - moving the animation
function Obstacle(gameHeight, opening, x) {
  this.element = newElement('div', 'obstacle'); // this is the pair!
  this.topBarrier = new Barrier(true); // top barrier
  this.bottomBarrier = new Barrier(false); // bottom barrier

  // appending to complete the obstacle in the html
  this.element.appendChild(this.topBarrier.element);
  this.element.appendChild(this.bottomBarrier.element);

  // generating a random opening for the bird to pass through
  this.lotteryOpening = () => {
    const topHeight = Math.random() * (gameHeight - opening);
    const bottomHeight = gameHeight - opening - topHeight;
    // now setting the height of both barriers
    this.topBarrier.setHeight(topHeight);
    this.bottomBarrier.setHeight(bottomHeight);
  }

  // get the x to see where the game is
  this.getX = () => {
    // parsing the the left pixels from the obstacle to check where it is
    parseInt(this.element.style.left.split('px')[0]);
  }

  // considering the x passed in the arguments, setting new x
  this.setX = x => this.element.style.left = `${x}px`;
  // "The clientWidth property returns the viewable width of an element 
  // in pixels, including padding, but not the border, scrollbar or margin".
  this.getWidth = () => this.element.clientWidth;
  // calling the lottery opening function to choose randomly
  this.lotteryOpening();
  // setting the x axis (moving)
  this.setX(x);
}

function multipleObstacles(gameHeight, gameWidth, opening, spaceBetweenObstacles, notifyGameCenter) {
  this.obstacles = [
    new Obstacle(gameHeight, opening, gameWidth),
    new Obstacle(gameHeight, opening, gameWidth + spaceBetweenObstacles),
    new Obstacle(gameHeight, opening, gameWidth + spaceBetweenObstacles * 2),
    new Obstacle(gameHeight, opening, gameWidth + spaceBetweenObstacles * 3)
  ];

  const displacement = 3;
  this.animate = () => {
    this.obstacles.forEach(pair => {
      pair.setX(pair.getX() - displacement);
      // when the element gets out of the game screen
      if (pair.getX() < -pair.getWidth()) {
        // moving the animation
        pair.setX(pair.getX() + spaceBetweenObstacles * this.obstacles.lenght);
        // changing randomly the new opening
        pair.lotteryOpening();
      }

      const middle = gameWidth / 2;
      const passedMiddle = pair.getX() + displacement >= middle && pair.getX() < middle;
      if (passedMiddle) notifyGameCenter();

    });
  }
}

const b = new multipleObstacles(700, 1200, 200, 400);  
const gameArea = document.querySelector('.screen');
b.obstacles.forEach(pair => gameArea.appendChild(pair.element));