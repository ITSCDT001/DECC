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

animateInTimeline("slide1-container-id", "fadeOut", "", 1, true);
animateInTimeline("slide2-container-id", "fadeIn");
animateInTimeline("slide2-container-id", "fadeOut", "", 1);
animateInTimeline("slide3-container-id", "fadeIn");
animateInTimeline("slide3-container-id", "fadeOut", "", 5);
animateInTimeline("slide4-container-id", "fadeIn");
animateInTimeline("slide4-item1-id", "fadeIn");
animateInTimeline("slide4-second-text-id", "fadeOut");
animateInTimeline("slide4-item5-id", "fadeOut");
animateInTimeline("slide4-item9-id", "fadeOut");
animateInTimeline("slide4-item5-id", "fadeIn");
animateInTimeline("slide4-item5-id", "fadeOut", "", 2);
animateInTimeline("slide4-item1-id", "fadeOut");
animateInTimeline("slide4-second-text-id", "fadeIn");
animateInTimeline("slide4-item9-id", "fadeIn");
animateInTimeline("slide4-container-id", "fadeOut", "", 3);
animateInTimeline("slide5-container-id", "fadeIn");
animateInTimeline("slide5-text2-id", "fadeOut");
animateInTimeline("slide5-item1-id", "fadeOut");
animateInTimeline("slide5-text2-id", "fadeIn", "", 1);
animateInTimeline("slide5-item1-id", "fadeIn");
animateInTimeline("slide5-container-id", "fadeOut", "", 1);
animateInTimeline("slide6-container-id", "fadeIn", "So, despit Mercedes having made automobiles for over 100 years, the implicit requirements of a small car eluded them.");
animateInTimeline("slide6-container-id", "fadeOut", "", 1);
animateInTimeline("slide7-container-id", "fadeIn", "Their other vehicles were inherently stable and had intrinsically large boots.");
animateInTimeline("slide7-container-id", "fadeOut", "", 1);

let slide8_subtitle = "When you consider how much more diverse the range of systems required by the MoD are when compared to Mercedes, the criticality of effectively capturing these requirements becomes clear."
animateInTimeline("slide8-container-id", "fadeIn", slide8_subtitle);
animateInTimeline("slide8-item4-id", "fadeOut", slide8_subtitle, 0, true);
animateInTimeline("slide8-item3-id", "fadeOut", slide8_subtitle, 0, true);
animateInTimeline("slide8-item2-id", "fadeOut", slide8_subtitle, 0, true);
animateInTimeline("slide8-item1-id", "fadeOut", slide8_subtitle, 1, true);

let slide9_subtitle = "The first generation A-class was eventually launched almost six months later than planned and reportedly cost parent company Daimler-Benz €1,440 for each of the 1.1 million cars produced"
animateInTimeline("slide9-container-id", "fadeIn", slide9_subtitle);

animateInTimeline("slide9-container-id", "fadeOut", "", 1);
animateInTimeline("slide10-container-id", "fadeIn");

document.querySelector("main").style.opacity = 1;