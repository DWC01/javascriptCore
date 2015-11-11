// What will be console logged?

function foo() {
  var var1 = 1, var2 = 2, var3 = 3;
  console.log(var1);
  console.log(var2);
  console.log(var3);
}

foo();

console.log("var1 undefined? " + (typeof var1 === 'undefined'));
console.log("var2 undefined? " + (typeof var2 === 'undefined'));
console.log("var3 undefined? " + (typeof var3 === 'undefined'));








//----------------------
// Answer
//----------------------

// Same as:

function foo() {
  var var1; // <- Was comma separated so 'var' declared before each assignment
  var var2; // <- Hoisted in Functional Scope since initialized in fucntion 
  var var3;

  var1 = 1; 
  var2 = 2; 
  var3 = 3;

  console.log(var1); // 1
  console.log(var2); // 2
  console.log(var3); // 3
}

foo();

console.log("var1 undefined? " + (typeof var1 === 'undefined')); // true
console.log("var2 undefined? " + (typeof var2 === 'undefined')); // true
console.log("var3 undefined? " + (typeof var3 === 'undefined')); // true








