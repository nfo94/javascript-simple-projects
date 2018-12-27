/*
  *Animated font awesome project
  */ 

brakeChain();
//call the function every 2 seconds so that it keeps breaking
setInterval(brakeChain, 2000);

batteryCharge();
setInterval(batteryCharge, 5000);

hourglass();
setInterval(hourglass, 3000);

function brakeChain(){
  let chain = document.getElementById('chain');
  chain.innerHTML = '&#xf0c1;';
  setTimeout(() => {
    chain.innerHTML = '&#xf127';
  }, 1000);
}

function batteryCharge(){
  let battery = document.getElementById('battery');
  battery.innerHTML = '&#xf244';
  setTimeout(() => {
    battery.innerHTML = '&#xf243'
  }, 1000);
  setTimeout(() => {
    battery.innerHTML = '&#xf242'
  }, 2000);
  setTimeout(() => {
    battery.innerHTML = '&#xf241'
  }, 3000);
  setTimeout(() => {
    battery.innerHTML = '&#xf240'
  }, 4000);
}

function hourglass(){
  let hourglass = document.getElementById('hourglass');
  hourglass.innerHTML = '&#xf251';
  setTimeout(() => {
    hourglass.innerHTML = '&#xf252';
  }, 1000);
  setTimeout(() => {
    hourglass.innerHTML = '&#xf253';
  }, 2000);
}