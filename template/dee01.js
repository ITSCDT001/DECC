// ----------------- DEE01 ---------------------

import { animateInTimeline } from "/utilities/timeline.js";

animateInTimeline("card-2", "fadeOut", 0, 0, true);
animateInTimeline("card-1", "fadeOut", 1, 0, true);
animateInTimeline("card-1", "fadeIn", 2, 1, true);
animateInTimeline("card-2", "fadeIn", 3, 0, true);