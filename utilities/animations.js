export const animations = {};

animations.fadeIn = function fadeIn (element, forward) {
    element.style.transition="opacity 0.5s linear, visibility 0.5s";
    element.style.opacity=forward ? 1 : 0;
    element.style.visibility=forward ? "visible" : "hidden";
    element.style.pointerEvents = forward ? "auto" : "none";
}

animations.fadeOut = function fadeOut (element, forward) {
    element.style.transition="opacity 0.5s linear, visibility 0.5s";
    element.style.opacity=forward ? 0 : 1;
    element.style.visibility=forward ? "hidden" : "visible";
    element.style.pointerEvents = forward ? "none" : "auto";
}