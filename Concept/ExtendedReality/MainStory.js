import { animateInTimeline } from "/utilities/timeline.js";

animateInTimeline("slide1-pie", "fadeOut", "", 5, 0, true);
animateInTimeline("slide1-smallTxt", "fadeOut", "", 0, 0, true);
animateInTimeline("slide1-text", "fadeOut", "", 0, 0, true);

animateInTimeline("slide2-pie", "fadeIn", "");
animateInTimeline("slide2-smallTxt", "fadeIn", "");
animateInTimeline("slide2-text", "fadeIn", "");

animateInTimeline("slide2-pie", "fadeOut", "", 3);
animateInTimeline("slide2-smallTxt", "fadeOut", "");
animateInTimeline("slide2-text", "fadeOut", "");

animateInTimeline("slide3", "fadeIn", "");
animateInTimeline("slide3", "fadeOut", "", 1);

animateInTimeline("slide4", "fadeIn");




document.querySelector("main").style.opacity = 1;