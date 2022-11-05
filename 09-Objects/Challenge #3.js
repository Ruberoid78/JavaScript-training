const circle = {
    radius: 9,
    circumference () { return Math.PI*(2*this.radius)},
    area () { return Math.PI*(this.radius**2)},
}

console.log(circle.area());
console.log(circle.circumference());