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