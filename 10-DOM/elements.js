const food3 = document.getElementById(`food`);
const items = document.getElementsByTagName('li');
items[0];
// "<li class=`fruit`><span> (img.apple)</span>Apple</li>"

items.length;
// 3

const fruit = document.getElementsByClassName(`fruit`);

fruit.length; 
// 2

fruit[0];
// <li class = "fruit"><span>(img.apple)</span>Apple</li>

fruit[1];
// <li class = "fruit"><span>(img.banana)</span>Banana</li>

//  Query selectors

const food4 = document.querySelector('#food');

// identical
document.getElementsByClassName('fruit');
document.querySelectorAll('.fruit'); // brings All selectors

const carrot2 = document.querySelector('ul#food li:last-child');
// <li class='veg'><span>(carrot.jpg)</span>Carrot</li>

food.children.length;
// 3

food.children[0];
// <li class = "fruit"><span>(apple.jpg)</span>Apple</li>

const food = document.querySelector('#food');

const apple = food.children[0];
const banana = food.children[1];
const carrot = food.children[2];

apple.parentNode;
/*
    <ul id="food">
        <li class="fruit"><span>(img.apple)</span>Apple</li>
        <li class="fruit"><span>(img.banana)</span>Banana</li>
        <li class="veg"><span>(img.carrot)</span>Carrot</li>
    </ul>
*/

const melon = document.createElement('li');

melon.innerHTML = '<span>(melon.jpg)</span> Melon';


