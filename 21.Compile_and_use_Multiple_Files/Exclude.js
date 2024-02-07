"use strict";
const value = true;
const value1 = "true";
// a string cannot be used here since Exclude removed it from the type.
console.log(typeof value);
console.log(typeof value1);
