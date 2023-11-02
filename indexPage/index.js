//READ ME

import { fadeIn, fadeOut } from "/utilities/animations.js";

const welcomeText = document.getElementById("welcome-text");

//---------------- APPEAR BUTTONS --------------------//

//Dics of buttons for each button the user could press

const concept_dic = {
  List: [
    "1",
    "2",
    "3",
  ],
  Links: [
    "",
    "",
    ""
  ],
  btn: document.getElementById("concept-button"),
};

const assessment_dic = {
  List: [
    "4",
    "5",
    "6",
  ],
  Links: [
    "",
    "",
    ""
  ],
  btn: document.getElementById("assessment-button"),
};

const demonstration_dic = {
  List: [
    "7",
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
    "10",
    "11",
    "12",
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
    "13",
    "14",
    "15",
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
    "16",
    "17",
    "18",
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
  //Creates a new button untill the end of the list (SCALABILTIY!)
  for (let i = 0; i < concept_dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("a");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-100 concept");
    button.setAttribute("href", concept_dic.Links[i]);
    button.style.width = "100%";
    button.style.lineHeight = "8vh";
    button.innerText = concept_dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("concept-button-list").appendChild(button);
  }
  for (let i = 0; i < assessment_dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("a");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-100 assessment");
    button.setAttribute("href", assessment_dic.Links[i]);
    button.style.width = "100%";
    button.style.lineHeight = "8vh";
    button.innerText = assessment_dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("assessment-button-list").appendChild(button);
  }
  for (let i = 0; i < demonstration_dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("a");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-100 demonstration");
    button.setAttribute("href", demonstration_dic.Links[i]);
    button.style.width = "100%";
    button.style.lineHeight = "8vh";
    button.innerText = demonstration_dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("demonstration-button-list").appendChild(button);
  }
  for (let i = 0; i < manufacture_dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("a");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-100 manufacture");
    button.setAttribute("href", manufacture_dic.Links[i]);
    button.style.width = "100%";
    button.style.lineHeight = "8vh";
    button.innerText = manufacture_dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("manufacture-button-list").appendChild(button);
  }
  for (let i = 0; i < in_use_dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("a");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-100 in-use");
    button.setAttribute("href", in_use_dic.Links[i]);
    button.style.width = "100%";
    button.style.lineHeight = "8vh";
    button.innerText = in_use_dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("in-use-button-list").appendChild(button);
  }
  for (let i = 0; i < disposal_dic.List.length; i++) {
    //HTML to create a new button
    button = document.createElement("a");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-list btn-dark opacity-100 disposal");
    button.setAttribute("href", disposal_dic.Links[i]);
    button.style.width = "100%";
    button.style.lineHeight = "8vh";
    button.innerText = disposal_dic.List[i];
    button.style.margin = "2px 0px";
    // button.style.border = "1px solid white";
    document.getElementById("disposal-button-list").appendChild(button);
  }
}

// End

// BUTTON VARIABLES

var concept_list = document.getElementById("concept-button-list");
var assessment_list = document.getElementById("assessment-button-list");
var demonstration_list = document.getElementById("demonstration-button-list");
var manufacture_list = document.getElementById("manufacture-button-list");
var in_use_list = document.getElementById("in-use-button-list");
var disposal_list = document.getElementById("disposal-button-list");

concept_list.style.opacity = 0;
assessment_list.style.opacity = 0;
demonstration_list.style.opacity = 0;
manufacture_list.style.opacity = 0;
in_use_list.style.opacity = 0;
disposal_list.style.opacity = 0;

function hideAllButtons() {
  concept_list.style.visibility = "hidden";
  assessment_list.style.visibility = "hidden";
  demonstration_list.style.visibility = "hidden";
  manufacture_list.style.visibility = "hidden";
  in_use_list.style.visibility = "hidden";
  disposal_list.style.visibility = "hidden";
}

createButtons();
hideAllButtons();

//---------------- END APPEAR BUTTONS -----------------//

concept_dic.btn.addEventListener("click", () => {
  hideAllButtons();
  fadeIn(concept_list);

  concept_list.addEventListener('animationend', () => {
    assessment_list.style.opacity = 1;
    demonstration_list.style.opacity = 1;
    manufacture_list.style.opacity = 1;
    in_use_list.style.opacity = 1;
    disposal_list.style.opacity = 1;
  }) 
  
});

assessment_dic.btn.addEventListener("click", () => {
  hideAllButtons();
  fadeIn(assessment_list);

  assessment_list.addEventListener('animationend', () => {
    concept_list.style.opacity = 1;
    demonstration_list.style.opacity = 1;
    manufacture_list.style.opacity = 1;
    in_use_list.style.opacity = 1;
    disposal_list.style.opacity = 1;
  }) 
  
});

demonstration_dic.btn.addEventListener("click", () => {
  hideAllButtons();
  fadeIn(demonstration_list);

  demonstration_list.addEventListener('animationend', () => {
    concept_list.style.opacity = 1;
    assessment_list.style.opacity = 1;
    manufacture_list.style.opacity = 1;
    in_use_list.style.opacity = 1;
    disposal_list.style.opacity = 1;
  }) 

});

manufacture_dic.btn.addEventListener("click", () => {
  hideAllButtons();
  fadeIn(manufacture_list);

  manufacture_list.addEventListener('animationend', () => {
    concept_list.style.opacity = 1;
    assessment_list.style.opacity = 1;
    demonstration_list.style.opacity = 1;
    in_use_list.style.opacity = 1;
    disposal_list.style.opacity = 1;
  }) 

});

in_use_dic.btn.addEventListener("click", () => {
  hideAllButtons();
  fadeIn(in_use_list);

  in_use_list.addEventListener('animationend', () => {
    concept_list.style.opacity = 1;
    assessment_list.style.opacity = 1;
    demonstration_list.style.opactiy = 1;
    manufacture_list.style.opacity = 1;
    disposal_list.style.opacity = 1;
  }) 

});

disposal_dic.btn.addEventListener("click", () => {
  hideAllButtons();
  fadeIn(disposal_list);

  disposal_list.addEventListener('animationend', () => {
    concept_list.style.opacity = 1;
    assessment_list.style.opacity = 1;
    manufacture_list.style.opacity = 1;
    in_use_list.style.opacity = 1;
    demonstration_list.style.opacity = 1;
  }) 

});












// Define a function to handle the button click event
function handleButtonClick(event) {
  console.log('VMOEMOVEMOINGI');
  moveButton();
  fadeOut(welcomeText);
  // Remove the event listeners from all buttons
  concept_dic.btn.removeEventListener('click', handleButtonClick);
  assessment_dic.btn.removeEventListener('click', handleButtonClick);
  demonstration_dic.btn.removeEventListener('click', handleButtonClick);
  manufacture_dic.btn.removeEventListener('click', handleButtonClick);
  in_use_dic.btn.removeEventListener('click', handleButtonClick);
  disposal_dic.btn.removeEventListener('click', handleButtonClick);

}

// Add event listeners to the buttons
concept_dic.btn.addEventListener('click', handleButtonClick);
assessment_dic.btn.addEventListener('click', handleButtonClick);
demonstration_dic.btn.addEventListener('click', handleButtonClick);
manufacture_dic.btn.addEventListener('click', handleButtonClick);
in_use_dic.btn.addEventListener('click', handleButtonClick);
disposal_dic.btn.addEventListener('click', handleButtonClick);

const theButtons = document.getElementById("id-buttons");

// Function starts at a speed and de-accelerates exponentially until it stops near top of the page
function moveButton() {
  theButtons.style.animation="list-group-move 0.75s forwards";
}