// Set B to temp difference
// Set A as new high num, adding itself to difference (B)
// Set B equal to new low, subtracting new high num A by differnece (B)

var swap = function(a, b) {
  console.log('before swap: ','a: ', a, 'b: ', b);
  b = b-a; // b = 11 | a = 5
  a = b+a; // b = 11 | a = 16
  b = a-b; // b = 5  | a = 16
  console.log('after swap: ','a: ', a, 'b: ', b);
}

swap(5,16);