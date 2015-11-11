// // Spacify
// var spacify = function(string) {
//   return string.split('').join(' ');
// }
// console.log(spacify('hello'));

// // Prototype Spacify
// String.prototype.spacify = function() {
//   return this.split('').join(' ');
// };
// console.log('hello'.spacify());


// // Arguments Apply
// var log = function() {
//   console.log.apply(console, arguments);
// }
// log('Hello', 'World');

// // Arguments Array.prototype.slice
// var log = function() {
//   var args = Array.prototype.slice.call(arguments);
//   args.unshift('(app)');
//   console.log.apply(console, args);
// }
// log('Hello', 'World');

// var User = {
//   count: 1,

//   getCount: function() {
//     return this.count;
//   }
// };
// // Bind
// var func = User.getCount.bind(User);
// console.log(func);
// console.log(func());

// // Function.prototype.bind = function(context) {
// //   var self = this;

// //   return function() {
// //     return self.apply(context, arguments);
// //   }
// // }

// var func = User.getCount.bind(User);
// console.log(func());


// var sayHello = function(gender, age, name) {
//   if (age > 30) {
    
//     if (gender === 'male') {
//       return 'Hello Mr. ' + name;
//     } else {
//       return 'Hello Mrs. ' + name;
//     }

//   } else {
//     return 'Hi, ' + name;
//   }
// }

// var sayHelloMr = sayHello.bind(null,'male',31);

// console.log(sayHelloMr('Christian'));

var farmAnimals = {
  dogs: 4,
  snakes: 6,
  cows: 8
}

farmAnimals.prototype.dogs = 8;
farmAnimals.prototype.cats = 6;

for(animal in farmAnimals) {
  if(farmAnimals.hasOwnProperty(animal)) {
    console.log(animal + ": " + farmAnimals[animal]);
  }
}







