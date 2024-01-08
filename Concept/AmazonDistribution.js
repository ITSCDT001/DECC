import { animateInTimeline } from "/utilities/timeline.js";

let subtitleText;

//////////////////////////////////////////////////////////////////////////////////////////
// ANIMATION PRESETS

// fadeIn, fadeOut, fadeInGrow, fadeOutShrink

// ADVANCED ANIMATIONS

//   [ X , Y , SCALE , ROTATION , END-OPACITY , START-OPACITY , DURATION (seconds) , EASE-TYPE (linear/ease/ease-in/ease-out) ]

/////////////////////////////////////////////////////////////////////////////////////////

// Slide 1
subtitleText = "The human brain primarily operates using predictive models, which it builds based on previous experiences.";
animateInTimeline("slide1-img", "fadeOutShrink", subtitleText, 1, 0, true);

animateInTimeline({ id: "slide1-img", rep: 3, delay: 1000 });

// Slide 2
subtitleText = "*Cricket Example*";
animateInTimeline("slide2-img", "fadeIn", subtitleText);

// Slide 3
subtitleText = "Accordingly, the brain is hard-wired to recognise patterns, favour symmetry, and prefer items to be laid out in a structured and organised way.";

animateInTimeline("slide2-img", "fadeIn", subtitleText, 4);
animateInTimeline("black-screen", "fadeOut", subtitleText);
animateInTimeline("slide3-eggs", "fadeIn", subtitleText, 0, 1000);
animateInTimeline("slide3-items", "fadeIn", subtitleText);
animateInTimeline("slide3-pipes", "fadeIn", subtitleText);
subtitleText = "Exploitation of this particularity can be observed throughout the world of sales and marketing.";
animateInTimeline("slide3-cupboard", "fadeIn", subtitleText);

// Slide 4
subtitleText = "In fact, studies have consistently shown that cortisol (the stress hormone) is higher in people who spend time in cluttered and untidy environments.";
//                                   Move item left by 100%
animateInTimeline("slide3-cupboard", [-100, null, null, null, 1, 1, 1, "ease"], subtitleText, 4);
animateInTimeline("slide3-eggs", "fadeOut", subtitleText);
animateInTimeline("slide3-items", "fadeOut", subtitleText);
animateInTimeline("slide3-pipes", "fadeOut", subtitleText, 0, 2000);
animateInTimeline("slide4-mess", "fadeIn", subtitleText);

// Slide 5
subtitleText = "The human pursuit of order is such that there are whole social media communities dedicated to high quality images of organised items.";
animateInTimeline("slide3-cupboard", "fadeOut", subtitleText, 3);
animateInTimeline("slide4-mess", "fadeOut", subtitleText);
animateInTimeline("slide5-photos", "fadeIn", subtitleText);
animateInTimeline("slide5-logo", "fadeInGrow", subtitleText);

// Slide 6
subtitleText = "Conventional warehouses are a prime example of high levels of order going hand-in-hand with high efficiency.";
animateInTimeline("slide5-photos", "fadeOut", subtitleText, 2);
animateInTimeline("slide5-logo", "fadeOut", subtitleText);
animateInTimeline("slide6-img", "fadeIn", subtitleText);

// Slide 7
subtitleText = "Using structured layouts and a corresponding inventory list, the operator is able to locate specific items among millions of others."
//                              Move item left by 70% and shrink to scale 0.6
animateInTimeline("slide6-img", [-60, null, 0.5, null, 1, 1, 1, "ease"], subtitleText, 6);
animateInTimeline("black-screen", "fadeIn", subtitleText, 0, 0, true);
animateInTimeline("slide7-lockers", "fadeIn", subtitleText, 0, 1500);

animateInTimeline("slide7-list", "fadeIn", subtitleText, 0, 1500);

animateInTimeline("slide7-arrow1", "fadeIn", subtitleText, 0, 1000);
animateInTimeline("slide7-arrow2", "fadeIn", subtitleText);
animateInTimeline("slide7-arrow3", "fadeIn", subtitleText);

// Slide 8
subtitleText = "For many distribution companies, the digital journey has been evolutionary; first, by digitising their analogue inventory lists...";
animateInTimeline("slide6-img", "fadeOut", subtitleText, 7);
animateInTimeline("slide7-lockers", "fadeOut", subtitleText);
animateInTimeline("slide7-list", "fadeOut", subtitleText);
animateInTimeline("slide7-arrow1", "fadeOut", subtitleText);
animateInTimeline("slide7-arrow2", "fadeOut", subtitleText);
animateInTimeline("slide7-arrow3", "fadeOut", subtitleText);
animateInTimeline("slide8-monitor", "fadeIn", subtitleText);
animateInTimeline("slide8-phone", "fadeIn", subtitleText);
subtitleText = "...and then by making the information available to the operator at the point of use, with handheld devices and barcoded information.";
animateInTimeline("slide8-barcode", "fadeIn", subtitleText, 1);
//                               Grows item to scale 1 and opacity is 50%
animateInTimeline("slide8-scan", [null, null, 1, null, 0.5, 0, 0.75, "linear"], subtitleText);

// Slide 9
subtitleText = "For these companies, each location is allocated a unique barcode, but the layout of the stock remains broadly unchanged...";
animateInTimeline("slide8-monitor", "fadeOut", subtitleText, 4);
animateInTimeline("slide8-phone", "fadeOut", subtitleText);
animateInTimeline("slide8-barcode", "fadeOut", subtitleText);
//                               Fade out to opacity 0 from 0.5
animateInTimeline("slide8-scan", [null, null, null, null, 0, 0.5, 0.5, "linear"], subtitleText);
animateInTimeline("slide9-img", "fadeIn", subtitleText);
// Objects fall in
subtitleText = "...highly structured, with identical items located together, normally in a single location. Amazon, however, distribute their stock in a disordered way throughout the warehouse, with packs of identical items separated from one another."
animateInTimeline("slide9-bear1", [null, 0, null, null, 1, 1, 0.5, "ease-in"], subtitleText, 53, 100);
animateInTimeline("slide9-bear2", [null, 30, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-bear3", [null, 60, null, null, 1, 1, 0.5, "ease-in"], subtitleText);

animateInTimeline("slide9-bucket1", [null, 0, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-bucket2", [null, 20, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-bucket3", [null, 40, null, null, 1, 1, 0.5, "ease-in"], subtitleText);

animateInTimeline("slide9-horse1", [null, 0, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-horse2", [null, 40, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-horse3", [null, 80, null, null, 1, 1, 0.5, "ease-in"], subtitleText);

animateInTimeline("slide9-ball1", [null, -30, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-ball2", [null, 0, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-ball3", [null, 30, null, null, 1, 1, 0.5, "ease-in"], subtitleText);

animateInTimeline("slide9-train1", [null, -50, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-train2", [null, 0, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-train3", [null, 50, null, null, 1, 1, 0.5, "ease-in"], subtitleText);

animateInTimeline("slide9-sax1", [null, 0, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-sax2", [null, 0, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-sax3", [null, 0, null, null, 1, 1, 0.5, "ease-in"], subtitleText);

animateInTimeline("slide9-duck1", [null, -40, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-duck2", [null, -10, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-duck3", [null, 30, null, null, 1, 1, 0.5, "ease-in"], subtitleText);

animateInTimeline("slide9-rattle1", [null, 0, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-rattle2", [null, -40, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-rattle3", [null, 20, null, null, 1, 1, 0.5, "ease-in"], subtitleText);

animateInTimeline("slide9-bike1", [null, -50, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-bike2", [null, -10, null, null, 1, 1, 0.5, "ease-in"], subtitleText);
animateInTimeline("slide9-bike3", [null, 30, null, null, 1, 1, 0.5, "ease-in"], subtitleText, 0, 4000);
// Objects Shuffle
animateInTimeline("slide9-bear1", [null, 0, null, null, 1, 1, 2, "ease"], subtitleText, 0, 0);
animateInTimeline("slide9-bear2", [480, 170, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-bear3", [250, 410, null, null, 1, 1, 2, "ease"], subtitleText);

animateInTimeline("slide9-bucket1", [330, 10, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-bucket2", [-240, 350, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-bucket3", [-10, 150, null, null, 1, 1, 2, "ease"], subtitleText);

animateInTimeline("slide9-horse1", [null, 0, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-horse2", [-500, 230, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-horse3", [-270, 340, null, null, 1, 1, 2, "ease"], subtitleText);

animateInTimeline("slide9-ball1", [70, -170, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-ball2", [500, -130, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-ball3", [220, 140, null, null, 1, 1, 2, "ease"], subtitleText);

animateInTimeline("slide9-train1", [-230, -170, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-train2", [-30, -30, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-train3", [190, 180, null, null, 1, 1, 2, "ease"], subtitleText);

animateInTimeline("slide9-sax1", [-520, 0, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-sax2", [-300, 125, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-sax3", [0, 125, null, null, 1, 1, 2, "ease"], subtitleText);

animateInTimeline("slide9-duck1", [330, -320, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-duck2", [-30, 0, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-duck3", [520, -220, null, null, 1, 1, 2, "ease"], subtitleText);

animateInTimeline("slide9-rattle1", [-180, -40, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-rattle2", [-30, -340, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-rattle3", [230, -160, null, null, 1, 1, 2, "ease"], subtitleText);

animateInTimeline("slide9-bike1", [-200, -400, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-bike2", [-490, -150, null, null, 1, 1, 2, "ease"], subtitleText);
animateInTimeline("slide9-bike3", [-50, 30, null, null, 1, 1, 2, "ease"], subtitleText);

//Slide 10
animateInTimeline("slide9-items", "fadeOut", subtitleText, 5, 0, true);
animateInTimeline("slide9-img", "fadeOut", subtitleText);
animateInTimeline("slide10-warehouse-organised", "snapIn", subtitleText);
animateInTimeline("slide10-warehouse-disorganised", "snapIn", subtitleText, 0, 500);
animateInTimeline("slide10-warehouse-disorganised", [50, -3, 0.9, null, 1, 1, 1, "ease"], subtitleText, 0, 0);
animateInTimeline("slide10-warehouse-organised", [-50, -3, 0.9, null, 1, 1, 1, "ease"], subtitleText);

document.querySelector("main").style.opacity = 1;