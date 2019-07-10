document.getElementById('JSE-captcha-game-container').style.background = '#000';
document.getElementById('JSE-captcha-game').style.cursor = "url('data:image/png;base64,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'), auto";
var spaceShip = new Image();
spaceShip.src = 'data:image/png;base64,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';
spaceShip.style.position = 'absolute';
spaceShip.xAxis = 20;
spaceShip.yAxis = 120;
spaceShip.rotation = 45;
var handleMovement = function(e) {
  var rect = e.currentTarget.getBoundingClientRect();
  if (e.pageX == null) {
    eDoc = (e.target && e.target.ownerDocument) || document;
    doc = eDoc.documentElement;
    body = eDoc.body;
    e.pageX = Math.floor((e.touches && e.touches[0].clientX || e.clientX || 0) +
      (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
      (doc && doc.clientLeft || body && body.clientLeft || 0));
    e.pageY = Math.floor((e.touches && e.touches[0].clientY || e.clientY || 0) +
      (doc && doc.scrollTop || body && body.scrollTop || 0) -
      (doc && doc.clientTop || body && body.clientTop || 0));
  }
  var mouseX = e.pageX - rect.left;
  var mouseY = e.pageY - rect.top;
  spaceShip.rotation = Math.atan2(mouseY - spaceShip.yAxis, mouseX - spaceShip.xAxis) * (180 / Math.PI) + 85;

  self.mlData.mouseEvents += 1;
  if (mouseY < self.mlData.mouseY) self.mlData.mouseDown += 1;
  if (mouseY > self.mlData.mouseY) self.mlData.mouseUp += 1;
  if (mouseX > self.mlData.mouseX) self.mlData.mouseRight += 1;
  if (mouseX < self.mlData.mouseX) self.mlData.mouseLeft += 1;
  self.mlData.mouseX = mouseX;
  self.mlData.mouseY = mouseY;
  self.mlData.mousePattern.push(parseInt(mouseX)+'x'+parseInt(mouseY));
}
document.getElementById('JSE-captcha-game').onmousemove = handleMovement;
document.getElementById('JSE-captcha-game').ontouchmove = handleMovement;
var asteroidSource = 'data:image/png;base64,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';
var asteroidFlame = 'data:image/png;base64,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';

var asteroid1 = new Image();
asteroid1.src = asteroidSource;
asteroid1.style.position = 'absolute';
asteroid1.id = Math.floor(Math.random() * 1000000000000);
asteroid1.onclick = function() {
  asteroid1.smashed = true;
  self.mlData.mouseClicks += 1;
  if (asteroid1.smashed && asteroid2.smashed && asteroid3.smashed) {
    self.gameCompleted();
    clearInterval(update);
  }
  asteroid1.src = asteroidFlame;
  fadeOut(asteroid1.id);
}
asteroid1.xAxis = 230;
asteroid1.yAxis = 20;
asteroid1.rotation = 0;

var asteroid2 = new Image();
asteroid2.src = asteroidSource;
asteroid2.style.position = 'absolute';
//asteroid2.style.width = '30px';
asteroid2.id = Math.floor(Math.random() * 1000000000000);
asteroid2.onclick = function() {
  asteroid2.smashed = true;
  self.mlData.mouseClicks += 1;
  if (asteroid1.smashed && asteroid2.smashed && asteroid3.smashed) {
    self.gameCompleted();
    clearInterval(update);
  }
  asteroid2.src = asteroidFlame;
  fadeOut(asteroid2.id);
}
asteroid2.xAxis = 230;
asteroid2.yAxis = 120;
asteroid2.rotation = 0;

var asteroid3 = new Image();
asteroid3.src = asteroidSource;
asteroid3.style.position = 'absolute';
//asteroid3.style.width = '30px';
asteroid3.id = Math.floor(Math.random() * 1000000000000);
asteroid3.onclick = function() {
  asteroid3.smashed = true;
  self.mlData.mouseClicks += 1;
  if (asteroid1.smashed && asteroid2.smashed && asteroid3.smashed) {
    self.gameCompleted();
    clearInterval(update);
  }
  asteroid3.src = asteroidFlame;
  fadeOut(asteroid3.id);
}
asteroid3.xAxis = 130;
asteroid3.yAxis = 70;
asteroid3.rotation = 0;

function rotateThis(elem,degrees) {
  elem.style.webkitTransform = 'rotate('+degrees+'deg)'; 
  elem.style.mozTransform    = 'rotate('+degrees+'deg)'; 
  elem.style.msTransform     = 'rotate('+degrees+'deg)'; 
  elem.style.oTransform      = 'rotate('+degrees+'deg)'; 
  elem.style.transform       = 'rotate('+degrees+'deg)'; 
}

function fadeOut(elemID) {
  var elem = document.getElementById(elemID);
  if (elem) {
    var opacity = parseFloat(window.getComputedStyle(elem).getPropertyValue("opacity")) || 0;
    if (opacity > 0.1) {
      elem.style.opacity = opacity - 0.1;
      setTimeout(function() { fadeOut(elemID); }, 50);
    } else {
      elem.style.display = 'none';
    }
  }
}

function draw () {
  spaceShip.style.top = spaceShip.yAxis+'px';
  spaceShip.style.left = spaceShip.xAxis+'px';
  rotateThis(spaceShip,spaceShip.rotation);
  asteroid1.xAxis -= 6;
  if (asteroid1.xAxis <= 0) asteroid1.xAxis = 290;
  asteroid1.style.top = asteroid1.yAxis+'px';
  asteroid1.style.left = asteroid1.xAxis+'px';
  asteroid1.rotation += 5;
  rotateThis(asteroid1,asteroid1.rotation);
  asteroid2.yAxis -= 3;
  if (asteroid2.yAxis <= 0) asteroid2.yAxis = 190;
  asteroid2.style.top = asteroid2.yAxis+'px';
  asteroid2.style.left = asteroid2.xAxis+'px';
  asteroid2.rotation -= 3;
  rotateThis(asteroid2,asteroid2.rotation);
  asteroid3.xAxis -= 3;
  asteroid3.yAxis -= 3;
  if (asteroid3.xAxis <= 0 && asteroid3.yAxis <= 0) {
    asteroid3.xAxis = 230;
    asteroid3.yAxis = 190;
  }
  asteroid3.style.top = asteroid3.yAxis+'px';
  asteroid3.style.left = asteroid3.xAxis+'px';
  asteroid3.rotation += 4;
  rotateThis(asteroid3,asteroid3.rotation);
}

var update = setInterval(function(draw1) {
  draw1();
}, 100,draw);

var gameBoard = document.getElementById('JSE-captcha-game');
gameBoard.append(spaceShip);
gameBoard.append(asteroid1);
gameBoard.append(asteroid2);    
gameBoard.append(asteroid3);