export function fadeIn(element) {
    element.style.visibility = "visible";

    element.style.animation="fade-in 1s forwards";
}
  
export function fadeOut(element) {
    element.style.animation="fade-out 0.5s forwards";
}

export const animations = {};

animations.fadeIn = function fadeIn (element, forward) {
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
    element.style.animation=`fade-in 1s ${forward ? "normal" : "reverse"} forwards`;
}

animations.fadeOut = function fadeOut (element, forward) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
    element.style.animation=`fade-out 1s ${forward ? "normal" : "reverse"} forwards`;
}