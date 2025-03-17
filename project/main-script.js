let DIFFICULTY = {
    mode: "Easy",
}

function setDifficulty(mode) {
    DIFFICULTY.mode = mode;
    console.log(DIFFICULTY.mode);
    next();
}