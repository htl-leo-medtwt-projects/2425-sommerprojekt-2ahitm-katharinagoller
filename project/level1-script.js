let LEVEL1 = {
    levelScreen: document.getElementById("level1Screen"),
    map: document.getElementById("level1Map"),
    choose: document.getElementById("bridgeChoose"),
    readIntro: false,
    question: document.getElementById("hint"),
    hints: "",
}

function level1() {
    if(LEVEL1.readIntro) {
        LEVEL1.levelScreen.style.backgroundImage = "url('img/Level1/backgroundCityLevel1.jpg')";
        LEVEL1.map.style.display = "block";
        LEVEL1.map.innerHTML = `<img src="img/Level1/Level1Map.png" alt="map" width="100%">`
        LEVEL1.choose.style.display = "block";
        LEVEL1.question.style.opacity = 1;
        

        if(DIFFICULTY.mode == "Easy") {
            LEVEL1.hints = "Hint 1: <br> The water has risen so hight that you can't pass bridge 2. <br> <br> Hint 2: <br> Bridge 4 is made out of wood which makes it unstable."
        }
        else if(DIFFICULTY.mode == "Medium") {
            LEVEL1.hints = "Hint: <br> The water has risen so hight that you can't pass bridge 2."
        }
        else {
            LEVEL1.hints = "No hints for you since you selected the difficulty 'Hard'."
        }
        DROPDOWN.content[1].innerHTML = `
                <img src="img/line.png" alt="line">
                <p>${LEVEL1.hints}</p>
                <img src="img/line1.png" alt="line">`
    }
    else {
        LEVEL1.levelScreen.style.display = "flex";
        LEVEL.levelIntro.innerHTML = `
        <img src="img/line.png" alt="line">
        <p>"The Great Flood" - Paris 1900</p>
        <br>
        <p>Paris, January 1900 - Catastrophe has struck our beloved city! The Seine, swollen by relentless rains and melting snow, has risen beyond its banks, flooding the streets of Paris. Water pours into homes and businesses, bringing daily life to a standstill. All the citizens of Paris are fighting for their lives and seeking safety. You, however, have one more quest to complete in this city. The infamous landlord, Monsieur Moreau, is just three steps away from prison, as he is suspected of murdering his wife, Carla Moreau. He needs you to find a crucial document to prove his innocence.</p>
        <p>At first, you must find his houses safely. You have a map and a poem that should help you choose the right bridge.</p>
        <div class="nextButton" onclick="closeIntroduction(1)">continue</div>
    `;
    }
}

function closeIntroduction(level) {
    LEVEL.levelIntro.style.display = "none";
    if(level == 1) {
        LEVEL1.readIntro = true;
        level1();

    }

}