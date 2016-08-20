function add (a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));
//spread operator (...) 'spreads' items within an array across arguments, so the 2 array items (9, 5) become arguments a and b//

var groupA = ['Chris', 'Pete'];
var groupB = ['Jen'];
var final = [...groupB, 3, ...groupA];

console.log(final);


var person = ['Andy', 33];
var personTwo = ['Sue', 31];

function greeting (name, age) {
  console.log("Hi " + name + ", you are " + age);
}
greeting(...person);
greeting(...personTwo);

