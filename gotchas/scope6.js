// What will be console logged?

function test() {
  

  console.log( bar() );
  console.log( foo() );

  function bar() {
    console.log("Logging from inside bar");
  }
  var foo = function () {
    console.log("Logging from inside foo");
  }
}

test();





















//----------------------
// Answer
//----------------------

function test() {
  console.log( bar() ); 
  console.log( foo() ); 

  function bar() { // Function Declaration - gets hoisted
    console.log("Logging from inside bar"); 
  }
  var foo = function () { // Fucntion Expression - Does Not gets hoisted
    console.log("Logging from inside foo");
  }
}

test();