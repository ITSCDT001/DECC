import { animateInTimeline } from "/utilities/timeline.js";

//////////////////////////////////////////////////////////////////////////////////////////
// ANIMATION PRESETS

// fadeIn, fadeOut, fadeInGrow, fadeOutShrink

// ADVANCED ANIMATIONS

//   [ X , Y , SCALE , ROTATION , END-OPACITY , START-OPACITY , DURATION (seconds) , EASE-TYPE (linear/ease/ease-in/ease-out) ]

/////////////////////////////////////////////////////////////////////////////////////////

animateInTimeline("slide1", "slideOut", "", 1, 0, true);
animateInTimeline("slide2", "slideIn", "");

animateInTimeline("slide2", "fadeOut", "", 1);
animateInTimeline("slide3", "fadeIn", "");

animateInTimeline("slide3", "fadeOut", "", 2);
animateInTimeline("slide4-text", "fadeIn", "");
animateInTimeline("slide4-morph", "fadeIn", "");

animateInTimeline("slide4-text", "fadeOut", "", 4);
animateInTimeline("slide4-morph", [20, -100, 0.6, null, 0, 1, 0.5, "ease"], "");
animateInTimeline("slide5-Top-btn", "fadeIn", "");
animateInTimeline("slide5-Top-img", [0, 0, null, null, 1, 0, 0.5, "ease"], "");
animateInTimeline("slide5-Bottom", "fadeIn", "");

animateInTimeline("slide5-Bottom", "fadeOut", "", 1);
animateInTimeline("slide6", "fadeIn", "*Found out more by clicking one of the buttons");

animateInTimeline("slide6", "fadeOut", "", 3);
animateInTimeline("slide5-Top-img", "fadeOut", "");
animateInTimeline("slide5-Top-btn", "fadeOut", "");
animateInTimeline("slide7", "fadeIn", "Time to market strategies require a unified understanding. Therefore, there's an increase in demand of prototypes in the early stage of its life cycle.");

// animateInTimeline("slide7", "Out", "", 1);
animateInTimeline("slide8", "snapIn", "With full scale exterior, modeling can take up to 3 - 4 months to make. 49% of manafacturures have a time-to-market of less than 18 months.", 1, 10);
animateInTimeline("slide7", "snapOut", "With full scale exterior, modeling can take up to 3 - 4 months to make. 49% of manafacturures have a time-to-market of less than 18 months.");

animateInTimeline("slide8", "fadeOut", "", 3);
animateInTimeline("slide9", "fadeIn", "");
animateInTimeline("slide9-img", [0, 0, null, null, 1, 0, 0.5, "ease-out"], "");
animateInTimeline("slide9-line", [0, 0, null, null, 1, 0, 0.6, "ease"], "The use of multiple clay models would drive the time-to-market in the wrong direction");

animateInTimeline("slide9", "fadeOut", "", 1);
animateInTimeline("slide10", "fadeIn", "");

document.querySelector("main").style.opacity = 1;