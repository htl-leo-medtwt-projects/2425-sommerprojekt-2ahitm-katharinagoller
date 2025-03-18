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
    let text = document.getElementById("text");
    document.getElementById("endpage").style.display = "block";
    text.innerHTML = `
    <p class="delay-1">Congratulations! You've solved every puzzle, uncovered every mystery, and proven </p>
    <p class="delay-2">your sharp thinking. What once seemed unclear now makes perfect sense. But</p>
    <p class="delay-3">remember—every ending is also a new beginning. Keep exploring, and never </p>
    <p class="delay-4">stop searching for the next mystery to solve.</p>`;
    
}

function loadNotebook() {
    document.getElementById("notebook").style.display = "block"
}