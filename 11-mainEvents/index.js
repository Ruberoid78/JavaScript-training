import { bang } from "./functions.js";

//document.addEventListener("click", bang);

const redButton = document.getElementById("red");

redButton.addEventListener(
    "click",
    (e) => (document.body.style.background = "red")
);

const greenbutton = document.getElementById("green");
greenbutton.addEventListener(
    "click",
    (e) => (document.body.style.background = e.target.textContent)
);
