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

animateInTimeline("slide4", "fadeOut", "", 2);
animateInTimeline("slide5-Top", "fadeIn", "");
animateInTimeline("slide5-Bottom", "fadeIn", "");

animateInTimeline("slide5-Bottom", "fadeOut", "", 1);
animateInTimeline("slide6", "fadeIn", "*Found out more by clicking one of the buttons");

animateInTimeline("slide6", "fadeOut", "", 2);
animateInTimeline("slide5-Top", "fadeOut", "");
animateInTimeline("slide7", "fadeIn", "Time to market strategies require a unified understanding. Therefore, there's an increase in demand of prototypes in the early stage of its life cycle.");

// animateInTimeline("slide7", "Out", "", 1);
animateInTimeline("slide8", "snapIn", "With full scale exterior, modeling can take up to 3 - 4 months to make. 49% of manafacturures have a time-to-market of less than 18 months.", 1, 10);
animateInTimeline("slide7", "snapOut", "With full scale exterior, modeling can take up to 3 - 4 months to make. 49% of manafacturures have a time-to-market of less than 18 months.");

animateInTimeline("slide8", "fadeOut", "", 1);
animateInTimeline("slide9", "fadeIn", "The use of multiple clay models would drive the time-to-market in the wrong direction");

animateInTimeline("slide9", "fadeOut", "", 1);
animateInTimeline("slide10", "fadeIn", "");

document.querySelector("main").style.opacity = 1;