if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', move);
} else {
  alert('Your device does not support this feature');
};

let x, y, z;
// let xpos, ypos;
let r, g, b;
let myText = "";

function move(e) {

  // xpos = map(Number(e.gamma), -90, 90, 0, window.innerWidth, true);
  // ypos = map(Number(e.beta) * 2, -120, 120, 0, window.innerHeight, true);

 
  // console.log(g);

  z = e.alpha.toFixed(2);
  x = e.beta.toFixed(2);
  y = e.gamma.toFixed(2);
  // $('#alpha').html(z);
  // $('#beta').html(x);
  // $('#gamma').html(y);
};

function setup() {
  let cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.parent('canvas');
};

function draw() {
  // Number(y) < 0 ? r = map(Number(y), -50, 0, 255, 186, true) : r = map(Number(y), 0, 50, 186, 148, true);
  // g = map(Math.abs(Number(y)), 50, 0, 85, 0, true);
  // Number(y) < 0 ? b = map(Number(y), -50, 0, 255, 211, true) : b = 211;

  Number(y) < 0 ? r = map(Number(y), -80, 0, 0, 127, true) : r = map(Number(y), 0, 80, 127, 255, true);
  // g = map(Math.abs(Number(y)), 50, 0, 200, 0, true);
  g = map(Math.abs(Number(x)), 0, 90, 200, 10, true);
  Number(y) < 0 ? b = map(Number(y), -80, 0, 255, 127, true) : b = map(Number(y), 0, 80, 127, 0, true);

  background(r, g, b);
  if (Number(x) > 40) {
    myText = "UP"
  }
  if (Number(x) < 40) {
    myText = "DOWN";
  } 
  if (Number(y) > 20) {
    myText = "RIGHT"
  }
  if (Number(y) < -20) {
    myText = "LEFT"
  }
  if (Number(y) < -80) {
    myText = "DON'T DROP"
  }
  if (Number(y) > 55 && Number(y) < 65 && Number(x) > 65) {
    myText = "JUST RIGHT"
  }

  textSize(55);
  textAlign(CENTER);
  text(myText, (width / 2), (height / 2));
  // text(Math.floor(r), 200, 100);
  // text(Math.floor(g), 200, 200);
  // text(Math.floor(b), 200, 300);
  fill(b, r, g);
};
