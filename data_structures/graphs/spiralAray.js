var matrix = [ 
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11]
  ];

var rotateMatrix90 = function(matrix) {
  var rowNum,
      newRow,
      newMatrix = [],
      rlen = matrix.length,
      colNum = matrix[0].length-1;
  
  // Iterating from last column down to first
  for(colNum; colNum >= 0; colNum--) {
    rowNum = 0;
    newRow = [];

    // Iterating from first row, down to last
    for(rowNum; rowNum < rlen; rowNum++) {
      newRow.push(matrix[rowNum][colNum])
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

var flattenArray = function(array) {
  return array.reduce(function(a,b) {
    return a.concat(b);
  });
}

var spiralify = function(matrix) {
    var spiralMatrix = [];

  while(matrix.length > 0) {
    spiralMatrix.push(matrix.shift());

    if(matrix.length > 0) {
      matrix = rotateMatrix90(matrix);
    }
  }

  spiralMatrix = flattenArray(spiralMatrix);

  return spiralMatrix;
}
console.log(spiralify(matrix));
