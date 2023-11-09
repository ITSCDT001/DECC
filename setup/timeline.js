// ----------------- TIMELINE ---------------------

let btnNext = document.getElementById('btn-next');
let btnBack = document.getElementById('btn-back');

let timelinePos = 0;
let timelineForward = true;
const timeline = [];

function fade(element) {
    if (timelineForward)
    {
        element.style.animation="fade-in 1s forwards";
    } else {
        element.style.animation="fade-out 0.5s forwards";
    }
}

function animateInTimeline(element, animation, position)
{
    document.getElementById(element).style.opacity = 0;

    var string = animation + `(document.getElementById("${element}"));`;
    timeline[position] = typeof timeline[position] == 'undefined' ? string : timeline[position].concat(string);
}

btnNext.addEventListener("click", () => {
    timelineForward = true;
    eval(timeline[timelinePos]);
    timelinePos++;
});

btnBack.addEventListener("click", () => {
    timelinePos--;
    timelinePos = Math.max(0, timelinePos);
    timelineForward = false;
    eval(timeline[timelinePos]);
});

// Current security concerns with eval(), look for possible alternatives