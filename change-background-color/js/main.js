const colors = [
  '#2ecc71', 
  '#3498db', 
  '#9b59b6', 
  '#f1c40f', 
  '#e74c3c',
  '#273c75',
  '#FDA7DF',
  '#e17055',
  '#b2bec3',
  '#B53471',
  '#2f3640',
];

const BUTTON = document.getElementById('btn');
BUTTON.addEventListener('click', function(){
  // random() between 0 and 1
  let random = Math.floor(Math.random() * colors.length);
  const BODY = document.body;
  BODY.style.backgroundColor = colors[random];
})