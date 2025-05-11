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
}

function restartLevel5() {
    LEVEL.levelIntro[4].style.display = "block";
    LEVEL5.readIntro = false;
    LEVEL5.levelScreen.style.backgroundImage = "url('img/introBackground.jpg')";
    level5();
}

function level5() {
    if (LEVEL5.readIntro) {
        LEVEL5.levelScreen.style.backgroundImage = "url('img/Level5/livingRoomBackground.jpg')";
        LEVEL.levelIntro[4].style.display = "none";
        LEVEL5.camera.style.display = "block"
        LEVEL5.letter.style.display = "block"
        LEVEL5.close[0].style.display = "none";
        LEVEL5.close[1].style.display = "none";

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