// What will be console logged?
var var3 = 1, var2 = var3;

function bad() {
  var var1 = var2;;
  console.log(var1);
  console.log(var2);
  console.log(var3);
}

bad();

console.log("a undefined? " + (typeof var1 === 'undefined'))
console.log("b undefined? " + (typeof var2 === 'undefined'))
console.log("b undefined? " + (typeof var2 === 'undefined'))





















//----------------------
// Answer
//----------------------

// Same As:

var var3; // <- Hoisted in Global Scope, since not initialized in function
var var2; // <- Hoisted in Global Scope, since not initialized in function

function bad() {
  var var1; // <- Hoisted in Functional Scope, since initialized in function
  
  var3 = 1; // <- Variables read / assigned left to right.. 
  var2 = var3;
  var1 = var2;

  console.log(var1); // 1
  console.log(var2); // 1
  console.log(var3); // 1
}

bad();

console.log("a undefined? " + (typeof var1 === 'undefined')) // true
console.log("b undefined? " + (typeof var2 === 'undefined')) // false
console.log("b undefined? " + (typeof var2 === 'undefined')) // false

