// What will be console logged?

(function(){
  var a = b = 3;
  console.log(a);
  console.log(b);
})();

console.log("a undefined? " + (typeof a === 'undefined'))
console.log("b undefined? " + (typeof b === 'undefined'))












//----------------------
// Answer
//----------------------

// Note: Uncomment sections below to see / test live

// (function(){
//   var a = b = 3;
//   console.log(a); // 3
//   console.log(b); // 3
// })();

// console.log("a undefined? " + (typeof a === 'undefined')) // true
// console.log("b undefined? " + (typeof b === 'undefined')) // false

// // Same as...

// var b; // <- Hoisted Globally, since not initialized inside function

// (function(){
//   b = 3;
//   var a = b; // <- Initialized inside function, creating function scope
//   console.log(a); // 3
//   console.log(b); // 3
// })();

// console.log("a undefined? " + (typeof a === 'undefined')) // true
// console.log("b undefined? " + (typeof b === 'undefined')) // false

// Two things happening here..

// 1.) The variable declaration gets read/assigned from right to left

// So..

// var a = b = 3;

// Turns into..

// b = 3; var a =b;

// 2.) Fucntion and Global  Variable Scopes created with this one line

// b=3; Gets Hoisted Globally and declared as var b; 
// Since not initialized as ( var b = 3; ) inside the function.

// However, ( var a = b; ) was initialized with var inside function, 
// therefore only available inside the function scope.




