//READ ME

// ------------- MOVE BUTTONS ------------- //

//Button group within Index
const btnGroup = document.querySelector(".btn-group");
const endPos = window.screen.height/4.8;

let position = parseInt(getComputedStyle(btnGroup).top); // Obtain distance from top of element
const originalLength = position - endPos; // Get orignal length
let length = position - endPos; // Get current length between end position and current position
const originalSpeed = 10; // Decalre an initial speed to compare to when resetting speed
let speed; // Decalre speed vairable

//Function starts at a speed and de-accelerates exponentially until it stops near top of the page
function moveButton2() {
  if (length > 0) {
    position = parseInt(getComputedStyle(btnGroup).top);
    length = position - endPos;
    speed = (length / originalLength) * originalSpeed * 4;
    let newPos = (position -= speed);
    btnGroup.style.top = `${newPos}px`;
    //asynchronous function that carrys out moveButton 60 times a second (1000 / 60 ~ 60fps)
    setTimeout(moveButton2, 16);
  }
}

//----------------- END MOVE BUTTONS ----------------- //

//---------------- APPEAR BUTTONS --------------------//

//Dics of buttons for each button the user could press

const DEE_Dic = {
  List: [
    "Translate the need",
    "The Digital Thread",
    "Using the Contract",
    "Modelling and Digital Twins",
    "Acceptance of Digital Evidence",
  ],
  Links: ["../deePages/dee01.html", "../deePages/dee02.html", "../deePages/dee03.html", "../deePages/dee04.html", "../deePages/dee05.html"],
  btn: document.getElementById("DEE-button"),
};

const EDE_Dic = {
  List: [
    "Digital Engineering Team",
    "Terminology Clarification",
    "Thinking Differently",
    "Storytelling",
    "Failure as Information",
  ],
  Links: ["../edePages/ede01.html", "../edePages/ede02.html", "../edePages/ede03.html", "../edePages/ede04.html", "../edePages/ede05.html"],
  btn: document.getElementById("EDE-button"),
};

const DES_Dic = {
  List: [
    "Machine Learning	",
    "Health & Usage Monitoring Systems",
    "Using the Contract",
    "Predictive Maintenance",
    "Modelling and Digital Twins",
  ],
  Links: ["../desPages/des01.html", "../desPages/des02.html", "../desPages/des03.html", "../desPages/des04.html", "../desPages/des05.html"],
  btn: document.getElementById("DES-button"),
};

//Creates an element that is a button

let button;
//Creates all buttons at the start
function createButtons() {
  //Creates a new button untill the end of the list (SCALABILTIY!)
  for (let i = 0; i < DEE_Dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("a");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-75 DEE");
    button.setAttribute("href", DEE_Dic.Links[i]);
    button.style.width = "100%";
    button.innerText = DEE_Dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("DEE-List").appendChild(button);
  }
  for (let i = 0; i < DES_Dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("a");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-75 DES");
    button.setAttribute("href", DES_Dic.Links[i]);
    button.style.width = "100%";
    button.innerText = DES_Dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("DES-List").appendChild(button);
  }
  for (let i = 0; i < EDE_Dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("a");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-75 EDE");
    button.setAttribute("href", EDE_Dic.Links[i]);
    button.style.width = "100%";
    button.innerText = EDE_Dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("EDE-List").appendChild(button);
  }
}
//Appears the button list

// BUTTON VARIABLES

var DEE_List = document.getElementById("DEE-List");
var DES_List = document.getElementById("DES-List");
var EDE_List = document.getElementById("EDE-List");
var welcomeTitle = document.getElementById("welcome-title");
var listHasRun = false;
var titleHasRun = false;

// //Hides the button list
function hideAllButtons() {
  DEE_List.style.visibility = "hidden";
  DEE_List.style.opacity = 0;
  DES_List.style.visibility = "hidden";
  DES_List.style.opacity = 0;
  EDE_List.style.visibility = "hidden";
  EDE_List.style.opacity = 0;

}

function fadeIn(element) {
  if (!listHasRun) {
    listHasRun = true;
    let opacity = 0;
    element.style.display = "block";
    let timer = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = opacity;
      element.style.filter = "alpha(opacity=" + opacity * 100 + ")";
      opacity += 0.025;
    }, 13);
  }
  else if (listHasRun) {
    element.style.visibility = "visible";
    element.style.opacity = 1;
  }
}

function fadeOut(element) {
  if (!titleHasRun) {
    titleHasRun = true;
    let opacity = 1;
    element.style.display = "block";
    let timer = setInterval(function () {
      if (opacity <= 0) {
        clearInterval(timer);
      }
      element.style.opacity = opacity;
      element.style.filter = "alpha(opacity=" + opacity * 100 + ")";
      opacity -= 0.15;
    }, 25);
  }
}


createButtons();
hideAllButtons();

//---------------- END APPEAR BUTTONS -----------------//

//When clicking on the button the animation goes ahead
btnGroup.addEventListener("click", () => {
  moveButton2();
  fadeOut(welcomeTitle);
});

DEE_Dic.btn.addEventListener("click", () => {
  hideAllButtons();
  document.getElementById("DEE-List").style.visibility = "visible";
  fadeIn(DEE_List)
});

EDE_Dic.btn.addEventListener("click", () => {
  hideAllButtons();
  document.getElementById("EDE-List").style.visibility = "visible";
  fadeIn(EDE_List)
});

DES_Dic.btn.addEventListener("click", () => {
  hideAllButtons();
  document.getElementById("DES-List").style.visibility = "visible";
  fadeIn(DES_List)

});


// 