//SCREEN 1 ---------------------------------//

//Dropdown
let DROPDOWN = {
    content: document.getElementsByClassName("dropdown"),
    clickedOnce: false, 
}

function dropdown() {
    if(!DROPDOWN.clickedOnce) {
        SOUNDS.onclick.play();
        DROPDOWN.content[0].style.display = "flex";
        DROPDOWN.clickedOnce = true;
    }
    else {
        SOUNDS.onclick.play();
        DROPDOWN.content[0].style.display = "none";
        DROPDOWN.clickedOnce = false;
    }
    
}
function dropDownLevel1() {
    if(!DROPDOWN.clickedOnce) {
        SOUNDS.onclick.play();
        DROPDOWN.content[1].style.display = "flex";
        DROPDOWN.clickedOnce = true;
    }
    else {
        SOUNDS.onclick.play();
        DROPDOWN.content[1].style.display = "none";
        DROPDOWN.clickedOnce = false;
    }
}

function dropDownLevel2() {
    if(!DROPDOWN.clickedOnce) {
        SOUNDS.onclick.play();
        DROPDOWN.content[2].style.display = "flex";
        DROPDOWN.clickedOnce = true;
    }
    else {
        SOUNDS.onclick.play();
        DROPDOWN.content[2].style.display = "none";
        DROPDOWN.clickedOnce = false;
    }
}

function dropDownLevel3() {
    if(!DROPDOWN.clickedOnce) {
        SOUNDS.onclick.play();
        DROPDOWN.content[3].style.display = "flex";
        DROPDOWN.clickedOnce = true;
    }
    else {
        SOUNDS.onclick.play();
        DROPDOWN.content[3].style.display = "none";
        DROPDOWN.clickedOnce = false;
    }
}


function dropDownLevel4() {
    if(!DROPDOWN.clickedOnce) {
        SOUNDS.onclick.play();
        DROPDOWN.content[4].style.display = "flex";
        DROPDOWN.clickedOnce = true;
    }
    else {
        SOUNDS.onclick.play();
        DROPDOWN.content[4].style.display = "none";
        DROPDOWN.clickedOnce = false;
    }
}

function dropDownLevel5() {
    if(!DROPDOWN.clickedOnce) {
        SOUNDS.onclick.play();
        DROPDOWN.content[5].style.display = "flex";
        DROPDOWN.clickedOnce = true;
    }
    else {
        SOUNDS.onclick.play();
        DROPDOWN.content[5].style.display = "none";
        DROPDOWN.clickedOnce = false;
    }
}
//Next Site
let NEXT = {
    counter: 0,
    explain: document.getElementById("explain"),
    difficulty: document.getElementById("difficulty"),
}

function next() {
    SOUNDS.onclick.play();
    if(NEXT.counter == 0) {
        SOUNDS.theme.play();
        SOUNDS.level1.volume = 0.3;
        SOUNDS.theme.duration = Infinity;
        NEXT.explain.style.display = "block";
        NEXT.counter++;
    }
    else if(NEXT.counter == 1) {
        NEXT.difficulty.style.display = "flex";
        NEXT.explain.style.display = "none";
        NEXT.counter++;
        document.getElementById("slogan").innerHTML = "Choose your difficulty";
        document.getElementById("playButton").style.display = "none";
    }
    else if(NEXT.counter == 2) {
        document.getElementById("screen1").style.display = "none";
        document.getElementById("level1Screen").style.display = "none";
        document.getElementById("levelOverview").style.display = "block";
    }
    
}

let SOUNDS = {
    level1: new Audio("sounds/level1Music.mp3"),
    onclick: new Audio("sounds/onclick.mp3"),
    newspaper: new Audio("sounds/newspaper.mp3"),
    theme: new Audio("sounds/theme.mp3"),
    grab: new Audio("sounds/grab1.mp3"),
    plant: new Audio("sounds/plant.mp3"),
    level2: new Audio("sounds/level2Music.mp3"),
    level3: new Audio("sounds/level3Music.mp3"),
    weight: new Audio("sounds/weight.mp3"),
    trash: new Audio("sounds/trash.mp3"),
    lightswitch: new Audio("sounds/lightswitch.mp3"),
    puzzle: new Audio("sounds/puzzle.mp3"),
    brush: new Audio("sounds/brush.mp3"),
    level4: new Audio("sounds/level4Music.mp3"),
    cable: new Audio("sounds/cable.mp3"),
    code: new Audio("sounds/code1.mp3"),
    correct: new Audio("sounds/correct.mp3"),
    wrong: new Audio("sounds/wrong.mp3"),
    level5: new Audio("sounds/level5Music.mp3"),
    camera: new Audio("sounds/camera.mp3"),
    gears: new Audio("sounds/gears.mp3"),
    cutOpen: new Audio("sounds/cutOpen.mp3"),
    water: new Audio("sounds/water.mp3"),
    keys: new Audio("sounds/keys.mp3"),
    glass: new Audio("sounds/glassBreak.mp3"),
    axe: new Audio("sounds/axe.mp3"),
    timer: new Audio("sounds/timer.mp3"),

}

function fade(music) {
    let fadeInterval = 100;
    let fadeStep = 0.05;

    let fadeAudio = setInterval(() => {
        if (music.volume > fadeStep) {
            music.volume -= fadeStep;
        } else {
            music.volume = 0;
            music.pause();
            clearInterval(fadeAudio);
        }
    }, fadeInterval);
}


function closeIntroduction(level) {
    SOUNDS.onclick.play();
    LEVEL.levelIntro[0].style.display = "none";
    if(level == 1) {
        LEVEL1.readIntro = true;
        level1();

    }
    else if(level == 2) {
        LEVEL2.readIntro = true;
        level2();
    }
    else if(level == 3) {
        LEVEL3.readIntro = true;
        level3();
    }
    else if(level == 4) {
        LEVEL4.readIntro = true;
        level4();
    }
    else {
        LEVEL5.readIntro = true;
        level5();
    }
}