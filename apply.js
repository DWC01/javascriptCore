// The apply function in particular allows us to execute a 
// function with an array of parameters, such that each parameter 
// is passed to the function individually when the 
// function executes—great for variadic functions; 
// a variadic function takes varying number of arguments, 
// not a set number of arguments as most functions do.



// -- Allows us to set the 'this' in a call back

// var userData = {
//   fullName: "Not Set",
//   setFullName: function(firstName, lastName) {
//     this.fullName = firstName + " " + lastName;
//   }
// }

// // Apply
// var getUserInput = function(firstName, lastName, callBack, callBackObj) {
//   callBack.apply(callBackObj, [firstName, lastName]);
// }

// getUserInput("Barack", "Obama", userData.setFullName, userData);
// console.log(userData.fullName);


// -- Allows us to send an aray or arguments to a variadic function 

var allNumbers = [23, 11, 34, 56];
console.log(Math.max.apply(null, allNumbers));

// -- or --

var allStudents = ['David', 'Jennifer', 'Andrew'];

// No arguments defined because it takes any number
var welcomeStudents = function() {
  var students = Array.prototype.slice.call(allStudents,0);

  var last = students.pop();

  return "Welcome " + students.join(', ') + ', and ' + last + "!"
}

var welcomeMessage = welcomeStudents.apply(null, allStudents);
console.log(welcomeMessage);
