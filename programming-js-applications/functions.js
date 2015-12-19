// Write pure functions that return a copy of the data, 
// do not pass by reference and alter inside function

// Bad 
var Cart = {
  items: [],

  createCart = function (items) {
    var cart = Object.create(cartProto);
    cart.items = items;
    return cart;
  }
}

// Good
var Cart = {
  items: [],

  createCart = function (items) {
    var cart = Object.create(cartProto);
    cart.items = Object.create(items);
    return cart;
  }
}


// Partial Application

var multiply = function(x,y) {
  return x * y;
}

var partial = function(fn) {
  var args = [].slice.call(arguments,1);

  return function() {
    var combinedArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, combinedArgs);
  }

}

var doubles = partial(multiply, 2);

console.log(doubles);

