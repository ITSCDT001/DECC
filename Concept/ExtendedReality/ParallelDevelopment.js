import { animateInTimeline } from "/utilities/timeline.js";

//   [ X , Y , SCALE , ROTATION , END-OPACITY , START-OPACITY , DURATION (seconds) , EASE-TYPE (linear/ease/ease-in/ease-out) ]

let caption;
caption =
  "Extended reality has also realised a step change in time to market by enabling parallel development to occur throughout the cycle";
animateInTimeline("slide1-container-id", "fadeIn", caption, 4, 0);
animateInTimeline("slide1-item1-id", "fadeIn", caption, 0, 1000);
animateInTimeline(
  "slide1-item1-id",
  [0, 0, 1, null, 1, 1, 0.5, "ease"],
  caption,
  0,
  600
);
animateInTimeline("slide1-item2-id", "slideIn", caption, 0);
animateInTimeline("slide1-item3-id", "slideIn", caption, 0);
animateInTimeline("slide1-container-id", "slideOut", caption, 3);
caption =
  "Here, parallel development enabled a task time saving of 93%, and that's before the overall time benefit due to the activity being carried out in parallel is even considered.";
animateInTimeline("slide2-item1-id", "slideIn", caption, 0, 1000);
animateInTimeline("slide2-item2-id", "slideIn", caption, 0, 500);
animateInTimeline("slide2-item3-id", "slideIn", caption);

document.querySelector("main").style.opacity = 1;
