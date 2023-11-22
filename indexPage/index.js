//READ ME

import { animations } from '/utilities/animations.js';

const welcomeText = document.getElementById("welcome-text");

let background = "/media/mainBackgroundV4.mp4";
let video = document.getElementById("bgvid");
let source = document.createElement("source");
source.setAttribute("src", background);
source.setAttribute("type", "video/mp4");
video.appendChild(source);

//---------------- APPEAR BUTTONS --------------------//

//Dics of buttons for each button the user could press

const concept_dic = {
  List: [
    "Understand & Articulate",
    "Concepualise Solutions",
    "The Golden Thread",
    "Estimate Resources",
    "Amazon Distribution",
    "idk but i need another one",
    "idk but i need another one",
  ],
  Links: [
    "/template/template.html",
    "/Concept/ConceptualiseSolutions.html",
    "/Concept/TheGoldenThread.html",
    "/Concept/EstimateResources.html",
    "/Concept/AmazonDistribution.html",
  ],
  Description: [
    "Capability gap or opportunity as a user need",
    "To define key risks, opportunities, & constraints",
    "The establishment of the Golden Thread",
    "Needed to deliver & support solutions",
    "Recognising biological bias to maximise the benefits of data",
  ],
  btn: document.getElementById("concept-button"),
};

const assessment_dic = {
  List: [
    "4",
    "5",
    "6",
    "7",
  ],
  Links: [
    "",
    "",
    ""
  ],
  Description: [
    "",
    "",
    "",
    "",
  ],
  btn: document.getElementById("assessment-button"),
};

const demonstration_dic = {
  List: [
    "8",
    "9",
  ],
  Links: [
    "",
    "",
    ""
  ],
  btn: document.getElementById("demonstration-button"),
};

const manufacture_dic = {
  List: [
    "12",
    "13",
    "14",
  ],
  Links: [
    "",
    "",
    ""
  ],
  btn: document.getElementById("manufacture-button"),
};

const in_use_dic = {
  List: [
    "16",
    "17",
    "18",
    "19",
  ],
  Links: [
    "",
    "",
    ""
  ],
  btn: document.getElementById("in-use-button"),
};

const disposal_dic = {
  List: [
    "20",
    "21",
    "22",
    "23",
  ],
  Links: [
    "",
    "",
    ""
  ],
  btn: document.getElementById("disposal-button"),
};

//                                                   //
//             Creating All The Buttons              //
//                                                   //

let button;
//Creates all buttons at the start
function createButtons() {
  //Creates a new button until the end of the list (SCALABILTIY!)

  for (let i in cadmid.dic) {
    for (let j = 0; j < cadmid.dic[i].List.length; j++) {
      //HTML to create a new button
      button = document.createElement("a");
      button.setAttribute("type", "button");
      button.setAttribute("class", "btn btn-list btn-dark btn-outline-light");
      button.setAttribute("href", cadmid.dic[i].Links[j]);
      button.style.width = "100%";
      // button.style.height = "50%";
      button.style.height = "9vh";
      button.style.lineHeight = "7vh";
      button.innerText = cadmid.dic[i].List[j];
      button.style.margin = "2px 0px";

      let idString = cadmid.dic[i].btn.id;
      document.getElementById(`${idString}-list`).appendChild(button);
    }
  }
}

// BUTTON VARIABLES

var concept_list = document.getElementById("concept-button-list");
var assessment_list = document.getElementById("assessment-button-list");
var demonstration_list = document.getElementById("demonstration-button-list");
var manufacture_list = document.getElementById("manufacture-button-list");
var in_use_list = document.getElementById("in-use-button-list");
var disposal_list = document.getElementById("disposal-button-list");

let cadmid = {
  list: [concept_list, assessment_list, demonstration_list, manufacture_list, in_use_list, disposal_list],
  dic: [concept_dic, assessment_dic, demonstration_dic, manufacture_dic, in_use_dic, disposal_dic]
}

for (let i in cadmid.list) {
  cadmid.list[i].style.opacity = 0;
}

function hideAllButtons() {
  for (let i in cadmid.list) {
    cadmid.list[i].style.visibility = "hidden";
  }
}

createButtons();
hideAllButtons();

//---------------- END APPEAR BUTTONS -----------------//

for (let i in cadmid.dic) {
  cadmid.dic[i].btn.addEventListener("click", () => {
    hideAllButtons();
    animations.fadeIn(cadmid.list[i], true);

    if (cadmid.list[i].style.opacity == 1) {
      for (var j in cadmid.list) {
        cadmid.list[j].style.opacity = 1;
      }
    }
  })
}

// Define a function to handle the button click event
function handleButtonClick() {
  moveButton();
  animations.fadeOut(welcomeText, true);
  // Remove the event listeners from all buttons
  for (let i in cadmid.dic) {
    cadmid.dic[i].btn.removeEventListener('click', handleButtonClick);
  }
}

// Add event listeners to the buttons

for (let i in cadmid.dic) {
  cadmid.dic[i].btn.addEventListener('click', handleButtonClick);
}

const theButtons = document.getElementById("id-buttons");
const theBlack = document.getElementById("black");

// Function starts at a speed and de-accelerates exponentially until it stops near top of the page
function moveButton() {
  theButtons.style.animation = "list-group-move 0.75s forwards";
  theBlack.style.animation = "black-move 1s forwards";
  video.style.animation = "black-move 1s forwards";
}


let desc_element = document.getElementById("description");
let default_text = desc_element.textContent;

// Get the descriptions of the buttons
function getButtonDescription(dictionary, text) {
  for (var i = 0; i < dictionary.List.length; i++) {
    if (dictionary.List[i] == text) {
      desc_element.textContent = dictionary.Description[i];
    }
  }
}

document.addEventListener('mousemove', (e) => {
  var x = e.clientX;
  var y = e.clientY;

  desc_element.textContent = default_text;

  var text = document.elementFromPoint(x, y).textContent; // Get element under mouse position

  for (let i in cadmid.dic) {
    cadmid.dic[i].btn.addEventListener('click', handleButtonClick);
    getButtonDescription(cadmid.dic[i], text);
  }
});

theBlack.addEventListener('animationend', () => {
  background = "/media/ButtonBg.mp4";
  source.setAttribute("src", background);
  video.load();

  animations.fadeOut(theBlack, true);
})