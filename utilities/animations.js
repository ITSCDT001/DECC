export function fadeIn(element) {
    element.style.visibility = "visible";

    element.style.animation="fade-in 1s forwards";
}
  
export function fadeOut(element) {
    element.style.animation="fade-out 0.5s forwards";
}

export const animations = {};

animations.fadeIn = function fadeIn (element, forward) {
    element.style.transition="opacity 0.5s linear";
    element.style.opacity=forward ? 1 : 0;
}

animations.fadeOut = function fadeOut (element, forward) {
    element.style.transition="opacity 0.5s linear";
    element.style.opacity=forward ? 0 : 1;
}