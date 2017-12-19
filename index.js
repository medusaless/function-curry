const R = require('./mycurry.js');

var add = (a, b) => a + b;
var curriedAdd = R.curry2(add);

console.log(curriedAdd(4, 5));
console.log(curriedAdd(4)(5));