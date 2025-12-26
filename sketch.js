let earthTex;
let tapSound;

let angleEarth = 0;
let angleSat = 0;

function preload() {
  earthTex = loadImage("globe.jpg");
  soundFormats("mp3");
  tapSound = loadSound("doorbell.mp3");
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mousePressed(playSound);
}

function draw() {
  background(1);
  orbitControl();

  // ===== LIGHTING =====
  ambientLight(60);
  directionalLight(255, 255, 255, 0.5, 0.5, -1);

  // ===== EARTH =====
  push();
  rotateY(angleEarth);
  angleEarth += 0.2;

  noStroke();
  texture(earthTex);
  specularMaterial(255);
  sphere(150);
  pop();

  // ===== SATELLITE =====
  push();
  rotateY(angleSat);
  angleSat += 3;

  translate(250, 0, 0);
  ambientMaterial(200);
  box(30, 12, 12);
  pop();
}

function playSound() {
  if (tapSound.isLoaded()) {
    tapSound.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
