if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', move);
} else {
  alert('Your device does not support this feature');
};

let x, y, z;
let r, g, b;
let myText = "";
let radius = 0;

function move(e) {
  z = e.alpha;
  x = e.beta;
  y = e.gamma;
};

function setup() {
  let cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.parent('canvas');
};

function draw() {
  Number(y) < 0 ? r = map(Number(y), -80, 0, 0, 127, true) : r = map(Number(y), 0, 80, 127, 255, true);
  g = map(Math.abs(Number(x)), 0, 90, 200, 10, true);
  Number(y) < 0 ? b = map(Number(y), -80, 0, 255, 127, true) : b = map(Number(y), 0, 80, 127, 0, true);
  radius = map(Number(x), 0, 65, 0, 50, true)

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
  fill(b, r, g);

  rect(((width / 2) - 50), ((height / 2) + 100), 100, 100, radius);
  fill(g, r, b);
};
