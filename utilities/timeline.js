// ----------------- TIMELINE ---------------------

import {animations} from './animations.js';

let btnNext = document.getElementById('btn-next');
let btnBack = document.getElementById('btn-back');

let timelinePos = 0;
let timelineLength = 0;

let position = 0;

// Create list to hold timeline details (what element is affected and by which animation at every timeline point)
const timeline = {
    element: [],
    animation: [],
    repetition: []
};

export function animateInTimeline(element, animation, repetition, appearfirst) // element to be animated, animation, position in timeline, how many elements after the specified to be animated concurrently, whether element is visisble at start
{
    if (typeof repetition === 'undefined') { repetition = 0; }
    if (typeof appearfirst === 'undefined') { appearfirst = false; }

    document.getElementById(element).style.visibility = appearfirst ? "visible" : "hidden";
    document.getElementById(element).style.opacity = appearfirst ? 1 : 0;

    timeline.element[position] = element;
    timeline.animation[position] = animation;
    timeline.repetition[position] = repetition;

    timelineLength++;
    position++;
}

btnNext.addEventListener("click", () => {
    let repetitions = timeline.repetition[timelinePos];
    timeline.repetition[timelinePos] = 0;
    
    for (let i = 0; i<=repetitions; i++)
    {
        if (timelinePos < timelineLength)
        {
        animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), true);

        timelinePos++;

        timeline.repetition[timelinePos-1] = repetitions;
        } else {
            timelinePos = timelineLength;
        }
    }

    let videos = document.getElementsByClassName("video");

    for (let video of videos)
    {
        let parent = video.parentElement;
        if (parent.style.pointerEvents == "none")
        {
            video.muted = true;
            video.pause();
        }
    }
});

btnBack.addEventListener("click", () => {
    let repetitions = timeline.repetition[timelinePos-1];
    timeline.repetition[timelinePos-1] = 0;

    for (let i = 0; i<=repetitions; i++)
    {
        if (timelinePos > 0)
        {
            timelinePos--;

            animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), false);

            timeline.repetition[timelinePos] = repetitions;
        } else {
            timelinePos = 0;
        }
    }

    let videos = document.getElementsByClassName("video");

    for (let video of videos)
    {
        let parent = video.parentElement;
        if (parent.style.pointerEvents == "auto")
        {
            video.muted = false;
            video.currentTime = 0;
            video.play();
        }
    }
});