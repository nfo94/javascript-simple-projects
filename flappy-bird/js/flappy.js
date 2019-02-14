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
function Barrier(reverse = false) { // creating one barrier box
  this.element = newElement('div', 'barrier'); //new barrier element

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
  this.element = newElement('div', 'obstacle'); // the whole obstacle!
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

  // parsing the left pixels from the obstacle to check where it is
  this.getX = () => parseInt(this.element.style.left.split('px')[0]); // ex: [100,px]

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
  // pixels to move x, animating
  const displacement = 3;
  this.animate = () => {
    this.obstacles.forEach(obstacle => { 
      // set a new x based on the current x (get) and the displacement
      obstacle.setX(obstacle.getX() - displacement);
      // when the element gets out of the game screen
      if (obstacle.getX() < -obstacle.getWidth()) {
        // set a new x (new position)
        obstacle.setX(obstacle.getX() + spaceBetweenObstacles * this.obstacles.length);
        // changing randomly the new opening
        obstacle.lotteryOpening();
      }

      const middle = gameWidth / 2;
      const passedMiddle = obstacle.getX() + displacement >= middle && obstacle.getX() < middle
      if (passedMiddle) notifyGameCenter();
    })
  }
}

function Bird(gameHeight) {
  let flying = false;
  this.element = newElement('img', 'bird');
  this.element.src = './imgs/bird.png';

  this.getY = () => parseInt(this.element.style.bottom.split('px')[0]);
  this.setY = y => this.element.style.bottom = `${y}px`;
  window.onkeydown = e => flying = true;
  window.onkeyup = e => flying = false;

  this.animate = () => {
    const newY = this.getY() + (flying ? 8 : -5);
    const maxHeight = gameHeight - this.element.clientHeight;

    if (newY <= 0) {
      this.setY(0);
    } else if (newY >= maxHeight) {
      this.setY(maxHeight);
    } else {
      this.setY(newY);
    }
  }

  this.setY(gameHeight / 2)
}

const barriers = new multipleObstacles(700, 1200, 450, 400);
const bird = new Bird(700);
const gameArea = document.querySelector('.screen');
gameArea.appendChild(bird.element);
barriers.obstacles.forEach(obstacle => gameArea.appendChild(obstacle.element));
setInterval(() => {
  barriers.animate();
  bird.animate();
}, 20);