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

melon.innerHTML = '<span>🍉</span> Melon';
//melon.textContent = 'Melon';

food.appendChild(melon);


const broccoli = document.createElement('li');
const text = document.createTextNode('Broccoli');
const span = document.createElement('span');
const emoji = document.createTextNode('🥦');

span.appendChild(emoji);
broccoli.appendChild(span);
broccoli.appendChild(text);

food.insertBefore(broccoli, apple);

//carrot.remove();

const lemon = document.createElement('li');
lemon.innerHTML = `<span>🍋</span>Lemon`;
food.replaceChild(lemon,banana);

//apple.getAttribute('class');
broccoli.setAttribute('class', 'veg');
melon.className = 'fruit';
// they overwrite all other classes except classList

lemon.classList.add('fruit');

lemon.classList.remove('fruit');

apple.classList.contains('fruit');
// true

apple.classList.contains('veg');
// false

apple.style.border = "red 2px solid";





