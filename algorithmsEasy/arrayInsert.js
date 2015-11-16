Array.prototype.insert = function(index, item) {
  var args = this.slice.call(arguments),
      index = args.shift();

  args = [index,0].concat(args);
  this.splice.apply(this, args);

  return this;
}

var result = [1,2,3,4,7,8,9,10].insert(4,5,6);
console.log(result);


var insertArrayItem = function(array) {
  array.splice(4,0,5,6);
  return array;
}

var result = insertArrayItem([1,2,3,4,7,8,9,10]);
console.log(result);