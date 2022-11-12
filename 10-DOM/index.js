const hello = document.getElementById('greeting');

//hello.innerHTML;

const name = prompt(`What is your name?`);

hello.innerHTML = `Hello, <em>${name}!</em>`;

