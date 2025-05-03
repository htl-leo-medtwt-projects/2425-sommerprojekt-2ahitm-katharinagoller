let LEVEL4 = {
    readIntro: false,
    question: document.getElementById("hint4"),
    hints: "",
    levelScreen: document.getElementById("level4Screen"),
    message: document.getElementById("level4Message"),

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