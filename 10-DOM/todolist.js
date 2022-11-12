const list = document.createElement('ul');
document.body.appendChild(list);

function add(item){
    const li = document.createElement('li');
    li.innerHTML = item;
    list.appendChild(li);
}

function toggle(item) {
    item.classList.toggle('complete');
}

add('Bake a cake');
add('Sing a song');
add('Read a book.');



toggle(list.firstChild);
toggle(list.lastChild);
