var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// 중앙에 위치하도록 y 좌표 조정
var groundLevel = canvas.height / 2;

var img1 = new Image();
img1.src = "dino.png";

var img2 = new Image();
img2.src = "relfire.png";

var img3 = new Image();
img3.src = "cook.png"; // 새 이미지 파일 경로 설정


var gameOverImg = new Image();
gameOverImg.src = "duck.png"; // 이미지 파일명 설정


var dino = {
    x: 550,
    y: groundLevel-90, 
    width: 90,
    height: 90,
    draw() {
        //ctx.fillStyle = "green";
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img1, this.x, this.y, this.width, this.height);
    }
};

class Cactus {
    constructor() {
        this.x = 1000;
        this.y = groundLevel - 50;
        this.width = 45;
        this.height = 45;
    }
    draw() {
        //ctx.fillStyle = "red";
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(img2, this.x, this.y, this.width, this.height);
    }
}

var timer = 0;
var cactuses = [];
var jump = false;
var score = 0;
var animation;
var jumpHeight = 170;  // 점프 높이
var jumpSpeed = 3;     // 점프 속도
var gameOver = false; // 게임 오버 상태를 저장하는 변수 추가
var floatSpeed = 0.05; // 이미지가 움직이는 속도
var floatRange = 30; // 이미지가 움직이는 범위 (픽셀 단위)
var floatOffset = 0; // 초기 오프셋 값


function executePerFrame() {

      //둥실둥실
  floatOffset += floatSpeed;
  var floatY = groundLevel - 180 - Math.sin(floatOffset) * floatRange;

    animation = requestAnimationFrame(executePerFrame);
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    

    if (timer % 120 === 0) {
        var cactus = new Cactus();
        cactuses.push(cactus);
    }
    cactuses.forEach((a, i, o) => {
        a.x -= 2;
        a.draw();
        if (isBumped(dino, a)) {
            gameOver = true; // 충돌 시 게임 오버 상태로 설정
        }
        if (a.x < 0) {
            o.splice(i, 1);
            score++;
        }
    });
    ctx.drawImage(img3, 100, floatY, 150, 180); 
    // 땅 선 그리기
    ctx.beginPath();
    ctx.moveTo(0, groundLevel);
    ctx.lineTo(canvas.width, groundLevel);
    ctx.stroke();


  
   
   
    if (gameOver) {
        cancelAnimationFrame(animation);
        console.log("Game Over. Score: " + score);
    
        // 이미지의 크기 조정
        var imgWidth = 250; // 이미지 너비
        var imgHeight = 150; // 이미지 높이
    
        // 이미지를 캔버스 중앙에 그립니다
        ctx.drawImage(gameOverImg, 
                      canvas.width / 2 - imgWidth / 2, 
                      canvas.height / 2 - imgHeight / 2, 
                      imgWidth, 
                      imgHeight);
        return;
    }


    if (jump) {
        if (dino.y > groundLevel - 90 - jumpHeight) {
            dino.y -= jumpSpeed;
        } else {
            jump = false;
        }
    } else if (dino.y < groundLevel - 90) {
        dino.y += jumpSpeed;
    } 

    dino.draw();
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${score}`, 40, 40);
}

function isBumped(dino, cactus) {
    var xOverlap = dino.x < cactus.x + cactus.width && dino.x + dino.width > cactus.x;
    var yOverlap = dino.y < cactus.y + cactus.height && dino.y + dino.height > cactus.y;

    return xOverlap && yOverlap;
}


document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        if (dino.y === groundLevel - 90) {
            jump = true;
        }
        e.preventDefault(); // 스페이스바의 기본 동작을 방지
    }
});


executePerFrame();