const fruits = {
    items: [],

    add(string) {
       return this.items.push(string);
    },
    remove(string) {
        i = this.items.indexOf(string);
        if (i>-1){
            return this.items.splice(i,1)
        }
        return this.items;
    }
}

console.log(fruits);

fruits.add(`Apples`);
fruits.add(`Oranges`);
fruits.add(`Bananas`);
console.log(fruits.items);
fruits.remove(`Bananas`);
console.log(fruits.items);