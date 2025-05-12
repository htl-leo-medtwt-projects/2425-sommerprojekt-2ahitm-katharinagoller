let LEVEL5 = {
    readIntro: false,
    question: document.getElementById("hint5"),
    hints: "",
    levelScreen: document.getElementById("level5Screen"),
    camera: document.getElementById("camera"),
    letter: document.getElementById("letter5"),
    close: document.getElementsByClassName("close5"),
    imgSlide: document.getElementById("imgSlide"),
    count: 1,
    kitchen: document.getElementById("swapKitchen5"),
    package: document.getElementById("package"),
    livingRoom: document.getElementById("swapLivingRoom5"),
    noteBook: document.getElementById("notebook5"),
    cutOpen: false,
    keyMessage: document.getElementById("keyMessage"),
    keys: document.getElementById("keys")
}

function restartLevel5() {
    LEVEL.levelIntro[4].style.display = "block";
    LEVEL5.readIntro = false;
    LEVEL5.levelScreen.style.backgroundImage = "url('img/introBackground.jpg')";
    leftDot = { x: 265, y: 305, color: "#7a818a", connected: false };
    rightDot = { x: 810, y: 305, color: "#7a818a", connected: false };
    level5();
}

function level5() {
    if (LEVEL5.readIntro) {
        LEVEL5.keyMessage.style.display = "none";
        LEVEL5.keys.style.display = "none";
        LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/livingRoomBackground.jpg')";
        LEVEL.levelIntro[4].style.display = "none";
        LEVEL5.camera.style.display = "block"
        LEVEL5.letter.style.display = "block"
        LEVEL5.close[0].style.display = "none";
        LEVEL5.close[1].style.display = "none";
        LEVEL5.kitchen.style.display = "block";
        LEVEL5.livingRoom.style.display = "none";
        LEVEL5.package.style.display = "none";

        if (DIFFICULTY.mode == "Easy") {
             LEVEL5.hints = "Hint 1: <br> -  <br> <br> Hint 2: <br> - "
        }
        else if (DIFFICULTY.mode == "Medium") {
            LEVEL5.hints = "Hint: <br> - "
        }
        else {
            LEVEL5.hints = "No hints for you since you selected the difficulty 'Hard'."
        }
        DROPDOWN.content[5].innerHTML = `
                <img src="img/line.png" alt="line">
                <p>${LEVEL5.hints}</p>
                <img src="img/line1.png" alt="line">`
    }
    else {
        LEVEL5.levelScreen.style.display = "flex";

        LEVEL.levelIntro[4].innerHTML = `
            <img src="img/line.png" alt="line">
            <p class="introText5">“Pictures To Burn” - New York 1980</p>
            <br>
            <p class="introText5">The city never sleeps — but it hides things in the dark. Neon flickers across rain-slicked streets, sirens echo through alleyways, and somewhere in the noise, a truth was almost exposed.</p>
            <p class="introText5">Frank McLark, a streetwise photographer known for catching what others miss, vanished last week. He was chasing a story no one else dared touch — a string of brutal murders stitched together by shadows and silence. His last roll of film never got developed. And now, he's just... gone.</p>
            <p class="introText5">Someone wanted him quiet. Now it's your turn to make noise. Retrace his steps. Develop the photos he left behind. Follow the clues he saw through the lens. Uncover the killer — and find out where they took Frank before the shutter closes for good.</p>
            <div class="nextButton" onclick="closeIntroduction(5)">continue</div>`;


        gsap.from(".introText5", {
            duration: 1.2,
            opacity: 0,
            y: 40,
            stagger: 0.5,
            ease: "power2.out"
        });

    }
}

function cameraRead() {
    LEVEL5.camera.style.display = "none";
    LEVEL5.letter.style.display = "none";
    LEVEL5.close[0].style.display = "flex";
    LEVEL5.imgSlide.innerHTML = `<img src="img/Level5/1.png" alt="img">`
}

function letter5Read() {
    LEVEL5.camera.style.display = "none";
    LEVEL5.letter.style.display = "none";
    LEVEL5.close[1].style.display = "flex";
}

function right() {
    LEVEL5.count++;
    if(LEVEL5.count == 7) {
        LEVEL5.count = 1;
    }
    LEVEL5.imgSlide.innerHTML = `<img src="img/Level5/${LEVEL5.count}.png" alt="img">`
    
}

function left() {
    LEVEL5.count--;
    if(LEVEL5.count == 0) {
        LEVEL5.count = 6;
    }
    LEVEL5.imgSlide.innerHTML = `<img src="img/Level5/${LEVEL5.count}.png" alt="img">`
}

function kitchen5() {
    LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/kitchenBackground.jpg')";
    LEVEL5.camera.style.display = "none";
    LEVEL5.letter.style.display = "none";
    LEVEL5.close[0].style.display = "none";
    LEVEL5.close[1].style.display = "none";
    LEVEL5.package.style.display = "block";
    LEVEL5.livingRoom.style.display = "block"
    LEVEL5.kitchen.style.display = "none";
    LEVEL5.close[3].style.display = "none";
    LEVEL5.close[3].style.display = "none";
    LEVEL5.keys.style.display = "block";
    LEVEL5.keyMessage.style.display = "none";
}

function packageRead() {
    LEVEL5.keys.style.display = "none";
    if(!LEVEL5.cutOpen) {
        LEVEL5.package.style.display = "none";
        LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/tileBackground.png')";
        LEVEL5.close[2].style.display = "block";
        draw3();
    }
    else {
        opened();
    }
}


let canvas3 = document.getElementById("cutCanvas");
let ctx3 = canvas3.getContext("2d");

let leftDot = { x: 265, y: 305, color: "#7a818a", connected: false };
let rightDot = { x: 810, y: 305, color: "#7a818a", connected: false };

let dragging2 = false;
let startDot = null;
let currentPos2 = { x: 0, y: 0 };

canvas3.addEventListener("mousedown", (e) => {
  let { offsetX, offsetY } = e;
  if (Math.hypot(offsetX - leftDot.x, offsetY - leftDot.y) < 15 && !leftDot.connected) {
    dragging2 = true;
    startDot = leftDot;
    currentPos2 = { x: offsetX, y: offsetY };
  }
});

canvas3.addEventListener("mousemove", (e) => {
  if (dragging2) {
    currentPos2 = { x: e.offsetX, y: e.offsetY };
    draw3();
  }
});

canvas3.addEventListener("mouseup", (e) => {
  if (dragging2) {
    if (Math.hypot(e.offsetX - rightDot.x, e.offsetY - rightDot.y) < 15 && !rightDot.connected) {
      leftDot.connected = true;
      rightDot.connected = true;
      opened();
    }
  }
  dragging2 = false;
  startDot = null;
  draw3();
});

function drawDot(dot) {
  ctx3.beginPath();
  ctx3.arc(dot.x, dot.y, 8, 0, Math.PI * 2);
  ctx3.fillStyle = dot.color;
  ctx3.fill();
  ctx3.strokeStyle = "#7a818a";
  ctx3.stroke();
}

function drawLine2(p1, p2, color = "#7a818a") {
  ctx3.beginPath();
  ctx3.moveTo(p1.x, p1.y);
  ctx3.lineTo(p2.x, p2.y);
  ctx3.strokeStyle = color;
  ctx3.lineWidth = 4;
  ctx3.stroke();
}

function draw3() {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  drawDot(leftDot);
  drawDot(rightDot);

  if (leftDot.connected && rightDot.connected) {
    drawLine2(leftDot, rightDot, "#7a818a");
  }

  if (dragging2 && startDot) {
    drawLine2(startDot, currentPos2, "#7a818a");
  }
}


function opened() {
    LEVEL5.package.style.display = "none";
    LEVEL5.close[2].style.display = "none";
    LEVEL5.close[3].style.display = "flex";
    LEVEL5.noteBook.style.display = "block";
    LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/packageBackground.png')";
    LEVEL5.cutOpen = true;
}

function keysRead() {
    LEVEL5.keyMessage.style.display = "block";
    LEVEL5.package.style.display = "none";
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>Open the door by dragging the keys to the door.</p>
        <div class="nextButton" onclick="kitchen5()">close</div>`;
}


function dropHandlerDoor(event) {
    event.preventDefault();
    const imageId = event.dataTransfer.getData("text");
    const image = document.getElementById(imageId);

    event.target.appendChild(image);
    LEVEL5.keys.style.display = "none";
    LEVEL5.keyMessage.style.display = "block";
    LEVEL5.package.style.display = "none";
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>Open the door by dragging the keys to the door.</p>
        <div class="nextButton" onclick="kitchen5()">close</div>`;
}


function dragstartHandlerKeys(ev) {
  ev.dataTransfer.setData("text/plain", "key");

  const img = new Image();
  img.src = "img/Level5/keys.png";
  img.width = 5;
  img.height = 5;

  ev.dataTransfer.setDragImage(img, 32, 32);
}

