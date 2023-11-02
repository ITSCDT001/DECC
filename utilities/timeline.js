// ----------------- TIMELINE ---------------------

import {animations} from './animations.js';

let btnNext = document.getElementById('btn-next');
let btnBack = document.getElementById('btn-back');

let timelinePos = 0;

// Create list to hold timeline details (what element is affected and by which animation at every timeline point)
const timeline = {
    element: [],
    animation: []
};

// 
export function animateInTimeline(element, animation, position)
{
    document.getElementById(element).style.opacity = 0;

    timeline.element[position] = element;
    timeline.animation[position] = animation;
}

btnNext.addEventListener("click", () => {
    console.log(timelinePos);
    animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), true);
    console.log("opacity is " + document.getElementById(timeline.element[timelinePos]).style.opacity);
    console.log("we are running " + document.getElementById(timeline.element[timelinePos]).style.animation);

    timelinePos++;
    
});

btnBack.addEventListener("click", () => {
    timelinePos > 0 ? timelinePos-- : timelinePos = 0;
    console.log(timelinePos);
    animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), false);
    console.log("opacity is " + document.getElementById(timeline.element[timelinePos]).style.opacity);
    console.log("we are running " + document.getElementById(timeline.element[timelinePos]).style.animation);
});