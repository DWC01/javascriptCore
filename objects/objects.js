// var animals = {
//   dogs: 8,
//   cats: 4
// }

// var FarmAnimals = function() {
//   this.dogs = 4;
//   this.snakes = 6;
//   this.cows = 8;
// }

// FarmAnimals.prototype = animals;

// var animalSet = new FarmAnimals();


// // The For In loop will drudge through the entire 
// // prototype chain unless you specify hasOwnProperty

// for(animal in animalSet) {
//   if(animalSet.hasOwnProperty(animal) || animals.hasOwnProperty(animal)) {
//     console.log(animal + ": " + animalSet[animal]);
//   }
// }

// // --- Object Create with Prototype


// var cloneAnimal = Object.create(FarmAnimals.prototype);

// console.log(cloneAnimal.__proto__); // { dogs: 8, cats: 4 }
// console.log(cloneAnimal.__proto__ === FarmAnimals.prototype); // true


// -- Cloning an Object

var rectangle = {
  width: 8,
  heihgt: 8,
  area: function() {
    return this.width * this.height;
  }
}

var rect = Object.create(rectangle);

console.log(rect);
console.log(rect.__proto__);

// -- Object Literalls, susinct way of calling the following:

var rectanlge = Object.create(Object.prototype);

rectangle.area = function() {
    return this.width * this.height;
  }

// This form of prototypal inheritance in which we form prototype
// chains is called differential inheritance or delegation.

// Prototypal inheritance is all about objects. Objects inherit properties from other objects. That's all there is to it. There are two ways of creating objects using prototypal inheritance:

// Create a brand new object.
// Clone an existing object and extend it.
