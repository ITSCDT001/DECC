import { animateInTimeline } from "/utilities/timeline.js";

animateInTimeline("slide1-container-id", "fadeOut", 1, true);
animateInTimeline("slide2-container-id", "fadeIn");
animateInTimeline("slide2-container-id", "fadeOut", 1);
animateInTimeline("slide3-container-id", "fadeIn");
animateInTimeline("slide3-container-id", "fadeOut", 5);
animateInTimeline("slide4-container-id", "fadeIn");
animateInTimeline("slide4-item1-id", "fadeIn");
animateInTimeline("slide4-second-text-id", "fadeOut");
animateInTimeline("slide4-item5-id", "fadeOut");
animateInTimeline("slide4-item9-id", "fadeOut");
animateInTimeline("slide4-item5-id", "fadeIn");
animateInTimeline("slide4-item5-id", "fadeOut", 2);
animateInTimeline("slide4-item1-id", "fadeOut");
animateInTimeline("slide4-second-text-id", "fadeIn");
animateInTimeline("slide4-item9-id", "fadeIn");
animateInTimeline("slide4-container-id", "fadeOut", 3);
animateInTimeline("slide5-container-id", "fadeIn");
animateInTimeline("slide5-text2-id", "fadeOut");
animateInTimeline("slide5-item1-id", "fadeOut");
animateInTimeline("slide5-text2-id", "fadeIn", 1);
animateInTimeline("slide5-item1-id", "fadeIn");

document.querySelector("main").style.opacity = 1;
