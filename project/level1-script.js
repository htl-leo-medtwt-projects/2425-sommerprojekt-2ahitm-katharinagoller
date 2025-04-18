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
    close: document.getElementsByClassName("close"),
    bathroom: document.getElementById("bathroom"),
    books: document.getElementById("books"),
    soap: document.getElementById("soap"),
    swapHouse: document.getElementById("swapHouse"),
    livingroom: document.getElementById("livingroom"),
    plant: document.getElementById("plant"),
    bedroom: document.getElementById("bedroom"),
    letter: document.getElementById("letter"),
    portrait: document.getElementById("portrait"),
    swapHouse2: document.getElementById("swapHouse2"),
    commit: document.getElementById("commit"),
    selection: document.getElementById("selectionBox"),
    firstItem: true,
    selectImages: document.getElementById("selection"),
    bridgeWarning: document.getElementById("bridgeWarning"),
    readPeom: false,
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
        <p>"The Great Flood" - Paris 1900</p>
        <br>
        <p>Paris, May 1900 - Catastrophe has struck our beloved city! The Seine, swollen by relentless rains and melting snow, has risen beyond its banks, flooding the streets of Paris. Water pours into homes and businesses, bringing daily life to a standstill. All the citizens of Paris are fighting for their lives and seeking safety. You, however, have one more quest to complete in this city. The infamous landlord, Monsieur Moreau, is just three steps away from prison, as he is suspected of murdering his wife, Carla Moreau. He needs you to find two crucial documents to prove his innocence.</p>
        <p>At first, you must find his houses safely. You have a map and a poem that should help you choose the right bridge.</p>
        <div class="nextButton" onclick="closeIntroduction(1)">continue</div>
    `;
    }
}



function swapToPoem() {
    LEVEL1.readPeom = true;
    SOUNDS.onclick.play();
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
    LEVEL1.readPeom = false;
    LEVEL1.levelScreen.style.backgroundImage = "url('img/introBackground.jpg')";
    LEVEL1.commit.style.display = "none";
    ITEMS.element1 = 0;
    ITEMS.element2 = 0;
    LEVEL1.selection.style.display = "none";
    LEVEL1.message.style.display = "none";
    LEVEL1.timeCount = 30;
    LEVEL1.timer = null;
    LEVEL1.readIntro = false;
    LEVEL1.count = 0;
    LEVEL.levelIntro[0].style.display = "block"
    LEVEL1.selection.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
                    <h2>What is the first item that will save  Monsieur Moreau's life?</h2>
                <div id="selection">
                    <img onclick="select(1)" src="img/Level1/newspaper.png" alt="img">
                    <img onclick="select(2)" src="img/Level1/books.png" alt="img">
                    <img onclick="select(3)" src="img/Level1/soap.png" alt="img">
                    <img onclick="select(4)" src="img/Level1/plant.png" alt="img">
                    <img onclick="select(5)" src="img/Level1/letter.png" alt="img">
                    <img onclick="select(6)" src="img/Level1/picture.png" alt="img">
                </div>`
    level1();
}
function closeWarning() {
    LEVEL1.bridgeWarning.style.display = "none";
    SOUNDS.onclick.play();

}

function commitBridge(bridge) {
    if(LEVEL1.readPeom) {
        SOUNDS.onclick.play();
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
    else {
        LEVEL1.bridgeWarning.style.display = "block";
    }
}

function level1Houses() {
    SOUNDS.onclick.play();
    LEVEL1.timerBox.style.display = "none";
    LEVEL1.timer = null;
    LEVEL1.question.style.display = "none";
    LEVEL1.levelScreen.style.backgroundImage = "url('img/Level1/buildingsBackground.jpg')";
    LEVEL1.message.style.display = "none";
    LEVEL1.houseIntro.style.display = "block";
    LEVEL1.houseIntro.innerHTML = `
        <img src="img/line.png" alt="img">
        <p>You were able to cross the bridge in time which means you're one step closer to the needed documents.There are two houses with the same landlord. Monsieur Moreau.</p>
        <p>Which one do you want to enter first?</p>
        <div>
            <div class="nextButton" onclick="house1()">House 1</div>
            <div class="nextButton" onclick="house2()">House 2</div>
        </div>
        `
    ;
    
}

function house1() {
    SOUNDS.onclick.play();
    LEVEL1.commit.style.display = "block";
    LEVEL1.swapHouse2.style.display = "none"
    LEVEL1.bedroom.style.display = "none";
    LEVEL1.livingroom.style.display = "none"
    LEVEL1.bathroom.style.display = "none";
    LEVEL1.close[0].style.display = "none";
    LEVEL1.question.style.display = "block";
    LEVEL1.newspaper.style.display = "block";
    if(DIFFICULTY.mode == "Easy") {
        LEVEL1.hints = "Hint 1: <br> Explore the houses and study the items with care. <br> <br> Hint 2: The soap could be very important...<br> "
    }
    else if(DIFFICULTY.mode == "Medium") {
        LEVEL1.hints = "Hint: <br> Explore the houses and study the items with care.."
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
    SOUNDS.newspaper.play();
    LEVEL1.close[0].style.display = "flex";
    LEVEL1.newspaper.style.display = "none";
}

function bathroom() {
    SOUNDS.onclick.play();
    LEVEL1.swapHouse.style.display = "block"
    LEVEL1.close[0].style.display = "none";
    LEVEL1.newspaper.style.display = "none";
    LEVEL1.kitchen.style.display = "none";
    LEVEL1.bathroom.style.display = "block";
    LEVEL1.soap.style.display = "block";
    LEVEL1.books.style.display = "block";
    LEVEL1.close[1].style.display = "none";
    LEVEL1.close[2].style.display = "none";
    LEVEL1.levelScreen.style.backgroundImage = "url('img/Level1/bathroom.jpg')";

}

function booksRead() {
    SOUNDS.newspaper.play();
    LEVEL1.close[1].style.display = "flex";
    LEVEL1.books.style.display = "none";
}
function soapRead() {
    SOUNDS.grab.play();
    LEVEL1.close[2].style.display = "flex";
    LEVEL1.books.style.display = "none";
}

function house2() {
    SOUNDS.onclick.play();
    LEVEL1.commit.style.display = "block";
    LEVEL1.swapHouse.style.display = "none"
    LEVEL1.bathroom.style.display = "none";
    LEVEL1.kitchen.style.display = "none"
    LEVEL1.bedroom.style.display = "none";
    LEVEL1.close[3].style.display = "none";
    LEVEL1.close[4].style.display = "none";
    LEVEL1.question.style.display = "block";
    LEVEL1.plant.style.display = "block";
    LEVEL1.letter.style.display = "block";
    if(DIFFICULTY.mode == "Easy") {
        LEVEL1.hints = "Hint 1: <br> Explore the houses and study the items with care. <br> <br> Hint 2: The letter could be very important...<br> "
    }
    else if(DIFFICULTY.mode == "Medium") {
        LEVEL1.hints = "Hint: <br> Explore the houses and study the items with care.."
    }
    else {
        LEVEL1.hints = "No hints for you since you selected the difficulty 'Hard'."
    }
    DROPDOWN.content[1].innerHTML = `
            <img src="img/line.png" alt="line">
            <p>${LEVEL1.hints}</p>
            <img src="img/line1.png" alt="line">`;

    LEVEL1.houseIntro.style.display = "none";
    LEVEL1.livingroom.style.display = "block";
    LEVEL1.levelScreen.style.backgroundImage = "url('img/Level1/livingRoom.jpg')";
}

function plantRead() {
    SOUNDS.plant.play();
    LEVEL1.close[3].style.display = "flex";
}
function letterRead() {
    SOUNDS.newspaper.play();
    LEVEL1.close[4].style.display = "flex";
}

function bedroom() {
    SOUNDS.onclick.play();
    LEVEL1.swapHouse2.style.display = "block"
    LEVEL1.close[3].style.display = "none";
    LEVEL1.plant.style.display = "none";
    LEVEL1.letter.style.display = "none";
    LEVEL1.livingroom.style.display = "none";
    LEVEL1.bedroom.style.display = "block";
    LEVEL1.portrait.style.display = "block";
    LEVEL1.close[5].style.display = "none";
    LEVEL1.levelScreen.style.backgroundImage = "url('img/Level1/bedroomBackground.jpg')";

}

function portraitRead() {
    SOUNDS.grab.play();
    LEVEL1.close[5].style.display = "flex";
    LEVEL1.portrait.style.display = "none";
}

function submit() {
    SOUNDS.onclick.play();
    LEVEL1.selection.style.display = "block";
    LEVEL1.bathroom.style.display = "none";
    LEVEL1.bedroom.style.display = "none";
    LEVEL1.livingroom.style.display = "none";
    LEVEL1.kitchen.style.display = "none";
    LEVEL1.swapHouse.style.display = "none";
    LEVEL1.swapHouse2.style.display = "none";
}
let ITEMS = {
    element1: 0,
    element2: 0,
}
function select(element) {
    SOUNDS.onclick.play();
    if(element == 3 || element == 5) {
        ITEMS.element1 = element;
    }
    else {
        ITEMS.element1 = 0;
    }  
    if(element == 1) {
        LEVEL1.selection.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
                    <h2>What is the second item that will save  Monsieur Moreau's life?</h2>
                <div id="selection">
                    <img onclick="select2(2)" src="img/Level1/books.png" alt="img">
                    <img onclick="select2(3)" src="img/Level1/soap.png" alt="img">
                    <img onclick="select2(4)" src="img/Level1/plant.png" alt="img">
                    <img onclick="select2(5)" src="img/Level1/letter.png" alt="img">
                    <img onclick="select2(6)" src="img/Level1/picture.png" alt="img">
                </div>`
    } 
    else if(element == 2) {
        LEVEL1.selection.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
                    <h2>What is the second item that will save  Monsieur Moreau's life?</h2>
                <div id="selection">
                    <img onclick="select2(1)" src="img/Level1/newspaper.png" alt="img">
                    <img onclick="select2(3)" src="img/Level1/soap.png" alt="img">
                    <img onclick="select2(4)" src="img/Level1/plant.png" alt="img">
                    <img onclick="select2(5)" src="img/Level1/letter.png" alt="img">
                    <img onclick="select2(6)" src="img/Level1/picture.png" alt="img">
                </div>`
    }
    else if(element == 3) {
        LEVEL1.selection.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
                    <h2>What is the second item that will save  Monsieur Moreau's life?</h2>
                <div id="selection">
                    <img onclick="select2(1)" src="img/Level1/newspaper.png" alt="img">
                    <img onclick="select2(2)" src="img/Level1/books.png" alt="img">
                    <img onclick="select2(4)" src="img/Level1/plant.png" alt="img">
                    <img onclick="select2(5)" src="img/Level1/letter.png" alt="img">
                    <img onclick="select2(6)" src="img/Level1/picture.png" alt="img">
                </div>`
    }
    else if(element == 4) {
        LEVEL1.selection.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
                    <h2>What is the second item that will save  Monsieur Moreau's life?</h2>
                <div id="selection">
                    <img onclick="select2(1)" src="img/Level1/newspaper.png" alt="img">
                    <img onclick="select2(2)" src="img/Level1/books.png" alt="img">
                    <img onclick="select2(3)" src="img/Level1/soap.png" alt="img">
                    <img onclick="select2(5)" src="img/Level1/letter.png" alt="img">
                    <img onclick="select2(6)" src="img/Level1/picture.png" alt="img">
                </div>`
    }
    else if(element == 5) {
        LEVEL1.selection.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
                    <h2>What is the second item that will save  Monsieur Moreau's life?</h2>
                <div id="selection">
                    <img onclick="select2(1)" src="img/Level1/newspaper.png" alt="img">
                    <img onclick="select2(2)" src="img/Level1/books.png" alt="img">
                    <img onclick="select2(3)" src="img/Level1/soap.png" alt="img">
                    <img onclick="select2(4)" src="img/Level1/plant.png" alt="img">
                    <img onclick="select2(6)" src="img/Level1/picture.png" alt="img">
                </div>`
    }
    else {
        LEVEL1.selection.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
                    <h2>What is the second item that will save  Monsieur Moreau's life?</h2>
                <div id="selection">
                    <img onclick="select2(1)" src="img/Level1/newspaper.png" alt="img">
                    <img onclick="select2(2)" src="img/Level1/books.png" alt="img">
                    <img onclick="select2(3)" src="img/Level1/soap.png" alt="img">
                    <img onclick="select2(4)" src="img/Level1/plant.png" alt="img">
                    <img onclick="select2(5)" src="img/Level1/letter.png" alt="img">
                </div>`
    }
    
}

function select2(element) {
    SOUNDS.onclick.play();
    if(element == 3 || element == 5) {
        ITEMS.element2 = element;
    }
    else {
        ITEMS.element2 = 0;
    }

    if(ITEMS.element1 == 3 || ITEMS.element1 == 5 && ITEMS.element2 == 3 || ITEMS.element2 == 5) {
        LEVEL1.selection.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
        <h2>Congratulations</h2>
        <p>Through shadows and whispers, you followed the truth where others turned away. While the city pointed its finger at Monsieur Moreau, you saw what lay beneath. Because of your insight, an innocent man walks free. The true culprit, Ferdinand Ardes, now sits behind iron bars, his secrets at last unearthed. You did not simply solve a crime—you restored justice to a world on the brink of misjudgment. <br> Well done, little detective. Paris owes you more than it knows.</p>
        <div class="nextButton" onclick="finishLevel(1)">finish</div>
        `   
    }
    else {
        LEVEL1.selection.innerHTML = `
        <img id="lineSelect" src="img/line.png" alt="line">
        <h2>Oh no...</h2>
        <p>You Were Close... But Not Close Enough. The evidence was there—quiet, hidden, waiting. But your choices led the wrong man to prison. Monsieur Moreau, innocent yet accused, now sits behind cold iron bars. And the true killer, has vanished into the shadows of Paris. Sometimes, justice falters.</p>
        <div class="nextButton" onclick="restartLevel1()">try again</div>
        `   
    }
    
}