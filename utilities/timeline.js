// ----------------- TIMELINE ---------------------

import { animations } from './animations.js';

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

animations.fadeIn(document.querySelector("Main"), true);

export function animateInTimeline(element, animation, repetition = 0, appearfirst = false) // element to be animated, animation, how many elements after the specified to be animated concurrently, whether element is visible at start
{
    document.getElementById(element).style.visibility = appearfirst ? "visible" : "hidden";
    document.getElementById(element).style.opacity = appearfirst ? 1 : 0;

    timeline.element[position] = element;
    timeline.animation[position] = animation;
    timeline.repetition[position] = repetition;

    timelineLength++;
    position++;
}

btnNext.addEventListener("click", () => {
    if (timelinePos == timelineLength) {
        window.location.assign("/indexPage/index.html");
    }

    let repetitions = timeline.repetition[timelinePos];
    timeline.repetition[timelinePos] = 0;

    for (let i = 0; i <= repetitions; i++) {
        if (timelinePos < timelineLength) {
            animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), true);

            timelinePos++;

            timeline.repetition[timelinePos - 1] = repetitions;
        } else {
            timelinePos = timelineLength;
        }
    }

    let videos = document.getElementsByClassName("video");

    for (let video of videos) {
        let parent = video.parentElement;
        if (parent.style.pointerEvents == "none") {
            video.muted = true;
            video.pause();
        }
    }

    // Change Next button to Home button

    if (timelinePos == timelineLength) {

        btnNext.textContent = " Home ";

        var icon = document.createElement('i');

        icon.setAttribute('class', 'bi-house-fill');

        btnNext.appendChild(icon);
    }
});

btnBack.addEventListener("click", () => {
    let repetitions = timeline.repetition[timelinePos - 1];
    timeline.repetition[timelinePos - 1] = 0;

    for (let i = 0; i <= repetitions; i++) {
        if (timelinePos > 0) {
            timelinePos--;

            animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), false);

            timeline.repetition[timelinePos] = repetitions;
        } else {
            timelinePos = 0;
        }
    }

    let videos = document.getElementsByClassName("video");

    for (let video of videos) {
        let parent = video.parentElement;
        if (parent.style.pointerEvents == "auto") {
            video.muted = false;
            video.currentTime = 0;
            video.play();
        }
    }

    // Revert Home button back to Next button

    if (timelinePos < timelineLength) {

        btnNext.textContent = " Next ";

        var icon = document.createElement('i');

        icon.setAttribute('class', 'bi-arrow-right');

        btnNext.appendChild(icon);
    }
});