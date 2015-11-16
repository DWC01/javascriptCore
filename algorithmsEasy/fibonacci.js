// O(n)
var fibonacciFactors = function(n) {
  var i = 2,
      fibo = [0,1];

  // While iterator less than equal to n, add another fibo num
  for(i; i <= n; i++) {
    fibo.push(fibo[i-1] + fibo[i-2]);
  }

  return fibo[16];
}
console.log(fibonacciFactors(16));


// Recursive
var fibonnaci = function(n) {
  if(n<=2) { return 1;}
  return fibonnaci(n-1) + fibonnaci(n-2);
}
console.log(fibonnaci(16));
