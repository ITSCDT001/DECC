import { animateInTimeline } from "/utilities/timeline.js";

animateInTimeline("slide1-container", "fadeOut", 3, true);
animateInTimeline("slide2-pie", "fadeIn");
animateInTimeline("slide2-smalltext", "fadeIn");
animateInTimeline("slide2-text", "fadeIn");
animateInTimeline("slide2-pie", "fadeOut", 4);
animateInTimeline("slide2-smalltext", "fadeOut");
animateInTimeline("slide2-text", "fadeOut");
animateInTimeline("slide3-text", "fadeIn");
animateInTimeline("slide3-accordion", "fadeIn");