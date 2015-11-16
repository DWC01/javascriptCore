var rand = function(num) {
  return Math.ceil(Math.random() * num);
}

var randMinMax = function(min,max) {
  //          (rand     *   diff ) + min
  return Math.random() * (max-min) + min;
}

var result = randMinMax(10, 20);
console.log(result);