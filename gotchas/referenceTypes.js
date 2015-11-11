// Reference Types

Object
Array
Function

// You can think of this as only one because 
// Array and Function are themselves Objects

// Reference Types are mutable

var point = {x: 1, y: 7};
point.x = 2; // You can change the value of point in place
point.y = 9;

// How about Functions?

var func = function() {
  return "Hello!";
}
func.x = 1; // You can add props in place to functions like any other object

// Reference types are compared by reference

var a = {x: 1, y: 7};
var b = {x: 2, y: 9};

console.log( a == b ); // false
console.log( a === b ); // false
// Both false because they are referencing two completely different objects

b = a;
console.log( a == b ); // true,  
console.log( a === b ); // true
// Both true because b is now referencing same object as a


// Reference types are passed by their reference

var point = {x: 1, y: 7};

var modifyObj = function(obj) {
  obj.x = 2;
  obj.y = 9;
  return obj;
}

console.log( modifyObj(point) ); // {x: 2, y: 9};
console.log( point ); // {x: 2, y: 9};


var a = {x:1, y:5};
var b = a;
b.x = 2;
console.log(a.x); // 2, because b is referencing same object as a

// If you defreference an object than it no longer points to the same object

var a = {x:1, y:5};

var foo = function(argVal) {
  argVal = {x:2, y:5};
  return argVal;
}

var result = foo(a);

console.log(result); // {x:2, y:5}
console.log(a); // {x:1, y:5}

Copy Reference Types

var array1 = ["zero", "one", "two","three", ["four", "five", "six"]];
var array2 = array1.slice(0); // Shallow Copy, meaning the nested array still points to same object

console.log(array1); // ["zero", "one", "two","three", ["four", "five", "six"]];
console.log(array2); // ["zero", "one", "two","three", ["four", "five", "six"]];

console.log(array1 === array2); // false
console.log(array1[4] === array2[4]); // true

// So.. 

array2[4].push("seven"); 
console.log(array1[4]) // ["four", "five", "six", "seven"]

