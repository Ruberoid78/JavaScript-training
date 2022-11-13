//import { showCoords } from "./extFunc.js";

document.addEventListener("mousemove", showCoords);

function showCoords(event) {
    document.body.textContent = `(${event.x}, ${event.y})`;
}
