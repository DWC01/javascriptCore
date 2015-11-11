// What will be console logged?
// Where is the invisible hoisting?

var a = 1;

function b() {
  a = 10;
  return;
  function a() {}
}
b();

console.log(a);









//----------------------
// Answer
//----------------------

var a = 1;

function b() {
  //function a(){};
  a = 10;
  return;
  function a() {}
}
b(); //
