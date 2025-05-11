let LEVEL2 = {
    readIntro: false,
    question: document.getElementById("hint2"),
    hints: "",
    levelScreen: document.getElementById("level2Screen"),
    paper: document.getElementById("paper"),
    floorPart: document.getElementById("floorPart"),
    message: document.getElementById("messageOrder"),
    stage: document.getElementById("stage"),
    stageTrue: false,
    weight: document.getElementById("weight"),
    startArea: document.getElementById("imgFlex"),
    errorMessage: document.getElementById("errorMessage"),
    basket: document.getElementById("basket"),
    removeBasket: document.getElementById("removeBasket"),
    stageLight: document.getElementById("stageLight"),
    lightSwitch: document.getElementById("lightSwitch"),
    cleanStage: document.getElementById("cleanStage"),
}

function restartLevel2() {
    LEVEL2.stageLight.style.display = "block";
    LEVEL2.cleanStage.style.display = "block";
    LEVEL2.stageLight.innerHTML = `<img src="img/Level2/stageLightsOff.png" alt="img">`
    LEVEL2.errorMessage.style.display = "none";
    LEVEL2.stage.style.display = "none";
    LEVEL.levelIntro[1].style.display = "block";
    LEVEL2.readIntro = false;
    LEVEL2.levelScreen.style.backgroundImage = "url('img/introBackground.jpg')";
    LEVEL2.paper.style.display = "none";
    LEVEL2.message.style.display = "none";
    let imageIds = ["img1", "img2", "img3", "img4"];
    imageIds.forEach(id => {
        let img = document.getElementById(id);
        LEVEL2.startArea.appendChild(img);
    });

    placements = {
        box1: null,
        box2: null,
        box3: null,
        box4: null
    };
    level2();
}

function level2() {
    if (LEVEL2.readIntro) {
        LEVEL2.paper.style.display = "block";
        LEVEL2.question.style.opacity = 1;
        LEVEL2.levelScreen.style.backgroundImage = "url('img/Level2/garderobeBackground.jpg')";
        LEVEL.levelIntro[1].style.display = "none";
        //Garderobe part here



        if (DIFFICULTY.mode == "Easy") {
            LEVEL2.hints = "Hint 1: <br> - Inspect the mess on the floor. Put the notes into the right order. <br> <br> Hint 2: <br> - Cleaning the stage is the least important ToDo."
        }
        else if (DIFFICULTY.mode == "Medium") {
            LEVEL2.hints = "Hint: <br> - Inspect the mess on the floor. Put the notes into the right order."
        }
        else {
            LEVEL2.hints = "No hints for you since you selected the difficulty 'Hard'."
        }
        DROPDOWN.content[2].innerHTML = `
                <img src="img/line.png" alt="line">
                <p>${LEVEL2.hints}</p>
                <img src="img/line1.png" alt="line">`
    }
    else {
        LEVEL2.levelScreen.style.display = "flex";

        LEVEL.levelIntro[1].innerHTML = `
            <img src="img/line.png" alt="line">
            <p class="introText2">“Treacherous Theater” - Hollywood 1920</p>
            <br>
            <p class="introText2">Hollywood, June 1920. This is a voice carried through time. The theater Fallen Angel stands on the edge of glory, its velvet curtains ready to rise on a new legend.</p>
            <p class="introText2">Linda Rose — young, radiant, destined for stardom — is about to take the stage that could change her life. But shadows move behind the scenes. Someone has laced the spotlight with danger, woven traps into the wings, and scripted a final act meant to end in tragedy. Unless you can change the story.</p>
            <p class="introText2">Unravel the riddles. Rewrite fate. <br> And save Linda before the curtain falls.</p>
            <div class="nextButton" onclick="closeIntroduction(2)">continue</div>`;

        gsap.from(".introText2", {
            duration: 1.2,
            opacity: 0,
            y: 40,
            stagger: 0.5,
            ease: "power2.out"
        });

    }
}

function paperRead() {
    SOUNDS.newspaper.play();
    LEVEL2.paper.style.display = "none";
    LEVEL2.levelScreen.style.backgroundImage = "url('img/Level2/floor.jpg')";
    LEVEL2.floorPart.style.display = "block";
}

let placements = {
    div1: null,
    div2: null,
    div3: null,
    div4: null
};

//with V3School Example
function dragstartHandler(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragoverHandler(event) {
    event.preventDefault();
}

function dropHandler(event) {

    event.preventDefault();
    const imageId = event.dataTransfer.getData("text");
    const image = document.getElementById(imageId);

    if (event.target.children.length === 0) {
        event.target.appendChild(image);
        placements[event.target.id] = imageId;
        
        SOUNDS.puzzle.volume = 0.3;
        SOUNDS.puzzle.play();
    }
}

function commitLine() {
    SOUNDS.onclick.play();
    LEVEL2.message.style.display = "block";
    LEVEL2.floorPart.style.display = "none";
    LEVEL2.levelScreen.style.backgroundImage = "url('img/Level2/garderobeBackground.jpg')";

    if (placements.div1 == "img3" && placements.div2 == "img2" && placements.div3 == "img1" && placements.div4 == "img4") {
        LEVEL2.message.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
        <p>Congratulations</p>
        <p>You managed to put the steps in the right order. But that alone does not save Linda. You must take action.</p>
        <div class="nextButton" onclick="stageLevel()">continue</div>
        `
    }
    else {
        LEVEL2.message.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
        <p>Oh No...</p>
        <p>You were not able to put the steps in the right order and could not save Linda. You should try again and take action.</p>
        <div class="nextButton" onclick="restartLevel2()">try again</div>
        `
    }
}


function stageLevel() {
    SOUNDS.onclick.play();
    LEVEL2.basket.style.display = "block";
    LEVEL2.removeBasket.style.display = "block";
    LEVEL2.weight.style.display = "block";
    LEVEL2.levelScreen.style.backgroundImage = "url('img/Level2/stageBackground.png')";
    LEVEL2.stage.style.display = "block";
    LEVEL2.message.style.display = "none";
    LEVEL2.stageTrue = true;

    if (DIFFICULTY.mode == "Easy") {
        LEVEL2.hints = "Hint 1: <br> - Take action and complete the ToDos in the right order. <br> <br> Hint 2: <br> - Drag Items or Click on Items."
    }
    else if (DIFFICULTY.mode == "Medium") {
        LEVEL2.hints = "Hint: <br> - Take action and complete the ToDos in the right order."
    }
    else {
        LEVEL2.hints = "No hints for you since you selected the difficulty 'Hard'."
    }
    DROPDOWN.content[2].innerHTML = `
            <img src="img/line.png" alt="line">
            <p>${LEVEL2.hints}</p>
            <img src="img/line1.png" alt="line">`


}

let DONE = {
    ropesSecured: false,
    removedWater: false,
    lightOn: false,
    stageClean: false,
}

function dropHandlerWeight(event) {
    SOUNDS.weight.play();
    event.preventDefault();
    const imageId = event.dataTransfer.getData("text");
    const image = document.getElementById(imageId);

    if (imageId == "weight") {
        LEVEL2.weight.style.width = "90%";
        LEVEL2.weight.style.bottom = "0vh";
        LEVEL2.weight.style.left = "0vw";
        event.target.appendChild(image);
        console.log(imageId);
        DONE.ropesSecured = true;
    }
}

function dropHandlerBasket(event) {
    SOUNDS.trash.play();
    event.preventDefault();
    const imageId = event.dataTransfer.getData("text");
    const image = document.getElementById(imageId);

    if (imageId == "basket") {
        if (DONE.ropesSecured) {
            event.target.appendChild(image);
            DONE.removedWater = true;
        }
        else {
            LEVEL2.errorMessage.style.display = "block";
            LEVEL2.errorMessage.innerHTML = `
            <img id="lineSelect" src="img/line.png" alt="line">
                <p>Oh No...</p>
                <p>You didn't follow the steps in the right order and now the ropes didn't last...</p>
                <div class="nextButton" onclick="restartLevel2()">try again</div>`
            clearStage()
        }
    }
}

function clearStage() {
    LEVEL2.weight.style.display = "none";
    LEVEL2.removeBasket.style.display = "none";
    LEVEL2.basket.style.display = "none";
    LEVEL2.stageLight.style.display = "none";
    LEVEL2.cleanStage.style.display = "none";
}

function lightOn() {
    SOUNDS.lightswitch.play();
    LEVEL2.stageLight.innerHTML = `<img src="img/Level2/stageLights.png" alt="img">`
    if (!DONE.removedWater) {
        LEVEL2.errorMessage.style.display = "block";
        LEVEL2.errorMessage.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
                <p>Oh No...</p>
                <p>You didn't follow the steps in the right order and now the water spilled over the stage light...</p>
                <div class="nextButton" onclick="restartLevel2()">try again</div>`
        clearStage();
    }
    else {
        DONE.lightOn = true;
    }
}

function clean() {
    SOUNDS.onclick.play();
    LEVEL2.errorMessage.style.display = "block";
    if (DONE.lightOn) {
        LEVEL2.errorMessage.innerHTML = `
                <img id="lineSelect" src="img/line.png" alt="line">
                <p>Congratulations</p>
                <p>You followed all the steps and managed to save the famous actress Linda Rose from a tragic death. Be proud of yourself. You keep on getting smarter and cleverer.</p>
                <div class="nextButton" onclick="finishLevel(2)">finish</div>`
        clearStage();
    }
    else {
        LEVEL2.errorMessage.innerHTML = `
                <img id="lineSelect" src="img/line.png" alt="line">
                <p>Oh No...</p>
                <p>You didn't follow the steps in the right order. You can't clean the stage before finishing the other, more important tasks.</p>
                <div class="nextButton" onclick="restartLevel2()">try again</div>`
        clearStage();
    }
}