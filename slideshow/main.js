/*
  *Simple slideshow project
  */

let i = 0;
const images = [];
const time = 1000;

images[0] = 'img1.jpg';
images[1] = 'img2.jpg';
images[2] = 'img3.jpg';
images[3] = 'img4.jpg';

function changeImg(){
  document.slide.src = images[i];
  if(i < images.length - 1){
    i++;
  }else{
    i = 0;
  }
  
  setTimeout("changeImg()", time);
}

window.onload = changeImg;