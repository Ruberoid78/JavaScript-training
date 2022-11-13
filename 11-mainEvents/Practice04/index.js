//import {  } from "./extFunc.js";
const bomb = document.createElement("div");
bomb.textContent = "💣";
bomb.style.position = "absolute";
bomb.style.top = Math.floor(200 * Math.random()) + "px";
bomb.style.left = Math.floor(200 * Math.random()) + "px";
bomb.style.fontSize = "64px";
document.body.appendChild(bomb);

bomb.addEventListener("mouseover", (e) => {
    document.body.style.background = "red";
    document.body.innerHTML = "<h1>BOOOOOOOOM!!!!!</h1>";
});
