// Declarations
let result = document.getElementById('result');
let plus = document.getElementById('plus');
let input = document.getElementById('input');
let minus = document.getElementById('minus');

// ---------- Buttons
// change colors on mouseover
document.getElementById('plus').onmouseover = function() {
    plus.style.backgroundColor = 'white';
    plus.style.color = 'rgb(190, 190, 190)';
    plus.style.border = '1px solid rgb(190, 190, 190)';
}

// reset colors on mouseleave
document.getElementById('plus').onmouseleave = function() {
    plus.style.backgroundColor = 'rgb(190, 190, 190)';
    plus.style.color = 'white';
    plus.style.border = 'none';
}

// change colors on mouseover
document.getElementById('minus').onmouseover = function() {
    minus.style.backgroundColor = 'white';
    minus.style.color = 'rgb(190, 190, 190)';
    minus.style.border = '1px solid rgb(190, 190, 190)';
}

// reset colors on mouseleave
document.getElementById('minus').onmouseleave = function() {
    minus.style.backgroundColor = 'rgb(190, 190, 190)';
    minus.style.color = 'white';
    minus.style.border = 'none';
}

// adding
document.getElementById('plus').onmousedown = function() {
    result.innerText -= -input.value;

    // I did this double negative because I could not figure out
    // parseInt to turn the string into integers
    
    // result.innerText = parseInt(input) + parseInt(result);
    // result.textContent = parseInt(input.value) + parseInt(result.value);
    positiveColor();
}

// subtracting
document.getElementById('minus').onmousedown = function() {
    result.innerText -= input.value;
    //     if (result > 0) {
    //     // result.innerText -= input.value;
    //     result.style.color = 'black'; // I don't know what is missing
    // } else if (result < 0) {
    //     // result.innerText -= input.value;
    //     result.style.color = 'red';
    // }
    negativeColor();
}

function negativeColor () {
    if (result.innerText < 0) {
        result.style.color = 'red';
    // } else {
    //     result.style.color = 'black'
    }
}

function positiveColor () {
    if (result.innerText >= 0) {
        result.style.color = 'black';
    }
}