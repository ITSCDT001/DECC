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
    repetition: [],
    delay: [],
};

// Create animation queue to ensure all animations are played in sequence
var animationQueue = [];

animations.fadeIn(document.querySelector("Main"), true);

// Create async delay function
function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

// animateInTimeline Function
//
// element = element to be animated
// animation = animation to be used
// subtitleText = text to appear in the subtitle when element is animated
// repetition = how many elements after the specified to be animated concurrently
// delay = delay in milliseconds between subsequent animations (if repetition > 0)
// appearFirst = whether the element is visible on load
//
// ------------------------------

export function animateInTimeline(element, animation, subtitleText = "", repetition = 0, delay = -1, appearFirst = false) {
    document.getElementById(element).style.visibility = appearFirst ? "visible" : "hidden";
    document.getElementById(element).style.opacity = appearFirst ? 1 : 0;

    timeline.element[position] = element;
    timeline.animation[position] = animation;
    timeline.subtitleText[position] = subtitleText;
    timeline.repetition[position] = repetition;
    timeline.delay[position] = delay;

    timelineLength++;
    position++;

    subtitle.textContent = timeline.subtitleText[0];

    if (subtitle.textContent == "") subtitle.style.visibility = "hidden";
    else subtitle.style.visibility = "visible";
}

// Progress timeline function, async to be used with a delay
async function progressTimeline(repetitions, activator) { // Repeats for number of elements specified in timeline, activator holds the first elements number (for delay value) 
    let delayVal = 0;

    for (let i = 0; i <= repetitions; i++) {
        while (animationQueue.length > 0) {
            let pos = animationQueue.shift();

            if (timeline.delay[pos] != -1) {
                delayVal = timeline.delay[pos];
            }

            animations[timeline.animation[pos]](document.getElementById(timeline.element[pos]), true); // Animate
            subtitle.textContent = timeline.subtitleText[pos];

            if (subtitle.textContent == "") subtitle.style.visibility = "hidden";
            else subtitle.style.visibility = "visible";

            await delay(delayVal); // Delay by set number of milliseconds (delay value set in the first affected element only)
        }
    }
}

btnNext.addEventListener("click", () => { // Next button is clicked
    if (timelinePos == timelineLength) { // If last in position, return to home page
        window.location.assign("/indexPage/index.html");
    }

    let repetitions = timeline.repetition[timelinePos]; // Check how many animations will be run
    timeline.repetition[timelinePos] = 0; // Reset (for reversal logic)

    let activator = timelinePos;

    for (let i = 0; i <= repetitions; i++) {
        if (timelinePos < timelineLength) {
            animationQueue.push(timelinePos);

            timelinePos++;

            timeline.repetition[timelinePos - 1] = repetitions; // Set the repetitions to previous stored value (reversal logic)
        } else {
            timelinePos = timelineLength;
        }
    }

    progressTimeline(repetitions, activator);

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