import { animateInTimeline } from "/utilities/timeline.js";

animateInTimeline("slide1-vid", "fadeOut", "", 3, 0, true);
animateInTimeline("slide2-pie", "fadeIn");
animateInTimeline("slide2-smalltext", "fadeIn");
animateInTimeline("slide2-text", "fadeIn");
animateInTimeline("slide2-pie", "fadeOut", "", 4);
animateInTimeline("slide2-smalltext", "fadeOut");
animateInTimeline("slide2-text", "fadeOut");
animateInTimeline("slide3-text", "fadeIn");
animateInTimeline("slide3-accordion", "fadeIn");

document.querySelector("main").style.opacity = 1;