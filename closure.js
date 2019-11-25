var passed = 3;
var addNo = function() {
  var inner = 2;

  return passed + inner;
};
passed = 5;
console.dir(addNo);
