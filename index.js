var LeftArrow = window.document.getElementById("left-arrow")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var RightArrow = window.document.getElementById("right-arrow")

function ScrollRight() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    RightArrow.style="display:none"
    LeftArrow.style="display:flex"
}

function ScrollLeft() {
    Leonardo.style="display:flex"
    Bruna.style="display:none"
    RightArrow.style="display:flex"
    LeftArrow.style="display:none"
}