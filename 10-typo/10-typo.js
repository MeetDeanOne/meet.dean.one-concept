let font;
let colour = 0;

function preload() {
  font = loadFont("../font/SpaceMono-Regular.ttf");
}

let data = [
  " ",
  "dean: Gegründet irgendwann 2015",
  "Bilder / Fashion / Kosmetik / Food",
  "Alles auf den Punkt gebrahct",
  "Kreise um Quadrate / Dreiecke / Parallelogramme",
  "Bringt Pep in dein Leben",
  "Wir sehen uns bald:",
  "meet@dean.one",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed) {
  background("#F1F1F1");
  textAlign(CENTER, BOTTOM);
  fill("#0f0f0f");
} else {
  background("#0f0f0f");
  fill("#F1F1F1");
}

  let stepY = height / data.length;
  let fontSize = stepY * 0.9;

  textFont(font);
  textSize(fontSize);

  translate(0, 10);

  for (let i = 0; i < data.length; i++) {
    let wave = map(tan(radians(frameCount + i * 15)), -1, 1, -100, 100);

    push();
    translate(width / 2 + wave, i * stepY);
    text(data[i].toLowerCase(), 0, 0);
    pop();
  }
  noCursor();
  fill("#fe3200");
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
}
