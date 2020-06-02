// Your code goes here

/*
    Task 2: create event listeners
    mouseover = we'll change link colors/font-weight
    keydown = we'll change h1, h2, etc based on what key is pressed
        b = bold, r = red, g = green, u = underline, n = normal
    wheel = we could cycle through background colors using the mouse wheel
    drag / drop
    load = this is a window onload. Not sure yet what I want this to do
    focus = window click event that gives the element 'focus'
    resize
    scroll
    select
    dblclick
*/

let navBar = document.querySelector('nav');
let navLinks = navBar.querySelectorAll('a');
let navLinksArray = Array.from(navLinks);

function changeColor(reformat) {
    reformat.target.style.color = "orange";
    reformat.target.style.fontWeight = "bold";
}

function cycleColors(event) {
    if(document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "red"; //placeholder so I can loop in white
    }
    if(document.body.style.backgroundColor === "pink") {
        document.body.style.backgroundColor = "lightblue";
    }
    if(document.body.style.backgroundColor === "yellow") {
        document.body.style.backgroundColor = "pink";
    }
    if(document.body.style.backgroundColor === "white") {
        document.body.style.backgroundColor = "yellow";
    }
    if(document.body.style.backgroundColor === "red") {
        document.body.style.backgroundColor = "white";
    }
    if((document.body.style.backgroundColor !== "white") && (document.body.style.backgroundColor !== "yellow") && (document.body.style.backgroundColor !== "pink") && (document.body.style.backgroundColor !== "lightblue")) {
        document.body.style.backgroundColor = "yellow";
    }
}

function keyCheck(keyed) {
    let hOne = document.querySelector('h1');
    let hTwo = document.querySelectorAll('h2');
    let h2Array = Array.from(hTwo);

    if(keyed.key === 'b') {
        hOne.style.fontWeight = "bold";
        for(let i = 0; i < h2Array.length; i++) {
            h2Array[i].style.fontWeight = "bold";
        }
    }
    if(keyed.key === 'r') {
        hOne.style.color = "red";
        for(let i = 0; i < h2Array.length; i++) {
            h2Array[i].style.color = "red";
        }
    }
    if(keyed.key === 'g') {
        hOne.style.color = "green";
        for(let i = 0; i < h2Array.length; i++) {
            h2Array[i].style.color = "green";
        }
    }
    if(keyed.key === 'n') {
        hOne.style.color = "black";
        hOne.style.fontWeight = "normal";
        for(let i = 0; i < h2Array.length; i++) {
            h2Array[i].style.color = "black";
            h2Array[i].style.fontWeight = "normal";
        }
    }
}

for(let i = 0; i < navLinksArray.length; i++) {
    navLinksArray[i].addEventListener('mouseover', changeColor);
}

document.addEventListener('keydown', keyCheck);
document.addEventListener('wheel', cycleColors);
