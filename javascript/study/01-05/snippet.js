/* function-level scope */

let bool = true;

if (bool) {
  var x = 10;
}

console.log(x); // 10

/* re-declaration */

var name = "kim";

console.log(name); // kim

var name = "lee";

console.log(name); //lee
