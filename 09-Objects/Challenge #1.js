const pinecake = {
    description: "cake",
    price: 100,
    rating: 6,
}

console.log(pinecake);

pinecake.weight = "100 gr";

console.log(pinecake);

delete pinecake.weight;
console.log(pinecake);

pinecake.inform = function inform() {
    return console.log(`very tasty!`);
}

console.log(pinecake);

console.log(pinecake.inform())