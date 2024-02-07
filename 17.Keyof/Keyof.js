//////// Code.1 /////////
// `keyof StringMap` resolves to `string` here
function createStringPair(property, value) {
    var _a;
    return _a = {}, _a[property] = value, _a;
}
var result = createStringPair('exampleKey', 'exampleValue');
console.log(result);
