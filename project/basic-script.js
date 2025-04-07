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


//Next Site
let NEXT = {
    counter: 0,
    explain: document.getElementById("explain"),
    difficulty: document.getElementById("difficulty"),
}

function next() {
    SOUNDS.onclick.play();
    if(NEXT.counter == 0) {
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
}