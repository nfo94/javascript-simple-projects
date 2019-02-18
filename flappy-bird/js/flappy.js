// to create a new element on html 
function newElement(tagName, className) { //novoElemento
  // create element of the passed tag 
  const elem = document.createElement(tagName);
  // adding class to the new tag 
  elem.className = className;
  // returning the element 
  return elem;
}

// creating new barrier
function Barrier(reverse = false) { //Barreira
  // creating one barrier box
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

// create new obstacle: "opening" is the space for the bird to pass through and 
// "x" is for the x axis - moving the animation
function Obstacle(gameHeight, opening, x) { //ParDeBarreiras
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
  // in pixels, including padding, but not the border, scrollbar  or margin".
  this.getWidth = () => this.element.clientWidth;
  // calling the lottery opening function to choose randomly
  this.lotteryOpening();
  // setting the x axis (moving)
  this.setX(x);
}

function multipleObstacles(gameHeight, gameWidth, opening, spaceBetweenObstacles, notifyGameMiddle) { //Barreiras
  this.obstacles = [
    new Obstacle(gameHeight, opening, gameWidth),
    new Obstacle(gameHeight, opening, gameWidth + spaceBetweenObstacles),
    new Obstacle(gameHeight, opening, gameWidth + spaceBetweenObstacles * 2),
    new Obstacle(gameHeight, opening, gameWidth + spaceBetweenObstacles * 3)
  ];
  // pixels to move x, animating
  const displacement = 4;
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
      // screen's center
      const middle = gameWidth / 2;
      const passedMiddle = obstacle.getX() + displacement >= middle && obstacle.getX() < middle;
      if (passedMiddle) notifyGameMiddle();
    })
  }
}

// creating the bird and it's engine
function Bird(gameHeight) { // Passaro
  let flying = false;
  // new bird element
  this.element = newElement('img', 'bird');
  // bird source
  this.element.src = './imgs/bird.png';
  // get the Y axis where the bird is and parsing it
  this.getY = () => parseInt(this.element.style.bottom.split('px')[0]);
  // pressing buttons
  this.setY = y => this.element.style.bottom = `${y}px`;
  window.onkeydown = e => flying = true;
  window.onkeyup = e => flying = false;
  this.animate = () => {
    // flying? up 8 pixels. Not? -5 pixels
    const newY = this.getY() + (flying ? 8 : -5);
    const maxHeight = gameHeight - this.element.clientHeight;
    // stop bird from escaping the screen (bottom)
    if (newY <= 0) {
      this.setY(0);
    } else if (newY >= maxHeight) { // stop the bird from escaping the screen (top)
      this.setY(maxHeight);
    } else {
      this.setY(newY); // in any other circumstances, just fly
    }
  }

  this.setY(gameHeight / 2)
}

// defining game progress
function Progress() { // Progresso
  // create new progress element
  this.element = newElement('span', 'progress');
  // method to put the updated score in the html
  this.updateScore = score => this.element.innerHTML = score;
  // beginning of scoring
  this.updateScore(0);
}

function areOverlaped(elementA, elementB) {
  // The Element.getBoundingClientRect() method returns the size of an element and 
  // its position relative to the viewport.
  const a = elementA.getBoundingClientRect();
  const b = elementB.getBoundingClientRect();

  // check horizontal and vertical collision
  const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left;
  const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top;
  return horizontal && vertical;
}

function elementsCollided(bird, gameObstacles) {
  let collided = false;
  gameObstacles.obstacles.forEach(obstacle => {
    if (!collided) {
      const above = obstacle.topBarrier.element;
      const bellow = obstacle.bottomBarrier.element;
      collided = areOverlaped(bird.element, above) || areOverlaped(bird.element, bellow);
    }
  })
  return collided;
}

// start game
function FlappyBird() {
  let score = 0;
  // game area, height and width 
  const gameArea = document.querySelector('.screen');
  const gameHeight = gameArea.clientHeight;
  const gameWidth = gameArea.clientWidth;
  //creating the progress 
  const progress = new Progress();
  // creating multiple obstacles
  const gameObstacles = new multipleObstacles(gameHeight, gameWidth, 245, 400, () => progress.updateScore(++score));
  // creating birds
  const bird = new Bird(gameHeight);
  // appending stuff on game screen
  gameArea.appendChild(progress.element);
  gameArea.appendChild(bird.element);
  gameObstacles.obstacles.forEach(obstacle => gameArea.appendChild(obstacle.element));
  // starting animation
  this.start = () => {
    const timer = setInterval(() => {
      gameObstacles.animate();
      bird.animate();
      if (elementsCollided(bird, gameObstacles)) {
        clearInterval(timer);
        let gameOver = newElement('div', 'gameOver');
        gameOver.innerHTML = 'Game Over! Refresh'
        gameArea.appendChild(gameOver);
      }
    }, 20);
  }
}

new FlappyBird().start();