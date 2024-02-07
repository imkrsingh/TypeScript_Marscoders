type Primitive = string | number | boolean;

const value: Exclude<Primitive, string> = true;
const value1: Exclude<Primitive, number> = "true";
// a string cannot be used here since Exclude removed it from the type.

console.log(typeof value);

console.log(typeof value1);