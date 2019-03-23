if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', move);
} else {
  alert('Your device does not support this feature');
};

let x, y, z;
let xpos, ypos;
let r, g, b;
let myText = "";

function move(e) {

  xpos = map(Number(e.gamma), -90, 90, 0, window.innerWidth, true);
  ypos = map(Number(e.beta) * 2, -120, 120, 0, window.innerHeight, true);

  z = e.alpha.toFixed(2);
  x = e.beta.toFixed(2);
  y = e.gamma.toFixed(2);
  $('#alpha').html(z);
  $('#beta').html(x);
  $('#gamma').html(y);
};

function setup() {
  let cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.parent('canvas');
};

function draw() {
  background(255, 255, 255);
  // let opacity = Math.floor(Number(x));
  // if (opacity >= 30 && opacity <= 60) {
  //   opacity -= opacity;
  //   opacity *= 8.5;
  // } else if (opacity > 60) {
  //   opacity = 255;
  // } else
  //   opacity = 0;
  if (Number(x) > 40) {
    myText = "Hello there"
  }
  else if (Number(y) > 20) {
    myText = "To the left!"
  }
  else if (Number(y) < -20) {
    myText = "To the right!"
  }
  else 
    myText = "";
  textSize(60);
  textAlign(CENTER);
  text(myText, (width / 2), (height / 2));
  fill(255, 35, 255);

  // xpos = Number(width/2) + Number(y * 5);
  // ypos = Number(height/2) + Number(x * 8);
  // ellipse(xpos, ypos, 80, 80);
  // fill((Number(z * 2)%255), (Number(z * 1.5)%255), (Number(z * 1.35)%255));
};
