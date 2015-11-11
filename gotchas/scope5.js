// What will be console logged?

function foo() {
  if (false) {
    var x = 1;
  }
  return;
  var y = 1;
}

console.log(foo());











//----------------------
// Answer
//----------------------

function foo() {
  // var x,y;
  if (false) {
    var x = 1;
  }
  return;
  var y = 1;
}

console.log(foo()); // undefined


// Illustrating that whether the function returns an undefined
// value or actuallly runs the assigned variable or not, the
// declarations still get hoisted








