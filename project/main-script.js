let DIFFICULTY = {
    mode: "Easy",
}

function setDifficulty(mode) {
    DIFFICULTY.mode = mode;
    console.log(DIFFICULTY.mode);
    next();
}

//LOADING SCREEN 
let LOAD = {
    timer: 0,
}
function playLevel(level) {
    document.getElementById("loadingScreen").style.display = "block";
    document.getElementById("levelOverview").style.display = "none";
    LOAD.timer = setInterval(startLevel, 2500);
    function startLevel() {
        document.getElementById("loadingScreen").style.display = "none";
        if(level == 1) {
            level1();
            lastPage();
        }
    }
}

function lastPage() {
    document.getElementById("endpage").style.display = "block";
    
}
function nextText() {
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
    document.getElementById("notebook").style.display = "block";
    let text = document.getElementById("textNotebook");
    text.innerHTML = `
        <p class="delay-1">In this book every person that ever competed these mysteries left a little note.</p>
        <br>
        <p class="delay-2">You should leave a little note too...</p>
        `;
}