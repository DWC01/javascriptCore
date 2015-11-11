// What will be console logged?


function foo() {
  var x = 1;
  if (x) {
    (function () {
      var x = 2;
    }());
  }
  return x;
}

console.log(foo());








//----------------------
// Answer
//----------------------

function foo() {
  var x = 1;
  if (x) { // 1
    (function () {
      var x = 2; // 2
    }());
  }
  return x; // 1 
}

console.log(foo()); // 1

// Since JavaScript has function level scoping
// x = 2 only for the context within the anonymous function
// exectued inside foo()

// The execution context's scope chain property gets created 
// when the fucntion starts to execute, and discarded when the 
// function has excuted (unless its a closure).

// That is what happens above, hence why the x=2 is not is foo's 
// scope chain.