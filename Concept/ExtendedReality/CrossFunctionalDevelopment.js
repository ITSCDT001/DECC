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

animateInTimeline("slide1-container-id", "slideOut", caption, 2, 0, true);

caption = "Without extended reality, we probably would'nt have identified this until we were well into full-vehicle testing"

animateInTimeline("slide2-container-id", "fadeIn", caption, 0, 1000);
animateInTimeline("slide2-5-id", "slideIn", caption);
animateInTimeline("slide2-container-id", "slideOut", caption, 9);

caption = "At which point you'd have to stop a very expensive test - you're talking at least a few month's delay for something which instead we caught in an early design review before anything physical was made"

animateInTimeline("slide3-container-id", "slideIn", caption, 0, 500);
animateInTimeline("slide3-1-id", "slideIn", caption, 0, 500);
animateInTimeline("slide3-2-id", "fadeIn", caption, 0, 200);
animateInTimeline("slide3-ul-1", "fadeIn", caption, 0, 200);
animateInTimeline("slide3-ul-2", "fadeIn", caption, 0, 200);
animateInTimeline("slide3-ul-3", "fadeIn", caption, 0, 200);
animateInTimeline("slide3-ul-4", "fadeIn", caption, 0, 200);
animateInTimeline("slide3-ul-5", "fadeIn", caption, 0, 200);
animateInTimeline("slide3-ul-6", "fadeIn", caption, 0, 200);



document.querySelector("main").style.opacity = 1;
