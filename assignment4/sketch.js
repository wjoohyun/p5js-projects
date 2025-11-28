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
// === 전역 변수 ===
let fishOffset = 0;       // 물고기 이동
let waveOffset = 0;       // 물결 애니메이션
let sunSize = 80;         // 태양 크기 애니메이션
let seaColor1, seaColor2; // 바다 색상 변화

function setup() {
  createCanvas(600, 400);
  noStroke();
  colorMode(RGB);

  // 바다 색상 보간을 위한 색설정
  seaColor1 = color(0, 119, 190);
  seaColor2 = color(0, 150, 220);
}

function draw() {
  // === 하늘 배경 ===
  background(135, 206, 235);

  // ===== 3. 크기 변화: 태양이 숨쉬듯 커졌다 작아짐 =====
  let sunPulse = sin(frameCount * 0.05) * 10; 
  fill(255, 223, 0);
  ellipse(500, 80, sunSize + sunPulse, sunSize + sunPulse);

  // ===== 2. 색상 변화: 바다가 천천히 색이 변함 =====
  let seaMix = (sin(frameCount * 0.01) + 1) / 2;  // 0~1로 변환
  let seaColor = lerpColor(seaColor1, seaColor2, seaMix);

  fill(seaColor);
  rect(0, 200, width, 200);


  // ===== 1. 기본 애니메이션: 물결이 좌우로 움직임 =====
  waveOffset += 0.05;
  fill(0, 100, 160);
  for (let x = 0; x <= width; x += 40) {
    let waveY = 200 + sin(waveOffset + x * 0.1) * 5;
    arc(x, waveY, 40, 40, PI, 0);
  }

  // ===== 물고기 애니메이션 (좌→우 이동) =====
  fishOffset += 1.2;
  if (fishOffset > width + 50) fishOffset = -50;

  drawFish(150 + fishOffset, 250, color(255, 100, 100));
  drawFish(300 + fishOffset * 0.5, 280, color(255, 165, 0));
  drawFish(450 + fishOffset * 1.3, 260, color(100, 255, 200));

  // 해초 (색·모양 유지)
  drawSeaweed(60, 380);
  drawSeaweed(100, 390);
  drawSeaweed(540, 385);

  // 바위
  fill(100);
  ellipse(400, 370, 80, 40);
  ellipse(430, 380, 60, 30);
}

// --- 물고기 함수 ---
function drawFish(x, y, bodyColor) {
  // 크기 변화: 물고기가 살짝 숨쉬듯
  let scaleVal = 1 + sin(frameCount * 0.05 + x * 0.01) * 0.1;

  push();
  translate(x, y);
  scale(scaleVal);

  fill(bodyColor);
  ellipse(0, 0, 40, 20);
  triangle(-20, 0, -35, -10, -35, 10);
  fill(0);
  ellipse(10, -5, 4, 4);

  pop();
}

// --- 해초 함수 (풍선처럼 흔들리는 모션 추가 가능) ---
function drawSeaweed(x, y) {
  fill(34, 139, 34);

  // 좌우로 흔들리게 만들기 (기본 애니메이션)
  let sway = sin(frameCount * 0.03 + x * 0.05) * 10;

  beginShape();
  vertex(x, y);
  bezierVertex(x - 10 + sway, y - 30, x + 10 + sway, y - 60, x + sway, y - 100);
  bezierVertex(x - 10 + sway, y - 60, x + 10 + sway, y - 30, x, y);
  endShape(CLOSE);
}
