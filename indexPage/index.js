//READ ME

// ------------- MOVE BUTTONS ------------- //

//Button group within Index
const btnGroup = document.querySelector(".btn-group");

// Function starts at a speed and de-accelerates exponentially until it stops near top of the page
function moveButton() {
  btnGroup.style.animation="list-group-move 0.75s forwards";
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

DEE_List.style.opacity = 0;
DES_List.style.opacity = 0;
EDE_List.style.opacity = 0;

// //Hides the button list
function hideAllButtons() {
  DEE_List.style.visibility = "hidden";
  DES_List.style.visibility = "hidden";
  EDE_List.style.visibility = "hidden";
}

function fadeIn(element) {
  element.style.visibility = "visible";

  element.style.animation="fade-in 1s forwards";

  element.addEventListener('animationend', () => {
    DEE_List.style.opacity = 1;
    DES_List.style.opacity = 1;
    EDE_List.style.opacity = 1;
    console.log("end");
  }) 
}

function fadeOut(element) {
  element.style.animation="fade-out 0.5s forwards";
}


createButtons();
hideAllButtons();

//---------------- END APPEAR BUTTONS -----------------//

//When clicking on the button the animation goes ahead
btnGroup.addEventListener("click", () => {
  moveButton();
  fadeOut(welcomeTitle);
});

DEE_Dic.btn.addEventListener("click", () => {
  hideAllButtons();
  fadeIn(DEE_List)
});

EDE_Dic.btn.addEventListener("click", () => {
  hideAllButtons();
  fadeIn(EDE_List)
});

DES_Dic.btn.addEventListener("click", () => {
  hideAllButtons();
  fadeIn(DES_List)
});


// 