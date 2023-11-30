import { animateInTimeline } from "/utilities/timeline.js";

let subtitleText;

subtitleText = "";
animateInTimeline("slide1-vid", "fadeOut", subtitleText, 3, true);
animateInTimeline("slide2-pie", "fadeIn", subtitleText);
animateInTimeline("slide2-smalltext", "fadeIn", subtitleText);
animateInTimeline("slide2-text", "fadeIn", subtitleText);
animateInTimeline("slide2-pie", "fadeOut", subtitleText, 4);
animateInTimeline("slide2-smalltext", "fadeOut", subtitleText);
animateInTimeline("slide2-text", "fadeOut", subtitleText);
animateInTimeline("slide3-text", "fadeIn", subtitleText);
animateInTimeline("slide3-accordion", "fadeIn", subtitleText);

document.querySelector("main").style.opacity = 1;