//SCREEN 1 ---------------------------------//

//Dropdown
let DROPDOWN = {
    content: document.getElementById("dropdown"),
    clickedOnce: false,
}

function dropdown() {
    if(!DROPDOWN.clickedOnce) {
        DROPDOWN.content.style.display = "flex";
        DROPDOWN.clickedOnce = true;
    }
    else {
        DROPDOWN.content.style.display = "none";
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
        document.getElementById("levelOverview").style.display = "block";
    }
    
}