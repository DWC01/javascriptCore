// Bind: Returns function with context

// Function.prototype.bind = function(context) {
//   var self = this;
//   return function() {
//     return self.apply(context, arguments);
//   }
// }

// --- Allows us to bind context

// cars = ['pinto', 'hatchback'];

// var carData = {
//   cars: ['4Runner', 'R8'],
//   showCars: function() {
//     return this.cars;
//   }
// }

// var showCars = carData.showCars;
// console.log(showCars());

// showCars = carData.showCars.bind(carData);
// console.log(showCars());

// // --- Allows us to borrow Methods

// var user = {
//   data: ["some", "user", "data"],
//   showData: function() {
//     return this.data;
//   }
// }

// var cars = {
//   data: [
//     {name:"R8", age:0},
//     {name:"4Runner", age:10}
//   ]
// }

// var showCars = user.showData.bind(cars);

// console.log(showCars());


// --- Allows us to curry functions

// var greet = function(gender, age, name) {
//   var salutation = gender === 'male' ? 'Mr.' : 'Ms.';

//   if (age > 25) {
//     return "Hello " + salutation + " " + name + "."
//   } else {
//     return "Hey " + name + "."
//   }
// }

// var greetMale = greet.bind(null, "male");

// console.log(greetMale(26, 'David'));



