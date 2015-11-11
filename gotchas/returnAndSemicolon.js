// What will be console logged?

function foo1() {
  return {
    bar: 'hello'
  }
}

function foo2() {
  return
  {
    bar: 'hello'
  }
}

function foo3() 
{
  return {
    bar: 'hello'
  }
}

console.log(foo1())
console.log(foo2())
console.log(foo3())


//----------------------
// Answer
//----------------------

function foo1() {
  return {
    bar: 'hello'
  }
}

function foo2() {
  return //; <- JS ASI adds a semi-colon after return
  {
    bar: 'hello'
  }
}

function foo3() // <- JS ASI DOES NOT add a semi-colon after function declaration
{
  return {
    bar: 'hello'
  }
}

console.log(foo1()) // {bar:'hello'}
console.log(foo2()) // undefined
console.log(foo3()) // {bar:'hello'}

// This StackOverlfow Post does a pretty good job of explaining 
// when semi-colon's are added

// http://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi

// Common Scenarios where semi-colons are added

// empty statement
// var statement
// expression statement
// do-while statement
// continue statement
// break statement
// return statement
// throw statement