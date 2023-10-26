//READ ME
//Change background and any other set up needed
import { setup } from "../setup.js";

//sets up background
setup();

// ------------- MOVE BUTTONS ------------- //

//Button group within Index
const btnGroup = document.querySelector(".btn-group");
const endPos = 250;

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
  Links: ["", "", "", "", ""],
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
  Links: ["", "", "", "", ""],
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
  Links: ["", "", "", "", ""],
  btn: document.getElementById("DES-button"),
};

//Creates an element that is a button

let button;
//Creates all buttons at the start
function createButtons() {
  //Creates a new button untill the end of the list (SCALABILTIY!)
  for (let i = 0; i < DEE_Dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-75");
    button.setAttribute("href", DEE_Dic.Links[i]);
    button.style.width = "100%";
    button.innerText = DEE_Dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("scroll").appendChild(button);
  }
}
//Appears the button list
function appearButtons() {
  document.getElementById("scroll").style.visibility = "visible";
}
//Hides the button list
function hideButtons() {
  document.getElementById("scroll").style.visibility = "hidden";
}

createButtons();
hideButtons();

//---------------- END APPEAR BUTTONS -----------------//

//When clicking on the button the animation goes ahead
btnGroup.addEventListener("click", () => {
  moveButton2();
  appearButtons();
});

DEE_Dic.btn.addEventListener("click", () => {
  appearButton();
});

EDE_Dic.btn.addEventListener("click", () => {
  appearButtons();
});

DES_Dic.btn.addEventListener("click", () => {
  appearButtons();
});


// figure out how to make each set of buttons appear according to the button pressed so only buttons for the button pressed appear
// make animation for button list appearing
// 