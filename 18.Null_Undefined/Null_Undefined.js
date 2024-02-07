/////// Code.1 //////
// let value: string | undefined | null = null;
// console.log(typeof value);
// value = 'hello';
// console.log(typeof value);
// value = undefined;
// console.log(typeof value);
//////// Code.2 | Optional Chaining ////////
// interface House {
//     sqft: number;
//     yard?: {
//         sqft: number;
//     };
// }
// function printYardSize(house: House) {
//     const yardSize = house.yard?.sqft;
//     if (yardSize === undefined) {
//         console.log('No yard');
//     } else {
//         console.log(`Yard is ${yardSize} sqft`);
//     }
// }
// let home: House = {
//     sqft: 500
// };
// printYardSize(home); // Prints 'No yard'
//////// Code.3 | Nullish Coalescence ///////
// function printMileage(mileage: number | null | undefined) {
//     console.log(`Mileage: ${mileage ?? 'Not Available'}`);
// }
// printMileage(null); // Prints 'Mileage: Not Available'
// printMileage(0); // Prints 'Mileage: 0'
//////// Code.4 | Null Assertion ///////
// function getValue(): string | undefined {
//     return 'hello';
// }
// let value = getValue();
// console.log('value length: ' + value!.length);
//////// Code.5 | Array bounds handling ///////
var array = [1, 2, 3];
var value = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
console.log(value);
