// What will be console logged?

var foo = 'hello'

function fux() {
  console.log(foo)
}

fux()
console.log(foo)












//----------------------
// Answer
//----------------------

var foo = 'hello'

function fux() {
  console.log(foo)
}

fux() // hello
console.log(foo) // hello

// var foo gets initialized on the Global Scope before fux() runs
// So fux() logs foo as 'hello'

// Nothing in the fux() function scope affects the foo global variable
// so both the fux() function scope and global scope read foo as 'hello' 