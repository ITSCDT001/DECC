export const animations = {};

animations.fadeIn = function fadeIn (element, forward) {
    element.style.transition="opacity 0.5s linear";
    element.style.opacity=forward ? 1 : 0;
    element.style.visibility="visible";
    element.style.pointerEvents = forward ? "auto" : "none";
}

animations.fadeOut = function fadeOut (element, forward) {
    element.style.transition="opacity 0.5s linear";
    element.style.opacity=forward ? 0 : 1;
    element.style.pointerEvents = forward ? "none" : "auto";
}