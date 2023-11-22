import { animateInTimeline } from "/utilities/timeline.js";

animateInTimeline("slide1-img", "fadeOut", 0, true);

animateInTimeline("black-screen", "fadeOut", 0, true);

document.querySelector("main").style.opacity = 1;