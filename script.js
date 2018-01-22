//zadanie 1
const a = `Hello`;
const b = `World`;

console.log(`${a} ${b}`)

//zadanie 2

const multiply = (a, b = 1) => a * b;
console.log(multiply(2));

//zadanie 3

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(1, 3, 6, 6))

//zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//zadanie 5

const array = [1, 4, "Iwona", false, "Nowak"];
const [, , firstName, , lastName] = array;

console.log(`${firstName} ${lastName}`);