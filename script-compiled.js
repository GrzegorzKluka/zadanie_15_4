"use strict";

//zadanie 1
var a = "Hello";
var b = "World";

console.log(a + " " + b);

//zadanie 2

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(2));

//zadanie 3

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (a, b) {
    return a + b;
  }) / args.length;
};

console.log(average(1, 3, 6, 6));

//zadanie 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//zadanie 5

var array = [1, 4, "Iwona", false, "Nowak"];
var firstName = array[2],
    lastName = array[4];


console.log(firstName + " " + lastName);
