// A Number will never be divisible by number bigger than half its value, so can stop at 50%

// Additionally, if not divisible by 3, only have to check up to 1/3. 
// If not divisible by 5 only have to check up to 1/5
// Where to stop? Math.sqrt()

var isPrime = function(n) {
  var i = 3,
  limit = Math.sqrt(n);

  // Basic Checks not even
  if(n % 2 === 0) {return false;}

  // Increase iterator to Limit, return false if divisible
  while(i <= limit) {
    if(n % i === 0) {return false;}
    i++;
  }
  return true;
}

console.log(isPrime(137)); // true
console.log(isPrime(237)); // false
