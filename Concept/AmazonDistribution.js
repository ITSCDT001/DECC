import { animateInTimeline } from "/utilities/timeline.js";

let subtitleText;

// Slide 1
subtitleText = "The human brain primarily operates using predictive models, which it builds based on previous experiences.";
animateInTimeline("slide1-img", "fadeOutShrink", subtitleText, 1, 0, true);

// Slide 2
subtitleText = "*Cricket Example*";
animateInTimeline("slide2-img", "fadeIn", subtitleText);

// Slide 3
subtitleText = "Accordingly, the brain is hard-wired to recognise patterns...";

animateInTimeline("slide2-img", "fadeIn", subtitleText, 2);
animateInTimeline("black-screen", "fadeOut", subtitleText, 0, 0, true);
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
animateInTimeline("slide6-img", "moveLeft70Shrink", subtitleText, 2);
animateInTimeline("black-screen", "fadeIn", subtitleText, 0, 0, true);
animateInTimeline("slide7-lockers", "fadeIn", subtitleText);
subtitleText = "...and a corresponding inventory list...";
animateInTimeline("slide7-list", "fadeIn", subtitleText);
subtitleText = "...the operator is able to locate specific items among millions of others.";
animateInTimeline("slide7-arrow1", "fadeIn", subtitleText, 2, 1000);
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
animateInTimeline("slide8-scan", "partFadeInGrow", subtitleText);

// Slide 9
subtitleText = "For these companies, each location is allocated a unique barcode, but the layout of the stock remains broadly unchanged; highly structured, with identical items located together, normally in a single location.";
animateInTimeline("slide8-monitor", "fadeOut", subtitleText, 4);
animateInTimeline("slide8-phone", "fadeOut", subtitleText);
animateInTimeline("slide8-barcode", "fadeOut", subtitleText);
animateInTimeline("slide8-scan", "fadeOut", subtitleText);
animateInTimeline("slide9-img", "fadeIn", subtitleText);

document.querySelector("main").style.opacity = 1;