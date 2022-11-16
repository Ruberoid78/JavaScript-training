const star = document.querySelector("#star");

star.addEventListener("mousedown", start);
star.addEventListener("mouseup", stop);

function start(e) {
    document.addEventListener("mousemove", move);
}

function move(e) {
    star.style.left = `${e.x}px`;
    star.style.top = `${e.y}px`;
}
function stop() {
    document.removeEventListener("mousemove", move);
}
