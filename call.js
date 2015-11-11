// -- Allows us to set the 'this' in a call back

// var userData = {
//   fullName: "Not Set",
//   setFullName: function(firstName, lastName) {
//     this.fullName = firstName + " " + lastName;
//   }
// }

// // Call
// var getUserInput = function(firstName, lastName, callBack, callBackObj) {
//   callBack.call(callBackObj, firstName, lastName);
// }

// getUserInput("Barack", "Obama", userData.setFullName, userData);
// console.log(userData.fullName);


// -- Borrow methods from Arrays for 'Array Like' Objects

var arrayLikeObject = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  length: 4
}

// Make a shallow copy
// arrayLikeObject sets the 'this'
var newArray = Array.prototype.slice.call(arrayLikeObject, 0);
console.log(newArray);

// Search for index of value 'two'
var index = Array.prototype.indexOf.call(arrayLikeObject, 'two');
console.log(index);

// Reverse the object
var reversed = Array.prototype.reverse.call(arrayLikeObject);
console.log(reversed);

// Pop it!
console.log(Array.prototype.pop.call(arrayLikeObject));

