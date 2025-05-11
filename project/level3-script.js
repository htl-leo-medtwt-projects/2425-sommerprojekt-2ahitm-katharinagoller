let LEVEL3 = {
    readIntro: false,
    question: document.getElementById("hint3"),
    hints: "",
    levelScreen: document.getElementById("level3Screen"),
    message: document.getElementById("galleryMessage"),
    puzzle: document.getElementById("puzzle"),
    piecesLeft: document.getElementById("piecesLeft"),
    piecesRight: document.getElementById("piecesRight"),
    currentImg: "",
    puzzleMessage: document.getElementById("puzzleMessage"),
    puzzleOverall: document.getElementById("puzzleOverall"),
    readBasement: false,
    painting: document.getElementById("painting"),
    paintingPart: document.getElementById("paintingPart"),
    paintingUnder: document.getElementById("paintingUnder"),
    alreadySet: false,
    drawCommit: document.getElementById("commitColor"),
    choseRightPainting: false,
    commitMessage: document.getElementById("commitColorMessage"),
}

function restartLevel3() {
    LEVEL3.puzzleMessage.style.display = "none";
    LEVEL.levelIntro[2].style.display = "block";
    LEVEL3.readIntro = false;
    LEVEL3.levelScreen.style.backgroundImage = "url('img/introBackground.jpg')";
    puzzleImgs = [
        "img/Level3/puzzle_pieces/piece_0_0.png",
        "img/Level3/puzzle_pieces/piece_0_1.png",
        "img/Level3/puzzle_pieces/piece_0_2.png",
        "img/Level3/puzzle_pieces/piece_0_3.png",
        "img/Level3/puzzle_pieces/piece_1_0.png",
        "img/Level3/puzzle_pieces/piece_1_1.png",
        "img/Level3/puzzle_pieces/piece_1_2.png",
        "img/Level3/puzzle_pieces/piece_1_3.png",
        "img/Level3/puzzle_pieces/piece_2_0.png",
        "img/Level3/puzzle_pieces/piece_2_1.png",
        "img/Level3/puzzle_pieces/piece_2_2.png",
        "img/Level3/puzzle_pieces/piece_2_3.png",
    ]
    level3();
}

function level3() {
    if (LEVEL3.readIntro) {
        LEVEL3.levelScreen.style.backgroundImage = "url('img/Level3/galleryBackground.jpg')";
        LEVEL.levelIntro[2].style.display = "none";
        LEVEL3.message.style.display = "block";
        LEVEL3.message.innerHTML = `
            <img src="img/line.png" alt="line">
            <p>You entered the gallery. Down the hall there is a door...</p>
            <div class="nextButton" onclick="door()">go to door</div>`

        if (DIFFICULTY.mode == "Easy") {
            LEVEL3.hints = "Hint 1: <br> - Solve the puzzle - the sun is in the right corner. <br> <br> Hint 2: <br> - All the flowers are on the left side."
        }
        else if (DIFFICULTY.mode == "Medium") {
            LEVEL3.hints = "Hint: <br> - Solve the puzzle - the sun is in the right corner."
        }
        else {
            LEVEL3.hints = "No hints for you since you selected the difficulty 'Hard'."
        }
        DROPDOWN.content[3].innerHTML = `
                <img src="img/line.png" alt="line">
                <p>${LEVEL3.hints}</p>
                <img src="img/line1.png" alt="line">`
    }
    else {
        LEVEL3.levelScreen.style.display = "flex";

        LEVEL.levelIntro[2].innerHTML = `
            <img src="img/line.png" alt="line">
            <p class="introText3">“Her Timeless Art” - Mexico City 1940</p>
            <br>
            <p class="introText3">A small avant-garde art gallery in Mexico City, tucked between murals and cobblestone alleys. The gallery is preparing for a posthumous exhibition of Camila Rivera, a brilliant young artist who vanished under mysterious circumstances. One of her paintings — rumored to be her final and most radical work — is missing or was intentionally destroyed.</p>
            <p class="introText3">Tonight, the gallery is unveiling her remaining work. If Camila's final painting isn't found and shown tonight, the truth will be lost — and her final message will remain hidden.</p>
            <p class="introText3">Do Camila a favor and find her final work and reveal it to the people.</p>
            <div class="nextButton" onclick="closeIntroduction(3)">continue</div>`;


        gsap.from(".introText3", {
            duration: 1.2,
            opacity: 0,
            y: 40,
            stagger: 0.5,
            ease: "power2.out"
        });

    }
}

function door() {
    SOUNDS.onclick.play();
    LEVEL3.question.style.opacity = 1;
    LEVEL3.levelScreen.style.backgroundImage = "url('img/Level3/doorBackground.jpg')";
    LEVEL3.message.innerHTML = `
            <img src="img/line.png" alt="line">
            <p>The door seems to lead to the gallery's basement. But as you try to open it it's locked and a weird puzzle appears in front of you. It's a painting from Camila and it seems like you need to solve the puzzle to go any further...</p>
            <div class="nextButton" onclick="puzzle()">open puzzle</div>`
}

function puzzle() {
    SOUNDS.onclick.play();
    LEVEL3.puzzleOverall.style.display = "flex";
    LEVEL3.puzzle.style.display = "grid";
    LEVEL3.message.style.display = "none";
    randomOrder();
}
let puzzleImgs = [
    "img/Level3/puzzle_pieces/piece_0_0.png",
    "img/Level3/puzzle_pieces/piece_0_1.png",
    "img/Level3/puzzle_pieces/piece_0_2.png",
    "img/Level3/puzzle_pieces/piece_0_3.png",
    "img/Level3/puzzle_pieces/piece_1_0.png",
    "img/Level3/puzzle_pieces/piece_1_1.png",
    "img/Level3/puzzle_pieces/piece_1_2.png",
    "img/Level3/puzzle_pieces/piece_1_3.png",
    "img/Level3/puzzle_pieces/piece_2_0.png",
    "img/Level3/puzzle_pieces/piece_2_1.png",
    "img/Level3/puzzle_pieces/piece_2_2.png",
    "img/Level3/puzzle_pieces/piece_2_3.png",
]

const correctPieces = new Array(puzzleImgs.length).fill(0);

function randomOrder() {
    for (let i = 0; i < puzzleImgs.length / 2; i++) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * puzzleImgs.length);
        } while (puzzleImgs[randomNumber] == "");

        let currentImg = puzzleImgs[randomNumber];
        let imgName = currentImg.split("/").pop().replace(".png", "");
        piecesLeft.innerHTML += `
            <img id="${imgName}" src="${currentImg}" alt="img" draggable="true" ondragstart="dragstartHandler(event)">`;

        puzzleImgs[randomNumber] = "";
    }
    for (let i = 0; i < puzzleImgs.length / 2; i++) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * puzzleImgs.length);
        } while (puzzleImgs[randomNumber] == "");

        currentImg = puzzleImgs[randomNumber];
        let imgName = currentImg.split("/").pop().replace(".png", "");
        piecesRight.innerHTML += `
            <img id="${imgName}" src="${currentImg}" alt="img" draggable="true" ondragstart="dragstartHandler(event)">`;

        puzzleImgs[randomNumber] = "";
    }
}

function dropHandlerPuzzle(event) {
    event.preventDefault();
    const imageId = event.dataTransfer.getData("text");
    const image = document.getElementById(imageId);
    const dropZone = event.currentTarget;

    if (dropZone.children.length === 0) {
        SOUNDS.puzzle.volume = 0.3;
        SOUNDS.puzzle.play();
        image.style.width = "145px";
        image.style.height = "145px";
        dropZone.appendChild(image);

        const correctSlotId = imageId.replace("piece", "slot");
        const dropZoneId = dropZone.id;

        const index = parseInt(imageId.split("_")[1]) * 4 + parseInt(imageId.split("_")[2]);

        if (dropZoneId === correctSlotId) {
            correctPieces[index] = 1;
        } else {
            correctPieces[index] = 0;
        }


        //mit Hilfe von ChatGPT
        const allSlots = document.querySelectorAll('[id^="slot_"]');
        const isFull = Array.from(allSlots).every(slot => slot.children.length === 1);

        if (isFull) {
            LEVEL3.puzzleMessage.style.display = "block";
            LEVEL3.puzzleOverall.style.display = "none";

            if (correctPieces.every(val => val === 1)) {
                LEVEL3.puzzleMessage.innerHTML = `
                <img id="lineSelect" src="img/line.png" alt="line">
                <p>Congratulations</p>
                <p>You put the pieces in the right order and managed to unlock the door.</p>
                <div class="nextButton" onclick="basement()">continue</div>`;

            }
            else {
                LEVEL3.puzzleMessage.innerHTML = `  
                <img id="lineSelect" src="img/line.png" alt="line">
                <p>Oh No...</p>
                <p>You didn't put the pieces in the right place. Try again to unlock the door and find Camila's painting</p>
                <div class="nextButton" onclick="restartLevel3()">try again</div>`;
            }
        }
    }
}


function basement() {
    if (DIFFICULTY.mode == "Easy") {
        LEVEL3.hints = "Hint 1: <br> - When you choose a color you can paint over the painting. <br> <br> Hint 2: <br> - The poem refers to the color green."
    }
    else if (DIFFICULTY.mode == "Medium") {
        LEVEL3.hints = "Hint: <br> - When you choose a color you can paint over the painting."
    }
    else {
        LEVEL3.hints = "No hints for you since you selected the difficulty 'Hard'."
    }
    DROPDOWN.content[3].innerHTML = `
            <img src="img/line.png" alt="line">
            <p>${LEVEL3.hints}</p>
            <img src="img/line1.png" alt="line">`
    SOUNDS.onclick.play();
    LEVEL3.painting.style.display = "block";
    if (!LEVEL3.readBasement) {
        LEVEL3.levelScreen.style.backgroundImage = "url('img/Level3/basementBackground.jpg')";
        LEVEL3.puzzleMessage.innerHTML = `  
                    <img id="lineSelect" src="img/line.png" alt="line">
                    <p>You landed in a hidden atelier. Camila's atelier to be exact.</p>
                    <div class="nextButton" onclick="basement()">continue</div>`;
        LEVEL3.readBasement = true;
    }
    else {
        LEVEL3.puzzleMessage.style.display = "none";
    }
}


function paintingRead() {
    SOUNDS.onclick.play();
    LEVEL3.levelScreen.style.backgroundImage = "url('img/Level3/canvasBackground.png')";
    LEVEL3.paintingPart.style.display = "flex";
    LEVEL3.painting.style.display = "none";
    loadPainting();
}

function setColor(color) {
    SOUNDS.onclick.play();
    if (!LEVEL3.alreadySet) {
        if (color == 1) {
            LEVEL3.paintingUnder.innerHTML = `<img src="img/Level3/mistakePurple.png" alt="img" style="width: 100%; height: 100%;">`
        }
        else if (color == 2) {
            LEVEL3.paintingUnder.innerHTML = `<img src="img/Level3/mistakeBeige.png" alt="img"  style="width: 100%; height: 100%;">`
        }
        else if (color == 3) {
            LEVEL3.paintingUnder.innerHTML = `<img src="img/Level3/mistakeBrown.png" alt="img"  style="width: 100%; height: 100%;">`
        }
        else {
            LEVEL3.paintingUnder.innerHTML = `<img src="img/Level3/finalPainting.png" alt="img"  style="width: 100%; height: 100%;">`
            LEVEL3.choseRightPainting = true;
        }
        listeners();
        LEVEL3.alreadySet = true;

    }
}
let painting = false;
let canvas = document.getElementById('topLayer');
let ctx = canvas.getContext('2d');

function loadPainting() {
    let fakePainting = new Image();
    fakePainting.src = 'img/Level3/picture.png';

    fakePainting.onload = () => {
        ctx.drawImage(fakePainting, 0, 0, canvas.width, canvas.height);
    }
}

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishedPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    SOUNDS.brush.play();
    LEVEL3.drawCommit.style.display = "flex";
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0].clientX) - rect.left;
    const y = (e.clientY || e.touches?.[0].clientY) - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
}

function listeners() {
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('touchstart', startPosition);
    canvas.addEventListener('touchend', finishedPosition);
    canvas.addEventListener('touchmove', draw);
}

function commitPainting() {
    SOUNDS.onclick.play();
    LEVEL3.commitMessage.style.display = "block";
    LEVEL3.paintingPart.style.display = "none";
    if (LEVEL3.choseRightPainting) {
        LEVEL3.commitMessage.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
        <h2>Congratulations</h2>
        <p>You managed to choose the right color to clean Camila's final painting. The gallery and people are forever thankful for your skills and cleverness.</p>
        <div class="nextButton" onclick="finishLevel(3)">finish</div>
        `
    }
    else {
        LEVEL3.commitMessage.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
        <h2>Oh no...</h2>
        <p>You didn't pick the right color to safe Camila's painting. Try again, so the world can finally see her last work.</p>
        <div class="nextButton" onclick="restartLevel3()">try again</div>
        `
    }
}