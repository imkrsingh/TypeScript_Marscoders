////// Code.1 | Return Type ////////
//////// returns a number ////////
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// Note -- return new Date().getTime();: Inside the function, it creates a new Date object, retrieves the current timestamp using getTime(), and returns that timestamp.
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//
////// Code.2 | Void Return Type ////////
function printHello() {
    console.log('Hello! Manish');
}
printHello();
///////// Code.3 | Parameters //////////
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
/////// Code.4 | Optional Parameters //////
function add(a, b, c) {
    return a + b + (c || 10);
}
console.log(add(2, 5));
/////// Code.5 | Default Parameters ///////
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(10));
/////// Code.6 | Named Parameters ///////
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
//////// Code.7 | Rest Parameters ////////
function adds(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 0);
}
console.log(adds(10, 10, 100, 10, 121));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(10));
