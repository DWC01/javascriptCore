// A Number will never be divisible by number bigger than half its value, so can stop at 50%

// Additionally, if not divisible by 3, only have to check up to 1/3. 
// If not divisible by 5 only have to check up to 1/5
// Where to stop? Math.sqrt()

var isPrime = function(n) {
  var limit = Math.sqrt(n),
      i = 3;

  if(n % 2 === 0) {return false;}

  for (i; i <= limit; i++) {
    if(n % i === 0) {return false;}
  }
  return true;
}

console.log(isPrime(137)); // true
console.log(isPrime(237)); // false