const list = document.createElement('ul');
document.body.appendChild(list);

function add(item) {
    const li = document.createElement('li');
    li.innerHTML = item;
    list.appendChild(li);
}

function toggle(item) {
    item.classList.toggle('complete');
}

function destroy() {
    list.lastChild.remove();
}

add('Shoes');
add('Trainers');
add('Jacket');
