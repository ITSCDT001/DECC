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
animateInTimeline("slide3-item2-id", [-50, 0, 1, null, 1, 0, 0.5, 'ease'], "", 0, 750);
animateInTimeline("slide3-item3-id", [-50, 0, 1, null, 1, 0, 0.5, 'ease']);
animateInTimeline("slide3-item4-id", [-50, 0, 1, null, 1, 0, 0.5, 'ease']);
animateInTimeline("slide3-container-id", "fadeOut", "", 6);
animateInTimeline("slide4-container-id", "fadeIn");
animateInTimeline("slide4-item1-id", "fadeIn");
animateInTimeline("slide4-second-text-id", "fadeOut");
animateInTimeline("slide4-item5-id", "fadeOut");
animateInTimeline("slide4-item9-id", "fadeOut", "", 0, 1000);
animateInTimeline("slide4-item5-id", "fadeIn",);
animateInTimeline("slide4-item5-id", "fadeOut", "", 3);
animateInTimeline("slide4-item1-id", "fadeOut");
animateInTimeline("slide4-second-text-id", "fadeIn", "", 0, 1000);
animateInTimeline("slide4-item9-id", "fadeIn");
animateInTimeline("slide4-container-id", "fadeOut", "", 5);
animateInTimeline("slide5-container-id", "fadeIn");
animateInTimeline("slide5-text2-id", "fadeOut");
animateInTimeline("slide5-item1-id", "fadeOut", "", 0, 1000);
// animateInTimeline(delay : 1000 , id : "slide56-container" );
animateInTimeline("slide5-text2-id", "fadeIn", "", 0, 0);
animateInTimeline("slide5-item1-id", "fadeIn");
animateInTimeline("slide5-container-id", "fadeOut", "", 1);
animateInTimeline("slide6-container-id", "fadeIn", "So, despit Mercedes having made automobiles for over 100 years, the implicit requirements of a small car eluded them.");
animateInTimeline("slide6-container-id", "fadeOut", "", 1);
animateInTimeline("slide7-container-id", "fadeIn", "Their other vehicles were inherently stable and had intrinsically large boots.");
animateInTimeline("slide7-container-id", "fadeOut", "", 4);

subtitle = "When you consider how much more diverse the range of systems required by the MoD are when compared to Mercedes, the criticality of effectively capturing these requirements becomes clear."
animateInTimeline("slide8-container-id", "fadeIn", subtitle, 0, 2000);
animateInTimeline("slide8-item4-id", "fadeOut", subtitle, 0, 2000, true);
animateInTimeline("slide8-item3-id", "fadeOut", subtitle, 0, 2000, true);
animateInTimeline("slide8-item2-id", "fadeOut", subtitle, 0, 2000, true);
animateInTimeline("slide8-item1-id", "fadeOut", subtitle, 3, 0, true);

subtitle = "The first generation A-class was eventually launched almost six months later than planned and reportedly cost parent company Daimler-Benz €1,440 for each of the 1.1 million cars produced"
animateInTimeline("slide9-container-id", "fadeIn", subtitle, 0, 1000);
animateInTimeline("slide9-item2-id", "fadeIn", subtitle, 0, 1000);
animateInTimeline("slide9-item3-id", "fadeIn", subtitle);

animateInTimeline("slide9-container-id", "fadeOut", "", 4);
animateInTimeline("slide10-container-id", "fadeIn", "", 0, 1000);
animateInTimeline("slide10-item2-id", "fadeIn", "", 0, 1000);
animateInTimeline("slide10-item3-id", "fadeIn", "", 0, 1000);
animateInTimeline("slide10-item4-id", "fadeIn");



document.querySelector("main").style.opacity = 1;