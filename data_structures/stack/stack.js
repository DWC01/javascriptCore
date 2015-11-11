var Stack = function() {
  // -- Init
  this.top = 0;
  this.dataStore = [];
  
  // Putting element here now, then adding new 'empty' top 
  this.push = function(element) {
    this.dataStore[this.top++] = element;
  }

  // Decrementing from 'empty' top to last element
  this.pop = function() {
    return this.dataStore[--this.top];
  }

  this.peek = function() {
    return this.dataStore[this.top-1];
  }

  this.length = function() {
    return this.top;
  }

  this.clear = function() {
    this.top = 0;
  }
}

// --- Testing Stack

// var carStack = new Stack();

// carStack.push('4Runner');
// carStack.push('R8');
// carStack.push('Pinto');
// carStack.push('Lamborghini');

// console.log(carStack.peek()); // Lamborghini
// console.log(carStack.pop()); // Lamborghini
// console.log(carStack.peek()); // Pinto
// console.log(carStack.length()); // 3

// carStack.clear();
// console.log(carStack.length()); // 0
// console.log(carStack.peek()); // undefined


//  --- Algorithm Questions ------

//  -- Palindromes

var isPalendrome = function(word) {
  var wordStack = new Stack(),
      i = 0,
      len = word.length,
      reverseWord = '';

  for(i; i < len; i++) {
    wordStack.push(word[i]);
  }
  console.log(wordStack);

  while(wordStack.length() > 0) {
    reverseWord += wordStack.pop();
  }

  if(reverseWord === word) {
    return true;
  } else {
    return false;
  }
}

// console.log(isPalendrome('racecar'));// true


// -- Demonstrating Recursion (factorial)

var factorial = function(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num-1);
}
// console.log(factorial(5));

var fact = function(num) {
  var factStack = new Stack(),
      product = 1;
  
  while (num > 1) {
    factStack.push(num--);
  }

  while (factStack.length() > 0) {
    product *= factStack.pop();
  }

  return product;
}
// console.log(fact(5));

// -- Missing Parenthesis

// 1.) Iterate through all letters
// 2.) If opening paren -> push to stack
// 3.) If closing Paren -> run checks against current stack 
        // if stack empty, throw error displaying closing paren
        // if stack not empty, pop last value from stack, and check it current closing parent matches popped opening paren 

var balancedParenthesis = function(expression) {  
  var stack = [],
      i = 0,
      len = expression.length,
      pairs = { '{': '}', '[': ']', '(': ')' };
  
  expression.split('').forEach(function(brace, index) {
    var position = index + 1;
    
    // If not a brace, go to next
    if('({[)}]'.indexOf(brace) === -1){
      return;

    // If brace opening, push to the stack
    } else if('({['.indexOf(brace) > -1){      
      stack.push(brace);
      
    // If brace closing and stack empty, throw missmatch error
    } else if(!stack.length){
      throw new Error('Syntax Error: Unexpected ' + brace + ' at ' + position);
    
    // If brace closing and stack full, check that popped value matches, else throw error
    } else if(')}]'.indexOf(brace) > -1) {
      var braceToClose = stack.pop(),
          expectedCloser = pairs[braceToClose];
      if (brace !== expectedCloser) {
        throw new Error('Syntax Error: Expecting ' + expectedCloser + ' at ' + position);
      }
    }

  });
  
  // If we still need closing, throw an error with the next brace to close
  if(stack.length){
    throw Error('Syntax Error: Expecting ' + pairs[stack.pop()] + ' at ' + expression.length);
  }

  return true;
}

// var result = balancedParenthesis('t(] balanced parenthesis');
// console.log(result);



