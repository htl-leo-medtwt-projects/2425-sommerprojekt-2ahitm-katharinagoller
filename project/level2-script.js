let LEVEL2 = {
    readIntro: false,
    question: document.getElementById("hint2"),
    hints: "",
    levelScreen: document.getElementById("level2Screen"),
    paper: document.getElementById("paper"),
}

function restartLevel2() {
    LEVEL.levelIntro[1].style.display = "block";
    LEVEL2.readIntro = false;
    LEVEL2.levelScreen.style.backgroundImage = "url('img/introBackground.jpg')";
    LEVEL2.paper.style.display = "none";
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
            LEVEL2.hints = "Hint 1: <br> - Inspect the mess on the floor. Put the notes into the right order. <br> <br> Hint 2: <br> - "
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
}