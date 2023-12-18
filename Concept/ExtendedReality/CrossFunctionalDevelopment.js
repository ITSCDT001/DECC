import { animateInTimeline } from "/utilities/timeline.js";

//////////////////////////////////////////////////////////////////////////////////////////
// ANIMATION PRESETS

// snapIn, snapOut, fadeIn, fadeOut, fadeInGrow, fadeOutShrink

// ADVANCED ANIMATIONS

// [ X , Y , SCALE , ROTATION , END-OPACITY , START-OPACITY , DURATION (seconds) , EASE-TYPE (linear/ease/ease-in/ease-out) ]

// null = no change

// export function animateInTimeline(element, animation, subtitleText = "", repetition = 0, delay = -1, appearFirst = false) {


/////////////////////////////////////////////////////////////////////////////////////////

let caption = "";

animateInTimeline("slide1-container-id", "fadeIn", caption, 1, 0, true);
animateInTimeline("slide1-2-id", "fadeIn", caption, 1, 0, true);
animateInTimeline("slide2-container-id", "slideIn", caption);
animateInTimeline("slide2-5-id", "slideIn", caption);



document.querySelector("main").style.opacity = 1;
