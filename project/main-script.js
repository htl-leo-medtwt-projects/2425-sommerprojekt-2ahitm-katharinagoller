let DIFFICULTY = {
    mode: "Easy",
    number: 1,
}

function setDifficulty(mode) {
    DIFFICULTY.mode = mode;
    if(mode == "Medium") {
        DIFFICULTY.number = 2;
    }
    else if(mode == "Hard") {
        DIFFICULTY.number = 3;
    }
    console.log(DIFFICULTY.mode);
    next();
}

let LEVEL = {
    levelIntro: document.getElementsByClassName("levelIntro")
}


//LOADING SCREEN 
let LOAD = {
    timer: 0,
};


function playLevel(level) {
    SOUNDS.onclick.play();
    document.getElementById("loadingScreen").style.display = "block";
    document.getElementById("levelOverview").style.display = "none";

    LOAD.timer = setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
        fade(SOUNDS.theme);
        if (level == 1) {
            SOUNDS.level1.play();
            SOUNDS.level1.currentTime = 1;
            SOUNDS.level1.duration = Infinity;
            SOUNDS.level1.volume = 0.3;
            restartLevel1();
        }
        else if (level == 2) {
            SOUNDS.level2.play();
            SOUNDS.level2.currentTime = 0;
            SOUNDS.level2.duration = Infinity;
            SOUNDS.level2.volume = 0.3;
            restartLevel2();
        }

        else if (level == 3) {
            SOUNDS.level3.play();
            SOUNDS.level3.currentTime = 0;
            SOUNDS.level3.duration = Infinity;
            SOUNDS.level3.volume = 0.3;
            restartLevel3();
        }
        else if (level == 4) {
            SOUNDS.level4.play();
            SOUNDS.level4.currentTime = 7;
            SOUNDS.level4.duration = Infinity;
            SOUNDS.level4.volume = 0.3;
            restartLevel4();
        }
        else {
            SOUNDS.level5.play();
            SOUNDS.level5.currentTime = 3;
            SOUNDS.level5.duration = Infinity;
            SOUNDS.level5.volume = 0.3;
            restartLevel5();
        }

        clearInterval(LOAD.timer); 

    }, 2500);
}

function getUnlockedLevels() {
    let levels = localStorage.getItem("unlockedLevels");
    return levels ? JSON.parse(levels) : [1];
}

function unlockNextLevel(currentLevel) {
    let unlocked = getUnlockedLevels();
    let nextLevel = currentLevel + 1;
    if (!unlocked.includes(nextLevel) && nextLevel <= 5) {
        unlocked.push(nextLevel);
        localStorage.setItem("unlockedLevels", JSON.stringify(unlocked));
        updateLevelIcons(); 
    }
}

function updateLevelIcons() {
    const unlocked = getUnlockedLevels();

    for (let i = 1; i <= 5; i++) {
        let levelDiv = document.getElementById(`level${i}`);
        let img = levelDiv.querySelector("img");

        if (unlocked.includes(i)) {
            img.src = "img/play.png";
            levelDiv.onclick = () => playLevel(i);
            levelDiv.style.cursor = "pointer";
            levelDiv.style.opacity = "1";
        } else {
            img.src = "img/lock.png";
            levelDiv.onclick = null;
        }
    }
}

function finishLevel(currentLevel) {
    SOUNDS.onclick.play();
    unlockNextLevel(currentLevel);
    document.getElementById("levelOverview").style.display = "block";
    LEVEL1.levelScreen.style.display = "none";
    LEVEL2.levelScreen.style.display = "none";
    LEVEL3.levelScreen.style.display = "none";
    LEVEL4.levelScreen.style.display = "none";
    LEVEL5.levelScreen.style.display = "none";
    fade(SOUNDS.level1);
    fade(SOUNDS.level2);
    fade(SOUNDS.level3);
    fade(SOUNDS.level4);
    fade(SOUNDS.level5);
    SOUNDS.water.pause();
    SOUNDS.theme.duration = Infinity;
    SOUNDS.theme.volume = 0.6;
    SOUNDS.theme.currentTime = 0;
    SOUNDS.theme.play();
    if(currentLevel == 5) {
        document.getElementById("notebookMessage").style.display = "block";
        if(entryAlready) {
            document.getElementById("notebookMessage").innerHTML = `
            <img src="img/line.png" alt="line">
            <div class="nextButton" onclick="leaderBoard()">show diary</div>`
            ;
        }
        else {
            document.getElementById("notebookMessage").innerHTML = `
            <img src="img/line.png" alt="line">
            <p>You managed to solve every level right. To remind those who come after you how brilliant you were you should write an entry in the leaderboard.</p>
            <div class="nextButton" onclick="lastPage(5)">continue</div>`
            ;
        }
    }
}

updateLevelIcons();


function lastPage() {
    SOUNDS.onclick.play();
    document.getElementById("endpage").style.display = "block";
    
}
function nextText() {
    SOUNDS.onclick.play();
    let text = document.getElementById("text");
    text.innerHTML = `
        <p class="delay-1">You can really be proud of yourself and your intelligence.</p>
        <br>
        <p class="delay-2">There is an old diary on the desk. Maybe you should take a closer look at it...</p>
        `;
    let next = document.getElementById("textNext");
    next.style.display = "none";
}

function loadNotebook() {
    SOUNDS.onclick.play();
    document.getElementById("notebook").style.display = "block";
    let text = document.getElementById("textNotebook");
    text.innerHTML = `
        <p class="delay-1">In this book every person that ever competed these mysteries left a little note.</p>
        <br>
        <p class="delay-2">You should leave a little note too...</p>
        <br>
        <p class="delay-3" id="leaveNote" onclick="leaveNote()">leave note</p>
        `;
}

function leaveNote() {
    SOUNDS.onclick.play();
    let text = document.getElementById("textNotebook");
    document.getElementById("textBoxNotebook").style.display = "block";
    text.innerHTML = `
        <p class="delay-1">Please enter your name:</p>
        <input type="text" id="characterName">
        <div class="buttonAsk" onclick="saveName()">continue</div>
    `;
}
let characterName = document.getElementById("characterName");
let entryAlready = false;

function saveName() {
    characterName = document.getElementById("characterName").value;
    saveToLeaderBoard(characterName, DIFFICULTY.mode, DIFFICULTY.number);
    leaderBoard();
}

function saveToLeaderBoard(name, mode, number) {
    if(!entryAlready) {
        let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
        leaderboard.push({ name: name, mode: mode, number: number });
        leaderboard.sort((a, b) => b.number - a.number); 
        if (leaderboard.length > 10) leaderboard = leaderboard.slice(0, 10); 
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard)); 
        entryAlready = true;
    }

}

function displayLeaderBoard() {
    document.getElementById("textBoxNotebook").style.display = "none";
    document.getElementById("leaderBoard").style.display = "block";
    document.getElementById("levelOverview").style.display = "none";
    document.getElementById("endpage").style.display = "block";
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    let list = document.getElementById("leaderBoardList");
    list.innerHTML = ""; 
    leaderboard.forEach((entry, index) => {
        let randomFont = Math.floor(Math.random()*3)+1;
        let li = document.createElement("p");
        if(randomFont == 1) {
            li.style.fontFamily = "diary1";
        }
        else if(randomFont == 2) {
            li.style.fontFamily = "diary2";
        }
        else {
            li.style.fontFamily = "diary3";
            li.style.fontSize = "60px";
        }
        li.textContent = `${index + 1}. ${entry.name} - Mode: ${entry.mode}`;
        list.appendChild(li);
    });
}

function returnFromLead() {
    document.getElementById("notebook").style.display = "none";
    document.getElementById("endpage").style.display = "none";
    document.getElementById("levelOverview").style.display = "block";
    document.getElementById("notebookMessage").innerHTML = `
            <img src="img/line.png" alt="line">
            <div class="nextButton" onclick="leaderBoard()">show diary</div>`
            ;
}

function leaderBoard() {
    displayLeaderBoard();
}