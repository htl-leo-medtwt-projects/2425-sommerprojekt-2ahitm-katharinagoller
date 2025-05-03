let DIFFICULTY = {
    mode: "Easy",
}

function setDifficulty(mode) {
    DIFFICULTY.mode = mode;
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
            restartLevel4();
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
    fade(SOUNDS.level1);
    fade(SOUNDS.level2);
    fade(SOUNDS.level3);
    SOUNDS.theme.duration = Infinity;
    SOUNDS.theme.volume = 0.6;
    SOUNDS.theme.currentTime = 0;
    SOUNDS.theme.play();
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
    let note = "";
}
