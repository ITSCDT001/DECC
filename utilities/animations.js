//////////////////////////////////////////////////////////////////////////////////////////
// ANIMATION PRESETS

// snapIn, snapOut, fadeIn, fadeOut, fadeInGrow, fadeOutShrink

// ADVANCED ANIMATIONS

// [ X , Y , SCALE , ROTATION , END-OPACITY , START-OPACITY , DURATION (seconds) , EASE-TYPE (linear/ease/ease-in/ease-out) ]

// null = no change

/////////////////////////////////////////////////////////////////////////////////////////

export const animations = {};

// Animate function (all animations are done in this function)
animations.animate = (element, forward, values) => {
    element.style.transition = `opacity ${values[6]}s ${values[7]}, transform ${values[6]}s ${values[7]}`; // Sets transition string for element (e.g. "opacity 0.5s linear, transform 0.5s linear")

    let string = "";

    // Concatenates values to string, depending on whether they are null or not
    if (values[0] !== null) string = string + `translateX(${values[0]}%)`;
    if (values[1] !== null) string = string + `translateY(${values[1]}%)`;
    if (values[2] !== null) string = string + `scale(${values[2]})`;
    if (values[3] !== null) string = string + `rotate(${values[3]}deg)`;

    // If string is empty (all null) don't change the transform property
    if (string != "") element.style.transform = forward ? string : "revert-layer"; // If moving forward, set transform property to string, otherwise revert it to original value

    element.style.opacity = forward ? values[4] : values[5]; // If moving forward, set opacity to end value, otherwise set it to start value
    element.style.visibility = "visible"; // Make element visible (visibility is hidden by default through animateInTimeline function)
}

// Animation Presets

animations.snapIn = (element, forward) => {
    animations.animate(element, forward, [null, null, null, null, 1, 0, 0, ""]); // Sets opacity to 1 in 0 milliseconds
    element.style.pointerEvents = forward ? "auto" : "none";
}

animations.snapOut = (element, forward) => {
    animations.animate(element, forward, [null, null, null, null, 0, 1, 0, ""]); // Sets opacity to 0 in 0 milliseconds
    element.style.pointerEvents = forward ? "auto" : "none";
}

animations.fadeIn = (element, forward) => {
    animations.animate(element, forward, [null, null, null, null, 1, 0, 0.5, "linear"]);  // Sets opacity to 1 in 0.5 milliseconds
    element.style.pointerEvents = forward ? "auto" : "none";
}

animations.fadeOut = (element, forward) => {
    animations.animate(element, forward, [null, null, null, null, 0, 1, 0.5, "linear"]);  // Sets opacity to 0 in 0.5 milliseconds
    element.style.pointerEvents = forward ? "none" : "auto";
}

animations.fadeInGrow = (element, forward) => {
    animations.animate(element, forward, [null, null, 1, null, 1, 0, 0.5, "linear"]); // Sets opacity to 1 and scale to 1 in 0.5 milliseconds
    element.style.pointerEvents = forward ? "auto" : "none";
}

animations.fadeOutShrink = (element, forward) => {
    animations.animate(element, forward, [null, null, 0, null, 0, 1, 0.5, "linear"]); // Sets opacity to 0 and scale to 0 in 0.5 milliseconds
    element.style.pointerEvents = forward ? "none" : "auto";
}

animations.slideOut = (element, forward) => {
    animations.animate(element, forward, [-10, null, null, null, 0, 1, 0.6, "ease"]);
    element.style.pointerEvents = forward ? "none" : "auto";
}

// YOU MUST "transform: translateX(10%)" FOR THIS TO WORK
animations.slideIn = (element, forward) => {
    animations.animate(element, forward, [0, null, null, null, 1, 0, 0.6, "ease"]);
    element.style.pointerEvents = forward ? "none" : "auto";
}


