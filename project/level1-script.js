let LEVEL1 = {
    levelScreen: document.getElementById("level1Screen"),
    map: document.getElementById("level1Map"),
    poem: document.getElementById("poem"),
    choose: document.getElementById("bridgeChoose"),
    readIntro: false,
    question: document.getElementById("hint"),
    hints: "",
    swap: document.getElementById("swap"),
    clickedOnce: false,
    count: 0,
    timeCount: 30,
    timerBox: document.getElementById("timerLevel1"),
    timer: null,
    message: document.getElementById("successMessage"),
    houseIntro: document.getElementById("houseIntro"),
    kitchen: document.getElementById("kitchen"),
    newspaper: document.getElementById("newspaper"),
    newspaperClose: document.getElementById("newspaperClose"),
    bathroom: document.getElementById("bathroom")
}

function level1() {
    if(LEVEL1.readIntro) {
        LEVEL1.swap.style.display = "block";
        LEVEL1.levelScreen.style.backgroundImage = "url('img/Level1/backgroundCityLevel1.jpg')";
        LEVEL1.map.style.display = "block";
        LEVEL1.map.innerHTML = `<img src="img/Level1/Level1Map.png" alt="map" width="100%">`
        LEVEL1.choose.style.display = "block";
        LEVEL1.question.style.opacity = 1;
        LEVEL1.swap.innerHTML = "swap to poem"
        LEVEL1.poem.innerHTML = "";

        if(LEVEL1.count > 0) {
            LEVEL1.timerBox.style.display = "block";
            LEVEL1.timer = setInterval(timer, 1000);
            function timer() {
                LEVEL1.timerBox.innerHTML = `${LEVEL1.timeCount}s left`;
                LEVEL1.timeCount--;
                console.log(LEVEL1.timeCount);
                if(LEVEL1.timeCount < 0) {
                    clearInterval(LEVEL1.timer);
                    LEVEL1.message.style.display = "block";
                    LEVEL1.swap.style.display = "none";
                    LEVEL1.map.style.display = "none";
                    LEVEL1.choose.style.display = "none";
                    LEVEL1.message.innerHTML = `
                    <img src="img/line.png" alt="line">
                    <p>Oh No...</p>
                    <p>You were not able to cross the right bridge in time. The waves take in your body, the water is dragging you down. You couldn't solve the riddle in time, and now it's taken away your last line.</p>
                    <div class="nextButton" onclick="restartLevel1()">try again</div>
                    `
                }
            }
        }
        

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
        LEVEL.levelIntro[0].innerHTML = `
        <img src="img/line.png" alt="line">
        <p>The Great Flood" - Paris 1900</p>
        <br>
        <p>Paris, January 1900 - Catastrophe has struck our beloved city! The Seine, swollen by relentless rains and melting snow, has risen beyond its banks, flooding the streets of Paris. Water pours into homes and businesses, bringing daily life to a standstill. All the citizens of Paris are fighting for their lives and seeking safety. You, however, have one more quest to complete in this city. The infamous landlord, Monsieur Moreau, is just three steps away from prison, as he is suspected of murdering his wife, Carla Moreau. He needs you to find a crucial document to prove his innocence.</p>
        <p>At first, you must find his houses safely. You have a map and a poem that should help you choose the right bridge.</p>
        <div class="nextButton" onclick="closeIntroduction(1)">continue</div>
    `;
    }
}

function closeIntroduction(level) {
    LEVEL.levelIntro[0].style.display = "none";
    if(level == 1) {
        LEVEL1.readIntro = true;
        level1();

    }

}


function swapToPoem() {
    if(!LEVEL1.clickedOnce) {
        LEVEL1.choose.style.display = "none";
        LEVEL1.map.style.display = "none";
        LEVEL1.swap.innerHTML = `swap to map`
        LEVEL1.poem.innerHTML = `<img src="img/Level1/Level1Poem.png" alt="poem" width="100%">`
        LEVEL1.clickedOnce = true;
    }
    else {
        LEVEL1.clickedOnce = false;
        LEVEL1.count++;
        level1();
    }
}

function restartLevel1() {
    LEVEL1.message.style.display = "none";
    LEVEL1.timeCount = 30;
    LEVEL1.timer = null;
    LEVEL1.readIntro = false;
    LEVEL1.count = 0;
    LEVEL.levelIntro[0].style.display = "block"
    level1();
}

function commitBridge(bridge) {
    if(bridge == 3) {
        clearInterval(LEVEL1.timer);
        LEVEL1.message.style.display = "block";
        LEVEL1.swap.style.display = "none";
        LEVEL1.map.style.display = "none";
        LEVEL1.choose.style.display = "none";
        LEVEL1.message.innerHTML = `
                <img src="img/line.png" alt="line">
                <p>Congratulations</p>
                <p>You were able to cross the right bridge in time. Now you can get to Monsieur Moreau's houses and correct the final crime. <br> Think smart, work hard to save his life.</p>
                <div class="nextButton" onclick="level1Houses()">continue</div>
            `
    }
    else {
        clearInterval(LEVEL1.timer);
        LEVEL1.message.style.display = "block";
        LEVEL1.swap.style.display = "none";
        LEVEL1.map.style.display = "none";
        LEVEL1.choose.style.display = "none";
        LEVEL1.message.innerHTML = `
                    <img src="img/line.png" alt="line">
                    <p>Oh No...</p>
                    <p>You were not able to cross the right bridge in time. The waves take in your body, the water is dragging you down. You couldn't solve the riddle in time, and now it's taken away your last line.</p>
                    <div class="nextButton" onclick="restartLevel1()">try again</div>
                    `
    ;
    }
}

function level1Houses() {
    LEVEL1.question.style.display = "none";
    LEVEL1.levelScreen.style.backgroundImage = "url('img/Level1/buildingsBackground.jpg')";
    LEVEL1.message.style.display = "none";
    LEVEL1.houseIntro.style.display = "block";
    LEVEL1.houseIntro.innerHTML = `
        <img src="img/line.png" alt="img">
        <p>You were able to cross the bridge in time which means you're one step closer to the needed document.There are two houses with the same landlord. Monsieur Moreau.</p>
        <p>Which one do you want to enter first?</p>
        <div>
            <div class="nextButton" onclick="house1()">House 1</div>
            <div class="nextButton" onclick="house2()">House 2</div>
        </div>
        `
    ;
    
}

function house1() {
    LEVEL1.newspaperClose.style.display = "none";
    LEVEL1.question.style.display = "block";
    LEVEL1.newspaper.style.display = "block";
    if(DIFFICULTY.mode == "Easy") {
        LEVEL1.hints = "Hint 1: <br> <br> <br> Hint 2: <br> "
    }
    else if(DIFFICULTY.mode == "Medium") {
        LEVEL1.hints = "Hint: <br> ."
    }
    else {
        LEVEL1.hints = "No hints for you since you selected the difficulty 'Hard'."
    }
    DROPDOWN.content[1].innerHTML = `
            <img src="img/line.png" alt="line">
            <p>${LEVEL1.hints}</p>
            <img src="img/line1.png" alt="line">`;

    LEVEL1.houseIntro.style.display = "none";
    LEVEL1.kitchen.style.display = "block";
    LEVEL1.levelScreen.style.backgroundImage = "url('img/Level1/kitchen.jpg')";
}

function newspaperRead() {
    LEVEL1.newspaperClose.style.display = "flex";
    LEVEL1.newspaper.style.display = "none";
}

function bathroom() {
    LEVEL1.newspaperClose.style.display = "none";
    LEVEL1.newspaper.style.display = "none";
    LEVEL1.kitchen.style.display = "none";
    LEVEL1.bathroom.style.display = "block"
    LEVEL1.levelScreen.style.backgroundImage = "url('img/Level1/bathroom.jpg')";
}
