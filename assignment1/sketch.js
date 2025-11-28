function setup() {
  createCanvas(600, 400);
  noLoop(); // 한 번만 그림 (정적 장면)
  noStroke();
}

function draw() {
  // 하늘
  background(135, 206, 235);

  // 태양
  fill(255, 223, 0);
  ellipse(500, 80, 80, 80);

  // 바다
  fill(0, 119, 190);
  rect(0, 200, width, 200);

  // 물결 (반원 반복)
  fill(0, 100, 160);
  for (let x = 0; x <= width; x += 40) {
    arc(x, 200, 40, 40, PI, 0);
  }

  // 물고기들
  drawFish(150, 250, color(255, 100, 100));
  drawFish(300, 280, color(255, 165, 0));
  drawFish(450, 260, color(100, 255, 200));

  // 해초
  drawSeaweed(60, 380);
  drawSeaweed(100, 390);
  drawSeaweed(540, 385);

  // 바위
  fill(100);
  ellipse(400, 370, 80, 40);
  ellipse(430, 380, 60, 30);
}
// 🐟 물고기 함수
function drawFish(x, y, bodyColor) {
  fill(bodyColor);
  ellipse(x, y, 40, 20); // 몸통
  triangle(x - 20, y, x - 35, y - 10, x - 35, y + 10); // 꼬리
  fill(0);
  ellipse(x + 10, y - 5, 4, 4); // 눈
}

// 🌿 해초 함수
function drawSeaweed(x, y) {
  fill(34, 139, 34);
  beginShape();
  vertex(x, y);
  bezierVertex(x - 10, y - 30, x + 10, y - 60, x, y - 100);
  bezierVertex(x - 10, y - 60, x + 10, y - 30, x, y);
  endShape(CLOSE);
}
