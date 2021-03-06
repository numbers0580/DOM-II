// Your code goes here

/*
    Task 2: create event listeners
    mouseover = we'll change link colors/font-weight
    keydown = we'll change h1, h2, etc based on what key is pressed
        b = bold, r = red, g = green, n = normal
    wheel = we could cycle through background colors using the mouse wheel
    drag / drop = have the two middle images swap
    load = this is a window onload. Not sure yet what I want this to do
    focus = change the 'Pick Your Destination' section somehow?
    resize = changed header colors
    scroll
    select
    dblclick
*/

let navBar = document.querySelector('nav');
let navLinks = navBar.querySelectorAll('a');
let navLinksArray = Array.from(navLinks);

let dragSection1 = document.getElementsByClassName('content-section')[0];
let dragSection2 = document.getElementsByClassName('content-section')[1];
let dragOn;

let focusableSection = document.getElementsByClassName('content-destination')[0];
let headArea = document.getElementsByTagName('header')[0];
let bottomImage = document.getElementById('lastImage');
let targetArea = document.getElementById('iGiveUp');
targetArea.style.width = "500px";

let currentSize = 1;
let mainImage = document.getElementById('topImage');

let stopSection = document.getElementById('stopTestSection');
let stopDiv = document.getElementById('stopTestDiv');
let stopImg = document.getElementById('stopTestImg');

//mouseover function
function changeColor(reformat) {
    reformat.target.style.color = "orange";
    reformat.target.style.fontWeight = "bold";
}

//wheel function
function cycleColors(e) {
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
        //This only runs the first time, since technically no backgroundColor had been assigned despite the background looking white
        document.body.style.backgroundColor = "yellow";
    }
}

//keydown function
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

//focus function
function focusBottom(unusedParam) {
    focusableSection.style.backgroundColor = "lightgreen";
}
function blurBottom(insertParam) {
    focusableSection.style.backgroundColor = "";
}

//resize function
function gotTooSmall(sizeParam) {
    let currentWidth = window.innerWidth;

    if(currentWidth < 800) {
        headArea.style.backgroundColor = "black";
        headArea.style.color = "white";

        for(let i = 0; i < navLinksArray.length; i++) {
            navLinksArray[i].style.color = "white";
        }
    }
}

//scroll function
function colorbyScroll(grayscaler) {
    //This is not the way I wanted to perform this function, but it's late. It'll have to do for now
    bottomImage.style.filter = "grayscale(100%)";
}

//select function
function revealSelect(copier) {
    let outputP = document.getElementById('showSelected');
    let selectedString = copier.target.value.substring(copier.target.selectionStart, copier.target.selectionEnd);

    outputP.style.color = "red";
    outputP.style.fontWeight = "bold";
    outputP.textContent = `You selected: ${selectedString}`;
}

//dblclick function
function growBounds(event) {
    if(currentSize === 1) {
        currentSize = 2;
    }
    if(currentSize === 1.5) {
        currentSize = 1;
    }
    if(currentSize === 2) {
        currentSize = 1.5;
    }
    mainImage.style.transform = `scale(${currentSize}, ${currentSize})`;
}

//stopPropagation function
function stopTest(event) {
    alert("Let's go on an adventure!");
    event.stopPropagation();
}
function stopTest2(event) {
    alert("'img-content' div was clicked");
}
function stopTest3(event) {
    alert("'content-section' section was clicked");
}

//preventDefault function
function prevention(event) {
    event.preventDefault();
}

//Event Listeners

//mouseover
for(let i = 0; i < navLinksArray.length; i++) {
    navLinksArray[i].addEventListener('mouseover', changeColor);
}

//keydown
document.addEventListener('keydown', keyCheck);

//wheel
document.addEventListener('wheel', cycleColors);

//This is the start of the drag and drop section of code
dragSection1.setAttribute('draggable', true);
dragSection2.setAttribute('draggable', true);

document.addEventListener('drag', function(event) {}, false);
document.addEventListener('dragstart', function(event) {
    dragOn = event.target;
}, false);

document.addEventListener('dragover', function(event) {
    event.preventDefault();
}, false);

document.addEventListener('drop', function(event) {
    event.preventDefault();
    let dropOn = event.target;
    let tempSpace = document.createElement('span');
    tempSpace.className = 'hideSpan';
    dropOn.before(tempSpace);
    dragOn.before(dropOn);
    tempSpace.replaceWith(dragOn);
}, false);
//This is the end of the drag and drop section of code

//focus Section
focusableSection.setAttribute('tabindex', 0); //Found this on stackoverflow. Helped to focus on non-form elements, like <section>
focusableSection.addEventListener('focus', focusBottom);
focusableSection.addEventListener('blur', blurBottom);

//resize
window.addEventListener('resize', gotTooSmall);

//scroll
window.addEventListener('scroll', colorbyScroll, false);

//select
targetArea.addEventListener('select', revealSelect);

//dblclick
mainImage.addEventListener('dblclick', growBounds);

//stop dblclick
stopImg.addEventListener('click', stopTest);
stopDiv.addEventListener('click', stopTest2);
stopSection.addEventListener('click', stopTest3);

//preventDefault on links
for(let x = 0; x < navLinksArray.length; x++) {
    navLinksArray[x].addEventListener('click', prevention);
}