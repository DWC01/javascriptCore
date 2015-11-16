var palindrome = function(string) {
  return string === string.split('').reverse().join('');
}
console.log(palindrome('racecar'));
console.log(palindrome('racecars'));
