import { animateInTimeline } from "/utilities/timeline.js";

animateInTimeline("slide1-container-id", "fadeOut", "", 1, true);
animateInTimeline("slide2-container-id", "fadeIn", "");
animateInTimeline("slide2-container-id", "fadeOut", "", 1);
animateInTimeline("slide3-container-id", "fadeIn", "");
animateInTimeline("slide3-container-id", "fadeOut", "", 1);
animateInTimeline("slide4-container-id", "fadeIn", "");

document.querySelector("main").style.opacity = 1;
