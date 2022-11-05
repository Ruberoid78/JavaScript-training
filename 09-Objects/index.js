const duck =  {
    name: 'Quacky',
    legs: 2,

    quack() {
        alert('QUACK! QUACK!');
    }
};

//duck.quack();

duck.wings = 2;
console.log(duck);
delete duck.quack;
console.log(duck);

const square = {
    sides: 4,
    length: 5,
    perimeter() {return this.sides * this.length},
    area() {return this.length * this.length}
}

console.log(square.perimeter());

const dice = {
    sides: 6,
    roll() {
        return Math.ceil(Math.random()*this.sides);
    }
}

console.log(dice.roll());