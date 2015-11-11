// What will be console logged?

var x = 1;
console.log(x); 

if (true) {
  var x = 2;
  console.log(x); 
}

console.log(x);
























//----------------------
// Answer
//----------------------

var x = 1;
console.log(x); // 1

if (true) {
  var x = 2;
  console.log(x); // 2
}

console.log(x); // 2

// ^^ The set above is only changing the variables set 
// in the Global Object

// JavaScript has function level scoping, not block level

// A simple if {} statement does not create an execution context
// object with a scope chain variable objects

// Only function execution can do this 