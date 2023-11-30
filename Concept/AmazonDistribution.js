import { animateInTimeline } from "/utilities/timeline.js";

let subtitleText;

// Slide 1
subtitleText = "The human brain primarily operates using predictive models, which it builds based on previous experiences.";
animateInTimeline("slide1-img", "fadeOutShrink", subtitleText, 1, true);

// Slide 2
subtitleText = "*Cricket Example*";
animateInTimeline("slide2-img", "fadeIn", subtitleText);

// Slide 3
subtitleText = "Accordingly, the brain is hard-wired to recognise patterns...";
animateInTimeline("slide2-img", "fadeOut", subtitleText, 2);
animateInTimeline("black-screen", "fadeOut", subtitleText, 0, true);
animateInTimeline("slide3-eggs", "fadeIn", subtitleText);
subtitleText = "...favour symmetry...";
animateInTimeline("slide3-items", "fadeIn", subtitleText);
subtitleText = "...and prefer items to be laid out in a structured and organised way.";
animateInTimeline("slide3-pipes", "fadeIn", subtitleText);
subtitleText = "Exploitation of this particularity can be observed throughout the world of sales and marketing.";
animateInTimeline("slide3-cupboard", "fadeIn", subtitleText);

// Slide 4
subtitleText = "In fact, studies have consistently shown that...";
animateInTimeline("slide3-cupboard", "moveLeft100", subtitleText, 3);
animateInTimeline("slide3-eggs", "fadeOut", subtitleText);
animateInTimeline("slide3-items", "fadeOut", subtitleText);
animateInTimeline("slide3-pipes", "fadeOut", subtitleText);
subtitleText = "...cortisol (the stress hormone) is higher in people who spend time in cluttered and untidy environments.";
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
subtitleText = "Using structured layouts..."
animateInTimeline("slide6-img", "moveLeft75Shrink", subtitleText, 2);
animateInTimeline("black-screen", "fadeIn", subtitleText, 0, true);
animateInTimeline("slide7-lockers", "fadeIn", subtitleText);
subtitleText = "...and a corresponding inventory list, the operator is able to locate specific items among millions of others.";
animateInTimeline("slide7-list", "fadeIn", subtitleText);

document.querySelector("main").style.opacity = 1;