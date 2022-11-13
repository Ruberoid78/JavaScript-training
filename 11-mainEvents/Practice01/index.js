//import { func } from "./extFunctions.js";
const form = document.forms.myForm;
const hello = document.getElementById("hello");

form.addEventListener("submit", sayHello);

function sayHello(e) {
    e.preventDefault();
    hello.textContent = `Hello, ${form.myName.value}!`;
}

document.addEventListener(
    "keydown",
    (e) =>
        (document.body.innerHTML = `<div>e.code: ${e.code}</div><div>e.key: ${e.key}</div>`)
);
