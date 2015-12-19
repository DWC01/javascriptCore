// https://davidwalsh.name/javascript-objects-deconstruction

// Normal Constructor
var Foo = function(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
}

var Bar = function(who) {
  Foo.call(this, who);
  this.favColor = "blue";
}

// Have to map it to the Bar prototype, since that's what the new construtor will call
Bar.prototype = Object.create(Foo.prototype); 
// SAME AS => Bar.prototype = new Foo();


Bar.prototype.speak = function() {
  console.log("Hello, " + this.identify() + " .");
}

// Note: Foo() constructor does not autmatically get called when creating b1
// so need to automatically call it in Boo as 'Foo.call(this,who)'
// Cosntructor functions are only useful for immediate level, not chain of inheritance


// The reason is, Foo's prototype starts off as en empty obejct, but then is created 
// by Object constructor, which sets the construtor property on the prototype of Foo, to Foo()


var b1 = new Bar('b1');
// b1 -> Bar.prototype -> Foo.prototype
console.log(b1.__proto__.__proto__);



// -- Custom ----

var Foo = {
  init: function(who) {
    this.me = who;
  },
  indentify: function() {
    return "I am " + this.me;
  }
}

var Bar = Object.create(Foo);

Bar.speak = function() {
  console.log("Hello, " + this.indentify() + ".");
}

var b1 = Object.create(Bar);
b1.init('b1');
// b1.speak();

console.log(b1);

