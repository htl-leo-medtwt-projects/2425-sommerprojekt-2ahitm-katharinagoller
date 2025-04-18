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
    startArea: document.getElementById("imgFlex")
}

function restartLevel2() {
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
    if(LEVEL2.readIntro) {
        LEVEL2.paper.style.display = "block";
        LEVEL2.question.style.opacity = 1;
        LEVEL2.levelScreen.style.backgroundImage = "url('img/Level2/garderobeBackground.jpg')";
        LEVEL.levelIntro[1].style.display = "none";
        //Garderobe part here
        
        

        if(DIFFICULTY.mode == "Easy") {
            LEVEL2.hints = "Hint 1: <br> - Inspect the mess on the floor. Put the notes into the right order. <br> <br> Hint 2: <br> - Cleaning the stage is the least important ToDo."
        }
        else if(DIFFICULTY.mode == "Medium") {
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
        <p>“Treacherous Theater” - Hollywood 1920</p>
        <br>
        <p>Hollywood, June 1920. This is a voice carried through time. The theater Fallen Angel stands on the edge of glory,  its velvet curtains ready to rise on a new legend.</p>
        <p>Linda Rose — young, radiant, destined for stardom — is about to take the stage that could change her life. But shadows move behind the scenes. Someone has laced the spotlight with danger, woven traps into the wings, and scripted a final act meant to end in tragedy. Unless you can change the story.</p>
        <p>Unravel the riddles. Rewrite fate. <br> And save Linda before the curtain falls.</p>
        <div class="nextButton" onclick="closeIntroduction(2)">continue</div>
    `;
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
        console.log(placements);
        if(LEVEL2.stageTrue) {
            LEVEL2.weight.style.width = "90%";
            LEVEL2.weight.style.bottom = "0vh";
            LEVEL2.weight.style.left = "0vw";
        }
    }
}

function commitLine() {
    LEVEL2.message.style.display = "block";
    LEVEL2.floorPart.style.display = "none";
    LEVEL2.levelScreen.style.backgroundImage = "url('img/Level2/garderobeBackground.jpg')";

    if(placements.div1 == "img3" && placements.div2 == "img2" && placements.div3 == "img1" && placements.div4 == "img4") {
        LEVEL2.message.innerHTML = `
        <p>Congratulations</p>
        <p>You managed to put the steps in the right order. But that alone does not save Linda. You must take action.</p>
        <div class="nextButton" onclick="stageLevel()">continue</div>
        `
    }
    else {
        LEVEL2.message.innerHTML = `
        <p>Oh No...</p>
        <p>You were not able to put the steps in the right order and could not save Linda. You should try again and take action.</p>
        <div class="nextButton" onclick="restartLevel2()">try again</div>
        `
    }
}


function stageLevel() {
    LEVEL2.levelScreen.style.backgroundImage = "url('img/Level2/stageBackground.png')";
    LEVEL2.stage.style.display = "block";
    LEVEL2.message.style.display = "none";
    LEVEL2.stageTrue = true;

    if(DIFFICULTY.mode == "Easy") {
        LEVEL2.hints = "Hint 1: <br> - Take action and complete the ToDos in the right order. <br> <br> Hint 2: <br> - Drag Items or Click on Items."
    }
    else if(DIFFICULTY.mode == "Medium") {
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