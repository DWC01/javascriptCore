console.log(null == undefined); // true
console.log(undefined == null); // true

// String == Number  toNumber(x) == y
console.log(5=="5"); // true

// String == Number  toNumber(x) == y
console.log("5"==5); // true

// Boolean == (any) toNumber(x) == y
console.log(true == 1); // true

// (any) == Boolean x == toNumber(y)
console.log(0 == false); // true


// (String/Number) == Object  x == toPrimitive(y)
// Object == (String/Number)  toPrimitive(x) == y

