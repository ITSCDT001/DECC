export const animations = {};

// Fades

animations.fadeIn = (element, forward) => {
    element.style.transition = "opacity 0.5s linear";
    element.style.opacity = forward ? 1 : 0;
    element.style.visibility = "visible";
    element.style.pointerEvents = forward ? "auto" : "none";
}

animations.fadeOut = (element, forward) => {
    element.style.transition = "opacity 0.5s linear";
    element.style.opacity = forward ? 0 : 1;
    element.style.pointerEvents = forward ? "none" : "auto";
}

animations.fadeOutShrink = (element, forward) => {
    element.style.transition = "opacity 0.5s linear, transform 0.5s linear";
    element.style.opacity = forward ? 0 : 1;
    element.style.transform = forward ? "scale(0)" : "scale(1)";
    element.style.pointerEvents = forward ? "none" : "auto";
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