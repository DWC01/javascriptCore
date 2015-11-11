// Hoisting

// All declarations gets hoisted
// e.g. everything before the '='/assignment/expression

// Declaration 
// var x;  <- gets hoisted

// var x = 7;
// var x; <- gets hoisted
// x = 7; <- stays

// ^^ The declartaion always gets hoisted, the assignment does not
// ^^ Rule of thumb, everything before the assignment, or '=' gets hoisted

// Funtion Declaration
// function a(); <- gets hoisted

// Function Expression
// var foo = function() { return 'a'; }
// var foo; <- gets hoisted
// function() { return 'a'; }; <- stays

// Again, Rule of thumb, everything before the assignment gets hoisted
// Everything after the assignment(=) does not. 
// The declartaion always gets hoisted, the assignment does not


// Hoisting is JavaScript's default behavior of 
// moving all declarations to the top of the current
// scope (to the top of the current script or the current function)

// So this...

x = 5; // Assign 5 to x
console.log(x);
var x; // Declare x

// Is the same as this.....

var x; // Declare element
x = 5; // Assign 5 to x
console.log(x);



// JavaScript only hoists declarations, not expressions

// So this...

var x = 5; // Initialize x
var y = 7; // Initialize y

console.log(x + " " + y); // Display x and y

// Is NOT THE SAME as this...

var x = 5; // Initialize x
console.log(x + " " + y); // Display x and y

var y = 7; // Initialize y


// Should also be undefined...

var x = 5; // Initialize x
var y;     // Declare y

console.log(x + " " + y); // Display x and y

y = 7;    // Assign 7 to y



