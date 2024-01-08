import { animateInTimeline } from "/utilities/timeline.js";

//                 .
//                .;;:,.
//                 ;iiii;:,.                                   .,:;.
//                 :i;iiiiii:,                            .,:;;iiii.
//                  ;iiiiiiiii;:.                    .,:;;iiiiii;i:
//                   :iiiiiiiiiii:......,,,,,.....,:;iiiiiiiiiiii;
//                    ,iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii:
//                     .:iii;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;,
//                       .:;;iiiiiiiiiiiiiiiiiiiiiiiiiii;;ii;,
//                        :iiii;;iiiiiiiiiiiiiii;;iiiiiii;:.
//                       ,iiii;1f:;iiiiiiiiiiii;if;:iiiiiii.
//                      .iiiii:iL..iiiiiiiiiiii;:f: iiiiiiii.
//                      ;iiiiii:.,;iiii;iiiiiiii:..:iiiiiiii:
//                     .i;;;iiiiiiiiii;,,;iiiiiiiiiiii;;iiiii.
//                     ::,,,,:iiiiiiiiiiiiiiiiiiiiii:,,,,:;ii:
//                     ;,,,,,:iiiiiiii;;;;;;;iiiiii;,,,,,,;iii.
//                     ;i;;;;iiiiiiii;:;;;;;:iiiiiii;::::;iiii:
//                     ,iiiiiiiiiiiiii;;;;;;:iiiiiiiiiiiiiiiiii.
//                      .iiiiiiiiiiiiii;;;;;iiiiiiiiiiiiiiiiiii:
//                       .;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii;
//                        ;iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii.
//                       .;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;,

// [ X , Y , SCALE , ROTATION , END-OPACITY , START-OPACITY , DURATION (seconds) , EASE-TYPE (linear/ease/ease-in/ease-out) ]

let subtitle;

animateInTimeline("slide1-container-id", "slideOut", "", 1, 0, true);
animateInTimeline("slide2-container-id", "slideIn");
animateInTimeline("slide2-container-id", "slideOut", "", 5);
animateInTimeline("slide3-container-id", "fadeIn", "", 0, 400);
animateInTimeline("slide3-item1-id", "slideIn");
animateInTimeline(
  "slide3-item2-id",
  [-50, 0, 1, null, 1, 0, 0.5, "ease"],
  "",
  0,
  500
);
animateInTimeline("slide3-item3-id", [-50, 0, 1, null, 1, 0, 0.5, "ease"]);
animateInTimeline("slide3-item4-id", [-50, 0, 1, null, 1, 0, 0.5, "ease"]);
animateInTimeline("slide3-container-id", "fadeOut", "", 6);
animateInTimeline("slide4-container-id", "fadeIn");
animateInTimeline("slide4-item1-id", "fadeIn");
animateInTimeline("slide4-second-text-id", "fadeOut");
animateInTimeline("slide4-item5-id", "fadeOut");
animateInTimeline("slide4-item9-id", "fadeOut", "", 0, 1000);
animateInTimeline("slide4-item5-id", [0, 0, 1, null, 1, 0, 0.3, "ease"]);
animateInTimeline("slide4-item5-id", "fadeOut", "", 3);
animateInTimeline("slide4-item1-id", "fadeOut");
animateInTimeline("slide4-second-text-id", "fadeIn", "", 0, 1000);
animateInTimeline("slide4-item9-id", [0, 0, 1, null, 1, 0, 0.3, "ease"]);
animateInTimeline("slide4-container-id", "fadeOut", "", 3);
animateInTimeline("slide5-container-id", "fadeIn", "", 0, 1000);
animateInTimeline(
  "slide5-text2-id",
  [0, 0, 1, null, 1, 0, 0.5, "ease"],
  "",
  0,
  500
);
animateInTimeline("slide5-item1-id", "fadeIn");
animateInTimeline("slide5-container-id", "fadeOut", "", 7);
animateInTimeline(
  "slide6-container-id",
  "fadeIn",
  "So, despit Mercedes having made automobiles for over 100 years, the implicit requirements of a small car eluded them.",
  0,
  100
);
animateInTimeline(
  "slide6-img1-id",
  "fadeIn",
  "So, despit Mercedes having made automobiles for over 100 years, the implicit requirements of a small car eluded them."
);
animateInTimeline(
  "slide6-img2-id",
  "fadeIn",
  "So, despit Mercedes having made automobiles for over 100 years, the implicit requirements of a small car eluded them."
);
animateInTimeline(
  "slide6-img4-id",
  "fadeIn",
  "So, despit Mercedes having made automobiles for over 100 years, the implicit requirements of a small car eluded them."
);
animateInTimeline(
  "slide6-img5-id",
  "fadeIn",
  "So, despit Mercedes having made automobiles for over 100 years, the implicit requirements of a small car eluded them."
);
animateInTimeline(
  "slide6-img6-id",
  "fadeIn",
  "So, despit Mercedes having made automobiles for over 100 years, the implicit requirements of a small car eluded them."
);
animateInTimeline(
  "slide6-img7-id",
  "fadeIn",
  "So, despit Mercedes having made automobiles for over 100 years, the implicit requirements of a small car eluded them."
);

animateInTimeline("slide6-container-id", "slideOut", "", 1);
animateInTimeline(
  "slide7-container-id",
  "slideIn",
  "Because their other vehicles were inherently stable and had intrinsically large boots."
);
animateInTimeline("slide7-container-id", "fadeOut", "", 5);

subtitle =
  "When you consider how much more diverse the range of systems required by the MoD are when compared to Mercedes, the criticality of effectively capturing these requirements becomes clear.";
animateInTimeline("slide8-container-id", "fadeIn", subtitle);
animateInTimeline("slide8-item1-id", "fadeIn", subtitle, 0, 2000);
animateInTimeline("slide8-item2-id", "fadeIn", subtitle);
animateInTimeline("slide8-item3-id", "fadeIn", subtitle);
animateInTimeline("slide8-item4-id", "fadeIn", subtitle);

animateInTimeline("slide8-container-id", "fadeOut", 0, 3);
subtitle =
  "The first generation A-class was eventually launched almost six months later than planned and reportedly cost parent company Daimler-Benz €1,440 for each of the 1.1 million cars produced";
animateInTimeline("slide9-container-id", "fadeIn", subtitle, 0, 1000);
animateInTimeline("slide9-item2-id", "fadeIn", subtitle, 0, 1000);
animateInTimeline("slide9-item3-id", "fadeIn", subtitle);

animateInTimeline("slide9-container-id", "fadeOut", "", 4);
subtitle =
  "Extended reality has enabled companies like Mercedes to establish customer feedback loops from a very early stage in the development cycle, to capture elusive requirements early on, and minimise the risk of significant associated delays";
animateInTimeline("slide10-container-id", "fadeIn", subtitle, 0, 1000);
animateInTimeline("slide10-item2-id", "slideIn", subtitle);
animateInTimeline("slide10-item3-id", "slideIn", subtitle);
animateInTimeline("slide10-item4-id", "slideIn", subtitle);

document.querySelector("main").style.opacity = 1;
