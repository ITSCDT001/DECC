// ----------------- TIMELINE ---------------------

import { animations } from './animations.js';

const theBlack = document.getElementById("fade-in");
animations.fadeOut(theBlack, true); // Fade out a covering black screen at the start of the case study

const theTitle = document.getElementById("title");
animations.fadeIn(theTitle, true); // Fade in the title element

const subtitle = document.getElementById("subtitle"); // The subtitle element in html

let btnNext = document.getElementById('btn-next');
let btnBack = document.getElementById('btn-back');

let timelinePos = 0;
let timelineLength = 0;

let position = 0;

// Create a collection of arrays to hold timeline details (each entry explained in animateInTimeline)
const timeline = {
    element: [],
    animation: [],
    subtitleText: [],
    repetition: [],
    delay: [],
};

// Create animation queue to ensure all animations are played in sequence
var animationQueue = [];

animations.fadeIn(document.querySelector("Main"), true); // fade in the main content

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

    // If appearFirst is set to true, the element is visible on load; otherwise, it is hidden
    document.getElementById(element).style.visibility = appearFirst ? "visible" : "hidden";
    document.getElementById(element).style.opacity = appearFirst ? 1 : 0;

    // Add all arguments to the timeline collection
    timeline.element[position] = element;
    timeline.animation[position] = animation;
    timeline.subtitleText[position] = subtitleText;
    timeline.repetition[position] = repetition;
    timeline.delay[position] = delay;

    // Increments the timeline length and position
    timelineLength++;
    position++;

    subtitle.textContent = timeline.subtitleText[0]; // Sets the subtitle element to the first subtitle text in the timeline (default value before next or back buttons are clicked)

    // Hides the subtitle text element if it is empty
    if (subtitle.textContent == "") subtitle.style.visibility = "hidden";
    else subtitle.style.visibility = "visible";
}

// Progress timeline function, async to be used with a delay
async function progressTimeline(repetitions) {
    let delayVal = 0;

    // Repeats for number of elements specified in timeline
    for (let i = 0; i <= repetitions; i++) {
        // While there are elements in the animation queue
        while (animationQueue.length > 0) {
            let pos = animationQueue.shift(); // Get the next element in the queue

            if (timeline.delay[pos] != -1) { // If the delay value is set in the timeline, update delayVal (-1 means not set)
                delayVal = timeline.delay[pos];
            }

            if (typeof timeline.animation[pos] === "string") { // If using a preset animation
                animations[timeline.animation[pos]](document.getElementById(timeline.element[pos]), true); // animationName(element, forward)
            } else { // Else, using advanced animation
                animations.animate(document.getElementById(timeline.element[pos]), true, timeline.animation[pos]); // animate(element, forward, animationValues)
            }

            subtitle.textContent = timeline.subtitleText[pos]; // Update subtitle text

            // Hides the subtitle text element if it is empty
            if (subtitle.textContent == "") subtitle.style.visibility = "hidden";
            else subtitle.style.visibility = "visible";

            await delay(delayVal); // Delay until next animation (milliseconds)
        }
    }
}

btnNext.addEventListener("click", () => { // Next button is clicked
    if (animationQueue.length == 0) // Ensures any queued animation is complete before progressing in the timeline
    {
        if (timelinePos == timelineLength) { // If last in position, return to home page
            window.location.assign("/indexPage/index.html");
        }

        let repetitions = timeline.repetition[timelinePos]; // Check how many animations will be run
        timeline.repetition[timelinePos] = 0; // Reset (for reversal logic)

        for (let i = 0; i <= repetitions; i++) {
            if (timelinePos < timelineLength) {
                animationQueue.push(timelinePos); // Adds the current position to the animation queue

                timelinePos++;

                timeline.repetition[timelinePos - 1] = repetitions; // Set the repetitions to previous stored value (reversal logic)
            } else {
                timelinePos = timelineLength;
            }
        }

        progressTimeline(repetitions); // Progress the timeline by the number of repetitions

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
    }
});

btnBack.addEventListener("click", () => { // Back button is clicked

    if (animationQueue.length == 0) // Ensures any queued animation is complete before moving back in the timeline
    {

        // Sets number of reperations to previous stored value (reversal logic)
        let repetitions = timeline.repetition[timelinePos - 1];
        timeline.repetition[timelinePos - 1] = 0;

        for (let i = 0; i <= repetitions; i++) {
            if (timelinePos > 0) {
                timelinePos--;

                if (typeof timeline.animation[timelinePos] === "string") { // If using a preset animation
                    animations[timeline.animation[timelinePos]](document.getElementById(timeline.element[timelinePos]), false); // animationName(element, forward)
                } else {  // Else, using advanced animation
                    animations.animate(document.getElementById(timeline.element[timelinePos]), false, timeline.animation[timelinePos]); // animate(element, forward, animationValues)
                }

                subtitle.textContent = timeline.subtitleText[Math.max(0, timelinePos - 1)]; // Update subtitle text

                // Hides the subtitle text element if it is empty
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
    }
});