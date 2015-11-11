// What will be logged in Console?

var foo = 1; 

function bar() {
  if (!foo) {
    var foo = 10;
  }
  return foo;
}

console.log(bar());

console.log(foo);








//----------------------
// Answer
//----------------------

var foo = 1; 
function bar() {
  // var foo;
  if (!foo) {
    var foo = 10;
  }
  return foo;
}

console.log(bar()); // 10

console.log(foo); // 1
