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
    animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), true);

    timelinePos++;
});

btnBack.addEventListener("click", () => {
    timelinePos > 0 ? timelinePos-- : timelinePos = 0;

    animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), false);
});