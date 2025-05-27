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
    keys: document.getElementById("keys"),
    door: document.getElementById("door5"),
    powerbox: document.getElementById("powerbox5"),
    gearBox: document.getElementById("gearBox"),
    gearOptions: document.getElementById("gearOptions"),
    gearOverall: document.getElementById("gearOverall"),
    gearCount: 0,
    gearMessage: document.getElementById("gearMessage"),
    gearMessageIntro: document.getElementById("gearMessageIntro"),
    axe: document.getElementById("axe"),
    powerBar: document.getElementById("powerBar"),
    hitButton: document.getElementById("hitButton"),
    movingBar: document.getElementById("movingBar"),
    hitZone: document.getElementById("hitZone"),
    hits: 0,
    running: false,
    timeCount: 30,
    timerBox: document.getElementById("timerLevel5"),
    timer: null,
}

function restartLevel5() {
    SOUNDS.water.pause();
    LEVEL.levelIntro[4].style.display = "block";
    LEVEL5.readIntro = false;
    LEVEL5.levelScreen.style.backgroundImage = "url('img/introBackground.jpg')";
    leftDot = { x: 265, y: 305, color: "#7a818a", connected: false };
    rightDot = { x: 810, y: 305, color: "#7a818a", connected: false };
    LEVEL5.timerBox.style.display = "none";
    LEVEL5.keyMessage.style.display = "none";
    LEVEL5.cutOpen = false;
    LEVEL5.gearCount = 0;
    gearPlacements.gearDiv1 = null;
    gearPlacements.gearDiv2 = null;
    gearPlacements.gearDiv3 = null;
    gearPlacements.gearDiv4 = null;
    const dropZoneIds = ["gearDiv1", "gearDiv2", "gearDiv3", "gearDiv4"];
    dropZoneIds.forEach(id => {
        const dropZone = document.getElementById(id);
        if (dropZone && dropZone.children.length > 0) {
            const gear = dropZone.children[0];
            LEVEL5.gearOptions.appendChild(gear);
            gear.style.width = "15%"
        }
        dropZone.innerHTML = "";
    });
    LEVEL5.gearBox.style.display = "none";
    LEVEL5.gearMessage.style.display = "none";
    LEVEL5.gearOverall.style.display = "none";
    level5();
}

function level5() {
    if (LEVEL5.readIntro) {
        SOUNDS.onclick.play();
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

        LEVEL5.question.style.display = "block";
        if (DIFFICULTY.mode == "Easy") {
             LEVEL5.hints = "Hint 1: <br> -  Investigate the items in the flat and try to find out who Frank's suspect is.<br> <br> Hint 2: A man with a hat.<br> - "
        }
        else if (DIFFICULTY.mode == "Medium") {
            LEVEL5.hints = "Hint: <br> - Investigate the items in the flat and try to find out who Frank's suspect is."
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
    SOUNDS.onclick.play();
    LEVEL5.camera.style.display = "none";
    LEVEL5.letter.style.display = "none";
    LEVEL5.close[0].style.display = "flex";
    LEVEL5.imgSlide.innerHTML = `<img src="img/Level5/1.png" alt="img">`
}

function letter5Read() {
    SOUNDS.newspaper.play();
    LEVEL5.camera.style.display = "none";
    LEVEL5.letter.style.display = "none";
    LEVEL5.close[1].style.display = "flex";
}

function right() {
    SOUNDS.camera.play();
    LEVEL5.count++;
    if(LEVEL5.count == 7) {
        LEVEL5.count = 1;
    }
    LEVEL5.imgSlide.innerHTML = `<img src="img/Level5/${LEVEL5.count}.png" alt="img">`
    
}

function left() {
    SOUNDS.camera.play();
    LEVEL5.count--;
    if(LEVEL5.count == 0) {
        LEVEL5.count = 6;
    }
    LEVEL5.imgSlide.innerHTML = `<img src="img/Level5/${LEVEL5.count}.png" alt="img">`
}

function kitchen5() {
    SOUNDS.onclick.play();
    LEVEL5.door.style.display = "block";
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
    SOUNDS.onclick.play();
    LEVEL5.door.style.display = "none";
    leftDot = { x: 265, y: 305, color: "#7a818a", connected: false };
    rightDot = { x: 810, y: 305, color: "#7a818a", connected: false };
    dragging2 = false;
    startDot = null;
    currentPos2 = { x: 0, y: 0 };
    LEVEL5.keys.style.display = "none";
    LEVEL5.livingRoom.style.display = "none";
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
      LEVEL5.package.style.display = "none";
      LEVEL5.close[2].style.display = "none";
      LEVEL5.close[3].style.display = "flex";
      LEVEL5.noteBook.style.display = "block";
      LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/packageBackground.png')";
      LEVEL5.cutOpen = true;
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
  SOUNDS.cutOpen.play();
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
}

function keysRead() {
    SOUNDS.keys.play();
    LEVEL5.keyMessage.style.display = "block";
    LEVEL5.package.style.display = "none";
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>Open the door by dragging the keys to the door.</p>
        <div class="nextButton" onclick="kitchen5()">close</div>`;
}


function dropHandlerDoor(event) {
    SOUNDS.keys.play();
    event.preventDefault();
    LEVEL5.keys.style.display = "none";
    LEVEL5.keyMessage.style.display = "block";
    LEVEL5.package.style.display = "none";
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>You opened the door.Did you look at all items closely Who is the suspect you are trying to find?</p>
        <div id="button5Flex">
            <div class="nextButton" onclick="pickImg()">show pictures</div>
            <div class="nextButton" onclick="kitchen5()">close</div>
        </div>`;
}

function pickImg() {
    SOUNDS.onclick.play();
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>Pick the picture with the murderer on it.</p>
        <div id="picSelect">
          <img src="img/Level5/1Img.png" onclick="selectPic(1)" alt="img">
          <img src="img/Level5/2Img.png" onclick="selectPic(2)" alt="img">
          <img src="img/Level5/3Img.png" onclick="selectPic(3)" alt="img">
          <img src="img/Level5/4Img.png" onclick="selectPic(4)" alt="img">
          <img src="img/Level5/5Img.png" onclick="selectPic(5)" alt="img">
          <img src="img/Level5/6Img.png" onclick="selectPic(6)" alt="img">
        </div>`;
}

function selectPic(number) {
     SOUNDS.onclick.play();
  if(number == 3) {
       LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>Congratulations</p>
        <p>You managed to pick the right suspect. Find him and save Frank!</p>
        <div class="nextButton" onclick="gasstation()">go outside</div>`;
  }
  else {
       LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>Oh no...</p>
        <p>You didn't choose the right suspect.</p>
        <div class="nextButton" onclick="restartLevel5()">try again</div>`;
  }
}

function gasstation() {
    SOUNDS.onclick.play();
    LEVEL5.question.style.display = "none";
    LEVEL5.door.style.display = "none";
    LEVEL5.livingRoom.style.display = "none";
    LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/gasstation.png')";
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>After a short walk through New York you found the gas station Frank wrote about. Seems abandoned.</p>
        <div class="nextButton" onclick="warehouse()">continue</div>`;
    LEVEL5.package.style.display = "none";
    LEVEL5.keys.style.display = "none";
}

function warehouse() {
    SOUNDS.onclick.play();
    LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/alleyBackground.png')";
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>As you walk behind the gas station you land in an dark and dirty warehouse full with cars and broken stuff. Down the hall there is a big metal door.</p>
        <div class="nextButton" onclick="toDoor()">walk to door</div>`;
}

function toDoor() {
    SOUNDS.onclick.play();
    LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/doorBackground.jpg')";
    LEVEL5.powerbox.style.display = "block";
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>The door is locked. Find a way to open it.</p>
        <div class="nextButton" onclick="closeGasIntro()">close</div>`;
}

function closeGasIntro() {
    SOUNDS.onclick.play();
    LEVEL5.keyMessage.style.display = "none";
}

function gears() {
    SOUNDS.onclick.play();
    LEVEL5.question.style.display = "block";
    if (DIFFICULTY.mode == "Easy") {
        LEVEL5.hints = "Hint 1: <br> -  The word from the gears is about being confused and alone. <br> <br> Hint 2: LOST <br> - "
    }
    else if (DIFFICULTY.mode == "Medium") {
        LEVEL5.hints = "Hint: <br> - The word from the gears is about being confused and alone."
    }
    else {
        LEVEL5.hints = "No hints for you since you selected the difficulty 'Hard'."
    }
    DROPDOWN.content[5].innerHTML = `
                <img src="img/line.png" alt="line">
                <p>${LEVEL5.hints}</p>
                <img src="img/line1.png" alt="line">`;

    LEVEL5.gearMessageIntro.style.display = "block";
    LEVEL5.powerbox.style.display = "none";
    LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/gearBackground.png')";
    LEVEL5.gearOverall.style.display = "block";
    LEVEL5.gearBox.style.display = "flex";
    LEVEL5.gearOptions.style.display = "flex";
    LEVEL5.gearMessageIntro.innerHTML = `
          <img src="img/line.png" alt="line">
          <p>There is a gear mechanism but all the gears are out of place. Put them in the right order, the chosen gears should be a word.</p>
          <div class="nextButton" onclick="closeGearIntro()">close</div>`;
}

function closeGearIntro() {
    SOUNDS.onclick.play();
    LEVEL5.gearMessageIntro.style.display = "none";
}

function dropHandlerGear(event) {
    event.preventDefault();
    const imageId = event.dataTransfer.getData("text");
    const image = document.getElementById(imageId);
    const dropZoneGear = event.currentTarget;

    if (dropZoneGear.children.length === 0) {
        SOUNDS.gears.play();
        dropZoneGear.appendChild(image);
        gearPlacements[event.target.id] = imageId;
        image.style.width = "100%"
        LEVEL5.gearCount++;
        if(LEVEL5.gearCount == 4) {
          console.log(gearPlacements)
            LEVEL5.gearMessage.style.display = "block";
            LEVEL5.gearOptions.style.display = "none";
            if(gearPlacements.gearDiv1 == "gear6" && gearPlacements.gearDiv2 == "gear3" && gearPlacements.gearDiv3 == "gear1" && gearPlacements.gearDiv4 == "gear4") {
                LEVEL5.gearMessage.innerHTML = `
                    <img src="img/line.png" alt="line">
                    <p>Congratulations</p>
                    <p>You managed to put all the gears in the right order, figured out the code word "LOST" and finally could open the door.</p>
                    <div class="nextButton" onclick="storage()">go inside</div>`;
            }
            else {
                LEVEL5.gearMessage.innerHTML = `
                    <img src="img/line.png" alt="line">
                    <p>Oh no...</p>
                    <p>You did not manage to put all the gears in the right order, neither figured out the code word to open the door.</p>
                    <div class="nextButton" onclick="restartLevel5()">try again</div>`;
            }
        }
    }
}

let gearPlacements = {
    gearDiv1: null,
    gearDiv2: null,
    gearDiv3: null,
    gearDiv4: null
};

function storage() {
    SOUNDS.onclick.play();
    LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/storageBackground.png')";
    LEVEL5.axe.style.display = "block";
    LEVEL5.gearOverall.style.display = "none";
    LEVEL5.keyMessage.style.display = "block";
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>You enter the room and see two huge glass tanks in it. One looks.. strange... like.. someone is in it...</p>
        <div class="nextButton" onclick="storageIntro()">continue</div>`;
}


function storageIntro() {
    SOUNDS.onclick.play();
    LEVEL5.keyMessage.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>Like Frank is in it....</p>
        <p>Find a way to get him out of the tank. FAST.</p>
        <div class="nextButton" onclick="closeStorageIntro()">close</div>`;
}

function closeStorageIntro() {
    SOUNDS.onclick.play();
    LEVEL5.keyMessage.style.display = "none";

}

function waterPart() {
    SOUNDS.axe.play();
    LEVEL5.powerBar.style.display = "block";
    LEVEL5.hitButton.style.display = "block";
    LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/noCracks.png')";
    LEVEL5.axe.style.display = "none";
    LEVEL5.timerBox.style.display = "block";

    LEVEL5.running = true;
    LEVEL5.hits = 0;
    LEVEL5.timeCount = 30;
    SOUNDS.timer.play();

    const powerBarEl = LEVEL5.powerBar;
    const movingBarEl = LEVEL5.movingBar;

    let barWidth = powerBarEl.offsetWidth;
    let movingBarWidth = barWidth * 0.15;
    let targetLeft = barWidth * 0.6;
    let targetWidth = barWidth * 0.15;

    let position = 0;
    let direction = 1;
    let lastTimestamp = null;

    const pixelsPerSecond = 400;

    function animate(timestamp) {
        if (!LEVEL5.running) return;

        if (!lastTimestamp) lastTimestamp = timestamp;
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        position += (delta / 1000) * pixelsPerSecond * direction;

        if (position <= 0) {
            direction = 1;
            position = 0;
        }
        if (position + movingBarWidth >= barWidth) {
            direction = -1;
            position = barWidth - movingBarWidth;
        }

        movingBarEl.style.left = `${position}px`;

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    LEVEL5.timer = setInterval(() => {
        LEVEL5.timerBox.innerHTML = `${LEVEL5.timeCount}s left`;
        LEVEL5.timeCount--;

        if (LEVEL5.timeCount < 0) {
            clearInterval(LEVEL5.timer);
            SOUNDS.timer.pause();
            LEVEL5.running = false;
            LEVEL5.hitButton.style.display = "none";
            LEVEL5.powerBar.style.display = "none";
            LEVEL5.keyMessage.style.display = "block";
            LEVEL5.keyMessage.innerHTML = `
                <img src="img/line.png" alt="line">
                <p>Oh No...</p>
                <p>You were not able to shatter the glass tank in time. You could not save Frank, his soul has left his cold body, silent pleas flash by. Maybe.. maybe next time will be your time to shine and keep everyone alive.</p>
                <div class="nextButton" onclick="restartLevel5()">try again</div>
            `;
        }
    }, 1000);

    LEVEL5.hitButton.onclick = () => {
        if (!LEVEL5.running) return;

        let barStart = position;
        let barEnd = position + movingBarWidth;
        let targetStart = targetLeft;
        let targetEnd = targetLeft + targetWidth;

        if (barEnd > targetStart && barStart < targetEnd) {
            LEVEL5.hits++;
            LEVEL5.levelScreen.style.backgroundImage = `url('img/Level5/Crack${LEVEL5.hits}.png')`;
            SOUNDS.glass.play();

            if (LEVEL5.hits >= 4) {
                clearInterval(LEVEL5.timer);
                LEVEL5.running = false;
                
                SOUNDS.glass.play();
                LEVEL5.hitButton.disabled = true;
                LEVEL5.hitButton.style.display = "none";
                LEVEL5.powerBar.style.display = "none";
                LEVEL5.keyMessage.style.display = "block";
                SOUNDS.water.play();
                LEVEL5.keyMessage.innerHTML = `
                    <img src="img/line.png" alt="line">
                    <p>Congratulations</p>
                    <p>You could save Frank just in time. Look at you! You saved so many people in these 100 years. Be proud of yourself!!!</p>
                    <div class="nextButton" onclick="finishLevel(5)">finish</div>
                `;
                SOUNDS.timer.pause();
            }
        }
    };
}

