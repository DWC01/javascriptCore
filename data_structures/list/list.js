fs = require('fs');

var List = function() {
  // -- INIT
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  
  
  this.clear = function() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  };
  
  this.find = function(element) {
    var i = 0,
        len = this.dataStore.length;

    for (i; i < len; i++) {
      if(this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  };

  this.toString = function() {
    return this.dataStore;
  };

  this.insert = function(element, after) {
    var insertAt = this.find(after);

    if(insertAt > -1) {
      this.dataStore.splice(++insertAt, 0, element)
    }
  };

  this.append = function(element) {
    this.dataStore[this.listSize++] = element;
  };

  this.remove = function(element) {
    var foundAt = this.find(element);
    if(foundAt > -1 ) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  };


  this.getElement = function() {
    return this.dataStore[this.pos];
  };
  
  this.length = function() {
    return this.listSize;
  };

  this.contains = function(element) {
    var i = 0,
        len = this.dataStore.length;
    
    for(i; i < len; i++) {
      if (this.dataStore[i] === element) {return true;}
    }
    return false;
  };
  
  // -- ITERATORS

  this.front = function() {
    this.pos = 0;
  };

  this.end = function() {
    this.pos = this.listSize-1;
  };

  this.prev = function() {
    if(this.pos >= 0) {
      --this.pos
    }
  };

  this.next = function() {
    if (this.pos < this.listSize) {
      ++this.pos;
    }
  };

  this.currPos = function() {
    return this.pos;
  };

  this.moveTo = function(position) {
    this.pos = position;
  };

}

var cars = new List();

// Append
cars.append('4Runner');
cars.append('R8');
cars.append('Hatchback');
cars.append('Pinto');
cars.append('Ferrari');
cars.append('Rav4');
cars.append('Suburban');
// console.log(cars.toString());

// Remove
// cars.remove('Hatchback');
// console.log(cars.toString());

// Insert
// cars.insert('Lamborghini', '4Runner');
// console.log(cars.toString());

// Clear
// cars.clear();
// console.log(cars.toString());

// Constains
// console.log(cars.contains('Lamborghini'));

// Front
// cars.front();
// console.log(cars.getElement());

// Next
// cars.next();
// cars.next();
// console.log(cars.getElement());


// ITERATORS allow us to traverse the list with out referencing the
// internal storage mechanism of the List class.

// -- Advantages --
// 1. Not having to worry about the interanl data storge structure when accessing items
// 2. Being able to update the list and not have to update the iterator, without List class
//    the index would become invalid when a new element is added to the list
// 3.) Providing a uniform way of accessing elements of types of dataStores


// -- Forward
for(cars.front(); cars.currPos() < cars.length(); cars.next()) {
  console.log(cars.getElement());
}

// -- Reverse
for (cars.end(); cars.currPos() >= 0; cars.prev()) {
  console.log(cars.getElement());
}



