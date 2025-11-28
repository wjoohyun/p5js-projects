let faceX = 0;      
let isSmile = true; 

let leftArmAngle = 0;
let rightArmAngle = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  // 시간 기반 모션 (10초 주기)
  let t = millis() / 1000;       // 초 단위
  let cycle = t % 10;            // 10초 반복

  // 1) 좌우 이동 (부드럽게)
  faceX = sin(t * 1) * 40;       // 좌우 -40 ~ +40

  // 2) 팔 흔들기 (부드러운 모션)
  leftArmAngle = sin(t * 2) * 30;
  rightArmAngle = cos(t * 2) * 30;

  // 3) 표정 자동 변화 (5초마다 변경)
  isSmile = cycle < 5;

  push();
  translate(faceX, 0);

  // ------------------------
  // 👕 해군 군복 몸통
  // ------------------------
  fill(10, 30, 70);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(250, 270);
  bezierVertex(260, 245, 275, 235, 300, 235);
  bezierVertex(325, 235, 340, 245, 350, 270);
  vertex(350, 320);
  vertex(250, 320);
  endShape(CLOSE);

  // ------------------------
  // 💪 팔 (회전 적용)
  // ------------------------

  // 왼팔 회전
  push();
  translate(250, 280);
  rotate(radians(leftArmAngle));
  fill(255, 220, 180);
  ellipse(0, 15, 15, 45);
  pop();

  // 오른팔 회전
  push();
  translate(350, 280);
  rotate(radians(-rightArmAngle));
  fill(255, 220, 180);
  ellipse(0, 15, 15, 45); 
  pop();

  // 소매 (항상 고정)
  fill(10, 30, 70);
  stroke(0);
  strokeWeight(1.5);
  ellipse(250, 265, 20, 30);
  ellipse(350, 265, 20, 30);

  // ------------------------
  // 🧣 목
  // ------------------------
  fill(255, 220, 180);
  rect(285, 220, 30, 20, 10);
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(285, 220, 30, 20, 10);

  // ------------------------
  // 😀 얼굴
  // ------------------------
  stroke(0);
  strokeWeight(2);
  fill(255, 220, 180);
  ellipse(300, 180, 140, 140);

  // 귀
  fill(255, 220, 180);
  stroke(0);
  ellipse(230, 180, 20, 35);
  ellipse(370, 180, 20, 35);

  // 머리
  fill(40, 30, 20);
  noStroke();
  arc(300, 145, 140, 110, PI, 0, CHORD);

  // 눈
  fill(255);
  stroke(0);
  strokeWeight(1.5);
  ellipse(270, 180, 35, 35);
  ellipse(330, 180, 35, 35);

  // 눈동자
  fill(0);
  noStroke();
  ellipse(270, 180, 24, 24);
  ellipse(330, 180, 24, 24);

  // 하이라이트
  fill(255);
  ellipse(266, 175, 5, 5);
  ellipse(326, 175, 5, 5);

  // 눈썹
  stroke(0);
  strokeWeight(4);
  line(250, 160, 280, 160);
  line(320, 160, 350, 160);

  // 코
  stroke(80);
  strokeWeight(2);
  line(300, 175, 300, 190);

  // 입 (자동 표정)
  stroke(150, 0, 0);
  strokeWeight(2.5);
  noFill();
  if (isSmile) {
    arc(300, 205, 50, 20, 0, PI);
  } else {
    line(275, 205, 325, 205);
  }

  // 얼굴 윤곽
  noFill();
  stroke(0);
  strokeWeight(1.5);
  arc(300, 180, 140, 140, 0.1 * PI, 0.9 * PI);

  // 해군 군복 단추
  stroke(255);
  strokeWeight(4);
  for (let y = 250; y <= 300; y += 15) {
    point(300, y);
  }

  pop();
}
