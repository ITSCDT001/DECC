import { animateInTimeline } from "/utilities/timeline.js";

animateInTimeline("slide1-img", "fadeOut", 1, true);
animateInTimeline("slide2-img", "fadeIn",);
animateInTimeline("slide2-img", "fadeOut", 1);
animateInTimeline("black-screen", "fadeOut", 0, true);

document.querySelector("main").style.opacity = 1;