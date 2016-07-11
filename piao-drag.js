function change_spin(start, end) {
	var style = document.createElement('style')
	style.type = 'text/css'
	document.getElementsByTagName('head')[0].appendChild(style)
	var current_style = document.styleSheets[document.styleSheets.length-1]
	current_style.insertRule("@-webkit-keyframes spin {0% {-webkit-transform: rotateY(" + start +  "deg)}100% {-webkit-transform: rotateY(-" + end + "deg)}}", current_style.rules.length);
}

// Global variables without any specified type (type will be determined when used in the functions below).
var last_drop, obj, x, y, prev_x, prev_y;

function drag(e) {
  // Yep, use the object I just clicked on.
  obj = e.target;
  piao.className = ''
  if(obj.offsetLeft) {
	  // Set current X coordinate minus distance left from offsetParent node.
	  prev_x = x - obj.offsetLeft;
	  // Set current Y coordinate minus distance top from offsetParent node.
	  prev_y = y - obj.offsetTop;
	  
  }
  // Change the object's color so it looks like it's usable/moveable.
}

function move(e) {
  // Always track and record the mouse's current position.
  if (e.pageX) {
    x = e.pageX; // X coordinate based on page, not viewport.
    y = e.pageY; // Y coordinate based on page, not viewport.
  }
  
  if(obj) {
  	document.getElementById('piao').style.transform = 'rotateY(' +  x  + 'deg)';
  }
  
//  else if (e.clientX) {
//    x=clientX; // X coordinate based on viewport.
//    y=clientY; // Y coordinate based on viewport.
//  }

}

function drop() {
  // Revert to the default css style.
  // Remove the attached event from the element so it doesn't keep following your mouse. :)
  change_spin(prev_x, x )
  piao.className = 'spinning'
  obj = false
}

// Make a specific element movable
document.onmousedown = drag;
document.onmousemove = move;
document.onmouseup = drop;
