// What will be console logged?
 
function printSomething() {
    console.log(n);
    var n = 2;
    console.log(n);
}
 
var n = 1;

printSomething();























//----------------------
// Answer
//----------------------

var n = 1;
 
function printSomething() {
    // var n; <- Hoisting the declaration
    console.log(n); // undefined
    var n = 2;
    console.log(n); // 2
}
 
printSomething();
