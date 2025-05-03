let LEVEL4 = {
    readIntro: false,
    question: document.getElementById("hint4"),
    hints: "",
    levelScreen: document.getElementById("level4Screen"),
    message: document.getElementById("level4Message"),
    powerbox: document.getElementById("powerbox"),
    canvas: document.getElementById("gameCanvas"),
    count: 0
}

function restartLevel4() {
    LEVEL.levelIntro[3].style.display = "block";
    LEVEL4.readIntro = false;
    LEVEL4.levelScreen.style.backgroundImage = "url('img/introBackground.jpg')";
    level4();
}

function level4() {
    if (LEVEL4.readIntro) {
        LEVEL4.levelScreen.style.backgroundImage = "url('img/Level4/tunnelBackground.jpg')";
        LEVEL.levelIntro[3].style.display = "none";
        LEVEL4.message.style.display = "block";
        LEVEL4.message.innerHTML = `
            <img src="img/line.png" alt="line">
            <p>You're at the entrance of a London underground station. Walk down the stairs to get to the tracks.'</p>
            <div class="nextButton" onclick="tracks()">go downstairs</div>`

        if (DIFFICULTY.mode == "Easy") {
            LEVEL3.hints = "Hint 1: <br> - <br> <br> Hint 2: <br> - "
        }
        else if (DIFFICULTY.mode == "Medium") {
            LEVEL3.hints = "Hint: <br> -"
        }
        else {
            LEVEL3.hints = "No hints for you since you selected the difficulty 'Hard'."
        }
        DROPDOWN.content[4].innerHTML = `
                <img src="img/line.png" alt="line">
                <p>${LEVEL4.hints}</p>
                <img src="img/line1.png" alt="line">`
    }
    else {
        LEVEL4.levelScreen.style.display = "flex";

        LEVEL.levelIntro[3].innerHTML = `
            <img src="img/line.png" alt="line">
            <p class="introText">“Drastic Change” - London 1960</p>
            <br>
            <p class="introText">The age of steam is fading. Deep beneath the streets, the Underground is being reborn — tunnels rewired, trains reimagined, electricity pulsing where smoke once lingered. The future is no longer an idea. It's moving fast.</p>
            <p class="introText">But not everything is running smoothly. One fault in the system could stop the progress cold — or worse. Eleanor Smith, a young technician, is trapped below during a test run. A single spark could decide what happens next.</p>
            <p class="introText">Step in. Take hold. Connect the wires and get Eleanor out of there safely.</p>
            <div class="nextButton" onclick="closeIntroduction(4)">continue</div>`;


        gsap.from(".introText", {
            duration: 1.2,
            opacity: 0,
            y: 40,
            stagger: 0.5,
            ease: "power2.out"
        });

    }
}

function tracks() {
    LEVEL4.powerbox.style.display = "block";
    LEVEL4.question.style.opacity = 1;
    LEVEL4.levelScreen.style.backgroundImage = "url('img/Level4/stationBackground.jpg')";
    LEVEL4.message.innerHTML = `
            <img src="img/line.png" alt="line">
            <p>Take a look around the station. Find a way to switch on the power.</p>
            <div class="nextButton" onclick="closeMessage4()">close</div>`
}

function closeMessage4() {
    LEVEL4.message.style.display = "none";
}

function readPower() {
    LEVEL4.powerbox.style.display = "none";
    LEVEL4.canvas.style.display = "block";
    draw2();
}

let canvas2 = document.getElementById("gameCanvas");
let ctx2 = canvas2.getContext("2d");
let dragging = false;
let startPoint = null;
let currentPos = { x: 0, y: 0 };

let pointsLeft = [
    { x: 320, y: 150, color: "#6F93C6", connectedTo: null },
    { x: 320, y: 250, color: "#215093", connectedTo: null },
    { x: 320, y: 350, color: "#1B2C5E", connectedTo: null },
    { x: 320, y: 450, color: "#061235", connectedTo: null },
  ];

  let pointsRight = [
    { x: 650, y: 150, color: "#1B2C5E", connectedTo: null },
    { x: 650, y: 250, color: "#061235", connectedTo: null },
    { x: 650, y: 350, color: "#215093", connectedTo: null },
    { x: 650, y: 450, color: "#6F93C6", connectedTo: null },
  ];

let background = new Image();
background.src = "img/Level4/powerbox.png";



//mit Hilfe von ChatGPT und Google

    canvas2.addEventListener("mousedown", (e) => {
      let { offsetX, offsetY } = e;
      for (const p of pointsLeft) {
        if (Math.hypot(p.x - offsetX, p.y - offsetY) < 15 && p.connectedTo === null) {
          dragging = true;
          startPoint = p;
          currentPos = { x: offsetX, y: offsetY };
          return;
        }
      }
    });

    canvas2.addEventListener("mousemove", (e) => {
      if (dragging) {
        currentPos = { x: e.offsetX, y: e.offsetY };
        draw2();
      }
    });

    canvas2.addEventListener("mouseup", (e) => {
      if (dragging && startPoint) {
        for (const p of pointsRight) {
          if (
            Math.hypot(p.x - e.offsetX, p.y - e.offsetY) < 15 &&
            p.connectedTo === null
          ) {
            if (p.color === startPoint.color) {
              startPoint.connectedTo = p;
              p.connectedTo = startPoint;
              LEVEL4.count++;
                if(LEVEL4.count == 4) {
                    LEVEL4.message.style.display = "block";
                    LEVEL4.message.innerHTML = `
                    <img src="img/line.png" alt="line">
                    <p>You managed to connect all the right cables. But your work is not done. You need to enter a code now to start the test run.</p>
                    <div class="nextButton" onclick="closeMessage4()">close</div>`
                }
            }
          }
        }
      }
      dragging = false;
      startPoint = null;
      draw2();
    });

    function drawPoint(p) {
      ctx2.beginPath();
      ctx2.arc(p.x, p.y, 15, 0, Math.PI * 2);
      ctx2.fillStyle = p.color;
      ctx2.fill();
      ctx2.strokeStyle = "white";
      ctx2.stroke();
    }

    function drawLine(p1, p2) {
      ctx2.beginPath();
      ctx2.moveTo(p1.x, p1.y);
      ctx2.lineTo(p2.x, p2.y);
      ctx2.strokeStyle = p1.color;
      ctx2.lineWidth = 4;
      ctx2.stroke();
    }

    function draw2() {
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      ctx2.drawImage(background, 0, 0, canvas2.width, canvas2.height);

      for (const p of pointsLeft) drawPoint(p);
      for (const p of pointsRight) drawPoint(p);

      for (const p of pointsLeft) {
        if (p.connectedTo) {
          drawLine(p, p.connectedTo);
        }
      }

      if (dragging && startPoint) {
        drawLine(startPoint, currentPos);
      }
    }
