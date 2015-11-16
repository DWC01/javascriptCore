var firstNonRepeatChar = function(string) {
  var cleanString = string.replace(/[.\s]/g,''),
      letterCount = {},
      i = 0,
      len = cleanString.length;

  for(i; i < len; i++) {
    if(letterCount[cleanString.charAt(i)]) {
      letterCount[cleanString.charAt(i)] += 1;
    } else {
      letterCount[cleanString.charAt(i)] = 1;
    }
  }

  Return 1st non repeating char
  for(letter in letterCount) {
    if(letterCount.hasOwnProperty(letter) && letterCount[letter] === 1) {
      return letter;
    }
  }

  // --- Added Bonus ------
  // Display Top 10
  
  // // Create letter,num array
  // var sorted = [];
  // for(letter in letterCount) {
  //   if(letterCount.hasOwnProperty(letter)){
  //     sorted.push([ letter, letterCount[letter] ]);
  //   }
  // }

  // // Sort by num val array[1]
  // sorted = sorted.sort(function(a,b) {
  //   return b[1] - a[1];
  // });
  // return sorted;
  
}

var result = firstNonRepeatChar('the quick brown fox jumps then quickly blow air.');
console.log(result);