var R = {
    curry1(fn) {
        return function f1(a) {
            return arguments.length === 0 ? f1 : fn(a);
        }
    },
    curry2(func) {
        return function curridFunc(a, b) {
            switch (arguments.length) {
                case 0:
                    return curridFunc;
                case 1:
                    return R.curry1(function (_b) {
                        return func(a, _b);
                    });
                default:
                    return func.apply(null, Array.from(arguments))
            }
        }
    },
    curryN(func, declaredLengh, totalLength, params) {
        params = params || [];
        totalLength = totalLength || func.length;
        declaredLengh = declaredLengh || 0;
        return function () {
            declaredLengh += arguments.length;
            params = params.concat(Array.from(arguments));
            return declaredLengh < totalLength ? R.curryN(func, declaredLengh, totalLength, params) :
                func.apply(null, params);
        }
    }
}

module.exports = R;