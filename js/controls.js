// MOVEMENT CONTROLS FOR SHIP
var controls = {
  // var e = playerKeyPress;
  keyDown: function(e)
  {
    if (e == 38)
      upPressed = 1;
    if (e == 40)
      downPressed = 1;
    if (e == 37)
      leftPressed = 1;
    if (e == 39)
      rightPressed = 1;
  },

    keyUp: function(e)
  {
    // var e = playerKeyPress.which;
    if (e == 38)
      upPressed = 0;
    if (e == 40)
      downPressed = 0;
    if (e == 37)
      leftPressed = 0;
    if (e == 39)
      rightPressed = 0;
  }
}

// controls();

document.addEventListener('keyDown', function(e) {
console.log(e.keyCode);
if(e.keyCode === 38) controls.keyUp = "upPressed";
else if (e.keyCode === 40) controls.keyDown = "downPressed";
});

document.addEventListener("keyup", function(e) {
  if(e.keyCode === 38 || e.keyCode === 40) controls.keyUp = null;
})

module.exports = controls;
