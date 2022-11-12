const heading = document.createElement('h1');
heading.innerHTML = 'Hello world!';

const para = document.createElement('p');
para.innerHTML = 'This is the first para generated by JS.'

document.body.appendChild(heading);
document.body.appendChild(para);


const toDoList = document.createElement('ul');
document.body.appendChild(toDoList);

function add(string) {
    const li = document.createElement('li');
    li.innerHTML = string;
    toDoList.appendChild(li);
}

add('Shoes');
add('Trainers');
add('Jacket');

// не работает. Надо полностью изучить DOM и вернуться.
function destroy(item){
    item.remove();
  }
destroy('Jacket');