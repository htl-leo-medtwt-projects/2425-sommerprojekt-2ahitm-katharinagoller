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
    if(LEVEL3.readIntro) {
        LEVEL3.levelScreen.style.backgroundImage = "url('img/Level3/galleryBackground.jpg')";
        LEVEL.levelIntro[2].style.display = "none";
        LEVEL3.message.style.display = "block";
        LEVEL3.message.innerHTML = `
            <img src="img/line.png" alt="line">
            <p>You entered the gallery. Down the hall there is a door...</p>
            <div class="nextButton" onclick="door()">go to door</div>`

        if(DIFFICULTY.mode == "Easy") {
            LEVEL3.hints = "Hint 1: <br> - Inspect the mess on the floor. Put the notes into the right order. <br> <br> Hint 2: <br> - Cleaning the stage is the least important ToDo."
        }
        else if(DIFFICULTY.mode == "Medium") {
            LEVEL3.hints = "Hint: <br> - Inspect the mess on the floor. Put the notes into the right order."
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
        <p>“Her Timeless Art” - Mexico City 1940</p>
        <br>
        <p>A small avant-garde art gallery in Mexico City, tucked between murals and cobblestone alleys. The gallery is preparing for a posthumous exhibition of Camila Rivera, a brilliant young artist who vanished under mysterious circumstances. One of her paintings — rumored to be her final and most radical work — is missing or was intentionally destroyed.</p>
        <p>Tonight, the gallery is unveiling her remaining work. If Camila's final painting isn't found and shown tonight, the truth will be lost — and her final message will remain hidden.</p>
        <p>Do Camila a favor and find her final work and reveal it to the people.</p>
        <div class="nextButton" onclick="closeIntroduction(3)">continue</div>
    `;
    }
}

function door() {
    LEVEL3.question.style.opacity = 1;
    LEVEL3.levelScreen.style.backgroundImage = "url('img/Level3/doorBackground.jpg')";
    LEVEL3.message.innerHTML = `
            <img src="img/line.png" alt="line">
            <p>The door seems to lead to the gallery's basement. But as you try to open it it's locked and a weird puzzle appears in front of you. It's a painting from Camila and it seems like you need to solve the puzzle to go any further...</p>
            <div class="nextButton" onclick="puzzle()">open puzzle</div>`
}

function puzzle() {
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
    for(let i = 0; i < puzzleImgs.length/2; i++) {
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
    for(let i = 0; i < puzzleImgs.length/2; i++) {
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
    LEVEL3.painting.style.display = "block";
    if(!LEVEL3.readBasement) {
        LEVEL3.levelScreen.style.backgroundImage = "url('img/Level3/basementBackground.jpg')";
        LEVEL3.puzzleMessage.innerHTML = `  
                    <img id="lineSelect" src="img/line.png" alt="line">
                    <p>You lended in a hidden atelier. Camila's atelier to be exact.</p>
                    <div class="nextButton" onclick="basement()">continue</div>`;
        LEVEL3.readBasement = true;
    }
    else {
        LEVEL3.puzzleMessage.style.display = "none";
    }
}


function paintingRead() {
    LEVEL3.levelScreen.style.backgroundImage = "url('img/Level3/canvasBackground.jpg')";
}
