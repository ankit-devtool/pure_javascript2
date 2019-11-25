var obj = function() {
  var i = 0;
  var addition = function(j) {
    i += j;
    return this;
  };
  var substration = function(j) {
    i -= j;
    return this;
  };

  var print = function() {
    console.log(i, "p");
  };
  return {
    add: addition,
    sub: substration,
    print: print
  };
};
var c = new obj();
c.add(3)
  .sub(4)
  .print();
