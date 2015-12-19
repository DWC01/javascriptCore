// Types of Prototype

//  1.) delegate-prototype (shared methods) - If can't find method on current object,
//      delegate property lookup to its prototype

//      - Flyweight objects for free, conserve memory 
//        methods stored on only one object, not every instance


var proto = {
  hello: function() {
    return "Hello my name is " + this.name;
  }
}

var george = Object.create(proto);
george.name = 'George';

console.log(george.constructor);
    

// 2.) Cloning / Concatination
//     - Great for default state
//     - Mixins

//     Underscore's extend, copy all properties from passed in objects 
//     into first object, properties that come later, overide properties that come first

      _.extend({}, proto, {name: 'George'});

// 3.) Functional Inheritance
//     - Great for encapsulation / privacy
//     - Functional Mixins

//    Function Prototypes (not Object prototypes)
//    Can Replace: Constructors, Init Functions, super()

var model = function() {
  var attrs = {};

  this.set = function(name, value) {
    attrs[name] = value;
  }

  this.get = function(name, value) {
    return attrs[name];
  }

  return this;
}

var george = {};

model.call(george).set('name', 'George');
console.log(george.get('name'));

/// Factory Functions ///

// - Like constructors, but you don't need new or this
// - Mix and match all three types of prototypes
// - Use .call() and .apply() to swap out source prototypes at intantiation time

// Classes deal with Idea of Function
// Prototypes deal with objects themselves





