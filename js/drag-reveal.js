(function(){
	"use strict";


var imageCon = document.querySelector('#imageCon'),
    drag = document.querySelector('.image-drag'),
    left = document.querySelector('.image-left'),
    dragging = false,
    min = 0,
    max = imageCon.offsetWidth;


function onDown() {
  dragging = true;
}

function onUp() {
  dragging = false;
}

function onMove(event) {
  if(dragging===true) {
    var x = event.clientX - imageCon.getBoundingClientRect().left;

	console.log(event.clientX);
	console.log(imageCon.getBoundingClientRect().left);

    if(x < min) { 
      x = min;   
    }
   else if(x > max) { 
      x = max-2; 
    }
    drag.style.left = x + 'px';
    left.style.width = x + 'px';
  }
}

drag.addEventListener('mousedown', onDown, false); 


document.body.addEventListener('mouseup', onUp, false);

document.body.addEventListener('mousemove', onMove, false);


})();

