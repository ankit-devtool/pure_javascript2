import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

var obj1 = {
  num: 3
};

var addNumber = function(a, b, c) {
  console.log(this);
  return this.num + a + b + c;
};
var arr = [1, 2, 3];
var bound = addNumber.bind(obj1);
console.log(bound(1, 2, 4));
console.log(addNumber.apply(obj1, arr), "apply");
console.log(addNumber.call(obj1, 1, 2, 9), "call");
