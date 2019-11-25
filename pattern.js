/**
 * @description this is factory pattern
 */
var factory = function() {
  var temp = {};
  temp.name = "";
  temp.age = "";
  temp.state = "";
  temp.printPerson = function(name, age, state) {
    console.log(name, age, state);
  };
  return temp;
};

var newPart = factory();
newPart.printPerson("ramu", 43, "india");

/**
 * @description this is contructor pattern
 */
var contructorPattern = function(name, age, state) {
  this.name = name;
  this.age = age;
  this.state = state;
  this.printPerson = function() {
    console.log(this.name, this.age, this.state);
  };
};

var newPart = factory("ramu", 43, "india");

/**
 * @description this is prototype method
 *
 */

var prototypeMethod = function() {};

prototypeMethod.prototype.name = "ankit";
prototypeMethod.prototype.city = "lko";
prototypeMethod.prototype.print = function() {
  console.log(this.name, this.city);
};

var newPro = new prototypeMethod();
newPro.name = "deepak";
console.log(newPro.hasOwnProperty("city"));
newPro.print();
