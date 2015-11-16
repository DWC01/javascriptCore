var greatestCommonDivisor = function(a, b) {
  var gcd = 1,
      divisor = 2;

  if(a < 2 || (b < 2)) {return 1;}

  while(divisor <= a && divisor <= b){
    if( (a % divisor === 0) && (b % divisor === 0) ) {
      gcd = divisor;
    }
    divisor++;
  }
  return gcd;
}

console.log(greatestCommonDivisor(14, 21)); // 7 
console.log(greatestCommonDivisor(69, 169)); // 1
