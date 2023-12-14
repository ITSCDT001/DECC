import { animateInTimeline } from "/utilities/timeline.js";

let caption;

animateInTimeline(
    "slide10-container-id",
    "fadeOut",
    "Extended reality has also realised a step change in time to market by enabling parallel development to occur throughout the cycle",
    2,
    0,
    true
);

caption =
    "Examples include Mercedes' van maintainability team, who can now carry out an inspection which - using traditionl prototyping would have been in a queue of other tasks and taken four weeks";
animateInTimeline("slide3-container-id", "fadeIn", caption, 1);
animateInTimeline("slide2-1", "fadeIn", caption);
caption =
    "can now be completed independently in just two days - a task time saving of 93%, and that's before the overall time benefit due to the activity being carried out in parallel is even considered.";
animateInTimeline("slide2-1", "fadeOut", caption, 12);
animateInTimeline("slide2-2", "fadeIn", caption, 0, 1000);
animateInTimeline("slide2-3", "fadeIn", caption, 0, 500);
animateInTimeline("slide2-4", "fadeIn", caption, 0, 500);
animateInTimeline("tick1", "fadeIn", caption, 0, 500);
animateInTimeline("slide2-5", "fadeIn", caption, 0, 500);
animateInTimeline("tick2", "fadeIn", caption, 0, 500);
animateInTimeline("slide2-6", "fadeIn", caption, 0, 500);
animateInTimeline("cross1", "fadeIn", caption, 0, 500);
animateInTimeline("slide2-7", "fadeIn", caption, 0, 500);
animateInTimeline("tick3", "fadeIn", caption, 0, 1000);
animateInTimeline("slide2-8", "fadeIn", caption);
animateInTimeline("slide2-9", "fadeIn", caption);

document.querySelector("main").style.opacity = 1;