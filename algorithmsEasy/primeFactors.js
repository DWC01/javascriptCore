Array.prototype.uniq = function() {
  var dups = {},
      cleanArray = [];
      array = this,
      i = 0,
      len = array.length;

  if(this.constructor !== Array) {
    throw new TypeError ('Can only call this method on an array');
  }

  for(i; i < len; i++) {
    if(!dups[array[i]]) {
      cleanArray.push(array[i]);
      dups[array[i]] = true;
    }
  }

  return cleanArray;
}

// Divide n dow to 1
// Divide by iterator, if no remainder, push to iterator factors, divide n by iterator, loop again
// Else increase iterator by 1

// O(n) linear
var primeFactors = function(n) {
  var factors = [],
      i = 2;

  // Will bring n to 1, by dividing the final prime by itself
  while(n > 2) { 
    // Starting low, tries to divide by early prime
    if (n % i === 0) {
      // If divisible push into factors
      factors.push(i);
      // Keep dividing n by same i, reduce it until not divisble
      n = n/i;
    } else {
      // Then check next num
      i++;
    }
  }
  return factors;
}
console.log(primeFactors(16));

