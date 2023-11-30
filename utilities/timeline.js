// ----------------- TIMELINE ---------------------

import { animations } from './animations.js';

const theBlack = document.getElementById("fade-in");
animations.fadeOut(theBlack, true);

const theTitle = document.getElementById("title");
animations.fadeIn(theTitle, true);

const subtitle = document.getElementById("subtitle");

let btnNext = document.getElementById('btn-next');
let btnBack = document.getElementById('btn-back');

let timelinePos = 0;
let timelineLength = 0;

let position = 0;

// Create list to hold timeline details (what element is affected and by which animation at every timeline point)
const timeline = {
    element: [],
    animation: [],
    subtitleText: [],
    repetition: []
};

animations.fadeIn(document.querySelector("Main"), true);

export function animateInTimeline(element, animation, subtitleText = "", repetition = 0, appearFirst = false) // element to be animated, animation, how many elements after the specified to be animated concurrently, whether element is visible at start
{
    document.getElementById(element).style.visibility = appearFirst ? "visible" : "hidden";
    document.getElementById(element).style.opacity = appearFirst ? 1 : 0;

    timeline.element[position] = element;
    timeline.animation[position] = animation;
    timeline.subtitleText[position] = subtitleText;
    timeline.repetition[position] = repetition;

    timelineLength++;
    position++;

    subtitle.textContent = timeline.subtitleText[0];

    if (subtitle.textContent == "") subtitle.style.visibility = "hidden";
    else subtitle.style.visibility = "visible";
}

btnNext.addEventListener("click", () => { // Next button is clicked
    if (timelinePos == timelineLength) { // If last in position, return to home page
        window.location.assign("/indexPage/index.html");
    }

    let repetitions = timeline.repetition[timelinePos]; // Check how many animations will be run
    timeline.repetition[timelinePos] = 0; // Reset (for reversal logic)

    for (let i = 0; i <= repetitions; i++) {
        if (timelinePos < timelineLength) {
            animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), true); // Animate
            subtitle.textContent = timeline.subtitleText[timelinePos];

            if (subtitle.textContent == "") subtitle.style.visibility = "hidden";
            else subtitle.style.visibility = "visible";

            timelinePos++;

            timeline.repetition[timelinePos - 1] = repetitions; // Set the repetitions to previous stored value (reversal logic)
        } else {
            timelinePos = timelineLength;
        }
    }

    let videos = document.getElementsByClassName("video");

    for (let video of videos) { // Pause and mute all videos on previous page
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

btnBack.addEventListener("click", () => { // Back button is clicked
    let repetitions = timeline.repetition[timelinePos - 1];
    timeline.repetition[timelinePos - 1] = 0;

    for (let i = 0; i <= repetitions; i++) {
        if (timelinePos > 0) {
            timelinePos--;

            animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), false);
            subtitle.textContent = timeline.subtitleText[Math.max(0, timelinePos - 1)];

            if (subtitle.textContent == "") subtitle.style.visibility = "hidden";
            else subtitle.style.visibility = "visible";

            timeline.repetition[timelinePos] = repetitions;
        } else {
            timelinePos = 0;
        }
    }

    let videos = document.getElementsByClassName("video");

    for (let video of videos) { // Reset and play previous videos
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