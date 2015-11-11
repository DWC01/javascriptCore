var usersData = [
  {id: 0, firsName: "David", lastName: "Christian", age: "28", email: "david1@gmail"},
  {id: 1, firstName: "David2", lastName: "Christian", age: "29", email: "david2@gmail"},
  {id: 2, firstName: "David3", lastName: "Christian", age: "30", email: "david3@gmail"},
]

function titleCaseName(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0)toUpperCase() + txt.substr(1).toLowerCase();  
  });
}

