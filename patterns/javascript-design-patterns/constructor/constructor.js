'use strict';

// Object Literal
var objLiteral = {};

// The Object.create() method creates a new object 
// with the specified prototype object and properties.
var objCreate = Object.create(Object.prototype);

// Constructor
function Company(name) {
  this.name = name;
}

Company.prototype.numPlacements = function() {
  console.log("1,000");
  return 1000;
}

// By creating the constructor function: 
// Company has a 'prototype' property
// Company's 'prototype.constructor' property is equal to the constructor function just defined
// All instances inherit properties from the prototype
// But instantiate with uniq properties defined by contructor
console.log(Company.prototype);

// The new operator
// 1.) Creates a new Object
// 2.) Calls that Object.prototype.constructor function
var integralAds = new Company('integralAds');
console.log('--- integralAds');
console.log(integralAds);

console.log(integralAds instanceof Company); // true
console.log(integralAds instanceof Object); // true

console.log(integralAds.numPlacements()); // 1,000
console.log(integralAds.toString()); // [object Object]

// Prototype Chain
console.log(integralAds.__proto__ === Company.prototype); //true
console.log(Company.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype);

