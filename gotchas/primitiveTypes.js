// Primitive Types

Number      15, 3.14
Boolean     true, false
String      "Hello, World!"

null
undefined


// Primitive types are immutable

var a = 1;  // new Number
a = 5;      // new Number
a = a + 2;  // new Number

var name = "Roger";         // new String
name.toUpperCase();         // name is unchanged, toUppcase just returns string
name = name.toUpperCase();  // name = new string

// Primitve Types are compared to each other by their Value

var a = "Roger";
var b = "Roger";

a == b; // true
a === b; // true

// Primitive Types passed by value

var a = 1;

var modifyVar = function(argVal) {
  argVal = 2;
  return argVal;
}

console.log(argVal); // 2
console.log(a); // 1 Primitives passed by value, 
                // meaning new value set inside function


var a = 1;
var b = a;
b = 2;

console.log(a); // 1, because primitives passed by value. 
                // b = a set b equal to a new value of 1












