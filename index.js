const R = require('./mycurry.js');

var add = (a, b) => a + b;
var curriedAdd = R.curry2(add);

console.log(curriedAdd(4, 5));
console.log(curriedAdd(4)(5));


var add2 = (a, b, c, d, e) => a + b + c + d + e;
var curriedAdd = R.curryN(add2);
console.log(curriedAdd()()(1, 2, 3)(4, 5)); //15

curriedAdd = R.curryN(add2);
console.log(curriedAdd(1)(2, 3)(4, 5)); //15