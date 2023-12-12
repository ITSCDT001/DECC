export const animations = {};

// Fades

animations.animate = (element, forward, values, defaultvals) => {
    element.style.transition = "opacity 0.5s linear, transform 0.5s linear";

    let string = "";

    if (values[0] !== null) string = string + `translateX(${values[0]}vw)`;
    if (values[1] !== null) string = string + `translateY(${values[1]}vh)`;
    if (values[2] !== null) string = string + `scale(${values[2]})`;
    if (values[3] !== null) string = string + `rotate(${values[3]}deg)`;

    console.log(string);

    element.style.transform = forward ? string : defaultvals[0];
    // element.style.transform = `translateX(${values[0]}vw) translateY(${values[1]}vh) scale(${values[2]}) rotate(${values[3]}deg`;
    element.style.opacity = forward ? values[4] : defaultvals[1];
    element.style.visibility = "visible";
}

animations.fadeIn = (element, forward) => {
    animations.animate(element, forward, [null, null, null, null, 1], ["", 0]);
    element.style.pointerEvents = forward ? "auto" : "none";

}

animations.fadeOut = (element, forward) => {
    animations.animate(element, forward, [null, null, null, null, 0], ["", 1]);
    element.style.pointerEvents = forward ? "none" : "auto";
}

animations.fadeOutShrink = (element, forward) => {
    element.style.transition = "opacity 0.5s linear, transform 0.5s linear";
    element.style.opacity = forward ? 0 : 1;
    element.style.transform = forward ? "scale(0)" : "scale(1)";
    element.style.pointerEvents = forward ? "none" : "auto";
    animations.animate(null, null)
}

animations.fadeInGrow = (element, forward) => {
    element.style.transition = "opacity 0.5s linear, transform 0.5s linear";
    element.style.opacity = forward ? 1 : 0;
    element.style.transform = forward ? "scale(1)" : "scale(0)";
    element.style.visibility = "visible";
    element.style.pointerEvents = forward ? "auto" : "none";
}

// Part Fades

animations.partFadeInGrow = (element, forward) => {
    element.style.transition = "opacity 0.75s linear, transform 0.75s linear";
    element.style.opacity = forward ? 0.5 : 0;
    element.style.transform = forward ? "scale(1)" : "scale(0)";
    element.style.visibility = "visible";
    element.style.pointerEvents = forward ? "auto" : "none";
}

// Moves

animations.moveLeft100 = (element, forward) => {
    element.style.transition = "transform 1s";
    element.style.transform = forward ? "translateX(-100%)" : "translateX(0%)";
}

animations.moveLeft70Shrink = (element, forward) => {
    element.style.transition = "transform 1s";
    element.style.transform = forward ? "translateX(-70%) scale(0.6)" : "translateX(0%) scale(1)";
}